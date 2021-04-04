<template>
  <div class="d-flex flex-column justify-content-center align-items-center">
    <div v-if="showVideo === false">
      <h5>{{ videoAfterStartTime }}</h5>
    </div>
    <div v-else>
      <youtube width="960" height="480" video-id="jKSUc5Tbx5s" :player-vars="playerVars" @playing="countdownOption"></youtube>
    </div>
    <div class="d-flex py-4" v-if="showOption === true">
      <h6>option1</h6>
      <h6>option2</h6>
      <h6>option3</h6>
      <h6>option4</h6>
    </div>
    <div class="py-4" v-else></div>
  </div>
</template>



<script>
export default {
  name: 'WatchVideo',
  data() {
    return {
      videoAfterStartTime: 1,
      showVideo: false,
      showOptionTime: 10,
      showOption: false,
      playerVars: {
        autoplay: 1
      }
    };
  },
  methods: {
    countdownVideo() {
      setInterval(() => {
        if (this.videoAfterStartTime > 0) {
          this.videoAfterStartTime--;
        } else {
          this.showVideo = true;
        }
      },1000);
    },
    countdownOption() {
      setInterval(() => {
        if (this.showOptionTime > 0) {
          this.showOptionTime--;
        } else {
          this.showOption = true;
        }
      },1000);
    },
  },
  created() {
    this.countdownVideo();
  },
};
</script>


<style scoped>

</style>





<!-- <iframe width="960" height="480" src="https://www.youtube-nocookie.com/embed/jKSUc5Tbx5s?controls=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>-->