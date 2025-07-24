<template>
  <main class="flex flex-col">
    <div class="bg-white w-full px-4 md:px-20 py-3 flex flex-row justify-between">
      <div class="flex flex-row gap-4">
        <img src="https://www.citi.com/CBOL/IA/Angular/assets/citiredesign.svg" alt="citi image">
        <img class="w-48 md:w-auto" src="https://www.citi.com/CBOL/IA/Angular/assets/fdic.svg" alt="fdic image">
      </div>

      <div class="flex flex-row gap-10">
        <div class="hidden lg:block">
          <div class="flex flex-col gap-2 items-center justify-center">
            <i class="bi bi-geo-alt text-gray-600 text-4xl font-normal hover:text-blue-500"></i>
            <h1 class="text-gray-600 text-xl font-normal flex items-center justify-center hover:text-blue-500">ATM /
              BRANCH</h1>
          </div>
        </div>
        <div class="flex flex-col gap-2 items-center justify-center ">
          <div class="hidden lg:block">
            <i class="bi bi-globe text-gray-600 text-4xl font-normal hover:text-blue-500"></i>
            <h1 class="text-gray-600 text-xl font-normal flex items-center justify-center hover:text-blue-500">
              ESPAÑOL</h1>
          </div>
        </div>

      </div>
    </div>
    <NavBar />
    <ContentPage />
    <Content2Grid />
    <FooterBl />
    <div  class=" z-10">  
      <router-view />
    </div>



  </main>
</template>





<script setup>
import NavBar from './components/NavBar.vue';
import ContentPage from './components/ContentPage.vue';
import Content2Grid from './components/Content2Grid.vue';
import FooterBl from './components/FooterBl.vue'

</script>





<style>
html,body {
  overflow-x: hidden;
  max-width: 100%;
}
</style>