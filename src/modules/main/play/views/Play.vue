<template>
  <div>
    <router-view />
    <play-home v-if="$route.name === 'Category'" />
  </div>
</template>

<script>
import PlayHome from '@/modules/main/play/components/test/PlayHome.vue';

export default {
  components: {
    PlayHome,
  },
};
</script>