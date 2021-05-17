<template>
  <div class="modal fade" tabindex="-1" role="dialog" aria-labelledby="VideoInfoData">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content text-dark">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle"><i class="fas fa-fingerprint"></i> Video ID: {{ VideoData.video_id }} </h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="d-flex flex-column modal-body text-left">

          <span><b><i class="far fa-file-video"></i> Video Name:</b> {{ VideoData.video_name }} </span>
          <span><b><i class="fas fa-link"></i> Video URL:</b> {{ VideoData.video_url }}</span>
          <span><b><i class="fas fa-calendar-alt"></i> Created Date:</b> {{ VideoData.created_at }}</span>
          <span><b><i class="far fa-clock"></i> Updated Date:</b> {{ VideoData.updated_at }}</span>

        </div>
        <div class="modal-footer green-success-button">
         <router-link :to="{ name: 'VideosEdit', params: { id: VideoData.video_id }} ">
           <button type="button" class="btn bg-warning btn-sm" data-dismiss="modal">Go <i class="fas fa-external-link-alt"></i></button>
         </router-link>
          <button type="button" class="btn btn-sm" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VideoInfoModal',
  props: ['VideoData'],
};
</script>

<style scoped>
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
