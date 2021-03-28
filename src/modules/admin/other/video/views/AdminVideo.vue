<template>
  <div>
    <home v-if="this.$route.name === 'AdminVideo'" />
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'AdminVideoHome',
  components: {
    Home: () => import('@/modules/admin/other/video/components/Home.vue'),
  },
};
</script>