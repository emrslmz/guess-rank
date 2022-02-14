<template>
  <div>
    <div class="bg-gray-200">
      <div class="min-h-screen">
        <the-header />
        <router-view />
      </div>
      <div class=" bottom-0 w-full">
        <the-footer />
      </div>
    </div>
  </div>
</template>

<script>
import TheHeader from '@/modules/app/base/layouts/TheHeader.vue';
import TheFooter from '@/modules/app/base/layouts/TheFooter.vue';
import config from '@/core/config';
import { mapActions, mapGetters, mapState } from 'vuex';

export default {
  name: 'AppIndex',
  components: { TheHeader, TheFooter },

  methods: {
    ...mapActions('Auth', ['fetchMe', 'logout']),

    setPathThatWantToGo() {
      localStorage.setItem('sk_last_path', this.$route.fullPath);
    },

  },

  async created() {
    if (localStorage.getItem(config.VITE_TOKEN_NAME)) {
      try {
        await this.fetchMe();
      } catch (e) {
        this.logout();
        this.setPathThatWantToGo();
      }
    } else {
      this.logout();
      this.setPathThatWantToGo();
    }
  },

};
</script>
