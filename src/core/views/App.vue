<template>
<div>
  <router-view />
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
