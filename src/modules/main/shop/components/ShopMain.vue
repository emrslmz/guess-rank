<template>
  <div>
    <div class="container">
      <div class="text-center py-5">
        <h4 class="text-spacing5">Withdraw</h4>
        <small>All added items here</small>
        <div class="d-flex justify-content-center mx-5">
          <small><i class="fas fa-info-circle text-info"></i> Click the "add to basket" game below to buy items. And confirm the item you will buy from "my basket" on your profile</small>
        </div>
      </div>
    </div>

      <div class="d-xl-flex">
      <div class="col-12 col-xl-3 mb-5">

      </div>
      <div class="col-12 col-xl-9 row  all-item-box">
        <!--ITEM HERE-->
        <div class="col-12 col-md-6 col-xl-3 card-item" v-for="(item, index) in getShopInfo.shopData" :key="index" >
          <small><strong>Factory New | -0.0024</strong></small>
          <div class="d-flex justify-content-center">
            <div class="item-picture" style="background-image: url('/assets/images/items/csgo/glock_poppy.png');"></div>
          </div>
          <!--Item Description-->
          <div class="d-flex flex-column item-description">
            <small>{{ item.name }}</small> <!-- Gun Name-->
            <strong>Poppy</strong> <!-- Skin Name or Key, game, valorant name-->
            <div class="d-flex justify-content-between">
              <strong>
                <i class="fas fa-coins text-warning"></i>  {{ item.price }}

                <small v-if="item.discount !== null && item.discount !== 0">-{{ item.discount }}%</small>
                <small v-else></small></strong>

                <small v-if="item.is_available"><i class="fas fa-bolt text-lightgray"></i></small>
                <small v-else></small>
            </div>
            <div class="edit-button d-flex flex-column pt-3">
              <button class="btn btn-sm"><i class="fas fa-shopping-basket"></i> Add Basket</button>
            </div>
          </div>
          <!--/Item Description-->
        </div>
        <!--/ITEM HERE-->

      </div>

    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions } from 'vuex';

export default {
  name: 'ShopMain',
  computed: {
    ...mapGetters([
        'getShopInfo',
    ]),
  },
  methods: {
    ...mapActions([
        'getShopItem',
    ]),
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
  width: 100%;
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


</style>