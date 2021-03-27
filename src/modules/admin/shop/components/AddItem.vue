<template>
  <div>
    <div class="container">
      <div class="text-center pt-3">
        <h4 class="text-spacing5">Add Item</h4>
        <small>Click the button below to add items to the market.</small>
        <div class="d-flex justify-content-center">
          <div class="added-item-button">
            <router-link to="/admin/shop/items">
              <button class="btn btn-sm mx-1">Added Items</button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="green-success-button text-center my-3">

    </div>
    <div class="d-flex justify-content-center align-items-center">
      <div class="d-flex justify-content-center align-items-center col-12 col-xl-6 edit-item-card">
        <div class="d-xl-flex flex-column justify-content-around">

          <div class="py-2" align="center">
            <div class="item-picture d-flex justify-content-center" style="background-image: url('/assets/images/img/profile-picture.svg');"></div>
            <div class="d-flex flex-column pt-2">
              <label for="upload-picture">
                <small>Change/upload your avatar</small>
                <br>
                <input type="file" id="upload-picture" />
              </label>
              <div class="green-success-button">
                <button class="btn btn-sm w-50">Upload</button>
              </div>
            </div>
          </div>



          <div class="d-flex justify-content-between align-items-center">
            <div class="d-flex flex-column justify-content-center pb-3 px-2">
              <div class="text-left px-2">
                <small>Item Name</small>
              </div>
              <div class="d-flex justify-content-center align-items-center">
                <div class="custom-input-icon">
                  <i class="fas fa-signature"></i>
                </div>
                <div>
                  <input class="custom-input" v-model="getShopInfo.addShopData.name" placeholder="Item Name" type="text" />
                </div>
              </div>
            </div>

            <div class="d-flex flex-column justify-content-center center pb-3 px-2">
              <div class="text-left px-2">
                <small>Discount</small>
              </div>
              <div class="d-flex justify-content-center align-items-center">
                <div class="custom-input-icon">
                  <i class="fas fa-percentage"></i>
                </div>
                <div>
                  <input class="custom-input" v-model="getShopInfo.addShopData.discount"  placeholder="Item Discount %" type="number">
                </div>
              </div>
            </div>
          </div>

          <div class="d-flex justify-content-between align-items-center">
            <div class="d-flex flex-column justify-content-center center pb-3 px-2">
              <div class="text-left px-2">
                <small>Price</small>
              </div>
              <div class="d-flex justify-content-center align-items-center">
                <div class="custom-input-icon">
                  <i class="fas fa-coins"></i>
                </div>
                <div>
                  <input class="custom-input" v-model="getShopInfo.addShopData.price"  placeholder="Item Price" type="number">
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
                  <select class="custom-select" v-model="getShopInfo.addShopData.game_id">
                    <option :value="game.game_id" v-for="(game, index) in getGameInfo.gameData" :key="index">{{ game.game_name }}</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div class="d-flex justify-content-around align-items-center">
            <div class="d-flex flex-column justify-content-center center pb-3">
              <div class="text-center">
                <small>Item Hidden Status</small>
              </div>
              <div class="d-flex justify-content-center align-items-center">
                <span><i class="far fa-eye-slash"></i></span>
                <div><input class="dark-mode-button mt-2 mx-3" type="checkbox" v-model="getShopInfo.addShopData.is_hidden"></div>
                <span><i class="far fa-eye"></i></span>
              </div>
            </div>

            <div class="d-flex flex-column justify-content-center center pb-3">
              <div class="text-center">
                <small>Stock status</small>
              </div>
              <div class="d-flex justify-content-center align-items-center">
                <span><i class="far fa-times-circle"></i></span>
                <div><input class="dark-mode-button mt-2 mx-3" type="checkbox" v-model="getShopInfo.addShopData.is_available"></div>
                <span><i class="far fa-check-circle"></i></span>
              </div>
            </div>
          </div>

          <div class="d-flex justify-content-center">
            <div class="green-success-button d-flex justify-content-center">
              <div>
                <button class="btn mx-2" @click="sendItemData">Add</button>
              </div>
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
  name: 'ItemEdit',
  computed: {
    ...mapGetters([
      'getShopInfo',
      'getGameInfo',
    ])
  },
  methods: {
    ...mapActions([
      'postAddItem',
      'getGame',
    ]),
    sendItemData() {
      this.postAddItem(this.getShopInfo.addShopData);
    },
  },
  created() {
    this.getGame();
  }
};
</script>


<style scoped>
.edit-item-card {
  width: auto;
  min-width: 200px;
  min-height: 600px;
  border-radius: 20px;
  background-color: white;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
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

#upload-picture {
  font-size: 12px;
}


.added-item-button button {
  background-color: white;
  color: #343A40;
  border-radius: 10px;
  font-weight: bold;
  transition: 0.4s;
  min-width: 100px;
  text-decoration: none;
}

.added-item-button button:hover {
  background-color: #ffa500;
  color: white;
  border-radius: 10px;
  font-weight: bold;
  transition: 0.4s;
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


.item-picture {
  background-position: center;
  /*background-attachment: fixed;*/
  background-repeat: no-repeat;
  background-size: 80px;
  width: 80px;
  height: 80px;
  border-radius: 150px;
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