<template>
<div>
  <div class="body-home">
    <the-header-home v-if="$route.name !== 'HomePageDashboard' && 'LoginRegister'" />
    <!--    <purchased v-if="$route.name !== 'HomePageDashboard' " />-->
    <the-side-bar v-if="$route.name !== 'HomePageDashboard' && 'LoginRegister'" />
    <router-view />
    <home-page v-if="$route.name === 'HomePageDashboard'"/>
  </div>
  <the-footer-home v-if="$route.name !== 'HomePageDashboard'" />

</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'MainApp',
  computed: {
    ...mapGetters([
        'isLogged',
        'getUserData',
    ]),
  },
  methods: {
    ...mapActions([
        'userMe',
    ])
  },
  created() {
    this.userMe();
  },
  components: {
    TheHeaderHome: () => import('@/modules/main/layouts/TheHeaderHome.vue'),
    TheFooterHome: () => import('@/modules/main/layouts/TheFooterHome.vue'),
    HomePage: () => import('@/modules/main/home/components/HomePage.vue'),
    TheSideBar: () => import('@/modules/main/layouts/TheSideBar.vue'),
    // Purchased: () => import('@/modules/main/extras/purchased/views/Purchased.vue'),
  }
}
</script>

<style scoped>
.body-home {
  min-height: 100vh;
  /*WHITE*/
  /*background-color: #d3d3d3;*/
  /*WHITE*/

  /*ORANGE*/
  /*background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);*/
  /*ORANGE*/

  /*GREEN*/
  /*background-image: linear-gradient(to top, #0ba360 0%, #3cba92 100%);*/
  /*GREEN*/


  /*GRAY*/
  /*background: linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #989898;*/
  /*background-blend-mode: multiply,multiply;*/
  /*GRAY*/

  /*LIGHT BLUE TOP WHITE*/
  background-image: linear-gradient(to top, #accbee 0%, #e7f0fd 100%);
  /*LIGHT BLUE TOP WHITE*/

  /*GRAY*/
  /*background-image: linear-gradient(to right, #868f96 0%, #596164 100%);*/
  /*GRAY*/

}
</style>