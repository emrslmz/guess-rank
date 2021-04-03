<template>
  <div class="d-flex flex-column justify-content-center align-items-center">
   <div class="text-center">
     <h2>{{ getGameInfo.selectedGameData.game_name }}</h2>
     <small class="text-spacing5">Select a level to watch videos of the {{ getGameInfo.selectedGameData.game_name }} game.</small>
   </div>
    <div class="game-level-area col-10 col-xl-6">

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
    ]),
  },
  methods: {
    ...mapActions([
        'getSelectedGame',
    ]),
  },
  created() {
    this.getSelectedGame(this.$route.params.id);
  },
};
</script>

<style scoped>
.game-level-area {
  margin: 15px 0 15px 0;
  width: 100%;
  min-height: 400px;
  border-radius: 20px;
  background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  color: #191919;
  text-decoration: none;
}
</style>