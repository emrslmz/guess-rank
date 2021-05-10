<template>
  <div>
    <movement-main v-if="this.$route.name === 'UserMovements'" />
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'UserMovements',
  components: {
    MovementMain: () => import('@/modules/admin/other/movement/main/components/MovementMain.vue'),
  },
};
</script>
