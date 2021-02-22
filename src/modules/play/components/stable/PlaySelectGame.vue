<template>
  <div>
    <div class="text-center pt-1">
      <h5>Pick fast</h5>
    </div>
   <div class="d-flex flex-column justify-content-center align-items-center">
     <div class="select-game-card random-card h-100 d-flex justify-content-between align-items-center">
       <div class="text-dark text-opacity ml-4 text-left"><h2><i class="fas fa-random play-button"></i> Random</h2></div>
       <div><small>Among the added games.</small></div>
     </div>
    <!--VALORANT-->

       <div class="select-game-card valorant-card h-100 d-flex justify-content-between align-items-center">
           <div class="play-pictures" style="background-image: url('/assets/images/img/play-valorant-jett.png');"></div>
         <router-link to="/valorant">
           <div class="text-white text-opacity mr-4"><h2><i class="fas fa-play-circle"></i> Valorant</h2></div>
         </router-link>
       </div>
     <!--/VALORANT-->
     <!--CSGO-->
     <div class="select-game-card csgo-card h-100 d-flex justify-content-between align-items-center">
       <div class="play-pictures" style="background-image: url('/assets/images/img/play-csgo-ct.png');"></div>
       <div class="text-white text-opacity mr-4"><h2><i class="fas fa-play-circle"></i> CS:GO</h2></div>
     </div>
     <!--/CSGO-->
     <!--PUBG-->
     <div class="select-game-card pubg-card h-100 d-flex justify-content-between align-items-center">
       <div class="play-pictures" style="background-image: url('/assets/images/img/play-pubg-man.png');"></div>
       <div class="text-white text-opacity mr-4"><h2><i class="fas fa-play-circle"></i> PUBG</h2></div>
     </div>
     <!--/PUBG-->

     <!--PUBG-->
     <div class="select-game-card more-card h-100 d-flex flex-column justify-content-center align-items-center">
       <div class="text-white text-center">
         <h2><i class="fas fa-ellipsis-h"></i></h2>
         <small class="text-white">More Games very soon.</small>
       </div>
     </div>
     <!--/PUBG-->
   </div>
  </div>
</template>


<style scoped>
.select-game-card {
  text-align: right;
  border-radius: 20px;
  width: 80%;
  min-height: 100px;
  margin: 5px 0 5px 0;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
}
.select-game-card a {
  text-decoration: none;
}

.random-card {
  background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
}
.valorant-card {
  background-image: linear-gradient(-225deg, #fa4454 0%, #dc3d4b 52%, #dc3d4b 100%);
}
.csgo-card {
  background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
}
.pubg-card {
  background-image: linear-gradient(to right, #ffde40 0%, #fee140 100%);
}
.more-card {
  background: linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #989898;
  background-blend-mode: multiply,multiply;
}

.play-pictures {
  margin-left: 10px;
  background-position: revert;
  /*background-attachment: fixed;*/
  background-repeat: no-repeat;
  /*border-radius: 150px;*/
  background-size: 100px;
  width: 100px;
  height: 100px;
}

</style>