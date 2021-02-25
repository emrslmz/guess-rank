<template>
  <div class="body-home">
    <the-header-home v-if="$route.name !== 'HomePageDashboard' && 'LoginRegister'" />
    <router-view />
    <home-page v-if="$route.name === 'HomePageDashboard'"/>
    <the-footer-home v-if="$route.name !== 'HomePageDashboard'" />
  </div>
</template>

<script>
import TheHeaderHome from '@/modules/home/layouts/TheHeaderHome.vue';
import TheFooterHome from '@/modules/home/layouts/TheFooterHome.vue';
import HomePage from '@/modules/home/components/HomePage.vue';

export default {
  name: 'Home',
  components: {
    TheHeaderHome,
    TheFooterHome,
    HomePage
  }
}
</script>

<style scoped>
.body-home {
  min-height: 120vh;
  /*background-color: #d3d3d3;*/
  /* SUPERR */
  /*background: linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #989898;*/
  /*background-blend-mode: multiply,multiply;*/
  /* SUPERR */


  background-image: linear-gradient(to top, #accbee 0%, #e7f0fd 100%);
  background-blend-mode: multiply,multiply;

  /*background-image: linear-gradient(to right, #868f96 0%, #596164 100%);*/
}
</style>