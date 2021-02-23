<template>
  <div>
    <div class="container">
      <div class=" d-flex justify-content-center">
        <div>
          <p>ss</p>
        </div>
        <div class="d-flex justify-content-center align-items-center col-12 player-valorant-card">
          <div class="youtube">
            <youtube width="1000px" height="550px" :video-id="videoId" :player-vars="playerVars" @playing="playing"></youtube>
          </div>
        </div>
      </div>
      <div class="player-valorant-rank-card d-flex align-items-center justify-content-center">
        <div class="d-flex text-white">
          <h6>You can choose soon.</h6>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      videoId: 'TvEksPZuIak',
      playerVars: {
        autoplay: 1
      }
    }
  },
  methods: {
    playing() {
      console.log('we are watching!!!')
    }
  }
}
</script>

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

.youtube {
  -webkit-user-select: none;  /* Chrome all / Safari all */
  -moz-user-select: none;     /* Firefox all */
  -ms-user-select: none;      /* IE 10+ */
  -o-user-select: none;
  user-select: none;
}
</style>