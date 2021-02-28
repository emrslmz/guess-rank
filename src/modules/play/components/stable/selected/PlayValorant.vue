<template>
  <div>
   <div class="d-flex justify-content-center">
     <div class="play-valorant-card col-12 col-xl-6 d-xl-flex align-items-center">
       <div class="play-pictures col-12 col-xl-6" style="background-image: url('/assets/images/img/play-valorant-jett.png');"></div>
       <div class="text-white text-right mr-4 col-12 col-xl-6">
         <div v-if="!selectLevel">
           <h2 class="text-opacity" @click="selectLevel = true"><i class="fas fa-play-circle"></i> Select Level</h2>
           <small>Choose level before starting to play</small>
         </div>
         <div v-if="selectLevel">
           <h5>Choose Level</h5>
           <small>and start playing</small>
           <div class="row text-dark">
             <div class="col-4" v-for="(level, index) in getValorantLevel" :key="index">
                 <div class="level-box">
                   <router-link
                       :disabled="level.levelLock"
                       :event="level.levelLock ? 'click' : ''"
                       :to="{
                       name: 'PlayerValorant',
                       params: { id: level.levelId }}">
                        <i class="fas fa-unlock text-lightgreen" v-if="level.levelLock"></i>
                        <i class="fas fa-lock text-red" v-else></i>
                     {{ level.levelName }}
                   </router-link>
                 </div>
             </div>
          </div>
         </div>
       </div>
     </div>
   </div>
    <div class="d-flex justify-content-center">
      <div class="col-6 play-information d-flex justify-content-between align-items-center text-white">
        <div class="col-4 d-flex justify-content-between align-items-center">
          <h1><i class="fas fa-question"></i></h1>
          <ul>
            <li><small>Earn different points in each level.</small> </li>
            <li><small>You earn the designated score for each correct answer.</small> </li>
          </ul>
        </div>
        <div class="col-4 d-flex justify-content-between align-items-center">
          <h1><i class="fas fa-exclamation"></i></h1>
          <ul>
            <li><small>Every video you watch has one right, you cannot watch the video you watch again.</small></li>
          </ul>
        </div>
        <div class="col-4 d-flex justify-content-between align-items-center">
          <h1><i class="fas fa-bomb"></i></h1>
          <ul>
            <li>Surprises await you in some videos!</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'PlayValorants',
  data() {
    return {
      selectLevel: false,
    };
  },
  computed: {
    ...mapGetters([
        'getValorantLevel',
    ])
  },
};
</script>


<style scoped>
.play-valorant-card {
  margin: 100px 0 0 0;
  border-radius: 20px;
  padding-bottom: 50px;
  width: 100%;
  min-height: 500px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  background-image: linear-gradient(-225deg, #fa4454 0%, #dc3d4b 52%, #dc3d4b 100%);
}

.play-valorant-card a {
  color: #191919;
  text-decoration: none;
}

.play-pictures {
  background-position: revert;
  /*background-attachment: fixed;*/
  background-repeat: no-repeat;
  background-size: 300px;
  width: 100%;
  height: 500px;
  /*border-radius: 150px;*/
  animation: transform 7s infinite alternate;
}

.level-box {
  margin: 10px;
  width: 75px;
  height: 75px;
  background: white;
  border-radius: 5px;
  cursor: pointer;
  -webkit-user-select: none;  /* Chrome all / Safari all */
  -moz-user-select: none;     /* Firefox all */
  -ms-user-select: none;      /* IE 10+ */
  -o-user-select: none;
  user-select: none;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  transition: 0.2s;
}

.level-box a {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}
.level-box:hover {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 6px, rgba(0, 0, 0, 0.24) 0px 1px 6px;
  transition: 0.2s;
}

.level-box i {
  font-size: 24px;
}

.play-information {
  margin: 50px 0 50px 0;
  border-radius: 20px;
  width: 100%;
  height: 100px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  background-image: linear-gradient(-225deg, #fa4454 0%, #dc3d4b 52%, #dc3d4b 100%);
}
</style>