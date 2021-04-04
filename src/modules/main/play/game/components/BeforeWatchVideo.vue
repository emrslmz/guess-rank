<template>
  <div>
    <div class="text-center d-flex flex-column">
      <h2>{{ getVideoInfo.selectedVideoData.video_name }}</h2>
      <small class="text-spacing5">Click on the "I'm ready" button below to watch the video named {{ getVideoInfo.selectedVideoData.video_name }} you selected.</small>
    </div>
<!--    {{ getVideoInfo.selectedVideoData }}-->

    <div class="d-flex flex-column justify-content-center align-items-center">
        <div class="d-flex flex-column justify-content-center align-items-center watch-video-card col-6" v-if="readyStatus === false">

          <!-- READY BUTTON-->
          <div>
            <button class="button-valorant btn-valorant-light" @click="readyStatus = true">
              <span class="btn-valorant-inner">
                <span class="btn-valorant-slide"></span>
                <span class="btn-valorant-content"><i class="fas fa-play"></i> Ready</span>
              </span>
            </button>
          </div>
          <!-- /READY BUTTON-->

          <div class="text-center d-flex flex-column" style="font-size: 12px">
            <b><i class="fas fa-info-circle"></i> After pressing the Ready button, watch the video.</b>
            <b>Select one of the options that appear in the bottom panel after a certain time of the video.</b>
          </div>
        </div>
        <div class="d-flex flex-column justify-content-center align-items-center watch-video-card col-6" v-else>
          <watch-video />
        </div>
    </div>
  </div>
</template>


<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'AfterWatchVideo',
  data() {
    return {
      readyStatus: false,
    };
  },
  components: {
    WatchVideo: () => import('@/modules/main/play/game/components/WatchVideo.vue'),
  },
  computed: {
    ...mapGetters([
        'getVideoInfo',
    ]),
  },
  methods: {
    ...mapActions([
        'getselectedVideo',
    ]),
  },
  created() {
    this.getselectedVideo(this.$route.params.id);
  }
};
</script>


<style scoped>
.watch-video-card {
  margin: 15px 0 15px 0;
  width: 100%;
  min-height: 600px;
  border-radius: 20px;
  background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  color: #191919;
  text-decoration: none;
}


a {
  color: #191919;
}

/*CUSTOM VALORANT BUTTON*/
.button-valorant {
  /* Clean style */
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  border: none;
  background: none;
  color: var(--button-text-color);
  cursor: pointer;
  /* Clean style */

  --button-text-color: var(--background-color);
  --button-text-color-hover: var(--button-background-color);
  --border-color: #7D8082;
  --button-background-color: #ece8e1;
  --highlight-color: #ff4655;
  --button-inner-border-color: transparent;
  --button-bits-color: var(--background-color);
  --button-bits-color-hover: var(--button-background-color);

  position: relative;
  padding: 8px;
  margin-bottom: 20px;
  height: 80px;
  width: 280px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 14px;
  transition: all .15s ease;
}

.button-valorant::before,
.button-valorant::after {
  content: '';
  display: block;
  position: absolute;
  right: 0; left: 0;
  height: calc(50% - 5px);
  border: 1px solid var(--border-color);
  transition: all .15s ease;
}

.button-valorant::before {
  top: 0;
  border-bottom-width: 0;
}

.button-valorant::after {
  bottom: 0;
  border-top-width: 0;
}

.button-valorant:active,
.button-valorant:focus {
  outline: none;
}

.button-valorant:active::before,
.button-valorant:active::after {
  right: 3px;
  left: 3px;
}

.button-valorant:active::before {
  top: 3px;
}

.button-valorant:active::after {
  bottom: 3px;
}

.btn-valorant-inner {
  position: relative;
  display: block;
  padding: 20px 30px;
  background-color: var(--button-background-color);
  overflow: hidden;
  box-shadow: inset 0px 0px 0px 1px var(--button-inner-border-color);
}

.btn-valorant-inner::before {
  content: '';
  display: block;
  position: absolute;
  top: 0; left: 0;
  width: 2px;
  height: 2px;
  background-color: var(--button-bits-color);
}

.btn-valorant-inner::after {
  content: '';
  display: block;
  position: absolute;
  right: 0; bottom: 0;
  width: 4px;
  height: 4px;
  background-color: var(--button-bits-color);
  transition: all .2s ease;
}

.btn-valorant-slide {
  display: block;
  position: absolute;
  top: 0; bottom: -1px; left: -8px;
  width: 0;
  background-color: var(--highlight-color);
  transform: skew(-15deg);
  transition: all .2s ease;
}

.btn-valorant-content {
  position: relative;
}

.button-valorant:hover {
  color: var(--button-text-color-hover);
}

.button-valorant:hover .btn-valorant-slide {
  width: calc(100% + 15px);
}

.button-valorant:hover .btn-valorant-inner::after {
  background-color: var(--button-bits-color-hover);
}

.btn-valorant-light {
  --button-background-color: var(--background-color);
  --button-text-color: var(--highlight-color);
  --button-inner-border-color: var(--highlight-color);
  --button-text-color-hover: #ece8e1;
  --button-bits-color-hover: #ece8e1;
}

/*CUSTOM VALORANT BUTTON*/

</style>