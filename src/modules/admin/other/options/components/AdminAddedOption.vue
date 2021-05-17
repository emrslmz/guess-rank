<template>
  <div class="d-flex justify-content-center align-items-center">
    <div class="container">
      <div class="text-center pt-5">
        <h4 class="text-spacing5">Added Video Option's</h4>
        <small>All video options added. Click the buttons to edit or delete.</small>
      </div>
      <div>
        <!--GAMES V-FOR ILE DONECEK-->
        <div class="d-flex justify-content-center align-items-center">
          <h5> Filters: </h5>
          <!--GAMES V-FOR ILE DONECEK-->
          <div class="d-flex justify-content-between align-items center px-2">
            <div class="d-flex flex-column justify-content-center center pb-3">
              <div class="text-center">
                <small>All</small>
              </div>
              <div class="d-flex justify-content-center align-items-center">
                <div><input class="dark-mode-button mt-2 mx-3" name="filterGame" type="radio" checked /></div>
              </div>
            </div>
          </div>

          <div class="d-flex justify-content-between align-items center px-2">
            <div class="d-flex flex-column justify-content-center center pb-3">
              <div class="text-center">
                <small>Valorant</small>
              </div>
              <div class="d-flex justify-content-center align-items-center">
                <div><input class="dark-mode-button mt-2 mx-3" name="filterGame" type="radio" /></div>
              </div>
            </div>
          </div>

          <div class="d-flex justify-content-between align-items center px-2">
            <div class="d-flex flex-column justify-content-center center pb-3">
              <div class="text-center">
                <small>CSGO</small>
              </div>
              <div class="d-flex justify-content-center align-items-center">
                <div><input class="dark-mode-button mt-2 mx-3" name="filterGame" type="radio" /></div>
              </div>
            </div>
          </div>

          <div class="d-flex justify-content-between align-items center px-2">
            <div class="d-flex flex-column justify-content-center center pb-3">
              <div class="text-center">
                <small>PUBG</small>
              </div>
              <div class="d-flex justify-content-center align-items-center">
                <div><input class="dark-mode-button mt-2 mx-3" name="filterGame" type="radio" /></div>
              </div>
            </div>
          </div>

        </div>
        <!--/GAMES V-FOR ILE DONECEK-->



        <div class="d-flex justify-content-center container all-item-box">
          <table class="table table-dark">
            <thead>
            <tr class="text-center">
              <th><i class="fab fa-slack-hash"></i></th>
              <th scope="col"><i class="fas fa-fingerprint"></i> Option ID</th>
              <th scope="col"><i class="far fa-file-video"></i> Option Name</th>
              <th scope="col"><i class="fas fa-gamepad"></i> Option Game</th>
              <th scope="col"><i class="fab fa-youtube"></i> Video Name</th>
              <th scope="col"><i class="far fa-image"></i> Option Picture</th>
              <th scope="col"><i class="fas fa-pen-square"></i> Edit/Delete</th>
            </tr>
            </thead>
            <tbody>
            <tr class="text-center" v-for="(option, index) in getAdminOptionData.optionsData" :key="index">
              <th><i class="fas fa-circle"></i></th>
              <th>{{ option.video_option_id }}</th>
              <th v-if="option.game">{{ option.game.game_name }}</th>
              <th v-else><i title="no preview / no added" class="fas fa-ban"></i></th>
              <th>{{ option.option_game_id }}</th>
              <th v-if="option.video === null"><i title="not connected by video" class="fas fa-ban"></i></th>
              <th v-else>{{ option.video.video_name }}</th>
              <th v-if="option.option_image">var</th>
              <th v-else><i title="no preview / no added" class="fas fa-ban"></i></th>
              <th class="d-flex justify-content-center">
                <div class="green-success-button">
                  <router-link :to="{ name: 'OptionEdit', params: { id: option.video_option_id }} ">
                    <button class="btn btn-sm">Edit/delete</button>
                  </router-link>
                </div>
              </th>
            </tr>
            </tbody>
          </table>
        </div>


<!--        <div class="d-flex justify-content-center align-items-center row">-->
<!--          <div class="option-card-box mouse-click text-center">-->
<!--              <div class="d-flex flex-column">-->
<!--                <div class="option-picture" style="background-image: url('/assets/images/ranks/valorank_olumsuz3.png');"></div>-->
<!--                <b style="font-size: 8px">Elmas 1</b>-->
<!--              </div>-->
<!--          </div>-->
<!--        </div>-->


      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'AdminAddedOption',
  computed: {
    ...mapGetters([
        'getAdminOptionData',
    ])
  },
  methods: {
    ...mapActions([
        'getAdminOption',
    ])
  },
  created() {
    this.getAdminOption();
  },
};
</script>


<style scoped>
.option-card-box {
  margin: 15px;
  width: 100px;
  min-height: 100px;
  border-radius: 20px;
  background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  color: #191919;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
}


.option-card-box a {
  text-decoration: none;
  color: #191919;
}

.option-picture {
  background-position: center;
  /*background-attachment: fixed;*/
  background-repeat: no-repeat;
  background-size: 50px;
  width: 50px;
  height: 50px;
  transition: 0.5s;
}

.option-picture:hover {
  background-size: 60px;
  transition: 0.5s;
}



.all-item-box::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
  border-radius: 10px;
  background-color: #F5F5F5;
}

.all-item-box::-webkit-scrollbar {
  width: 12px;
  background-color: #F5F5F5;
}

.all-item-box::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
  background-color: #555;
}

.table {
  border-radius: 0 0 20px 20px;
}

.all-item-box {
  height: 600px;
  overflow-y: scroll;
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
