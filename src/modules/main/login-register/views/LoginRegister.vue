<template>
  <div class="container">
    <div style="padding-top: 150px"></div>
      <div class="d-xl-flex justify-content-between align-items-start">
        <div class="col-12 col-xl-7">
          <div class="home-picture-login" style="background-image: url('/assets/images/img/home-picture-login.png');"></div>
        </div>
        <div class="col-12 col-xl-5">


          <login-card v-if="!getLoginRegisterData.loginRegisterCard"  />


          <register-card v-else />

        </div>
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Start',
  components: {
    LoginCard: () => import('@/modules/main/login-register/components/LoginCard.vue'),
    RegisterCard: () => import('@/modules/main/login-register/components/RegisterCard.vue'),
  },
  computed: {
    ...mapGetters([
        'getLoginRegisterData',
    ]),
  },
};
</script>


<style scoped>

.home-picture-login {
  background-position: revert;
  position: absolute;
  background-repeat: no-repeat;
  background-size: 600px;
  transition: 0.5s;
  width: 100%;
  height: 600px;
}

@media screen and (max-width: 852px) {
  .home-picture-login {
    display: none;
  }
}
</style>