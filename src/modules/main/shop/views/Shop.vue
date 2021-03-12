<template>
  <div>
    <shop-main v-if="this.$route.name === 'Shop'" />
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'Shop',
  components: {
    ShopMain: () => import('@/modules/main/shop/components/ShopMain.vue')
  },
};
</script>