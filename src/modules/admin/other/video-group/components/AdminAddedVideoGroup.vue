<template>
  <div class="d-flex flex-column justify-content-center align-items-center">
    <div class="container">
      <div class="text-center pt-5">
        <h4 class="text-spacing5">Added Video Groups</h4>
        <small>All game video groups added. Click the buttons to edit or delete.</small>
      </div>
       <div class="d-flex row justify-content-center align-items-center">
         <div class="video-group-card flex-column col-3" v-for="(group, index) in getVideoGroupInfo.videoGroupData" :key="index">
           <div class="text-center">
             <h5>{{ group.video_group_id }}</h5>
           </div>
           <div class="text-center">
             <b>Videos in this group: <small><i>{{ group.videos.length }}</i></small></b>
           </div>
           <div class="green-success-button pt-5">
             <router-link :to="{ name: 'VideoGroupEdit', params: { id: group.video_group_id }} ">
               <button class="btn btn-sm w-100">Edit/delete</button>
             </router-link>
           </div>
         </div>
       </div>
    </div>
  </div>
</template>


<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'AdminAddedVideoGroup',
  computed: {
    ...mapGetters([
        'getVideoGroupInfo',
    ]),
  },
  methods: {
    ...mapActions([
        'getVideoGroup',
    ])
  },
  created() {
    this.getVideoGroup();
  }
};
</script>

<style scoped>
.video-group-card {
  margin: 15px;
  width: 100%;
  min-height: 300px;
  border-radius: 20px;
  background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  color: #191919;
  text-decoration: none;
  display: flex;
  justify-content: center;
  transition: 0.5s;
  cursor: pointer;
}

.video-group-card:hover {
  transition: 0.5s;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, #9b86e6 0px 8px 16px -8px;
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