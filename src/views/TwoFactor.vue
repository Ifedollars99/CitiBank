<template>

  <div
    class="absolute top-24 right-20  bg-white/30 backdrop-blur-md rounded-2xl shadow-lg z-50 px-8 py-3 w-2/5 h-[500px] flex items-center gap-5 justify-center flex-col">
    <router-link to="/" class="bi bi-x-square text-black text-4xl font-bold self-start"></router-link>
    <p class="text-4xl text-black font-bold">2FA (two-factor authentication)</p>

    <p v-if="!codeSent" class="text-sm text-gray-600 text-center mb-4">
      Click the button below to receive your verification code.
    </p>
    <p v-else class="text-sm text-green-600 text-center mb-4">
      Code sent to your email.
    </p>

    <button :disabled="loading || countdown > 0" @click="sendCode"
      class="w-full px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 disabled:opacity-50">
      {{ countdown > 0 ? `Resend Code in ${countdown}s` : 'Send Code' }}
    </button>

    <input v-model="code" type="text" maxlength="6" placeholder="Enter 6-digit code"
      class="mt-4 w-full px-4 py-2 border rounded focus:outline-none" />

    <button @click="verifyCode" class="mt-4 w-full px-4 py-2 text-white bg-green-600 rounded hover:bg-green-700">
      Verify
    </button>

    <p v-if="error" class="text-red-500 text-sm mt-2 text-center">{{ error }}</p>
  </div>

</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const code = ref('')
const generatedCode = ref('')
const codeSent = ref(false)
const countdown = ref(0)
const error = ref('')
const loading = ref(false)
const userEmail = ref(localStorage.getItem('email') || '')

function generateCode() {
  return Math.floor(100000 + Math.random() * 900000).toString()
}

async function sendCode() {
  loading.value = true
  error.value = ''
  generatedCode.value = generateCode()

  const formData = new FormData()
  formData.append('email', userEmail.value)
  formData.append('message', `Your 2FA code is: ${generatedCode.value}`)

  try {
    const response = await fetch('https://formspree.io/f/myzpejab', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: formData,
    })

    const result = await response.json()
    if (result.ok || result.success) {
      codeSent.value = true
      countdown.value = 60
      const timer = setInterval(() => {
        countdown.value--
        if (countdown.value <= 0) clearInterval(timer)
      }, 1000)
    } else {
      throw new Error('Email send failed')
    }
  } catch (err) {
    error.value = 'Failed to send email. Try again later.'
    console.error(err)
  } finally {
    loading.value = false
  }
}

function verifyCode() {
  if (code.value === generatedCode.value) {
    alert('Code verified! You have sucessfully logged into citibank created by ifedollars')
    router.push('/')
  } else {
    error.value = 'Invalid code. Please try again.'
  }
}
</script>


<style scoped></style>