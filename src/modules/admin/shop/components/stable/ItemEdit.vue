<template>
  <div>
    <div class="container">
      <div class="text-center pt-5">
        <h4 class="text-spacing5">Edit Item</h4>
        <small>Edit or delete the selected item created_at: (...)
          game: (...)
          game_id: (...)
          item_id: (...)
          picture: (...)
          random_key: (...)
      </small>
        <div class="green-success-button">
            <button class="btn btn-sm bg-warning" data-toggle="modal" data-target="#generalStatusAddedItems">Other</button>
        </div>
      </div>
    </div>
<!--  <p v-for="(item, index) in getEditData" :key="index">{{ item.name }}</p>-->
    <div class="d-flex justify-content-center align-items-center">
      <div class="d-flex justify-content-center align-items-center col-12 col-xl-6 setting-card-right">
        <div class="d-xl-flex flex-column justify-content-around">
<!--          <i class="fas fa-ban"></i>-->

          <div class="py-3" align="center">
            <div class="item-picture d-flex justify-content-center" style="background-image: url('/assets/images/img/profile-picture.svg');"></div>
            <div class="file-input">
              <label for="file">Upload File</label>
              <input type="file" id="file" class="file">
            </div>
          </div>


          <div class="d-flex flex-column justify-content-center pb-3 px-2">
            <div class="text-left px-2">
              <small>Item Name</small>
            </div>
            <div class="d-flex justify-content-center align-items-center">
              <div class="custom-input-icon">
                <i class="fas fa-signature"></i>
              </div>
              <div>
                <input class="custom-input" v-model="getEditData.name" placeholder="Item Name" type="text">
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
                <input class="custom-input" v-model="getEditData.discount"  placeholder="Item Discount %" type="number">
              </div>
            </div>
          </div>

          <div class="d-flex flex-column justify-content-center center pb-3 px-2">
            <div class="text-left px-2">
              <small>Price</small>
            </div>
            <div class="d-flex justify-content-center align-items-center">
              <div class="custom-input-icon">
                <i class="fas fa-coins"></i>
              </div>
              <div>
                <input class="custom-input" v-model="getEditData.price"  placeholder="Item Price" type="number">
              </div>
            </div>
          </div>

<!--          <div class="d-flex flex-column justify-content-center center pb-3 px-2">-->
<!--            <div class="text-left px-2">-->
<!--              <small>Item Hidden Status</small>-->
<!--            </div>-->
<!--            <div class="d-flex justify-content-between align-items-center">-->
<!--              <label for="hiddenStatusInput1">Show-->
<!--                <input v-model="getEditData.is_hidden" name="hiddenStatus" id="hiddenStatusInput1" :value="true"  placeholder="Item Price" type="radio">-->
<!--              </label>-->
<!--              <label for="hiddenStatusInput2">Not Show-->
<!--                <input v-model="getEditData.is_hidden" name="hiddenStatus" id="hiddenStatusInput2" :value="false"  placeholder="Item Price" type="radio">-->
<!--              </label>-->
<!--            </div>-->
<!--          </div>-->

          <div class="d-flex flex-column justify-content-center center pb-3">
            <div class="text-center">
              <small>Item Hidden Status</small>
            </div>
            <div class="d-flex justify-content-center align-items-center">
              <span><i class="far fa-eye-slash"></i></span>
              <div><input class="dark-mode-button mt-2 mx-3" type="checkbox" v-model="getEditData.is_hidden" checked></div>
              <span><i class="far fa-eye"></i></span>
            </div>
          </div>

          <div class="d-flex flex-column justify-content-center center pb-3">
            <div class="text-center">
              <small>Stock status</small>
            </div>
            <div class="d-flex justify-content-center align-items-center">
              <span><i class="far fa-times-circle"></i></span>
              <div><input class="dark-mode-button mt-2 mx-3" type="checkbox" v-model="getEditData.is_available" checked></div>
              <span><i class="far fa-check-circle"></i></span>
            </div>
          </div>

          <div class="d-flex justify-content-center">
            <div class="green-success-button">
              <button class="btn w-50" @click="changeGeneralSetting(getUserData.userData)">Save</button>
            </div>
          </div>
        </div>



      </div>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="generalStatusAddedItems" tabindex="-1" role="dialog" aria-labelledby="generalStatusAddedItems" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle"><i class="fas fa-laptop-code"></i> General Setting item </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="d-flex flex-column modal-body">
            <span><b><i class="fas fa-fingerprint"></i> Item Key: </b><i>{{ getEditData.random_key }}</i></span>
            <span><b><i class="far fa-clock"></i> The date the item was added: </b><i>{{ getEditData.created_at }}</i></span>
            <span><b><i class="fas fa-highlighter"></i> The item was last edited on this date: </b><i v-if="getEditData.created_at !== getEditData.updated_at">{{ getEditData.updated_at }}</i> <small>It has never been edited before!</small></span>
          </div>
          <div class="modal-footer added-item-button">
            <button type="button" class="btn btn-secondary btn-sm" data-dismiss="modal">Close</button>
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
        'getEditData',
    ])
  },
  methods: {
      ...mapActions([
          'getEditItem',
      ])
    },
  created() {
    this.getEditItem(this.$route.params.id);
  }
};
</script>


<style scoped>
.setting-card-right {
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

.green-success-button button {
  margin-top: 30px;
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


.file {
  opacity: 0;
  width: 0.1px;
  height: 0.1px;
  position: absolute;
}

.file-input label {
  width: 200px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  background-image: linear-gradient(to right, #43e97b 0%, #38f9d7 100%);
  justify-content: center;
  cursor: pointer;
  font-weight: bold;
  transition: 0.5s;
}

.file-input label:hover {
  background-image: linear-gradient(120deg, #d6ff7b 0%, #a1f8ad 100%);
  transition: 0.5s;
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