<template>
  <div>
   <div class="d-flex justify-content-center">
     <div class="play-valorant-card h-100 d-xl-flex justify-content-between align-items-center">
       <div class="play-pictures" style="background-image: url('/assets/images/img/play-valorant-jett.png');"></div>
       <div class="text-white mr-4">
         <router-link to="/valorant/play">
           <h2 class="text-opacity"><i class="fas fa-play-circle"></i> Play</h2>
         </router-link>
<!--         <div>-->
<!--           <button class="btn btn-danger btn-sm mr-1">How to play?</button>-->
<!--           <button class="btn btn-info btn-sm ml-1">Statistics</button>-->
<!--           <button class="btn btn-primary btn-sm ml-1">Prize</button>-->
<!--         </div>-->
         <small>Click the PLAY button to start</small>
       </div>
     </div>
   </div>
  </div>
</template>


<style scoped>
.play-valorant-card {
  margin: 100px 0 100px 0;
  text-align: right;
  border-radius: 20px;
  min-width: 50%;
  min-height: 500px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  background-image: linear-gradient(-225deg, #fa4454 0%, #dc3d4b 52%, #dc3d4b 100%);
}

.play-valorant-card a {
  color: white;
  text-decoration: none;
}

.play-pictures {
  margin: 10px;
  background-position: revert;
  /*background-attachment: fixed;*/
  background-repeat: no-repeat;
  background-size: 300px;
  width: 40%;
  height: 500px;
  /*border-radius: 150px;*/
  animation: transform 7s infinite alternate;
}

.btn {
  min-width: 75px;
}
</style>