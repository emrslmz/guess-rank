<template>
  <div>
    <home v-if="this.$route.name === 'AdminOption'" />-
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'AdminOption',
  components: {
    Home: () => import('@/modules/admin/other/options/components/Home.vue'),
  },
};
</script>