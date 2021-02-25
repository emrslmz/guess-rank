<template>
<div>
  <div class="px-3">
    <div style="padding-top: 100px"></div>
    <div class="top-banner"></div>
     <div class="d-flex justify-content-center">
       <div class="col-12 col-xl-3">
         <play-select-game
             @data="playGame=$event"
         />
       </div>
       <div class="col-12 col-xl-9 my-3 my-xl-auto">
        <div class="h-100 d-flex justify-content-center play-home-card">
          <div class="d-flex align-items-center">
           <h1><i class="fas fa-play-circle play-button"></i> Play {{ playGame }}</h1>
          </div>
        </div>
      </div>
     </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'PlayHome',
  data() {
    return {
      playGame: null,
    };
  },
  components: {
    PlaySelectGame: () => import('@/modules/play/components/stable/PlaySelectGame.vue'),
  }
}
</script>

<style scoped>

.play-home-card {
  background-color: white;
  border-radius: 10px;
  width: 100%;
  min-height: 500px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
}

/*@media screen and (max-width: 1600px) {*/
/*  .play-home-card-left {*/

/*  }*/
/*  .play-home-card-right {*/
/*  }*/
/*}*/

.play-home-card h1 {
  font-size: 40px;
  transition: 0.2s;
  cursor: pointer;
}

.play-home-card h1:hover {
  font-size: 44px;
  transition: 0.2s;
}
</style>