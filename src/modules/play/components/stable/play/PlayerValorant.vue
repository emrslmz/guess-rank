<template>
  <div>
    <div class="container">
      <div class=" d-flex justify-content-center">
        <div class="d-flex justify-content-center align-items-center col-12 player-valorant-card">
          <div class="youtube d-flex justify-content-center align-items-center col-12">
            <youtube width="300%" height="550px" :video-id="videoId" :player-vars="playerVars" @playing="playing"></youtube>
          </div>
        </div>
      </div>
      <div class="player-valorant-rank-card d-flex align-items-center justify-content-center">
<!--        <div class="d-flex text-white">-->
<!--          <h6>You can choose soon.</h6>-->
<!--        </div>-->
        <div class="d-flex text-white">
          <div class="rank-picture" style="background-image: url('/assets/images/ranks/valorank_bronz1.png');" title="valorant_iron1" alt="valorant_iron1"></div>
          <div class="rank-picture" style="background-image: url('/assets/images/ranks/valorank_bronz2.png');" title="valorant_iron2" alt="valorant_iron2"></div>
          <div class="rank-picture" style="background-image: url('/assets/images/ranks/valorank_bronz3.png');" title="valorant_iron3" alt="valorant_iron3"></div>

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
  width: 100%;
  min-height: 600px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  background-image: linear-gradient(-225deg, #fa4454 0%, #dc3d4b 52%, #dc3d4b 100%);
}

.player-valorant-rank-card {
  margin-bottom: 100px;
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

.rank-picture {
  background-position: revert;
  /*background-attachment: fixed;*/
  background-repeat: no-repeat;
  margin: 0 5px 0 5px;
  background-size: 50px;
  width: 50px;
  height: 50px;
  /*border-radius: 150px;*/
  cursor: pointer;
  opacity: 0.9;
  transition: 0.3s;
}
.rank-picture:hover {
  opacity: 1;
  transition: 0.3s;
}
</style>