<template>
  <div class="d-flex justify-content-center align-items-center game-selected">
    <div class="container">
      <div class="text-center pt-5 mt-5">
        <h4 class="text-spacing5">Level: {{ getLevelInfo.selectedLevelData.level_id }}</h4>
        <small>All Added Game Categories. Click the buttons to edit or delete.</small>
      </div>

      <div class="d-flex row flex-row justify-content-around">
        <div class="col-sm-6 col-12 game-category-card d-flex flex-column justify-content-center align-items-center">
          <div class="pb-2">
            <small>{{ getLevelInfo.selectedLevelData.level_random_key }}</small>
          </div>
         <div class="d-flex justify-content-center align-items-start">


           <!--LEFT-->
           <div class="d-flex flex-column">

             <div class="d-flex flex-column justify-content-center center pb-3 px-2">
               <div class="text-left px-2">
                 <small>Level Name</small>
               </div>
               <div class="d-flex justify-content-center align-items-center">
                 <div class="custom-input-icon">
                   <i class="far fa-hand-scissors"></i>
                 </div>
                 <div>
                   <input class="custom-input" v-model="getLevelInfo.selectedLevelData.level_name"  placeholder="Level name" type="text">
                 </div>
               </div>
             </div>

             <div class="d-flex flex-column justify-content-center center pb-3">
               <div class="text-left px-2">
                 <small>Level Description</small>
               </div>
               <div class="d-flex justify-content-center align-items-center">
                 <div class="custom-input-icon">
                   <i class="fas fa-text-height"></i>
                 </div>
                 <div>
                   <textarea cols="25" class="custom-textarea" v-model="getLevelInfo.selectedLevelData.level_description"  placeholder="Level Description"></textarea>
                 </div>
               </div>
             </div>


             <div class="d-flex justify-content-between align-items-center">

               <div class="d-flex justify-content-between align-items center pb-3 px-2">
                 <div class="d-flex flex-column justify-content-center center">
                   <div class="text-center">
                     <small>Level Locked</small>
                   </div>
                   <div class="d-flex justify-content-center align-items-center">
                     <span><i class="fas fa-lock"></i></span>
                     <div><input class="dark-mode-button mt-2 mx-3" v-model="getLevelInfo.selectedLevelData.is_locked" type="checkbox" /></div>
                     <span><i class="fas fa-lock-open"></i></span>
                   </div>
                 </div>
               </div>

               <div class="d-flex justify-content-between align-items center pb-3 px-md-2">
                 <div class="d-flex flex-column justify-content-center center">
                   <div class="text-center">
                     <small>Level Hidden</small>
                   </div>
                   <div class="d-flex justify-content-center align-items-center">
                     <span><i class="far fa-eye-slash"></i></span>
                     <div><input class="dark-mode-button mt-2 mx-3" v-model="getLevelInfo.selectedLevelData.is_hidden" type="checkbox" /></div>
                     <span><i class="far fa-eye"></i></span>
                   </div>
                 </div>
               </div>
             </div>

           </div>
           <!--/LEFT-->

           <!--RIGHT-->
           <div class="d-flex flex-column">


             <div class="d-flex flex-column justify-content-center center pb-3 px-2">
               <div class="text-left px-2">
                 <small>Level Number</small>
               </div>
               <div class="d-flex justify-content-center align-items-center">
                 <div class="custom-input-icon">
                   <i class="fas fa-sort-numeric-up-alt"></i>
                 </div>
                 <div>
                   <input class="custom-input" v-model="getLevelInfo.selectedLevelData.level_id"  placeholder="Level Number" type="number">
                 </div>
               </div>
             </div>

             <div class="d-flex flex-column justify-content-center center pb-3 px-2">
               <div class="text-left px-2">
                 <small>Select Game</small>
               </div>
               <div class="d-flex justify-content-center align-items-center ">
                 <div class="custom-input-icon">
                   <i class="fas fa-gamepad"></i>
                 </div>
                 <div>
                   <select class="custom-select" v-model="getLevelInfo.selectedLevelData.game_id">
                     <option :value="game.game_id" v-for="(game, index) in getGameInfo.gameData" :key="index">{{ game.game_name }}</option>
                   </select>
                 </div>
               </div>
             </div>

             <div class="create-update-date">
               <h5><i class="far fa-clock"></i> {{ getLevelInfo.selectedLevelData.created_at }}</h5>
               <h5 class="text-center" v-if="getLevelInfo.selectedLevelData.created_at === getLevelInfo.selectedLevelData.updated_at"><i class="far fa-calendar-times"></i> Change record not found!</h5>
               <h5 v-else><i class="far fa-calendar-check"></i> {{ getLevelInfo.selectedLevelData.updated_at }}</h5>
             </div>
           </div>
           <!--/RIGHT-->
         </div>

          <div class="d-flex">
            <div class="d-flex justify-content-center">
              <div class="green-success-button">
                <button class="btn btn-light-success btn-xl w-100" @click="sendChangesLevel">Save</button>
              </div>
            </div>

            <div class="d-flex justify-content-center px-2">
              <div class="green-success-button">
                <button class="btn bg-danger btn-xl w-100" data-toggle="modal" data-target="#deleteLevel">Delete</button>
              </div>
            </div>
          </div>


        </div>

        <!-- Modal -->
        <div class="modal fade" id="deleteLevel"  aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title text-left" id="exampleModalLabel">Are you sure you want to delete the item named <i>{{ getLevelInfo.selectedLevelData.level_name }}</i> ?</h5>
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
                  <button class="btn bg-danger btn-sm" data-dismiss="modal" aria-label="Close" aria-hidden="true">Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Modal -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'AdminLevelEditDelete',
  computed: {
    ...mapGetters([
      'getLevelInfo',
      'getGameInfo',
    ])
  },
  methods: {
    ...mapActions([
        'getSelectedLevel',
        'getGame',
        'patchEditLevel',
    ]),
    sendChangesLevel() {
      this.patchEditLevel(this.getLevelInfo.selectedLevelData);
    }
  },
  created() {
    this.getSelectedLevel(this.$route.params.id);
    this.getGame();
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

.custom-select {
  padding: 0 60px 0 60px;
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