<template>
  <div class="container select-video-top">
    <div class="text-center">
      <h2>{{ getLevelInfo.selectedLevelData.level_name }}</h2>
      <small class="text-spacing5"> Click on the boxes to watch the videos of the level named {{ getLevelInfo.selectedLevelData.level_name }}.</small>
    </div>

    <div class="d-sm-flex row justify-content-center">
      <div class="video-group-card col-md-4 col-xl-2 mx-sm-2 my-2 d-flex flex-column justify-content-center align-items-center" v-for="(video, index) in getLevelInfo.selectedLevelData.video_group.videos" :key="index">
        <router-link :to="{ name: 'WatchVideo', params: { id: video.video_id }}">
          <div class="d-flex flex-column justify-content-center align-items-center">
            <h5>{{video.video_name}}</h5>
            <small><i class="fas fa-play"></i></small>
          </div>
        </router-link>
        <small class="text-center">You have not watched this video. <i class="far fa-thumbs-down"></i></small>
        <small class="text-center">You watched this video! <i class="far fa-thumbs-up"></i></small>
      </div>
    </div>
  </div>
</template>


<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'SelectVideo',
  computed: {
    ...mapGetters([
        'getLevelInfo',
    ]),
  },
  methods: {
    ...mapActions([
      'getSelectedLevel',
    ]),
  },
  created() {
    this.getSelectedLevel(this.$route.params.key);
  },
};
</script>

<style scoped>
.select-video-top {
  padding-top: 100px;
}

.video-group-card {
  width: 100%;
  min-height: 400px;
  border-radius: 20px;
  background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  color: #191919;
  transition: 0.5s;
  cursor: pointer;
}

.video-group-card div {
  margin: 100px 10px 100px 10px;
}

.video-group-card i:hover {
  font-size: 18px;
  transition: 0.5s;
}

.video-group-card h5:hover {
  font-weight: bold;
  transition: 0.5s;
}

a {
  text-decoration: none;
  color: #191919;
  transition: 0.5s;
}

.video-group-card:hover {
  border-radius: 30px;
  background-blend-mode: lighten;
  background-image: linear-gradient(120deg, #fdfbfb 0%, #cfd1d2 100%);
  transition: 0.5s;
}
</style>