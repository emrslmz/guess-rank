<template>
  <div>
    <start-main />
  </div>
</template>

<script>
export default {
  name: 'Start',
  components: {
    StartMain: () => import('@/modules/main/start/components/StartMain.vue'),
  },

};
</script>
