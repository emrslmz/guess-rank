<template>
    <div v-if="levelData && levelData.game && levelData.video_group">
      <div class="text-center">
        <h2 class="text-uppercase">{{ levelData.game.game_name }}</h2>
        <small class="text-spacing5">Select a level to watch videos of the {{ levelData.game.game_name }} game.</small>
      </div>


      <div class="container">
        <div class="row d-flex justify-content-center align-items-center">
          <div class="col-3 video-group-card" v-for="(video, index) in levelData.video_group.videos" :key="index">
           <span class="badge badge-success w-100">You can watch it right now!</span>

            <div class="d-flex align-items-center">
             <div>
               <div class="d-flex flex-column justify-content-center align-items-center">
                 <h5>{{video.video_name}}</h5>
                 <small><i class="fas fa-play"></i></small>
               </div>

               <small class="text-center">You have not watched this video. <i class="far fa-thumbs-down"></i></small>
               <small class="text-center">You watched this video! <i class="far fa-thumbs-up"></i></small>
             </div>
            </div>

          </div>
        </div>
      </div>



       <div class="d-flex justify-content-center container">
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
    ])
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
  cursor: pointer;
}

.video-group-card {
  margin: 5px 10px 10px 10px;
}


a {
  text-decoration: none;
  color: #191919;
  transition: 0.5s;
}

.video-group-card:hover {
  border-radius: 25px;
  background-blend-mode: lighten;
  background-image: linear-gradient(120deg, #fdfbfb 0%, #cfd1d2 100%);
  transition: 0.5s;
}
</style>
