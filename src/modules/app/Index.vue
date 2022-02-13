<template>
  <div>
    <router-view />a
  </div>
</template>

<script>
import config from '@/core/config';
import { mapActions, mapGetters, mapState } from 'vuex';

export default {
  name: 'AppIndex',

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
