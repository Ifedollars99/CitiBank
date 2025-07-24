import axios from 'axios';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

async function testTelegram() {
    console.log('🧪 Testing Telegram bot setup...');
    console.log(`Bot Token: ${TELEGRAM_BOT_TOKEN ? '✅ Found' : '❌ Missing'}`);
    console.log(`Chat ID: ${TELEGRAM_CHAT_ID ? '✅ Found' : '❌ Missing'}`);
    
    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
        console.log('❌ Please add TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID to your .env file');
        return;
    }

    try {
        // Test sending a message
        const response = await axios.post(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
            chat_id: TELEGRAM_CHAT_ID,
            text: '🎉 Telegram bot test successful!\n\nYour backend is now connected to Telegram.',
        });

        console.log('✅ SUCCESS: Test message sent to Telegram!');
        console.log('Check your Telegram to see the message.');
        
    } catch (error) {
        console.error('❌ ERROR:', error.response?.data || error.message);
        
        if (error.response?.status === 404) {
            console.log('💡 This usually means your BOT_TOKEN is incorrect.');
        } else if (error.response?.status === 400) {
            console.log('💡 This usually means your CHAT_ID is incorrect.');
        }
    }
}

testTelegram();