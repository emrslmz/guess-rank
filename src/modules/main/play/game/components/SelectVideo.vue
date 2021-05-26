<template>
  <div>
    <div v-if="levelData && levelData.game">

      <div v-if="levelData.video_group">
        <div class="text-center">
          <h2 class="text-uppercase">{{ levelData.game.game_name }}</h2>
          <small class="text-spacing5">You are level <b>{{ levelData.level_id }}</b> in the game <i>{{ levelData.game.game_name }}</i>.  There are <b>{{ levelData.video_group.videos.length }}</b> videos you can watch..</small>
        </div>


        <div class="container">
          <div class="row d-flex justify-content-center align-items-center">
            <div class="col-3 d-flex flex-column justify-content-between" v-for="(video, index) in levelData.video_group.videos" :class="video.is_completed === true ? 'video-group-card-completed cursor-none' : 'video-group-card'" :key="index">

                <div class="py-2">
                  <span class="badge badge-success w-100" v-if="video.is_completed === true && video.is_answered === true">Marked True</span>
                  <span class="badge badge-danger w-100" v-else-if="video.is_completed === false && video.is_answered === true">Marked False</span>
                  <span class="badge badge-primary w-100" v-else>Available!</span>
                </div>

              <div v-if="video.is_completed === false">
                <router-link :to="{ name: 'BeforeWatchVideo', params: { id: levelData.game_id, key: video.video_id }}" >
                  <div class="d-flex flex-column justify-content-center align-items-center my-5" :class="video.is_completed === true ? '' : 'select-video cursor-avaible'">
                    <h5>{{video.video_name}}</h5>
                    <small><i class="fas fa-play"></i></small>
                  </div>
                </router-link>
              </div>


              <div  v-else>
                <div class="d-flex flex-column justify-content-center align-items-center my-5" :class="video.is_completed === true ? '' : 'select-video cursor-avaible'">
                  <h5>{{video.video_name}}</h5>
                  <small><i class="fas fa-check-circle"></i></small>
                </div>
              </div>

              <div class="py-4 text-center">
                  <small class="text-center" v-if="video.is_viewed  === false">You have not watched this video. <i class="far fa-eye-slash"></i></small>
                  <small class="text-center" v-else>You watched this video! <i class="far fa-eye"></i></small>
                </div>



            </div>
          </div>
        </div>
      </div>

      <div class="container" v-else>
        <div class="d-flex text-center flex-column justify-content-center" style="height: 400px">
          <h2 class="text-uppercase">{{ levelData.game.game_name }}</h2>
          <small class="text-spacing5">Your level in <b>{{ levelData.game.game_name }}</b> game is <b>{{ levelData.level_id }}</b>. There is no video matching this level. Try again later. If it continues, get in touch.</small>
          <div>
            <button class="btn btn-light btn-sm my-2" @click="goBack"> <i class="fas fa-undo-alt"></i>Back</button>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="d-flex flex-column justify-content-center align-items-center">
        <i class="fas fa-circle-notch fa-spin"></i>
        <small><b>Loading...</b></small>
      </div>
    </div>

     <div class="d-flex justify-content-center container my-5">
       <div class="d-flex justify-content-center align-items-center game-level-area-bottom col-4">
          <h3><i class="fas fa-question px-2"></i></h3>
          <b><a href="#">Contact us</a> if you are having problems.</b>
       </div>
       <div class="d-flex justify-content-center align-items-center game-level-area-bottom col-6">
         <h3><i class="fas fa-money-bill-alt px-2"></i></h3>
         <b>Watch videos and earn money <small><i class="fas fa-coins"></i></small>.</b>
       </div>
     </div>


  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'SelectLevel',
  computed: {
    ...mapGetters([
        'getUserLevelData',
    ]),
    levelData() {
      return this.getUserLevelData.levelData;
    },
  },
  methods: {
    ...mapActions([
        'getLevel',
    ]),
    goBack() {
      return this.$router.go(-1);
    }
  },
  created() {
    this.getLevel(this.$route.params.id);
  }
};
</script>

<style scoped>


.game-level-area-bottom {
  margin: 0 15px 0 15px;
  width: 100%;
  min-height: 100px;
  border-radius: 20px;
  background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  color: #191919;
  text-decoration: none;
}

.video-group-card {
  width: 100%;
  min-height: 400px;
  border-radius: 20px;
  background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  color: #191919;
  transition: 0.5s;
  margin: 5px 10px 10px 10px;


  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}


.video-group-card:hover {
  border-radius: 25px;
  background-blend-mode: lighten;
  background-image: linear-gradient(120deg, #fdfbfb 0%, #cfd1d2 100%);
  transition: 0.5s;
}

.video-group-card-completed {
  width: 100%;
  min-height: 400px;
  border-radius: 20px;
  background-color: #cfd1d2;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  color: #191919;
  transition: 0.5s;
  margin: 5px 10px 10px 10px;


  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

a {
  text-decoration: none;
  color: #191919;
  transition: 0.5s;
}

.select-video {
  opacity: 0.8;
  transition: 0.5s;
}

.cursor-none {
  cursor: not-allowed;
}

.cursor-avaible {
  cursor: pointer;
}

.select-video:hover {
  font-size: 20px;
  opacity: 1;
  transition: 0.5s;
  letter-spacing: 5px;
}
</style>
