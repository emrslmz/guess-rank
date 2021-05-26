<template>
  <div>
    <game-home v-if="this.$route.name === 'Gamess'" />
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'Gamess',
  components: {
    GameHome: () => import('@/modules/main/play/game/components/SelectGame.vue'),
  }
};
</script>
