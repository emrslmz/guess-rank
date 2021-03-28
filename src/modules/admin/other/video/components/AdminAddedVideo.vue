<template>
  <div>
    <div class="container text-center">
      <div class="text-center pt-5">
        <h4 class="text-spacing5">Added Game Video's</h4>
        <small>All game levels videos added. Click the buttons to edit or delete.</small>
      </div>
    </div>
    <div class="d-flex justify-content-center container all-item-box">
      <table class="table table-sm table-dark">
        <thead>
        <tr class="text-center">
          <th><i class="fab fa-slack-hash"></i></th>
          <th scope="col"><i class="fas fa-fingerprint"></i> Video ID</th>
          <th scope="col"><i class="far fa-file-video"></i> Video Name</th>
          <th scope="col"><i class="fas fa-link"></i> Video URL</th>
          <th scope="col"><i class="fas fa-th-large"></i> Video Group</th>
          <th scope="col"><i class="fas fa-pen-square"></i> Edit/Delete</th>
        </tr>
        </thead>
        <tbody>
        <tr class="text-center" v-for="(video, index) in getVideoInfo.videoData" :key="index">
          <th><i class="fas fa-circle"></i></th>
          <th>{{ video.video_id }}</th>
          <th>{{ video.video_name }}</th>
          <th>{{ video.video_url }}</th>
          <th>{{ video.video_group_id }}</th>
          <th class="d-flex justify-content-center">
            <div class="green-success-button">
           <router-link :to="{ name: 'VideosEdit', params: { id: video.video_id }} ">
             <button class="btn btn-sm">Edit/delete</button>
           </router-link>
            </div>
          </th>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'AdminAdedVideo',
  computed: {
    ...mapGetters([
        'getVideoInfo',
    ])
  },
  methods: {
    ...mapActions([
        'getVideo',
    ]),
  },
  created() {
    this.getVideo();
  }
};
</script>


<style scoped>
.all-item-box {
  height: 600px;
  overflow-y: scroll;
}

.green-success-button button {
  border-radius: 10px;
  background-color: #20D489;
  color: white;
  font-weight: bold;
  min-width: 120px;
}

.green-success-button button:hover {
  background-color: #28ffa7;
  font-weight: bold;
  color: white;
}
</style>