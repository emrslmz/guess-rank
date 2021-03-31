<template>
  <div class="d-flex justify-content-center align-items-center">
    <div class="container">
      <div class="text-center pt-5 mt-5">
        <h4 class="text-spacing5">Add Video Group</h4>
        <small>Fill in the appropriate blanks to add.</small>
      </div>

      {{ getVideoGroupInfo.addVideoGroupData.videos }}
      <div class="d-flex justify-content-center">
        <div class="d-flex flex-column justify-content-center align-items-center col-xl-6 col-12 video-edit-card py-4">
          <div>
            <h5 class="text-center">Tick the videos you want to be in this group.</h5>
          </div>

          <div class="py-3">
            <div v-for="(video, index) in getVideoInfo.videoData" :key="index">
              <label class="checkbox-input">
                <input class="mx-2" type="checkbox" :value="video.video_id" v-model="getVideoGroupInfo.addVideoGroupData.videos" />
                <span class="checkmark"></span>
                {{ video.video_name }} <small> <i>{{ video.video_id }}</i></small>
              </label>
            </div>
          </div>

          <div>
            <div class="d-md-flex justify-content-center text-center green-success-button">
              <router-link to="/admin/other/video-group/">
                <button class="btn bg-warning m-2"><i class="fas fa-undo-alt"></i> Back</button>
              </router-link>
              <button class="btn m-2" @click="sendVideoGroupData"><i class="fas fa-plus"></i> Add</button>
            </div>
          </div>


          <info-modal
              id="videoEditModal"
              aria-hidden="true"
              :object-id="getVideoGroupInfo.selectedVideoGroupData.video_group_id"
              :creation-date="getVideoGroupInfo.selectedVideoGroupData.created_at"
              :update-date="getVideoGroupInfo.selectedVideoGroupData.created_at"
          ></info-modal>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'AdminVideoEditDelete',
  components: {
    InfoModal: () => import('@/modules/admin/production/layouts/modals/InfoModal.vue'),
  },
  computed: {
    ...mapGetters([
      'getVideoGroupInfo',
      'getVideoInfo',
    ]),
  },
  methods: {
    ...mapActions([
      'getSelectedVideoGroup',
      'getVideo',
      'postAddVideoGroup',
    ]),
    sendVideoGroupData() {
      this.postAddVideoGroup(this.getVideoGroupInfo.addVideoGroupData);
    },
  },
  created() {
    this.getVideo();
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

.video-group-video-card {
  width: 100%;
  min-height: 100px;
  border-radius: 20px;
  background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
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