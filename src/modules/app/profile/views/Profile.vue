<template>
  <div class="flex justify-center w-full">
    <div class="bg-white rounded-xl space-x-2 mt-10 shadow-lg w-8/12 sm:w-10/12 md:w-8/12 xl:w-8/12">
      <div class="flex justify-center m-5">
        <div class="shrink-0 flex flex-col">
          <div class="mx-auto w-32 h-32 mb-2 border rounded-full relative bg-gray-100 mb-4 shadow-inset">
            <img id="image" class="object-cover w-full h-32 rounded-full" src="/public/img/logo/guess-rank-black.png" />
          </div>
          <gr-button tag="label" :is-loading-disabled="true" :external-loading="isLoading" for="userPhoto" variant="light" class="mx-auto cursor-pointer inine-flex justify-between items-center focus:outline-none border py-2 px-4 rounded-lg shadow-sm text-left text-gray-600 bg-white hover:bg-gray-100 font-medium">
            <svg xmlns="http://www.w3.org/2000/svg" class="inline-flex flex-shrink-0 w-6 h-6 -mt-1 mr-1" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <rect x="0" y="0" width="24" height="24" stroke="none"></rect>
              <path d="M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2" />
              <circle cx="12" cy="13" r="3" />
            </svg>
            Fotoğrafını değiştir
          </gr-button>

          <div class="mx-auto w-48 text-gray-500 text-xs text-center mt-1">fotoğrafını yüklemek için tıkla</div>
        </div>

        <section class="w-full">
          <div class="w-full mx-auto bg-blueGray-50">
            <div class="relative flex flex-col min-w-0 break-words w-full mb-6">
              <div class="flex-auto px-4 lg:px-10 py-10 pt-0" v-if="me">
                <form>
                  <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                    Temel bilgiler
                  </h6>
                  <div class="flex flex-wrap">
                    <div class="w-full lg:w-6/12 px-4 mb-3">
                      <gr-input v-model="me.name" label="Adın" :errors="errors" name="first_name" />
                    </div>
                    <div class="w-full lg:w-6/12 px-4 mb-3">
                      <gr-input v-model="me.surname" label="Soyadın" :errors="errors" name="last_name" />
                    </div>
                    <div class="w-full lg:w-12/12 px-4 mb-3">
                      <gr-input v-model="me.email" label="E-posta adresin" :errors="errors" name="email" />
                    </div>
                    <div class="w-full lg:w-6/12 px-4 mb-3">
                      <gr-input v-model="me.username" label="Kullanıcı adın" :errors="errors" name="username" />
                    </div>
                  </div>

            <!-- <hr class="mt-6 border-b-1 border-blueGray-300">-->

              <!--<h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                   Sosyal medya
                 </h6>
                  <div class="flex flex-wrap">
                   <div class="w-full lg:w-6/12 px-4 mb-3">
                     <gr-input v-model="model.linkedin_username" label="Linkedin kullanıcı adın" :errors="errors" name="linkedin_username"/>
                   </div>
                   <div class="w-full lg:w-6/12 px-4 mb-3">
                     <gr-input v-model="model.twitter_username" label="Twitter kullanıcı adın" :errors="errors" name="twitter_username"/>
                   </div>
                   <div class="w-full lg:w-6/12 px-4">
                     <gr-input icon="fas fa-lock" v-model="model.instagram_username" label="Instagram kullanıcı adın" :errors="errors" name="instagram_username"/>
                   </div>
                   <div class="w-full lg:w-6/12 px-4">
                   </div>
                 </div>-->

                  <div class="flex flex-wrap">
                    <div class="w-full lg:w-12/12 px-4">
                      <div class="flex justify-end">
                        <gr-button variant="done" class="group relative flex justify-center mt-6 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" :executable-function="onUpdate"> Kaydet </gr-button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import GrButton from '@/components/default/GrButton.vue';
import GrInput from '@/components/default/GrInput.vue';
import { mapState, mapActions } from 'vuex';

export default {
  name: 'Profile',
  components: { GrButton, GrInput },

  data() {
    return {
      errors: {},
    };
  },

  computed: {
    ...mapState('Auth', ['me']),
  },

  methods: {
    ...mapActions('Profile', ['updateMe']),

    async onUpdate() {
      try {
        await this.updateMe(this.me);
      } catch (e) {
        this.errors = e;
      }
    },


  },

};
</script>
