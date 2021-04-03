<template>
  <div>
    <game-home />
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