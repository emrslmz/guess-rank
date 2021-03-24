<template>
  <div class="d-flex justify-content-center align-items-center game-selected">
    <div class="container">
      <div class="text-center pt-5 mt-5">
        <h4 class="text-spacing5">Game's Categories</h4>
        <small>All Added Game Categories. Click """"" button for edit/delete.</small>
      </div>
        <div class="d-flex justify-content-center align-items-center">
          <div class="game-category-card d-flex flex-column justify-content-center align-items-center text-center">
            <div class="d-md-flex justify-content-between">
              <!--LEFT-->
              <div>

                <div class="d-flex flex-column justify-content- center pb-3">
                  <div class="text-center px-2">
                    <small>Game Name</small>
                  </div>
                  <div class="d-flex justify-content-center align-items-center ">
                    <div class="custom-input-icon">
                      <i class="fas fa-gamepad"></i>
                    </div>
                    <div>
                      <input class="custom-input" v-model="getGameInfo.selectedGameData.game_name" placeholder="Game names" type="text" />
                    </div>
                  </div>
                </div>


                <div class="d-flex flex-column justify-content-center center pb-3">
                  <div class="text-center px-2">
                    <small>Game ID</small>
                  </div>
                  <div class="d-flex justify-content-center align-items-center">
                    <div class="custom-input-icon">
                      <i class="fas fa-fingerprint"></i>
                    </div>
                    <div>
                      <input class="custom-input" v-model="getGameInfo.selectedGameData.game_id"  placeholder="Game ID" type="number" disabled="disabled" />
                    </div>
                  </div>
                </div>

                <div class="d-flex flex-column justify-content-center center pb-3">
                  <div class="text-center px-2">
                    <small>Game Description</small>
                  </div>
                  <div class="d-flex justify-content-center align-items-center">
                    <div class="custom-input-icon">
                      <i class="fas fa-text-height"></i>
                    </div>
                    <div>
                      <textarea cols="23" class="custom-textarea" v-model="getGameInfo.selectedGameData.game_description"  placeholder="Game Description"></textarea>
                    </div>
                  </div>
                </div>

                <div class="d-flex justify-content-between align-items-center">

                  <div class="d-flex justify-content-between align-items center pb-3 px-2">
                    <div class="d-flex flex-column justify-content-center center">
                      <div class="text-center">
                        <small>Game Available</small>
                      </div>
                      <div class="d-flex justify-content-center align-items-center">
                        <span><i class="far fa-eye-slash"></i></span>
                        <div><input class="dark-mode-button mt-2 mx-3" v-model="getGameInfo.selectedGameData.is_available" type="checkbox" /></div>
                        <span><i class="far fa-eye"></i></span>
                      </div>
                    </div>
                  </div>

                  <div class="d-flex justify-content-between align-items center pb-3 px-md-2">
                    <div class="d-flex flex-column justify-content-center center">
                      <div class="text-center">
                        <small>Game Hidden</small>
                      </div>
                      <div class="d-flex justify-content-center align-items-center">
                        <span><i class="far fa-eye-slash"></i></span>
                        <div><input class="dark-mode-button mt-2 mx-3" v-model="getGameInfo.selectedGameData.is_hidden" type="checkbox" /></div>
                        <span><i class="far fa-eye"></i></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!--LEFT-->

              <!-- RIGHT -->
              <div>

                <div class="d-flex flex-column justify-content-center center pb-3">
                  <div class="text-center px-2">
                    <small>Game Background Color</small>
                  </div>
                  <div class="d-flex justify-content-center align-items-center">
                    <div class="custom-input-icon" :style="getGameInfo.selectedGameData.game_background_color">
                      <i class="fas fa-sliders-h" :style="getGameInfo.selectedGameData.game_color"></i>
                    </div>
                    <div>
                      <input class="custom-input" v-model="getGameInfo.selectedGameData.game_background_color"   placeholder="Background Color" type="text" />
                    </div>
                  </div>
                </div>

                <div class="d-flex flex-column justify-content-center center pb-3">
                  <div class="text-center px-2">
                    <small>Game Color</small>
                  </div>
                  <div class="d-flex justify-content-center align-items-center">
                    <div class="custom-input-icon" :style="getGameInfo.selectedGameData.game_background_color">
                      <i class="fas fa-palette" :style="getGameInfo.selectedGameData.game_color"></i>
                    </div>
                    <div>
                      <input class="custom-input" v-model="getGameInfo.selectedGameData.game_color"  placeholder="Game Color" type="text" />
                    </div>
                  </div>
                </div>

                <div class="d-flex justify-content-between align-items-center py-3 ml-5">
                  <div class="game-logo-picture" style="background-image: url('/assets/images/img/profile-picture.svg');"></div>
                  <div class="text-left">
                    <label class="d-flex flex-column" for="upload-picture">
                      Game Logo
                      <input type="file" id="upload-picture" />
                    </label>
                  </div>
                </div>
              </div>
              <!-- /RIGHT -->

            </div>
            <!-- END -->

            <div>
              <small><i class="fas fa-calendar-check"></i> {{ getGameInfo.selectedGameData.created_at }}</small>
              <div>
                <small v-if="getGameInfo.selectedGameData.created_at === getGameInfo.selectedGameData.updated_at">No change record.</small>
                <small v-else><i class="fas fa-history"></i> {{ getGameInfo.selectedGameData.updated_at }}</small>
              </div>

              <div class="d-flex justify-content-between px-2">
                <div class="d-flex justify-content-center">
                  <div class="green-success-button">
                    <button class="btn btn-light-success btn-xl w-100" @click="sendChanges">Save</button>
                  </div>
                </div>

                <div class="d-flex justify-content-center px-2">
                  <div class="green-success-button">
                    <button class="btn bg-danger btn-xl w-100" data-toggle="modal" data-target="#deleteGame">Delete</button>
                  </div>
                </div>


                <!-- Modal -->
                <div class="modal fade" id="deleteGame"  aria-hidden="true">
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title text-left" id="exampleModalLabel">Are you sure you want to delete the item named <i>{{ getGameInfo.selectedGameData.game_name }}</i> ?</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                        <label>This action cannot be undone.</label>
                      </div>
                      <div class="modal-footer">
                        <div class="green-success-button">
                          <button type="button" class="btn bg-primary btn-sm" data-dismiss="modal">Close</button>

                        </div>
                        <div class="green-success-button">
                          <button class="btn bg-danger btn-sm" data-toggle="modal" data-target="#deleteGame">Delete</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Modal -->
              </div>

            </div>
            <!-- /END -->

          </div>
        </div>


    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'AdminGamesEditDelete',
  computed: {
    ...mapGetters([
        'getGameInfo',
    ]),
  },
  methods: {
    ...mapActions([
        'getSelectedGame',
        'patchEditGame',
    ]),
    sendChanges() {
      this.patchEditGame(this.getGameInfo.selectedGameData);
    }
  },
  created() {
    this.getSelectedGame(this.$route.params.id);
  }
};
</script>

<style scoped>

.game-category-card {
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

.game-logo-picture {
  background-position: center;
  /*background-attachment: fixed;*/
  background-repeat: no-repeat;
  background-size: 40px;
  width: 40px;
  height: 40px;
}

#upload-picture {
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

