<template>
  <div>
    <play-home v-if="this.$route.name === 'Play'" />
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'Play',
  components: {
    PlayHome: () => import('@/modules/main/play/home/components/PlayHome.vue'),
  }
};
</script>