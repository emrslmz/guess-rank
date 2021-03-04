<template>
  <div class="body">
    <div class="container" v-if="this.$route.name !== 'AdminPage'">
      <the-header-admin />
      <the-sidebar-admin />
    </div>
   <div>
     <router-view />
   </div>
  </div>
</template>

<script>
export default {
  components: {
    TheHeaderAdmin: () => import('@/modules/admin/production/layouts/TheHeaderAdmin.vue'),
    TheSidebarAdmin: () => import('@/modules/admin/production/layouts/TheSidebarAdmin.vue'),
  }
}
</script>

<style>
.body {
  background-color: #E9E9E9;
  min-height: 100vh;
}
</style>