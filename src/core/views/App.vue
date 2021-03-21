<template>
<div>
  <router-view />

  <div class='handy-notify'>
    <span></span>
  </div>

</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'App',
  computed: {
    ...mapGetters([
        'isLogged',
    ]),
  },
};
</script>

<style scoped>
.handy-notify span {
  margin-left: 50px;
}
</style>
