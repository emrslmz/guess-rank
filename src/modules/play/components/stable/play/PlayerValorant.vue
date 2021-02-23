<template>
  <div>
    <div class="container">
      <div class=" d-flex justify-content-center">
        <div class="d-flex justify-content-center align-items-center col-12 player-valorant-card">
          <iframe width="90%" height="95%" src="https://www.youtube.com/embed/TvEksPZuIak" frameborder="0" allow="accelerometer; autoplay;"></iframe>
        </div>
      </div>
      <div class="player-valorant-rank-card">
        <div class="h-100 d-flex justify-content-center">
          <div class="d-flex align-items-center">
            <h6> </h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.player-valorant-card {
  margin: 100px 0 20px 0;
  border-radius: 20px;
  min-width: 50%;
  min-height: 600px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  background-image: linear-gradient(-225deg, #fa4454 0%, #dc3d4b 52%, #dc3d4b 100%);
}

.player-valorant-rank-card {
  border-radius: 20px;
  min-width: 50%;
  min-height: 100px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  background-image: linear-gradient(-225deg, #fa4454 0%, #dc3d4b 52%, #dc3d4b 100%);
}
</style>