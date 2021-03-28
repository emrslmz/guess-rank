<template>
  <div>
    <home v-if="this.$route.name === 'AdminVideoGroup'" />
    <router-view />
  </div>
</template>


<script>
export default {
  name: 'AdminVideoGroup',
  components: {
    Home: () => import('@/modules/admin/other/video-group/components/Home.vue'),
  },
};
</script>