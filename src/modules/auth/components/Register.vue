<template>
  <div class="pt-24 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div>
    <!--<img class="mx-auto h-28 w-auto" src="/images/logo/logo_indigo.png" alt="Workflow">-->
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Kayıt Ol
        </h2>
        <p class="mt-2 text-center text-sm text-gray-600">
          ya da
          <router-link to="/auth/login" class="font-medium text-indigo-600 hover:text-indigo-500">
            giriş yap
          </router-link>
        </p>
      </div>

      <div class="mt-5 md:mt-0 md:col-span-2">
          <div class="shadow overflow-hidden sm:rounded-md">
            <div class="px-4 py-5 bg-white sm:p-6">
              <div class="grid grid-cols-6 gap-6">
                <div class="col-span-6 sm:col-span-3">
                  <label for="name" class="block text-sm font-medium text-gray-700">Ad</label>
                  <input type="text" name="name" id="name" placeholder="Jack" v-model="model.name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label for="surname" class="block text-sm font-medium text-gray-700">Soyad</label>
                  <input type="text" name="surname" id="surname" placeholder="Jackss" v-model="model.surname" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                </div>

                <div class="col-span-6">
                  <label for="username" class="block text-sm font-medium text-gray-700">Kullanıcı adı</label>
                  <input type="text" name="username" id="username" placeholder="jacki" v-model="model.username" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                </div>

                <div class="col-span-6">
                  <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                  <input type="text" name="email" id="email" placeholder="jackdawson57@gmail.com" v-model="model.email" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
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
                    <input type="password" name="password" id="password" v-model="model.password" class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="******">
                    </div>
                  </div>
                </div>

                <div class="col-span-6">
                  <div class="mt-4 space-y-4">
                    <div class="flex items-start">
                      <div class="flex items-center h-5">
                        <input id="news" name="news" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded">
                      </div>
                      <div class="ml-3 text-sm">
                        <label for="news" class="font-medium text-gray-700">Haberler</label>
                        <p class="text-gray-500">Eklediğimiz güncellemeler ve daha fazlası için mail alın.</p>
                      </div>
                    </div>
                    <div class="flex items-start">
                      <div class="flex items-center h-5">
                        <input id="user-agreement" name="user-agreement" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded">
                      </div>
                      <div class="ml-3 text-sm">
                        <label for="user-agreement" class="font-medium text-gray-700">Kullanıcı sözleşmesi</label>
                        <p class="text-gray-500">Kullanıcı sözleşmesini okudum ve kabul ediyorum.</p>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
              <div>
                <gr-button class="group relative w-full flex justify-center mt-6 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" :executable-function="onRegister"> Kayıt ol </gr-button>
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>

</template>

<script>
import Errors from '@/core/components/errors/Errors.vue';
import GrButton from '@/components/default/GrButton.vue';
import { mapActions } from 'vuex';

export default {
  name: 'Register',
  components: { Errors, GrButton },

  data() {
    return {
      phase: 1,
      model: {
        name: '',
        surname: '',
        username: '',
        email: '',
        password: '',
      },
      errors: {},
    };
  },

  methods: {
    ...mapActions('Auth', ['register']),

    async onRegister() {
      this.errors = {};
        try {
          await this.register({
            name: this.model.name,
            surname: this.model.surname,
            username: this.model.username,
            email: this.model.email,
            password: this.model.password,
            password_confirmation: this.model.password
          });
        } catch (e) {
          this.errors = e;
        }
    },

  },
};
</script>
