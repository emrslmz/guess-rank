<template>
  <div>
    <home v-if="this.$route.name === 'AdminGameCategory'" />
   <router-view />
  </div>
</template>


<script>
export default {
  name: 'GameCategory',
  components: {
    Home: () => import('@/modules/admin/other/game/components/Home.vue'),
  },
};
</script>