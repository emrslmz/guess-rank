<template>
  <div>
    <buy-main v-if="this.$route.name === 'BuyExtras'" />
   <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'BuyExtras',
  components: {
    BuyMain: () => import('@/modules/main/extras/buy/components/BuyMain.vue'),
  },
};
</script>
