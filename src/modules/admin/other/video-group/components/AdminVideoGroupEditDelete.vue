<template>
  <div class="d-flex justify-content-center align-items-center">
    <div class="container">
      <div class="text-center pt-5 mt-5">
        <h4 class="text-spacing5">Video Group ID: {{ getVideoGroupInfo.selectedVideoGroupData.video_group_id }}</h4>
        <small>Update or delete some information of the selected video group.</small>
      </div>

      {{ getVideoGroupInfo.selectedVideoGroupData }}

      <div class="d-flex justify-content-center">
        <div class="col-sm-6 col-12 video-edit-card d-flex flex-column justify-content-center align-items-center">
          <div>
            <h5>Videos in this group</h5>
          </div>
          <div v-if="getVideoGroupInfo.selectedVideoGroupData.videos.length > 0">
            <div v-for="(video, index) in getVideoGroupInfo.selectedVideoGroupData.videos" :key="index" >

              <div class="d-flex justify-content-center">
                  <div class="text-center d-flex justify-content-between align-items-center px-4">
                    <ul>
                      <li><b>{{ video.video_name }}</b></li>
                    </ul>
                  </div>
                <div class="px-4">
                  <button class="btn bg-danger text-white btn-sm" @click="video.video_id = null">del</button>
                </div>
                  <div class="px-4">
                    <router-link :to="{ name: 'VideosEdit', params: { id: video.video_id }} ">
                      <button class="btn btn-sm bg-dark text-white"> <i class="far fa-eye"></i></button>
                    </router-link>
                  </div>
              </div>

            </div>
          </div>
          <div class="py-4" v-else>
            <b>No video matching this group found.</b>
          </div>

          <div>
            <div class="green-success-button">
              <router-link to="/admin/other/video-group/all">
                <button class="btn bg-warning mx-2"><i class="fas fa-undo-alt"></i> Back</button>
              </router-link>
              <router-link to="/admin/other/video/all">
                <button class="btn bg-primary mx-2"><i class="fas fa-th"></i> All Videos</button>
              </router-link>
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'AdminVideoEditDelete',
  computed: {
    ...mapGetters([
      'getVideoGroupInfo',
    ]),
  },
  methods: {
    ...mapActions([
      'getSelectedVideoGroup',
    ]),
  },
  created() {
    this.getSelectedVideoGroup(this.$route.params.id);
  },
};
</script>

<style scoped>
.video-edit-card {
  margin: 15px;
  width: 100%;
  min-height: 500px;
  border-radius: 20px;
  background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  color: #191919;
  text-decoration: none;
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


/****************************************/
/*BEATIFUL CHECKBOX STYLE */
.checkbox-input {
  font-weight: bold;
  position: relative;
  cursor: pointer;
  font-size: small;

}

.checkbox-input input {
  opacity: 0;
}

.checkmark {
  left: -10px;
  position: absolute;
  height: 25px;
  width: 25px;
  background-color: white;
  border-radius: 8px;
}

.checkbox-input:hover input ~ .checkmark {
  background-color: white;
}

.checkbox-input input:checked ~ .checkmark {
  background-color: #20d489;
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.checkbox-input input:checked ~ .checkmark:after {
  display: block;
}

.checkbox-input .checkmark:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
/*BEATIFUL CHECKBOX STYLE */
/****************************************/

</style>