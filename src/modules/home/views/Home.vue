<template>
  <div class="body-home">
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

<style scoped>
.body-home {
  height: 100vh;
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