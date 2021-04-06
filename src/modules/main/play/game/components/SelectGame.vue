<template>
  <div class="d-flex justify-content-center align-items-center game-home-top">
    <div class="d-flex row flex-row justify-content-center align-items-center">

      <div class="select-game-card daily-bonus-card col-4 d-flex justify-content-between align-items-center text-white">
        <div><h1><i class="fas fa-history ml-4"></i></h1></div>
        <div class="text-opacity mr-4"><h2> DAILY</h2></div>
      </div>

      <!--GAME CARD-->
      <div class="select-game-card col-4 d-flex justify-content-between align-items-center text-white" :style="game.game_background_color" v-for="(game, index) in focusGame" :key="index" >
        <div class="play-pictures" style="background-image: url('/assets/images/img/play-csgo-ct.png');"></div>

       <router-link  :to="{ name: 'SelectLevel', params: { id: game.game_id }} ">
         <div class="text-opacity mr-4"><h2 :style="game.game_color"> {{ game.game_name }}</h2></div>
       </router-link>
      </div>
      <!--GAME CARD-->

      <div class="select-game-card more-card col-4 d-flex flex-column justify-content-center align-items-center text-white">
        <div class="text-center">
          <h2><i class="fas fa-ellipsis-h"></i></h2>
          <small>More Games very soon.</small>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'GameHome',
  computed: {
    ...mapGetters([
        'getGameInfo',
    ]),
    focusGame() {
      return this.getGameInfo.gameData.filter(a => a.is_hidden === true);
    },
  },
  methods: {
    ...mapActions([
        'getGame',
    ]),
  },
  created() {
    this.getGame();
  },
};
</script>


<style scoped>
.game-home-top {
 padding-top: 200px;
}

.select-game-card {
  margin: 10px 10px 10px 10px;
  border-radius: 5px;
  width: 100%;
  min-height: 100px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
}
.select-game-card a {
  text-decoration: none;
}
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
.more-card {
  background: linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #989898;
  background-blend-mode: multiply,multiply;
}

.play-pictures {
  margin-left: 10px;
  background-position: revert;
  /*background-attachment: fixed;*/
  background-repeat: no-repeat;
  /*border-radius: 150px;*/
  background-size: 100px;
  width: 100px;
  height: 100px;
}
</style>