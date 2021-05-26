<template>
  <div class="before-watch-video">
    <div class="text-center d-flex flex-column">
      <h2>{{ getUserSelectedVideoData.video_name }}</h2>
      <small class="text-spacing5" v-if="this.ready === false">Click on the "ready" button below to watch the video named {{ getUserSelectedVideoData.video_name }} you selected.</small>
      <small class="text-spacing5" v-else>Stylish will appear soon. Mark one when you are available.</small>

    </div>

    <div class="d-flex flex-column justify-content-center align-items-center">
        <div class="d-flex flex-column justify-content-center align-items-center watch-video-card col-12 col-sm-10 col-md-6" v-if="this.ready === false">

          <!-- READY BUTTON-->
          <div @click="changeReady">
            <button class="button-valorant btn-valorant-light" >
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

        <div class="d-flex flex-column justify-content-center align-items-center watch-video-card col-12 col-sm-6" v-else>
          <watch-video />
        </div>

        <div class="d-flex flex-column justify-content-center align-items-center watch-video-card-bottom col-12 col-sm-6">
            <div>
              <video-option :ready="ready" />
            </div>
        </div>

    </div>
  </div>
</template>


<script>
import { mapGetters, mapActions } from 'vuex';
import { showMessage } from '@/shared/utils/messages.utils';

export default {
  name: 'BeforeWatchVideo',
  data() {
    return {
      ready: false,
    };
  },
  components: {
    WatchVideo: () => import('@/modules/main/play/game/components/WatchVideo.vue'),
    VideoOption: () => import('@/modules/main/play/game/components/VideoOption.vue'),
  },
  computed: {
    ...mapGetters([
        'getUserSelectedVideoData',
        'getUserLevelData',
    ]),
    videoCompleted() {
      return this.getUserLevelData.levelData.video_group.videos.find(a => a.video_id === this.getUserSelectedVideoData.video_id);
    }
  },
  methods: {
    ...mapActions([
        'getUserSelectedVideo',
        'getLevel',
    ]),
    changeReady() {
      this.ready = true;
    },

  },
  async created() {
    this.getUserSelectedVideo(this.$route.params.key);
    await this.getLevel(this.$route.params.id);


    if (this.videoCompleted.is_completed === true) {
      this.$router.push({ name: 'SelectLevel' });
      showMessage("You have already watched the video you want to go to. If you continue, you may be blocked.");
    },
  },
};
</script>


<style scoped>
.before-watch-video {
  height: 120vh;
}

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

.watch-video-card-bottom {
  margin: 15px 0 15px 0;
  width: 100%;
  min-height: 100px;
  border-radius: 20px;
  background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  color: #191919;
  text-decoration: none;
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
