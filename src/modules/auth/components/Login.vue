<template>
  <div class="pt-24 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div>
        <!--<img class="mx-auto h-28 w-auto" src="/images/logo/logo_indigo.png" alt="Workflow">-->
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Giriş Yap
        </h2>
        <p class="mt-2 text-center text-sm text-gray-600">
          ya da
          <router-link to="/auth/register" class="font-medium text-indigo-600 hover:text-indigo-500">
            kayıt ol
          </router-link>
        </p>
      </div>

      <div class="mt-5 md:mt-0 md:col-span-2">
        <div class="shadow overflow-hidden sm:rounded-md">
          <div class="px-4 py-5 bg-white sm:p-6">
            <div class="grid grid-cols-6 gap-6">

              <div class="col-span-6">
                <label for="email-address" class="block text-sm font-medium text-gray-700">Email</label>
                <input type="text" name="email-address" id="email-address" autocomplete="email" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
              </div>

              <div class="col-span-6">
                <div class="col-span-3 sm:col-span-2">
                  <label for="password" class="block text-sm font-medium text-gray-700">
                    Şifreniz
                  </label>
                  <div class="mt-1 flex rounded-md shadow-sm">
                  <span class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                    <i class="fas fa-lock"></i>
                  </span>
                    <input type="password" name="password" id="password" class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="******">
                  </div>
                </div>
              </div>

              <div class="flex items-center justify-between col-span-6">
                <div class="flex items-center">
                  <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded">
                  <label for="news" class="ml-2 font-medium text-gray-700">Giriş bilgilerini kaydet</label>
                </div>

                <div class="text-sm">
                  <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
                    Şifrenizi mi unuttunuz?
                  </a>
                </div>
              </div>
            </div>
            <div>
              <button type="submit" class="group relative w-full flex justify-center mt-6 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Giriş yap
              </button>
            </div>
          </div>
        </div>
      </div>


    </div>
  </div>

</template>
