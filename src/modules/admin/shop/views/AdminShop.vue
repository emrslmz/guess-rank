<template>
  <div>
    <home v-if="this.$route.name === 'AdminShopPage'" />
    <router-view />
  </div>
</template>


<script>
export default {
  name: 'AdminShopHome',
  components: {
    Home: () => import('@/modules/admin/shop/components/Home.vue'),
  },
};
</script>