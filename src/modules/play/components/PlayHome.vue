<template>
<div>
  <div class="px-3">
    <div style="padding-top: 100px"></div>
    <div class="top-banner"></div>
     <div class="container d-flex justify-content-center">
       <div class="col-12 col-xl-4">
         <play-select-game
             @selectedGame="selectedGame=$event" />
       </div>
       <div class="col-12 col-xl-8 my-3 my-xl-auto ">
        <div class="h-100 d-flex justify-content-center play-home-card" :class="selectedGame.background" >
          <div class="d-flex flex-column justify-content-center align-items-center text-white" v-if="selectedGame.gameId">
            <router-link :to="selectedGame.gameLink">
              <h1 :title="selectedGame.gameName"><i class="fas fa-play-circle play-button"></i> Play {{ selectedGame.gameName }}</h1>
            </router-link>
              <small>{{ selectedGame.description }}</small>
          </div>
          <div class="d-flex flex-column justify-content-center align-items-center"  v-else>
            <div>
              <h5>Welcome!</h5>
              <small>Before we get started, it's worth remembering a few things.</small>
              <ul>
                <li>First of all we have prepared a tutorial video for you if you do not know how to play!</li>
                <li>Make sure you know the rules. If you have any questions, ask us or check out the FAQ.</li>
              </ul>
              <div class="save-button d-flex justify-content-around">
                <button class="btn"><i class="fas fa-question-circle"></i> FAQ</button>
                <button class="btn"><i class="fas fa-exclamation-circle"></i> Rules</button>
                <button class="btn"><i class="fas fa-video"></i> Tutorial</button>
              </div>
              <small class="mt-3">Choose a game left to get started.</small>
            </div>
          </div>
        </div>

      </div>
     </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'PlayHome',
  data() {
    return {
      selectedGame: {},
    };
  },
  components: {
    PlaySelectGame: () => import('@/modules/play/components/stable/PlaySelectGame.vue'),
  }
}
</script>

<style scoped>

.play-home-card {
  background-color: #FBF9F6;
  border-radius: 10px;
  width: 100%;
  min-height: 600px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
}

.play-home-card a {
  color: white;
  text-decoration: none;
}

/*@media screen and (max-width: 1600px) {*/
/*  .play-home-card-left {*/

/*  }*/
/*  .play-home-card-right {*/
/*  }*/
/*}*/

.daily-bonus-card {
  background-image: linear-gradient(-60deg, #ff5858 0%, #f09819 100%);
}
.valorant-card {
  background-image: linear-gradient(-225deg, #fa4454 0%, #dc3d4b 52%, #dc3d4b 100%);
}
.csgo-card {
  background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
}
.pubg-card {
  background-image: linear-gradient(to right, #ffde40 0%, #fee140 100%);
}

.play-home-card h1 {
  font-size: 40px;
  transition: 0.2s;
  cursor: pointer;
}

.play-home-card h1:hover {
  font-size: 44px;
  transition: 0.2s;
}

.save-button button {
  border-radius: 10px;
  background-color: #20D489;
  color: white;
  font-weight: bold;
  min-width: 100px;
}

.save-button button:hover {
  background-color: #28ffa7;
  font-weight: bold;
  color: white;
}

</style>