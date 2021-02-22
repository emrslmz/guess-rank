<template>
  <div>
    <router-view />
    <play-home v-if="$route.name === 'Play'" />
  </div>
</template>

<script>
import PlayHome from '@/modules/play/components/PlayHome.vue';

export default {
  name: 'Play',
  components: {
    PlayHome
  }
}
</script>