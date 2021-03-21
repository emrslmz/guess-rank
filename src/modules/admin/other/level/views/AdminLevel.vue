<template>
  <div>
    <home v-if="this.$route.name === 'AdminLevel'" />
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'AdminLevelHome',
  components: {
    Home: () => import('@/modules/admin/other/level/components/Home.vue'),
  },
};
</script>