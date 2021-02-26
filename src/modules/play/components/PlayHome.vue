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
       <div class="col-12 col-xl-8 my-3 my-xl-auto">
        <div class="h-100 d-flex justify-content-center play-home-card" :class="selectedGame.background">
          <div class="d-flex align-items-center">
              <h1><i class="fas fa-play-circle play-button"></i> Play {{ selectedGame.gameName }}</h1>
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
  background-color: white;
  border-radius: 10px;
  width: 100%;
  min-height: 500px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
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
.default-card {
  background-color: white;
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
</style>