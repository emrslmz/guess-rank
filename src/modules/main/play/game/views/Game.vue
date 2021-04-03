<template>
  <div>
    <game-home v-if="this.$route.name === 'Games'" />
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'Games',
  components: {
    GameHome: () => import('@/modules/main/play/game/components/GameHome.vue'),
  }
};
</script>