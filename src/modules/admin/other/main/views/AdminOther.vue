<template>
  <div>
    <other-main-page v-if="this.$route.name === 'AdminOther'" />
    <router-view />
  </div>
</template>


<script>
export default {
  name: 'AdminOtherHome',
  components: {
    OtherMainPage: () => import('@/modules/admin/other/main/components/OtherMainPage.vue'),
  },
};
</script>
