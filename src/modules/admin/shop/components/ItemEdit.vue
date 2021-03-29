<template>
  <div>
    <div class="container">
      <div class="text-center pt-3">
        <h4 class="text-spacing5">Edit Item</h4>
        <small>Edit or delete the selected item.</small>
      </div>
    </div>
    <div class="green-success-button text-center my-3">

    </div>
    <div class="d-flex justify-content-center align-items-center">
      <div class="d-flex justify-content-center align-items-center col-12 col-xl-6 edit-item-card">
        <div class="d-xl-flex flex-column justify-content-around">
           <div class="text-center">
             <small><i>{{ getShopInfo.selectedShopData.random_key}}</i></small>
           </div>

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
                 <input class="custom-input" v-model="getShopInfo.selectedShopData.name" placeholder="Item Name" type="text" />
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
                 <input class="custom-input" v-model="getShopInfo.selectedShopData.discount"  placeholder="Item Discount %" type="number">
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
                 <input class="custom-input" v-model="getShopInfo.selectedShopData.price"  placeholder="Item Price" type="number">
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
                 <select class="custom-select" v-model="getShopInfo.selectedShopData.game_id">
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
               <div><input class="dark-mode-button mt-2 mx-3" type="checkbox" v-model="getShopInfo.selectedShopData.is_hidden"></div>
               <span><i class="far fa-eye"></i></span>
             </div>
           </div>

           <div class="d-flex flex-column justify-content-center center pb-3">
             <div class="text-center">
               <small>Stock status</small>
             </div>
             <div class="d-flex justify-content-center align-items-center">
               <span><i class="far fa-times-circle"></i></span>
               <div><input class="dark-mode-button mt-2 mx-3" type="checkbox" v-model="getShopInfo.selectedShopData.is_available"></div>
               <span><i class="far fa-check-circle"></i></span>
             </div>
           </div>
         </div>
          
          

          <div class="d-flex justify-content-center">
            <div class="green-success-button d-flex justify-content-center">
              <router-link to="/admin/shop/items">
                <button class="btn bg-warning mx-2"><i class="fas fa-undo-alt"></i> Back</button>
              </router-link>
             <div>
               <button class="btn bg-primary mx-2" data-toggle="modal" data-target="#itemEditModal"><i class="fas fa-info-circle"></i> General Status</button>
             </div>
              <div>
                <button class="btn mx-2" @click="sendChangesItem"><i class="fas fa-save"></i> Save</button>
                <button class="btn bg-danger mx-2" data-toggle="modal" data-target="#deleteItem"><i class="fas fa-trash"></i> Delete</button>
              </div>
            </div>
          </div>
        </div>

        <!-- DELETEModal -->
        <div class="modal fade" id="deleteItem"  aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title text-left" id="exampleModalLabel">Are you sure you want to delete the item named <i>{{ getShopInfo.selectedShopData.name }}</i> ?</h5>
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
                  <button class="btn bg-danger btn-sm" data-dismiss="modal" aria-label="Close" aria-hidden="true" @click="sendDeleteItem(getShopInfo.selectedShopData)"><i class="fas fa-trash"></i> Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- DELETEModal -->
      </div>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="itemEditModal" tabindex="-1" role="dialog" aria-labelledby="generalStatusAddedItems" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle"><i class="fas fa-laptop-code"></i> General Setting item </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="d-flex flex-column modal-body">
            <span><b><i class="fas fa-fingerprint"></i> Item Key: </b><i>{{ getShopInfo.selectedShopData.random_key }}</i></span>
            <span><b><i class="far fa-clock"></i> Creation date: </b><i>{{ getShopInfo.selectedShopData.created_at }}</i></span>
            <span><b><i class="fas fa-highlighter"></i> Last change: </b><i v-if="getShopInfo.selectedShopData.created_at !== getShopInfo.selectedShopData.updated_at">{{ getShopInfo.selectedShopData.updated_at }}</i> <small v-else>It has never been edited before!</small></span>
          </div>
          <div class="modal-footer green-success-button">
            <button type="button" class="btn btn-sm" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal -->
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
          'getSelectedItem',
          'getGame',
          'patchEditItem',
          'deleteItem',
      ]),
    sendChangesItem() {
        this.patchEditItem(this.getShopInfo.selectedShopData);
    },
    sendDeleteItem(deleteData) {
        this.deleteItem(deleteData);
    },
  },
  created() {
    this.getSelectedItem(this.$route.params.id);
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