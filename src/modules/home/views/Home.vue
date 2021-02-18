<template>
  <div>
    <the-header-home />
    <router-view />
    <the-footer-home />
  </div>
</template>

<script>
import TheHeaderHome from '@/modules/home/assets/layouts/TheHeaderHome.vue';
import TheFooterHome from '@/modules/home/assets/layouts/TheFooterHome.vue';

export default {
  name: 'Home',
  components: {
    TheHeaderHome,
    TheFooterHome
  }
}
</script>