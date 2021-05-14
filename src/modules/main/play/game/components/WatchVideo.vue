<template>
<div>
  <div class="d-flex flex-column justify-content-center align-items-center">
    <div class="container responsive-class">
      <youtube width="100%" height="90%" class="responsive-iframe" :video-id="video.video_url"  :player-vars="this.playerVars"></youtube>
    </div>
  </div>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'WatchVideo',
  data() {
    return {
      playerVars: {  //autoplay
        autoplay: 1,
      },
    };
  },
  computed: {
    ...mapGetters([
        'getUserSelectedVideoData',
    ]),
    video() {
      return this.getUserSelectedVideoData;
    }
  },
  methods: {
    ...mapActions([
      'getUserSelectedVideo',
    ]),
  },
  created() {
    this.getUserSelectedVideo(this.$route.params.key);
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


