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
          <button class="btn btn-sm mx-1" data-toggle="modal" data-target="#exampleModalCenter">General Status</button>
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
    <div class="col-12 col-xl-3">
    <div class="d-flex flex-column text-right">
      <div class="item-category-button">
        <button class="btn btn-sm mx-1">CS:GO <i class="fas fa-arrow-circle-right"></i></button>
      </div>
      <div class="item-category-button">
        <button class="btn btn-sm mx-1">Valorant <i class="fas fa-arrow-circle-right"></i></button>
      </div>
    </div>
    </div>

    <div class="col-12 col-xl-9 row all-item-box" v-if="!showTable">
      <div class="col-12 col-xl-3 card-item">
        <small><strong>Field Tested | -0.1254</strong></small>
       <div class="d-flex justify-content-center">
         <div class="profile-picture" style="background-image: url('/assets/images/items/csgo/ump_primal_saber.png');"></div>
       </div>
        <!--Item Description-->
        <div class="d-flex flex-column item-description">
          <small>ump45</small>
          <strong>Primal Saber</strong>
          <div class="d-flex justify-content-between">
            <strong><i class="fas fa-coins text-warning"></i>  21,65 <small>+12%</small></strong>
           <small><i class="fas fa-bolt text-lightgray"></i></small>
          </div>
          <div class="edit-button d-flex flex-column pt-3">
            <button class="btn btn-sm">Edit</button>
          </div>
        </div>
        <!--/Item Description-->
      </div>
      <div class="col-12 col-md-6 col-xl-3 card-item">
        <small><strong>Factory New | -0.0024</strong></small>
        <div class="d-flex justify-content-center">
          <div class="profile-picture" style="background-image: url('/assets/images/items/csgo/glock_poppy.png');"></div>
        </div>
        <!--Item Description-->
        <div class="d-flex flex-column item-description">
          <small>glock18</small>
          <strong>Poppy</strong>
          <div class="d-flex justify-content-between">
            <strong><i class="fas fa-coins text-warning"></i>  41,25 <small>+8%</small></strong>
            <small><i class="fas fa-bolt text-lightgray"></i></small>
          </div>
          <div class="edit-button d-flex flex-column pt-3">
            <button class="btn btn-sm">Edit</button>
          </div>
        </div>
        <!--/Item Description-->
      </div>
      <div class="col-12 col-md-6 col-xl-3 card-item">
        <small><strong>Field Tested | -0.3054</strong></small>
        <div class="d-flex justify-content-center">
          <div class="profile-picture" style="background-image: url('/assets/images/items/csgo/m4a4_magnesium.png');"></div>
        </div>
        <!--Item Description-->
        <div class="d-flex flex-column item-description">
          <small>M4A4</small>
          <strong>Magnesium</strong>
          <div class="d-flex justify-content-between">
            <strong><i class="fas fa-coins text-warning"></i>  31,45 <small>+18%</small></strong>
            <small><i class="fas fa-bolt text-lightgray"></i></small>
          </div>
          <div class="edit-button d-flex flex-column pt-3">
            <button class="btn btn-sm">Edit</button>
          </div>
        </div>
        <!--/Item Description-->
      </div>
      <div class="col-12 col-md-6 col-xl-3 card-item">
        <small><strong>Sticker</strong></small>
        <div class="d-flex justify-content-center">
          <div class="profile-picture" style="background-image: url('/assets/images/items/csgo/sticker_france.png');"></div>
        </div>
        <!--Item Description-->
        <div class="d-flex flex-column item-description">
          <small>sticker</small>
          <strong>FRANCE</strong>
          <div class="d-flex justify-content-between">
            <strong><i class="fas fa-coins text-warning"></i>  91,65 <small>+13%</small></strong>
            <small><i class="fas fa-bolt text-lightgray"></i></small>
          </div>
          <div class="edit-button d-flex flex-column pt-3">
            <button class="btn btn-sm">Edit</button>
          </div>
        </div>
        <!--/Item Description-->
      </div>
