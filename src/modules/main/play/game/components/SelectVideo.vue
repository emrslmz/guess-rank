<template>
  <div>
    select video brom xd
  </div>
</template>


<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: '',
  computed: {
    ...mapGetters([
        'getLevelInfo',
    ]),
  },
  methods: {
    ...mapActions([
      'getLevel',
    ]),
  },
};
</script>