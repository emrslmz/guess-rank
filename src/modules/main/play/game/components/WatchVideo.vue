<template>
  <div class="d-flex flex-column justify-content-center align-items-center">
    <div v-if="getPlayGame.watchVideo.showVideo === false">
      <h5>{{ getPlayGame.watchVideo.videoAfterStartTime }}</h5>
    </div>
    <div class="container responsive-class" v-else>

      <youtube width="100%" height="90%" class="responsive-iframe" :video-id="getVideoInfo.selectedVideoData.video_url"  :player-vars="getPlayGame.watchVideo.playerVars" @playing="playingVideo"></youtube>
<!--      jKSUc5Tbx5s-->
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'WatchVideo',
  computed: {
    ...mapGetters([
        'getVideoInfo',
        'getPlayGame',
    ]),
  },
  methods: {
    ...mapActions([
      'getselectedVideo',
      'countdownOption',
    ]),
    playingVideo() {
      this.countdownOption();
    },
  },
  created() {
    this.getselectedVideo(this.$route.params.id);
  },
};
</script>


<style scoped>
.responsive-class {
  position: absolute;
  pointer-events: none;
  cursor: default;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}


.responsive-iframe {
  position: absolute;
}

</style>



<!--<iframe class="responsive-iframe" width="960" height="480" src="https://www.youtube-nocookie.com/embed/jKSUc5Tbx5s?controls=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>-->

<!--      <youtube class="responsive-iframe" width="960" height="480" video-id="jKSUc5Tbx5s" :player-vars="playerVars" @playing="countdownOption"></youtube>-->