<!--ITEM HERE-->
      <div class="col-12 col-md-6 col-xl-3 card-item">
        <small><strong><i class="fas fa-coins"></i></strong></small>
        <div class="d-flex justify-content-center">
          <div class="profile-picture" style="background-image: url('/assets/images/items/valorant/valorant_vp.png');"></div>
        </div>
        <!--Item Description-->
        <div class="d-flex flex-column item-description">
          <small>Valorant Point</small>
          <strong>600VP</strong>
          <div class="d-flex justify-content-between">
            <strong><i class="fas fa-coins text-warning"></i>  201,56 <small>+6%</small></strong>
            <small><i class="fas fa-bolt text-lightgray"></i></small>
          </div>
          <div class="edit-button d-flex flex-column pt-3">
            <button class="btn btn-sm">Edit</button>
          </div>
        </div>
        <!--/Item Description-->
      </div>
<!--/ITEM HERE-->
      <!--ITEM HERE-->
      <div class="col-12 col-md-6 col-xl-3 card-item">
        <small><strong><i class="fas fa-coins"></i></strong></small>
        <div class="d-flex justify-content-center">
          <div class="profile-picture" style="background-image: url('/assets/images/items/valorant/valorant_vp.png');"></div>
        </div>
        <!--Item Description-->
        <div class="d-flex flex-column item-description">
          <small>Valorant Point</small>
          <strong>600VP</strong>
          <div class="d-flex justify-content-between">
            <strong><i class="fas fa-coins text-warning"></i>  201,56 <small>+6%</small></strong>
            <small><i class="fas fa-bolt text-lightgray"></i></small>
          </div>
          <div class="edit-button d-flex flex-column pt-3">
            <button class="btn btn-sm">Edit</button>
          </div>
        </div>
        <!--/Item Description-->
      </div>
      <!--/ITEM HERE-->
      <!--ITEM HERE-->
      <div class="col-12 col-md-6 col-xl-3 card-item">
        <small><strong><i class="fas fa-coins"></i></strong></small>
        <div class="d-flex justify-content-center">
          <div class="profile-picture" style="background-image: url('/assets/images/items/valorant/valorant_vp.png');"></div>
        </div>
        <!--Item Description-->
        <div class="d-flex flex-column item-description">
          <small>Valorant Point</small>
          <strong>600VP</strong>
          <div class="d-flex justify-content-between">
            <strong><i class="fas fa-coins text-warning"></i>  201,56 <small>+6%</small></strong>
            <small><i class="fas fa-bolt text-lightgray"></i></small>
          </div>
          <div class="edit-button d-flex flex-column pt-3">
            <button class="btn btn-sm">Edit</button>
          </div>
        </div>
        <!--/Item Description-->
      </div>
      <!--/ITEM HERE-->
    </div>

   <div class="col-12 col-xl-9 row all-item-box"  v-else>
     <table class="table table-striped table-dark">
       <thead>
       <tr>
         <th><i class="fab fa-slack-hash"></i></th>
         <th>Views</th>
         <th>Name</th>
         <th>Price</th>
         <th class="text-right pr-5">Edit-View-Delete</th>
       </tr>
       </thead>
       <tbody>
       <tr>
         <th>sdadsa</th>
         <td><div class="profile-picture-small" style="background-image: url('/assets/images/img/profile-picture.svg');"></div></td>
         <td>{321321</td>
         <td>312312</td>
         <td>
           <div class="look-profile text-right pr-5">
             <button class="btn btn-sm">Edit</button>
           </div>
         </td>
       </tr>
       </tbody>
     </table>
   </div>
<!--Out of stock!-->

  </div>
</div>
</template>

<script>
export default {
  name: 'AddedItems',
  data() {
    return {
      showTable: '',
    }
  }
}
</script>


<style scoped>

.card-item {
  margin: 5px 15px 5px 15px;
  max-width: 200px;
  max-height: 260px;
  border-radius: 12px;
  border: 1px solid white;
  background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
}

.item-description small {
  text-transform: uppercase;
}

.all-item-box {
  height: 600px;
  overflow-y: scroll;
}

.profile-picture {
  background-position: center;
  /*background-attachment: fixed;*/
  background-repeat: no-repeat;
  background-size: 110px;
  width: 110px;
  height: 110px;
  transition: 0.5s;
}

.profile-picture:hover {
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