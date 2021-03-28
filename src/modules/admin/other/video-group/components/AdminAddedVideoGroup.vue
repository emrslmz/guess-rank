<template>
  <div class="text-center">
    {{ getVideoGroupInfo.videoGroupData }}
  </div>
</template>


<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'AdminAddedVideoGroup',
  computed: {
    ...mapGetters([
        'getVideoGroupInfo',
    ]),
  },
  methods: {
    ...mapActions([
        'getVideoGroup',
    ])
  },
  created() {
    this.getVideoGroup();
  }
};
</script>