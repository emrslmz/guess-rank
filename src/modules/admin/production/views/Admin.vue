<template>
  <div class="body">
    <div class="container" v-if="this.$route.name !== 'AdminPage'">
      <the-header-admin />
    </div>
   <div>
     <admin-login-page v-if="this.$route.name === 'AdminPage'" />
     <router-view />
   </div>
  </div>
</template>

<script>
export default {
  name: 'AdminPage',
  components: {
    TheHeaderAdmin: () => import('@/modules/admin/production/layouts/TheHeaderAdmin.vue'),
    AdminLoginPage: () => import('@/modules/admin/production/components/AdminLoginPage.vue'),
  },
};
</script>

<style>
.body {
  background-color: #E9E9E9;
  min-height: 100vh;
}
</style>