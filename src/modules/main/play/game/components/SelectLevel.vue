<template>
    <div>
      <div class="text-center">
        <h2>{{ getGameInfo.selectedGameData.game_name }}</h2>
        <small class="text-spacing5">Select a level to watch videos of the {{ getGameInfo.selectedGameData.game_name }} game.</small>
      </div>

     <div class="d-flex flex-column justify-content-center align-items-center">

       <div class="d-flex flex-column justify-content-center align-items-center game-level-area-top col-10 col-xl-6">
         <div class="d-flex justify-content-center align-items-center row">
           <div class="level-card-box mouse-click text-center" v-for="(level, index) in focusLevel" :class="level.is_locked === false ? 'level-card-locked' : 'level-card-unlocked'"  :key="index">
             <router-link :to="level.is_locked === true ? { name: 'SelectVideo', params: { key: level.level_random_key }} : {}">
               <div>
                 <h2 class="d-flex flex-column" :title="level.is_locked === true ? level.level_random_key : 'Locked'">
                   {{ level.level_id }}
                   <small style="font-size: 16px" v-if="level.is_locked === false"><i class="fas fa-lock"></i></small>
                   <small style="font-size: 16px" v-else><i class="fas fa-lock-open"></i></small>
                   <i style="font-size: 12px">{{ level.level_name }} </i>
                 </h2>
               </div>
             </router-link>
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

    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'SelectLevel',
  computed: {
    ...mapGetters([
      'getGameInfo',
      'getLevelInfo',
    ]),
    focusLevel() {
      return this.getLevelInfo.levelData.filter(l => l.game_id === this.getGameInfo.selectedGameData.game_id && l.is_hidden === true);
    },
  },
  methods: {
    ...mapActions([
      'getSelectedGame',
      'getLevel',
    ]),
  },
  created() {
    this.getSelectedGame(this.$route.params.id);
    this.getLevel();
  },
};
</script>

<style scoped>
.game-level-area-top {
  margin: 15px 0 15px 0;
  width: 100%;
  min-height: 400px;
  border-radius: 20px;
  background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  color: #191919;
  text-decoration: none;
}

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

.level-card-box {
  margin: 15px;
  width: 90px;
  min-height: 90px;
  border-radius: 20px;
  box-shadow: rgba(50, 50, 93, 0.25) 0 0  0 1px;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
}

.level-card-box:hover {
  box-shadow: rgba(50, 50, 93, 0.25) 0 0  0 3px;
  transition: 0.5s;
}

.level-card-box a {
  text-decoration: none;
  color: white;
}
/*Kilitsiz*/
.level-card-unlocked {
  background:  radial-gradient(at center, #0ba360 0%, #3cba92 120%);
  background-blend-mode: multiply,multiply;
}
/*Kilitli*/

.level-card-locked {
  background:  radial-gradient(at center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #989898;
  background-blend-mode: multiply,multiply;
  color: white !important;

}
</style>