<template>
  <div class="d-flex justify-content-center align-items-center game-added">
    <div class="container">
      <div class="text-center py-3">
        <h4 class="text-spacing5">Added Games</h4>
        <small>All Added Game. Click card for edit/delete.</small>
      </div>
      <div class="d-flex row flex-row justify-content-around" v-if="!!getGameInfo.gameStatus">
        <div class="col-md-4 col-6" v-for="(game, index) in getGameInfo.gameData" :key="index">
          <div class="game-added-card d-flex justify-content-center align-items-center" :style="game.game_background_color">
            <router-link :to="{ name: 'GamesEdit', params: { id: game.game_id }} ">
              <div class="p-5">
                <h4 :style="game.game_color">{{ game.game_name }}</h4>
              </div>
            </router-link>
          </div>

        </div>
      </div>
      <div class="text-center" v-else><i style="font-size: 36px" class="fas fa-circle-notch fa-spin"></i></div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'AdminAddedGame',
  computed: {
    ...mapGetters([
        'getGameInfo',
    ]),
  },
  methods: {
    ...mapActions([
        'getGame',
    ])
  },
  created() {
    this.getGame();
  }
};
</script>

<style scoped>
.game-added-card {
  margin: 15px;
  width: 100%;
  min-height: 100px;
  border-radius: 20px;
  background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  color: #191919;
  text-decoration: none;
}

.game-added-card:hover {
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgb(235, 240, 205) 0px 8px 16px -8px;
}

.game-added-card a {
  text-decoration: none;
  color: #191919;
}

.look-game button {
  border-radius: 10px;
  background-color: #20D489;
  color: white;
  font-weight: bold;
  min-width: 100px;
}

.look-game button:hover {
  background-color: #28ffa7;
  font-weight: bold;
  color: white;
}
</style>


