<template>
  <div class="w-full">
    <div class="p-4 flex justify-center">
      <div class="p-2 py-5 text-gray-900 bg-white rounded-lg shadow-lg font-medium capitalize w-full sm:w-10/12 md:w-8/12 xl:w-6/12">
        <router-link :to="{ name: 'App'}">
          <span class="px-2 mr-2 border-r border-gray-800">
            <img src="/public/img/logo/guess-rank-black.png"
                 alt="Guess Rank" class="w-16 h-auto -mt-1 inline mx-auto">
          </span>
        </router-link>
        <span class="px-2 py-1 cursor-pointer hover:text-gray-700 text-sm rounded mb-5">
          <i class="fas fa-stream p-2 bg-gray-200 rounded-full">
          </i>
        </span>
        <span class="px-1 cursor-pointer hover:text-gray-700 text-sm rounded mb-5">
          <i class="fas fa-th p-2 bg-gray-200 rounded-full">
          </i>
        </span>
        <span class="px-1 cursor-pointer hover:text-gray-700">
          <i class="fas fa-search p-2 bg-gray-200 rounded-full">
          </i>
        </span>
        <router-link :to="{ name: 'Market'}">
          <span class="px-1 cursor-pointer hover:text-gray-700">
            <i class="fa-solid fa-store p-2 bg-gray-200 rounded-full"></i>
          </span>
        </router-link>

        <div class="w-10 relative float-right mr-3 hover:text-gray-700 dropdown z-10">
          <span class="rounded-md shadow-sm">
            <button type="button" aria-haspopup="true" aria-expanded="true" aria-controls="profile">
               <i class="w-8 fas fa-user p-2 bg-gray-200 rounded-full"></i>
               <span class="absolute right-0 top-0 -mt-1 -mr-1 text-xs bg-yellow-500 text-black font-medium px-2 rounded-full">3</span>
              </button>
            </span>
          <div class="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95">
            <div class="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none" aria-labelledby="profile" id="profile" role="menu">
              <router-link :to="{ name: 'Profile'}">
                <div class="px-4 py-3 cursor-pointer">
                  <p class="text-sm leading-5">Hoş geldin,</p>
                  <p class="text-sm font-medium leading-5 text-gray-900 truncate">shorproduction@gmail.com</p>
                </div>
              </router-link>
              <div class="py-1">
                <router-link :to="{ name: 'Profile' }" class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left cursor-pointer">
                  Hesap ayarları
                </router-link>
                <router-link :to="{ name: 'Profile' }" class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left cursor-pointer">
                  Destek
                </router-link>
                <router-link :to="{ name: 'Profile' }" class="flex justify-between w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 cursor-not-allowed opacity-50">
                  Geçmiş
                </router-link>
              <div class="py-1">
                <span class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left cursor-pointer">
                Çıkış yap
                </span>
              </div>
              </div>
            </div>
          </div>
        </div>

        <span class="w-10 relative float-right mr-3 cursor-pointer hover:text-gray-700">
          <i class="fa-solid fa-basket-shopping p-2 bg-gray-200 rounded-full"></i>
          <span class="absolute right-0 top-0 -mt-1 -mr-1 text-xs bg-red-500 text-white font-medium px-2 shadow-lg rounded-full">1</span>
        </span>

    <!--<span class="w-10 relative float-right mr-3 cursor-pointer hover:text-gray-700">
          <i class="w-8 fas fa-bell p-2 bg-gray-200 rounded-full">
          </i>
          <span class="absolute right-0 top-0 -mt-1 -mr-1 text-xs bg-red-500 text-white font-medium px-2 shadow-lg rounded-full">3</span>
        </span>-->
      </div>
    </div>
  </div>
</template>

<style scoped>
.dropdown:focus-within .dropdown-menu {
  opacity:1;
  transform: translate(0) scale(1);
  visibility: visible;
}
</style>
