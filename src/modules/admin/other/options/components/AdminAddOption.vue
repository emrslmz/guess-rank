<template>
  <div class="d-flex justify-content-center align-items-center">
    <div class="container">
      <div class="text-center pt-5 mt-5">
        <h4 class="text-spacing5">Option Add</h4>
        <small>Fill in the blanks to add style to videos.</small>
      </div>

      <div class="d-flex justify-content-center">
        <div class="col-sm-6 col-12 video-edit-card d-flex flex-column justify-content-center align-items-center">

          <div class="d-flex justify-content-between align-items-center">

            <div class="d-flex flex-column justify-content-center center pb-3 px-2">
              <div class="text-left px-2">
                <small>Option Name</small>
              </div>
              <div class="d-flex justify-content-center align-items-center">
                <div class="custom-input-icon">
                  <i class="fas fa-circle"></i>
                </div>
                <div>
                  <input class="custom-input" v-model="getAdminOptionData.optionAdd.option_name"  placeholder="Option name" type="text">
                </div>
              </div>
            </div>

          </div>


          <div class="d-flex justify-content-between align-items-center py-2">

            <div class="d-flex justify-content-between align-items center px-4">
              <div class="d-flex flex-column justify-content-center center">
                <div class="text-center">
                  <small>Not in any game</small>
                </div>
                <div class="d-flex justify-content-center align-items-center">
                  <div>
                    <input class="dark-mode-button mt-2 mx-3" :value="null" v-model="getAdminOptionData.optionAdd.game_id"  type="radio" />
                  </div>
                </div>
              </div>
            </div>

            <div class="d-flex flex-column justify-content-center center">
              <div class="text-left px-2">
                <small>Which game</small>
              </div>
              <div class="d-flex justify-content-center align-items-center">
                <div class="custom-input-icon">
                  <i class="fas fa-gamepad"></i>
                </div>
                <div>
                  <select class="custom-select" v-model="getAdminOptionData.optionAdd.game_id">
                    <option :value="game.game_id" v-for="(game, index) in getGameInfo.gameData" :key="index">{{ game.game_name  }}</option>
                    <option value="null" disabled>None</option>
                  </select>
                </div>
              </div>
            </div>

          </div>
          <div class="d-flex justify-content-between align-items-center py-2">

            <div class="d-flex justify-content-between align-items center px-4">
              <div class="d-flex flex-column justify-content-center center">
                <div class="text-center">
                  <small>Not in any video </small>
                </div>
                <div class="d-flex justify-content-center align-items-center">
                  <div>
                    <input class="dark-mode-button mt-2 mx-3" :value="null" v-model="getAdminOptionData.optionAdd.video_id" type="radio" />
                  </div>
                </div>
              </div>
            </div>

            <div class="d-flex flex-column justify-content-center center">
              <div class="text-left px-2">
                <small>Which video</small>
              </div>
              <div class="d-flex justify-content-center align-items-center">
                <div class="custom-input-icon">
                  <i class="fab fa-youtube"></i>
                </div>
                <div>
                  <select class="custom-select" v-model="getAdminOptionData.optionAdd.video_id">
                    <option :value="video.video_id" v-for="(video, index) in getVideoInfo.videoData" :key="index">{{ video.video_name  }}</option>
                    <option value="null" disabled>None</option>
                  </select>
                </div>
              </div>
            </div>

          </div>



          <div class="d-flex justify-content-between green-success-button">
            <div>
              <button class="btn mx-2" @click="addSendData"><i class="fas fa-save"></i> Add</button>
            </div>
          </div>



        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'OptionAdd',
  computed: {
    ...mapGetters([
      'getAdminOptionData',
      'getGameInfo',
      'getVideoInfo',
    ])
  },
  methods: {
    ...mapActions([
      'addOption',
      'getGame',
      'getVideo',
      'deleteOption',
      'patchSelectedAdminOption',
    ]),
    addSendData() {
      this.addOption(this.getAdminOptionData.optionAdd);
    },
  },
  created() {
    this.getGame();
    this.getVideo();
  },
};
</script>


<style scoped>
.video-edit-card {
  margin: 15px;
  width: 100%;
  min-height: 500px;
  border-radius: 20px;
  background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  color: #191919;
  text-decoration: none;
}

.custom-input-icon {
  background-color: white;
  font-size: 20px;
  width: 50px;
  height: 40px;
  border-radius: 12px 0 0 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
}

.custom-input {
  border-radius: 0 12px 12px 0;
  padding-left: 10px;
  background-color: white;
  height: 40px;
  width: 100%;
  border: none;
  outline: none;
  transition: 0.5s;
  box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
}

.custom-textarea {
  border-radius: 0 12px 12px 0;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 100%;
  border: none;
  outline: none;
  transition: 0.5s;
  box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
}

.custom-select {
  border-radius: 0 12px 12px 0;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 120px;
  border: none;
  outline: none;
  transition: 0.5s;
  box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
}

.create-update-date h5 {
  text-align: center;
  font-weight: bold;
  font-size: 12px;
}

.green-success-button button {
  border-radius: 10px;
  background-color: #20D489;
  color: white;
  font-weight: bold;
  min-width: 120px;
}

.green-success-button button:hover {
  background-color: #28ffa7;
  font-weight: bold;
  color: white;
}


/****************************************/
/*APPLE CHECKBOX STYLE */
input.dark-mode-button {
  position: relative;
  appearance: none; outline: none;
  width: 50px; height: 30px;
  background-color: #ffffff; border: 1px solid #D9DADC;
  border-radius: 50px; box-shadow: inset -20px 0 0 0 #ffffff;
  transition-duration: 200ms;
}


input.dark-mode-button:after {
  content: "";
  position: absolute;
  top: 0; left: 1px;
  width: 26px; height: 26px;
  background-color: transparent;
  border-radius: 50%; box-shadow: 2px 4px 6px rgba(0,0,0,0.2);
}


input.dark-mode-button:checked {
  border-color: #20d489;
  box-shadow: inset 20px 0 0 0 #20d489;
}


input.dark-mode-button:checked:after {
  left: 20px;
  box-shadow: -2px 4px 3px rgba(0,0,0,0.05);
}

/*APPLE CHECKBOX STYLE */
/****************************************/

</style>
