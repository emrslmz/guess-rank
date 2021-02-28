<template>
  <div>
    <div class="container">
      <div class=" d-flex justify-content-center">
        <div class="d-flex justify-content-center align-items-center col-12 player-valorant-card">
          <div class="youtube d-flex justify-content-center align-items-center col-12" v-if="showVideo">
            <youtube width="300%" height="550px" :video-id="getValorantVideo.videoLink" :player-vars="playerVars" @playing="playing"></youtube>
          </div>
          <div class="d-flex justify-content-center align-items-center col-12 text-white" v-else>
            <div class="text-center">
              <h3>{{ videoReadyTime }}</h3>
              <h6>Video will start soon, wait a little
              </h6>
            </div>
          </div>
        </div>
      </div>
      <div class="player-valorant-rank-card d-flex align-items-center justify-content-center">
        <div class="d-flex text-white" v-if="!showRankSelection">
          <h6>You can choose soon.</h6>
        </div>
        <div class="d-flex text-white" v-if="showRankSelection">

          <div v-for="(option, index) in getValorantVideo.videoOption" :key="index">
            <div class="rank-picture" :style="{ 'background-image': 'url(/assets/images/ranks/' + option.optionRank + ')' }" :title="option.optionName" :alt="option.optionName"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      videoId: '',
      playerVars: {
        autoplay: 1
      },
      videoReadyTime: 6,
      showVideo: false,
      showRankSelection: false,
    }
  },
  computed: {
    ...mapGetters([
        'getValorantLevel',
    ]),
    getValorantVideo() {
      return this.getValorantLevel.find(a => a.levelId === this.$route.params.id);
    }
  },
  methods: {
    playing() {
      console.log('we are watching!!!')
    },
    countDownVideo() {
      setInterval(() => {
        if (this.videoReadyTime > 0) {
          this.videoReadyTime--;
        } else {
          this.showVideo = true;
        }
      },1000);
    },
    countDownSelection() {
      setInterval(() => {
        this.showRankSelection = true;
      }, 3000);
    }
  },
  created() {
    this.countDownVideo();
    this.countDownSelection();
  },
};
</script>

<style scoped>
.player-valorant-card {
  margin: 100px 0 20px 0;
  border-radius: 20px;
  width: 100%;
  min-height: 600px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  background-image: linear-gradient(-225deg, #fa4454 0%, #dc3d4b 52%, #dc3d4b 100%);
}

.player-valorant-rank-card {
  margin-bottom: 100px;
  border-radius: 20px;
  min-width: 50%;
  min-height: 100px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  background-image: linear-gradient(-225deg, #fa4454 0%, #dc3d4b 52%, #dc3d4b 100%);
}

.youtube {
  -webkit-user-select: none;  /* Chrome all / Safari all */
  -moz-user-select: none;     /* Firefox all */
  -ms-user-select: none;      /* IE 10+ */
  -o-user-select: none;
  user-select: none;
}

.rank-picture {
  background-position: revert;
  /*background-attachment: fixed;*/
  background-repeat: no-repeat;
  margin: 0 5px 0 5px;
  background-size: 50px;
  width: 50px;
  height: 50px;
  /*border-radius: 150px;*/
  cursor: pointer;
  opacity: 0.9;
  transition: 0.3s;
}
.rank-picture:hover {
  opacity: 1;
  transition: 0.3s;
}
</style>