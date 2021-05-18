<template>
  <div>
    <div class="container text-center">
      <div class="text-center pt-5">
        <h4 class="text-spacing5">User Video View Status. {{ getUserVideoViewData.videoId}}</h4>
        <small>You can follow when users see the videos here.</small>
      </div>
      <div>
        <div class="container py-3">

          <div class="d-flex flex-column justify-content-center center">
            <div class="text-center px-2">
              <small>Select Video for viewings</small>
            </div>
            <div class="d-flex justify-content-center align-items-center">
              <div class="custom-input-icon">
                <i class="fab fa-youtube"></i>
              </div>
              <div>
                <select class="custom-select" v-model="getUserVideoViewData.videoId">
                  <option :value="video.video_id" v-for="(video, index) in getVideoInfo.videoData" :key="index">{{ video.video_name  }}</option>
                  <option value="null" disabled>None</option>
                </select>
              </div>
              <div class="custom-input-icon-reverse">
                <i class="fas fa-search" @click="sendVideoId"></i>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    <div class="d-flex justify-content-center container all-item-box">
      <table class="table table-dark">
        <thead>
        <tr class="text-center">
          <th><i class="fab fa-slack-hash"></i></th>
          <th scope="col"><i class="fas fa-fingerprint"></i> Video Viewing ID</th>
          <th scope="col"><i class="far fa-user"></i> User</th>
          <th scope="col"><i class="fas fa-star-half-alt"></i> Video Level</th>
          <th scope="col"><i class="far fa-file-video"></i> Video Name</th>
          <th scope="col"><i class="fas fa-clock"></i></th>
        </tr>
        </thead>
        <tbody>
        <tr class="text-center" v-if="getUserVideoViewData.viewingsData.length === 0">
          <th><i class="fas fa-circle"></i></th>
          <th><i title="no preview / no added" class="fas fa-ban"></i></th>
          <th><i title="no preview / no added" class="fas fa-ban"></i></th>
          <th><i title="no preview / no added" class="fas fa-ban"></i></th>
          <th><i title="no preview / no added" class="fas fa-ban"></i></th>
          <th><i title="no preview / no added" class="fas fa-ban"></i></th>
          <th></th>
        </tr>
        <tr class="text-center" v-for="(view, index) in getUserVideoViewData.viewingsData" :key="index" v-else>
          <th><i class="fas fa-circle"></i></th>
          <th>{{ view.video_viewing_id }}</th>
          <th>
            <b class="text-underline" data-toggle="modal" data-target="#userInfo">{{ view.user.username }}</b>

            <user-info-modal
                id="userInfo"
                aria-hidden="true"
                :user-data="view.user"
            ></user-info-modal>
          </th>

          <th>
            <b class="text-underline" data-toggle="modal" data-target="#LevelInfo">{{ view.level.level_name }} <small>({{ view.level_id }})</small></b>
            <level-info-modal
                id="LevelInfo"
                aria-hidden="true"
                :level-data="view.level"
            ></level-info-modal>
          </th>

          <th>
            <b class="text-underline" data-toggle="modal" data-target="#VideoInfo">{{ view.video.video_name }}</b>
            <video-info-modal
                id="VideoInfo"
                aria-hidden="true"
                :video-data="view.video"
            ></video-info-modal>
          </th>
          <th class="text-left">
            <small><i class="fas fa-calendar-alt"></i> {{ view.created_at.slice(0,10) }}</small>
            <br>
            <small><i class="far fa-clock"></i> {{ view.created_at.slice(11,19) }}</small>
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
  name: 'UserVideoViewing',
  components: {
    UserInfoModal: () => import('@/modules/admin/other/movement/video-viewing/components/modals/UserInfoModal.vue'),
    LevelInfoModal: () => import('@/modules/admin/other/movement/video-viewing/components/modals/LevelInfoModal.vue'),
    VideoInfoModal: () => import('@/modules/admin/other/movement/video-viewing/components/modals/VideoInfoModal.vue'),
  },
  computed: {
    ...mapGetters([
        'getVideoInfo',
        'getUserVideoViewData',
    ])
  },
  methods: {
    ...mapActions([
       'getVideo',
        'getUserVideoViewing',
    ]),
    sendVideoId() {
      this.getUserVideoViewing(this.getUserVideoViewData.videoId);
    },
  },
  created() {
    this.getVideo();
  },
};
</script>



<style scoped>

.all-item-box::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
  border-radius: 10px;
  background-color: #F5F5F5;
}

.all-item-box::-webkit-scrollbar {
  width: 12px;
  background-color: #F5F5F5;
}

.all-item-box::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
  background-color: #555;
}

.table {
  border-radius: 0 0 20px 20px;
}

.all-item-box {
  height: 600px;
  overflow-y: scroll;
}

.text-underline:hover {
  text-decoration: underline;
  cursor: pointer;
  color: lightblue;
}

.custom-input-icon {
  background-color: white;
  font-size: 20px;
  width: 50px;
  height: 40px;
  border-radius: 12px 0 0 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
}

.custom-input-icon-reverse {
  background-color: white;
  font-size: 20px;
  transition: 0.3s;
  width: 50px;
  height: 40px;
  border-radius: 0 12px 12px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  cursor: pointer;
  box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 1px 0px 0px 1px;
}

.custom-input-icon-reverse:hover {
  font-size: 23px;
  transition: 0.3s;
}

.custom-select {
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 200px;
  border: none;
  outline: none;
  transition: 0.5s;
  box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
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
