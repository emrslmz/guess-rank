<template>
  <div class="slide-container d-flex align-items-center">
      <marquee>
        <div class="d-flex align-items-center">
          <div class="item-picture-small" style="background-image: url('/assets/images/items/csgo/ump_primal_saber.png');"></div>
          <div class="item-picture-small" style="background-image: url('/assets/images/items/csgo/ump_primal_saber.png');"></div>
          <div class="item-picture-small" style="background-image: url('/assets/images/items/csgo/ump_primal_saber.png');"></div>

        </div>

      </marquee>
  </div>
</template>


<style scoped>

.item-picture-small {
  padding-right: 90px;
  background-position: center;
  /*background-attachment: fixed;*/
  background-repeat: no-repeat;
  background-size: 60px;
  width: 60px;
  height: 60px;
  transition: 0.5s;

}


.slide-container {
  margin-right: 500px;
  margin-left: 500px;
  height: 80px;
  padding: 0 4px 0 5px;
  border-radius: 20px;
  background-image: linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%);
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

}
</style>