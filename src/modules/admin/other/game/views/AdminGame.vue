<template>
  <div>
    <home v-if="this.$route.name === 'AdminGame'" />
   <router-view />
  </div>
</template>


<script>
export default {
  name: 'AdminGameHome',
  components: {
    Home: () => import('@/modules/admin/other/game/components/Home.vue'),
  },
};
</script>