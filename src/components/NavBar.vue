<template>
  <div>
    <nav class="bg-blue-50 px-4 py-0 shadow-lg w-full z-50">
      <div class="flex justify-between items-center gap-3">
        <!-- Hamburger -->
        <button v-if="!isSidebarOpen" id="hamburger" class="lg:hidden" @click="toggleSidebar">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"
            stroke-linecap="round" stroke-linejoin="round">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <button v-else id="hamburger" class="lg:hidden" @click="closeSidebar">
          <i class="bi bi-x-square-fill text-2xl"></i>
        </button>

        <div class="flex items-center gap-3">
          <!-- Credit with dropdown -->
          <div class="relative group hidden lg:block">
            <div class="hover:bg-gray-500 px-4 py-4 rounded-t-lg cursor-pointer">
              <h1 class="text-lg md:text-xl hidden lg:block text-blue-950 font-medium group-hover:text-white">Credit
                Cards
              </h1>


              <!-- dropdown -->
              <div class="absolute left-0 mt-5 w-[600px] bg-white rounded-md shadow-xl z-50 hidden group-hover:block">
                <div class="flex flex-row">
                  <ul class="p-4 space-y-2">
                    <li><a href="#" class="text-blue-950 hover:underline text-xl text-bold">Explore Cards</a></li>
                    <li><a href="#" class="text-blue-950 hover:underline text-xl text-bold">See if you are pre
                        qualified</a></li>
                    <div class="h-[1px] w-full bg-gray-400"></div>
                    <li><a href="#" class="text-blue-900 hover:underline">Reward Cards</a></li>
                    <li><a href="#" class="text-blue-900 hover:underline">Travel Cards</a></li>
                    <li><a href="#" class="text-blue-900 hover:underline">Balance Transfer Cards</a></li>
                    <li><a href="#" class="text-blue-900 hover:underline">Cash Back Cards</a></li>
                    <li><a href="#" class="text-blue-900 hover:underline">Retail Store Cards</a></li>
                    <li><a href="#" class="text-blue-900 hover:underline">No Annual Fee Cards</a></li>
                    <li><a href="#" class="text-blue-900 hover:underline">View all Cards</a></li>
                  </ul>
                  <ul class="p-4 space-y-2">
                    <li><a href="#" class="text-gray-500 text-xl">QUICK LINKS</a></li>
                    <li> <i class="bi bi-backpack2 text-xl"></i> <a href="#"
                        class="text-blue-900 hover:underline ">Citi® Credit Knowledge Center</a></li>
                    <li> <i class="bi bi-tag text-xl"></i> <a href="#" class="text-blue-900 hover:underline">Citi
                        Shop</a></li>
                    <li> <i class="bi bi-lightbulb text-xl"></i> <a href="#"
                        class="text-blue-900 hover:underline ">Respond to Mail Offer</a></li>
                    <li> <i class="bi bi-file-earmark-text text-xl"></i> <a href="#"
                        class="text-blue-900 hover:underline">Check Your Application</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <!-- end of dropdown  -->

          <!-- Banking with dropdown -->
          <div class="relative group hidden lg:block">
            <div class="hover:bg-gray-500 px-4 py-4 rounded-t-lg cursor-pointer">
              <h1 class="text-lg md:text-xl hidden lg:block text-blue-950 font-medium group-hover:text-white">Banking
              </h1>


              <!-- dropdown -->
              <div class="absolute left-0 mt-5 w-[600px] bg-white rounded-md shadow-xl z-50 hidden group-hover:block">
                <div class="flex flex-row">
                  <ul class="p-4 space-y-2">
                    <li><a href="#" class="text-blue-900 hover:underline">Checking</a></li>
                    <li><a href="#" class="text-blue-900 hover:underline">Savings</a></li>
                    <li><a href="#" class="text-blue-900 hover:underline">Banking Overview</a></li>
                    <li><a href="#" class="text-blue-900 hover:underline">Certificates of Deposit</a></li>
                    <li><a href="#" class="text-blue-900 hover:underline">Banking IRAs</a></li>
                    <li><a href="#" class="text-blue-900 hover:underline">Rates</a></li>
                    <li><a href="#" class="text-blue-900 hover:underline">Small Business Banking</a></li>
                  </ul>
                  <ul class="p-4 space-y-2">
                    <li><a href="#" class="text-gray-500 text-xl">QUICK LINKS</a></li>
                    <li> <i class="bi bi-piggy-bank text-xl"></i> <a href="#"
                        class="text-blue-900 hover:underline ">Personal Banking Guide</a></li>
                    <li> <i class="bi bi-tag text-xl"></i> <a href="#" class="text-blue-900 hover:underline">Citi
                        Bonus Offers</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <!-- end of dropdown  -->

          <!-- Lending with dropdown -->
          <div class="relative group hidden lg:block">
            <div class="hover:bg-gray-500 px-4 py-4 rounded-t-lg cursor-pointer">
              <h1 class="text-lg md:text-xl hidden lg:block text-blue-950 font-medium group-hover:text-white">Lending
              </h1>


              <!-- dropdown -->
              <div class="absolute left-0 mt-5 w-[600px] bg-white rounded-md shadow-xl z-50 hidden group-hover:block">
                <div class="flex flex-row">
                  <ul class="p-4 space-y-2">
                    <li><a href="#" class="text-blue-900 hover:underline"> Personal Loans</a></li>
                    <li><a href="#" class="text-blue-900 hover:underline">Overdraft Line of Credit</a></li>
                    <li><a href="#" class="text-blue-900 hover:underline">Home Lending</a></li>
                    <li><a href="#" class="text-blue-900 hover:underline">Buy a Home</a></li>
                    <li><a href="#" class="text-blue-900 hover:underline">Refinance Your Home</a></li>
                    <li><a href="#" class="text-blue-900 hover:underline">Use Your Home Equity</a></li>
                    <li><a href="#" class="text-blue-900 hover:underline">Small Business Lending</a></li>
                  </ul>
                  <ul class="p-4 space-y-2">
                    <li><a href="#" class="text-gray-500 text-xl">QUICK LINKS</a></li>
                    <li> <i class="bi bi-bookmark-plus text-xl"></i> <a href="#"
                        class="text-blue-900 hover:underline ">Mortgage Calculators</a></li>
                    <li> <i class="bi bi-house text-xl"></i> <a href="#" class="text-blue-900 hover:underline">Citi
                        Home Equity Calculators</a></li>
                    <li> <i class="bi bi-lightbulb text-xl"></i> <a href="#" class="text-blue-900 hover:underline">Citi
                        Mortgage Learning Center</a></li>
                    <li> <i class="bi bi-bank text-xl"></i> <a href="#" class="text-blue-900 hover:underline">Citi
                        Personal Loans Center</a></li>
                    <li> <i class="bi bi-cash-coin text-xl"></i> <a href="#" class="text-blue-900 hover:underline">Citi
                        Debt Consolidation Calculator</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <!-- end of dropdown  -->

          <!-- Investing with dropdown -->
          <div class="relative group hidden lg:block">
            <div class="hover:bg-gray-500 px-4 py-4 rounded-t-lg cursor-pointer">
              <h1 class="text-lg md:text-xl hidden lg:block text-blue-950 font-medium group-hover:text-white">Investing
              </h1>

              <!-- dropdown -->
              <div class="absolute left-0 mt-5 w-[600px] bg-white rounded-md shadow-xl z-50 hidden group-hover:block">
                <div class="flex flex-row">
                  <ul class="p-4 space-y-2">
                    <li><a href="#" class="text-blue-900 hover:underline"> Investing Overview</a></li>
                    <li><a href="#" class="text-blue-900 hover:underline">Self-Directed Investing</a></li>
                    <li><a href="#" class="text-blue-900 hover:underline">Guided Investing</a></li>
                    <li><a href="#" class="text-blue-900 hover:underline">Working with an Advisor</a></li>
                  </ul>
                  <ul class="p-4 space-y-2">
                    <li><a href="#" class="text-gray-500 text-xl">QUICK LINKS</a></li>
                    <li> <i class="bi bi-file-arrow-up text-xl"></i> <a href="#"
                        class="text-blue-900 hover:underline ">Planning Tools</a></li>
                    <li> <i class="bi bi-lightbulb text-xl"></i> <a href="#" class="text-blue-900 hover:underline">Citi
                        Market Insights</a></li>
                    <li> <i class="bi bi-graph-up text-xl"></i> <a href="#" class="text-blue-900 hover:underline">Citi
                        Investment & Insurance</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <!-- end of dropdown  -->

          <!-- wealth with dropdown -->
          <div class="relative group hidden lg:block">
            <div class="hover:bg-gray-500 px-4 py-4 rounded-t-lg cursor-pointer">
              <h1 class="text-lg md:text-xl hidden lg:block text-blue-950 font-medium group-hover:text-white">Wealth
                Management
              </h1>

              <!-- dropdown -->
              <div class="absolute left-0 mt-5 w-[600px] bg-white rounded-md shadow-xl z-50 hidden group-hover:block">
                <div class="flex flex-row">
                  <ul class="p-4 space-y-2">
                    <li><a href="#" class="text-blue-900 hover:underline"> Citigold</a></li>
                    <li><a href="#" class="text-blue-900 hover:underline">Citigold® Private Client</a></li>
                    <li><a href="#" class="text-blue-900 hover:underline">Citi Priority</a></li>
                  </ul>
                  <ul class="p-4 space-y-2">
                    <li><a href="#" class="text-gray-500 text-xl">QUICK LINKS</a></li>
                    <li> <i class="bi bi-geo-alt text-xl"></i> <a href="#" class="text-blue-900 hover:underline ">Find a
                        Wealth Team</a></li>
                    <li> <i class="bi bi-person text-xl"></i> <a href="#"
                        class="text-blue-900 hover:underline ">Planning Tools</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <!-- end of dropdown  -->

          <div class="group hover:bg-gray-500 px-4 py-4 rounded-t-lg  ">
            <h1 class="text-lg md:text-xl hidden lg:block text-blue-950 font-medium group-hover:text-white">Open an
              Account ></h1>
          </div>
        </div>
        <div class="flex flex-row items-center gap-3 group hover:bg-gray-500 px-4 py-4 rounded-t-lg">
          <i class="bi bi-search text-lg md:text-2xl text-blue-900 font-normal group-hover:text-white"></i>
          <h1 class="text-xs md:text-xl lg:hidden xl:block text-blue-950 font-medium group-hover:text-white">How can we
            help?</h1>
        </div>

        <!-- vertical gray line  -->
        <div class="w-[2px] h-7 bg-gray-400 lg:hidden"></div>

        <div class="flex flex-row gap-3 group hover:bg-gray-500 px-4 py-4 rounded-t-lg ">
          <h1 class="text-xs md:text-xl lg:hidden text-blue-950 font-medium group-hover:text-white">Sign Out</h1>
        </div>
      </div>
    </nav>

    <!-- Mobile Sidebar -->
    <transition name="slide">
      <div v-if="isSidebarOpen" id="mobile-sidebar"
        class="fixed top-0 left-0 w-full h-auto bg-white shadow-lg z-40 p-6 transition-transform duration-300 mt-40 lg:hidden gap-3">
        <div class="gap-3" >
        <div class="flex justify-between items-center" >
        <h2 class=" font-bold mt-4 text-xl text-blue-950">Credit Cards</h2>
        <i class="bi bi-chevron-right mt-4 font-bold text-xl text-blue-950"></i>
        </div>
        <div class="h-[0.5px] w-full bg-gray-400 lg:hidden"></div>
        <div class="flex justify-between items-center" >
        <h2 class=" font-bold mt-4 text-xl text-blue-950">Banking</h2>
        <i class="bi bi-chevron-right font-bold mt-4 text-xl text-blue-950"></i>
        </div>
        <div class="h-[0.5px] w-full bg-gray-400 lg:hidden"></div>
        <div class="flex justify-between items-center" >
        <h2 class=" font-bold mt-4 text-xl text-blue-950">Lending</h2>
        <i class="bi bi-chevron-right font-bold mt-4 text-xl text-blue-950"></i>
        </div>
        <div class="h-[0.5px] w-full bg-gray-400 lg:hidden"></div>
        <div class="flex justify-between items-center" >
        <h2 class=" font-bold mt-4 text-xl text-blue-950">Investing</h2>
        <i class="bi bi-chevron-right font-bold mt-4 text-xl text-blue-950"></i>
        </div>
        <div class="h-[0.5px] w-full bg-gray-400 lg:hidden"></div>
        <div class="flex justify-between items-center" >
        <h2 class=" font-bold mt-4 text-xl text-blue-950">Wealth Management</h2>
        <i class="bi bi-chevron-right font-bold mt-4 text-xl text-blue-950"></i>
        </div>
        <div class="h-[0.5px] w-full bg-gray-400 lg:hidden"></div>
        <div class="flex flex-row items-center gap-2 mt-4">
            <i class="bi bi-geo-alt text-gray-600 text-4xl font-normal hover:text-blue-500"></i>
            <h1 class="text-gray-600 text-xl font-normal  hover:text-blue-500">ATM /
              BRANCH</h1>
          </div>
            <div class="h-[0.5px] w-full bg-gray-400 lg:hidden"></div>
              <div class="flex flex-row items-center gap-3 mt-4">
            <i class="bi bi-globe text-gray-600 text-4xl font-normal hover:text-blue-500"></i>
            <h1 class="text-gray-600 text-xl font-normal hover:text-blue-500">
              ESPAÑOL</h1>
          </div>
            <div class="h-[0.5px] w-full bg-gray-400 lg:hidden"></div>
        <div class="flex justify-between items-center" >
        <h2 class=" font-bold mt-4 text-xl text-blue-950">Open an Account</h2>
        <i class="bi bi-chevron-right font-bold mt-4 text-xl text-blue-950"></i>
        </div>
      </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const isSidebarOpen = ref(false);

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};

const closeSidebar = () => {
  isSidebarOpen.value = false;
};

const handleClickOutside = (e) => {
  if (!e.target.closest('#mobile-sidebar') && !e.target.closest('#hamburger')) {
    closeSidebar();
  }
};

onMounted(() => {
  window.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
  window.removeEventListener('click', handleClickOutside);
});
</script>

<style scoped>
/* Sidebar transition */
.slide-enter-from {
  transform: translateX(-100%);
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-leave-to {
  transform: translateX(-100%);
}
</style>