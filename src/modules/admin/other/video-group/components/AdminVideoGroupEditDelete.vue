<template>
  <div class="d-flex justify-content-center align-items-center">
    <div class="container">
      <div class="text-center pt-5 mt-5">
        <h4 class="text-spacing5">Video Group ID: {{ getVideoGroupInfo.selectedVideoGroupData.video_group_id }}</h4>
        <small>Update or delete some information of the selected video group.</small>
      </div>

      {{ getVideoGroupInfo.selectedVideoGroupData }}

      <div class="d-flex justify-content-center">
        <div class="col-sm-6 col-12 video-edit-card py-4">
           <div>
             <h5 class="text-center">Videos in this group</h5>
           </div>


            <div v-for="(video, index) in getVideoGroupInfo.selectedVideoGroupData.videos" :key="index">
              <div class="d-flex justify-content-around align-items-center col-12 py-3">

                <div class="video-group-video-card d-flex justify-content-start align-items-center px-3 mx-2">
                  <ul>
                    <li><b>Video Name: </b>{{ video.video_name }}</li>
                    <li><b>Video Id: </b>{{video.video_id}}</li>
                  </ul>
                </div>
                  <div class="green-success-button mx-2">
                    <router-link :to="{ name: 'VideosEdit', params: { id: video.video_id }} ">
                      <button class="btn btn-sm"> See <i class="far fa-eye"></i></button>
                    </router-link>
                  </div>
              </div>
            </div>

          <div>
            <div class="green-success-button d-flex justify-content-center py-4">
              <router-link to="/admin/other/video-group/all">
                <button class="btn bg-warning mx-2"><i class="fas fa-undo-alt"></i> Back</button>
              </router-link>
              <button class="btn bg-primary mx-2" data-toggle="modal" data-target="#videoEditModal"><i class="fas fa-info-circle"></i> General Status</button>
              <router-link to="/admin/other/video/all">
                <button class="btn bg-info mx-2"><i class="fas fa-th"></i> All Videos</button>
              </router-link>
            </div>
          </div>


          <info-modal
              id="videoEditModal"
              aria-hidden="true"
              :object-id="getVideoGroupInfo.selectedVideoGroupData.video_group_id"
              :creation-date="getVideoGroupInfo.selectedVideoGroupData.created_at"
              :update-date="getVideoGroupInfo.selectedVideoGroupData.created_at"
          ></info-modal>


          <delete-modal
              id="deleteVideo"
              aria-hidden="true"
              :header-name="getVideoInfo.selectedVideoData.video_name"
          ></delete-modal>

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
    DeleteModal: () => import('@/modules/admin/production/layouts/modals/DeleteModal.vue'),
    InfoModal: () => import('@/modules/admin/production/layouts/modals/InfoModal.vue'),
  },
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

.video-group-video-card{
  width: 100%;
  min-height: 100px;
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