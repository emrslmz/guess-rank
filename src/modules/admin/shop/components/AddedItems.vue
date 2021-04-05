<template>
<div>
  <div class="container">
    <div class="text-center py-5">
      <h4 class="text-spacing5">Added Items</h4>
      <small>All added items here</small>
      <div class="d-flex justify-content-center">
        <div class="added-item-button" :class="showTable ? 'added-item-button-active' : ''">
          <button class="btn btn-sm mx-1" @click="showTable = !showTable">Table view</button>
        </div>
        <div class="added-item-button">
          <button class="btn btn-sm mx-1" data-toggle="modal" data-target="#generalStatusAddedItems">General Status</button>
        </div>
        <div class="added-item-button">
          <router-link to="/admin/shop/items-add">
            <button class="btn btn-sm mx-1">Add Item</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>

  <div class="d-xl-flex">
    <div class="col-12 col-xl-3 mb-5">
    <div class="d-flex flex-xl-column justify-content-center text-xl-right">
      <div class="item-category-button">
        <button class="btn btn-sm">CS:GO <i class="fas fa-arrow-circle-right"></i></button>
      </div>
      <div class="item-category-button">
        <button class="btn btn-sm">Valorant <i class="fas fa-arrow-circle-right"></i></button>
      </div>
    </div>
    </div>

    <div class="col-12 col-xl-9 row d-flex justify-content-center all-item-box" v-if="!showTable">
      <!--ITEM HERE-->
      <div class="col-12 col-md-6 col-xl-3 card-item" v-for="(item, index) in getShopInfo.shopData" :key="index">
        <div class="d-flex justify-content-between">
          <small><strong>Field Tested | -0.45641</strong></small>
         <small title="Item Hidden Status">
           <i class="fas fa-circle text-success" v-if="item.is_hidden"></i>
           <i class="fas fa-circle text-danger" v-else></i>
         </small>
        </div>
       <div class="d-flex justify-content-center">
         <div class="item-picture" style="background-image: url('/assets/images/items/csgo/ump_primal_saber.png');"></div>
       </div>
        <!--Item Description-->
        <div class="d-flex flex-column item-description">
          <small>{{ item.name }}</small> <!-- Gun Name-->
          <strong>Poppy</strong> <!-- Skin Name or Key, game, valorant name-->
          <div class="d-flex justify-content-between">
            <strong><i class="fas fa-coins text-warning"></i> {{ item.price }}<small>+{{ item.discount }}%</small></strong>
            <small v-if="item.is_available"><i class="fas fa-bolt text-lightgray"></i></small>
            <small v-else></small>
          </div>
          <div class="edit-button d-flex flex-column pt-3">
           <router-link :to="{ name: 'ItemsEdit', params: { id: item.item_id }} ">
             <button class="btn btn-sm w-100">Edit</button>
           </router-link>
          </div>
        </div>
        <!--/Item Description-->
      </div>
      <!--/ITEM HERE-->
    </div>

   <div class="col-12 col-xl-9 row d-flex flex-row justify-content-center all-item-box" v-else>
     <table class="table table-striped table-dark">
       <thead>
         <tr class="text-left">
           <th><i class="fab fa-slack-hash"></i></th>
           <th>Views</th>
           <th>gun/game</th>
           <th>Skin</th>
           <th>Float</th>
           <th> Price</th>
           <th>Edit-View-Delete</th>
         </tr>
       </thead>
       <tbody>
         <tr v-for="(item, index) in getShopInfo.shopData" :key="index">
           <th>{{ index+1 }}</th>
           <td>
          <div class="item-picture-small" style="background-image: url('/assets/images/items/csgo/ump_primal_saber.png');"></div>
           </td>
           <td>Glock18</td>
           <td>{{ item.name }}</td>
           <td>factory name</td>
           <td><strong><i class="fas fa-coins text-warning"></i> {{ item.price }} <small>-{{ item.discount }}%</small></strong></td>
           <td>
             <div class="added-item-button pr-3">
               <router-link :to="{ name: 'ItemsEdit', params: { id: item.item_id }} ">
                 <button class="btn btn-sm w-100">Edit</button>
               </router-link>
             </div>
           </td>
         </tr>
       </tbody>
     </table>
   </div>
<!--Out of stock!-->

    <!-- Modal -->
    <div class="modal fade" id="generalStatusAddedItems" tabindex="-1" role="dialog" aria-labelledby="generalStatusAddedItems" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle"><i class="fas fa-columns"></i> General Status</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            Total Added Items: {{ getShopInfo.shopData.length }}
          </div>
          <div class="modal-footer added-item-button">
            <button type="button" class="btn btn-secondary btn-sm" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal -->

  </div>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'AddedItems',
  data() {
    return {
      showTable: '',
    }
  },
  computed: {
    ...mapGetters([
        'getShopInfo',
    ])
  },
  methods: {
    ...mapActions([
        'getShopItem',
    ])
  },
  created() {
    this.getShopItem();
  },
};
</script>


<style scoped>

.card-item {
  margin: 5px 15px 5px 15px;
  max-width: 200px;
  max-height: 260px;
  border-radius: 12px;
  border: 1px solid white;
  padding-bottom: 10px;
  background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
}

.item-description small {
  text-transform: uppercase;
}

.all-item-box {
  height: 600px;
  overflow-y: scroll;
}

.item-picture {
  background-position: center;
  /*background-attachment: fixed;*/
  background-repeat: no-repeat;
  background-size: 110px;
  width: 110px;
  height: 110px;
  transition: 0.5s;
}

.item-picture:hover {
  background-position: center;
  /*background-attachment: fixed;*/
  background-repeat: no-repeat;
  background-size: 130px;
  width: 130px;
  height: 110px;
  transition: 0.5s;
}

.item-picture-small {
  background-position: center;
  /*background-attachment: fixed;*/
  background-repeat: no-repeat;
  background-size: 60px;
  width: 60px;
  height: 30px;
  transition: 0.5s;
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

.added-item-button-active button {
  background-color: #ffa500;
  color: white;
  border-radius: 10px;
  font-weight: bold;
  transition: 0.4s;
}

.edit-button button {
  border-radius: 10px;
  background-color: #20D489;
  color: white;
  font-weight: bold;
  min-width: 100px;
}

.edit-button button:hover {
  background-color: #28ffa7;
  font-weight: bold;
  color: white;
}


.item-category-button button {
  margin-top: 20px;
  background-color: white;
  color: #343A40;
  border-radius: 10px;
  font-weight: bold;
  transition: 0.4s;
  min-width: 200px;
  text-decoration: none;
}

.item-category-button button:hover {
  background-image: linear-gradient(-225deg, #fa4454 0%, #dc3d4b 52%, #dc3d4b 100%);
  color: white;
  border-radius: 10px;
  font-weight: bold;
  transition: 0.4s;
}



</style>