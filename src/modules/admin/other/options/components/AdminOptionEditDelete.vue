<template>
  <div class="d-flex justify-content-center align-items-center">
    <div class="container">
      <div class="text-center pt-5">
        <h4 class="text-spacing5">Added Game Level's</h4>
        <small>All game levels added. Click the buttons to edit or delete.</small>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'OptionEdit',
  methods: {
    ...mapActions([
        'getSelectedAdminOption',
    ])
  },
  created() {
    this.getSelectedAdminOption(this.$route.params.id);
  },
};
</script>
