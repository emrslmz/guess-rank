<template>
  <div class="d-flex justify-content-center align-items-center">
    <div class="container">
      <div class="text-center pt-5 mt-5">
        <h4 class="text-spacing5">Video Group ID: {{ getVideoGroupInfo.selectedVideoGroupData.video_group_id }}</h4>
        <small>Update or delete some information of the selected video group.</small>
      </div>

      <div class="d-flex justify-content-center">
        <div class="d-flex flex-column justify-content-center align-items-center col-xl-6 col-12 video-edit-card py-4">
           <div>
             <h5 class="text-center">Videos in this group</h5>
           </div>

            <div v-for="(video, index) in getVideoGroupInfo.selectedVideoGroupData.videos" :key="index">
              <div class="d-md-flex justify-content-around align-items-center col-12 py-3">
                <div class="video-group-video-card col-12 d-flex justify-content-start align-items-center">
                  <ul>
                    <li><b>Video Name: </b>{{ video.video_name }}</li>
                    <li><b>Video Id: </b>{{video.video_id}}</li>
                  </ul>
                </div>
                <div class="green-success-button py-3 px-2">
                  <router-link :to="{ name: 'VideosEdit', params: { id: video.video_id }} ">
                    <button class="btn btn-sm w-100"> See <i class="far fa-eye"></i></button>
                  </router-link>
                </div>
              </div>
            </div>


          <div class="d-flex justify-content-between green-success-button">
            <div>
              <button class="btn bg-primary mx-2" data-toggle="modal" data-target="#videoGroupEditModal"><i class="fas fa-info-circle"></i> </button>
            </div>
            <div>
              <button class="btn mx-2" ><i class="fas fa-save"></i> Save</button>
            </div>
            <div>
              <button class="btn bg-danger mx-2" data-toggle="modal" data-target="#deleteVideoGroup"><i class="fas fa-trash"></i> Delete</button>
            </div>
          </div>


          <info-modal
              id="videoGroupEditModal"
              aria-hidden="true"
              :object-id="getVideoGroupInfo.selectedVideoGroupData.video_group_id"
              :creation-date="getVideoGroupInfo.selectedVideoGroupData.created_at"
              :update-date="getVideoGroupInfo.selectedVideoGroupData.created_at"
          ></info-modal>

          <delete-modal
              id="deleteVideoGroup"
              aria-hidden="true"
              :delete-function="deleteSendData"
              :header-name="getVideoGroupInfo.selectedVideoGroupData.video_group_id"
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
      'deleteVideoGroup'
    ]),
    deleteSendData() {
      this.deleteVideoGroup(this.getVideoGroupInfo.selectedVideoGroupData);
    },
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