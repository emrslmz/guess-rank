<template>
<div>
    <vue-element-loading :active="this.show" spinner="spinner" />
  <router-view />

  <div class='handy-notify'>
    <span></span>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
    };
  },
  name: 'App',
  methods: {
    loader() {
      setTimeout(() => {
        this.show = false;
      }, 150);
    }
  },
  created() {
    this.loader();
  },
};
</script>
