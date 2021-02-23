<template>
  <div>
   <div class="d-flex justify-content-center">
     <div class="play-valorant-card col-12 col-xl-6 d-xl-flex align-items-center">
       <div class="play-pictures col-12 col-xl-6" style="background-image: url('/assets/images/img/play-valorant-jett.png');"></div>
       <div class="text-white text-right mr-4 col-12 col-xl-6">
         <div v-if="!selectLevel">
           <h2 class="text-opacity" @click="selectLevel = true"><i class="fas fa-play-circle"></i> Select Level</h2>
           <!--         <div>-->
           <!--           <button class="btn btn-danger btn-sm mr-1">How to play?</button>-->
           <!--           <button class="btn btn-info btn-sm ml-1">Statistics</button>-->
           <!--           <button class="btn btn-primary btn-sm ml-1">Prize</button>-->
           <!--         </div>-->
           <small>Choose level before starting to play</small>
         </div>
         <div v-if="selectLevel">
           <h5>Choose Level</h5>
           <small>and start playing</small>
           <div class="row d-flex justify-content-center align-items-center text-dark">
             <div class="col-4">
               <router-link to="valorant/play">
                 <div class="level-box">
                   <i class="fas fa-unlock text-lightgreen"></i>
                   level 1
                 </div>
               </router-link>
             </div>
             <div class="col-4">
               <div class="level-box">
                 <i class="fas fa-unlock text-lightgreen"></i>
                 level 2
               </div>
             </div>
             <div class="col-4">
               <div class="level-box">
                 <i class="fas fa-unlock text-lightgreen"></i>
                 level3
               </div>
             </div>
             <div class="col-4">
               <div class="level-box">
                 <i class="fas fa-unlock text-lightgreen"></i>
                 level 4
               </div>
             </div>
             <div class="col-4">
               <div class="level-box">
                 <i class="fas fa-lock text-red"></i>
                 level 5
                 </div>
             </div>

          </div>
         </div>

       </div>
     </div>
   </div>
  </div>
</template>

<script>
export default {
  name: 'PlayValorants',
  data() {
    return {
      selectLevel: false,
    }
  }
}
</script>


<style scoped>
.play-valorant-card {
  margin: 100px 0 100px 0;
  border-radius: 20px;
  padding-bottom: 50px;
  width: 100%;
  min-height: 500px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  background-image: linear-gradient(-225deg, #fa4454 0%, #dc3d4b 52%, #dc3d4b 100%);
}

.play-valorant-card a {
  color: #191919;
  text-decoration: none;
}

.play-pictures {
  background-position: revert;
  /*background-attachment: fixed;*/
  background-repeat: no-repeat;
  background-size: 300px;
  width: 100%;
  height: 500px;
  /*border-radius: 150px;*/
  animation: transform 7s infinite alternate;
}

.btn {
  min-width: 75px;
}

.level-box {
  margin: 10px;
  width: 75px;
  height: 75px;
  display: flex;
  flex-direction: column;
  background: white;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  border-radius: 5px;
  font-size: small;
  cursor: pointer;
  -webkit-user-select: none;  /* Chrome all / Safari all */
  -moz-user-select: none;     /* Firefox all */
  -ms-user-select: none;      /* IE 10+ */
  -o-user-select: none;
  user-select: none;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  transition: 0.2s;
}
.level-box:hover {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 6px, rgba(0, 0, 0, 0.24) 0px 1px 6px;
  transition: 0.2s;
}

.level-box i {
  font-size: 24px;
}
</style>