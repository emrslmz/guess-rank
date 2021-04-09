<template>
  <div>
    <home v-if="this.$route.name === 'AdminOptionGroup'" />
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'AdminOptionGroup',
  components: {
    Home: () => import('@/modules/admin/other/option-group/components/Home.vue'),
  },
};
</script>