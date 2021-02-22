<template>
<div>
  <div class="px-3">
    <div style="padding-top: 100px"></div>
    <div class="d-flex row justify-content-between">
      <div class="col-12 col-xl-6">
        <div class="d-flex">
          <div class="play-home-card mx-2"></div>
          <div class="play-home-card mx-2"></div>
        </div>
      </div>

      <div class="col-12 col-md-6">
        <div class="h-100 d-flex justify-content-center play-home-card">
          <div class="d-flex align-items-center">
           <h1> <i class="fas fa-play-circle"></i> Play</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>

.play-home-card {
  background-color: white;
  border-radius: 20px;
  width: 100%;
  min-height: 600px;
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