<template>
    <div  data-aos="fade-left" data-aos-duration="1000" class="bg-cover w-full h-auto flex flex-col-reverse md:flex-row items-start md:items-center justify-between px-4 py-14"
        :style="{ backgroundImage: 'url(https://images.unsplash.com/photo-1619252584172-a83a949b6efd?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }">

        <!-- first col  -->
        <div  data-aos="fade-up" data-aos-duration="4000"
         class="flex flex-col gap-5 items-center md:items-start md:-mt-10 w-full md:w-auto">
            <h1 class="font-normal text-xl text-gray-500">CITI® PERSONAL LOAN</h1>
            <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800">Manage the Unexpected with a
                Loan</h1>
            <h1 class="text-lg sm:text-xl font-normal text-gray-500">Loans up to $30,000 for home improvement, debt
                consolidation,
                and emergency expenses.</h1>
            <div class="flex flex-col sm:flex-row gap-5 items-center">
                <button
                    class="bg-blue-500 hover:bg-blue-700 px-8 sm:px-14 py-3 text-white font-bold rounded-lg w-full sm:w-auto text-center">
                    Check my rate
                </button>
                <a href="" class="text-xl sm:text-2xl underline text-blue-600">Learn More</a>
            </div>
        </div>

        <!-- second col  -->
        <div class="mt-10 md:-mt-10 w-full md:w-auto flex justify-center">
            <img class="h-auto max-h-[600px] md:max-h-[1080px] w-auto min-w-full object-contain"
                src="https://aemapi.citi.com/content/dam/cfs/uspb/usmkt/cbol-homepage/en/banners/images/PIL_HP22_Hero.png"
                alt="Personal loan illustration">
        </div>

     <LoginPage />
    </div>

    <div  data-aos="zoom-in" data-aos-duration="1000" class="flex items-center justify-center -mt-5 px-4 z-50">
        <div
            class="flex flex-row bg-white w-full rounded-xl border border-gray-400 p-8 items-center justify-between">
            <div class="flex flex-col gap-3">
                <i
                    class="bi bi-credit-card text-3xl flex items-center justify-center text-blue-500 bg-gray-200 hover:bg-blue-700 hover:text-white rounded-full w-10 h-10 md:w-24 md:h-24"></i>
                <h1 class="font-bold text-blue-500 hover:text-blue-700 text-xs md:text-lg">Credit cards</h1>
            </div>
            <div class="flex flex-col gap-3">
                <i
                    class="bi bi-badge-sd text-3xl flex items-center justify-center text-blue-500 bg-gray-200 hover:bg-blue-700 hover:text-white rounded-full w-10 h-10 md:w-24 md:h-24"></i>
                <h1 class="font-bold text-blue-500 hover:text-blue-700 text-xs md:text-lg">Checking Solutions</h1>
            </div>
            <div class="flex flex-col gap-3">
                <i
                    class="bi bi-house-door text-3xl flex items-center justify-center text-blue-500 bg-gray-200 hover:bg-blue-700 hover:text-white rounded-full w-10 h-10 md:w-24 md:h-24"></i>
                <h1 class="font-bold text-blue-500 hover:text-blue-700 text-xs md:text-lg">Mortgage</h1>
            </div>
            <div class="hidden md:block">
                <div class="flex flex-col gap-3">
                    <i
                        class="bi bi-coin text-3xl flex items-center justify-center text-blue-500 bg-gray-200 hover:bg-blue-700 hover:text-white rounded-full w-24 h-24"></i>
                    <h1 class="font-bold text-blue-500 hover:text-blue-700">Personal Loans</h1>
                </div>
            </div>
            <div class="hidden md:block">
                <div class="flex flex-col gap-3">
                    <i
                        class="bi bi-graph-up-arrow text-3xl flex items-center justify-center text-blue-500 bg-gray-200 hover:bg-blue-700 hover:text-white rounded-full w-24 h-24"></i>
                    <h1 class="font-bold text-blue-500 hover:text-blue-700">Investing Options</h1>
                </div>
            </div>
            <div class="hidden lg:block">
                <div class="flex flex-col gap-3 ">
                    <i
                        class="bi bi-tags text-3xl flex items-center justify-center text-blue-500 bg-gray-200 hover:bg-blue-700 hover:text-white rounded-full w-24 h-24"></i>
                    <h1 class="font-bold text-blue-500 hover:text-blue-700">Small Business</h1>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>
import LoginPage from '@/views/LoginPage.vue';

</script>

<style scoped></style>