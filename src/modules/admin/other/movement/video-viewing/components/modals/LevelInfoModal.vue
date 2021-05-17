<template>
  <div class="modal fade" tabindex="-1" role="dialog" aria-labelledby="LevelInfoData">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content text-dark">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle"><i class="fas fa-fingerprint"></i> Level ID: {{ LevelData.level_id }} </h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="d-flex flex-column modal-body text-left">

          <span><b><i class="fas fa-star-half-alt"></i> Level Name:</b> {{ LevelData.level_name }} </span>
          <span><b><i class="fas fa-pen"></i> Level Description:</b> {{ LevelData.level_description }} </span>

          <span><b><i class="fas fa-calendar-alt"></i> Created Date:</b> {{ LevelData.created_at }}</span>
          <span><b><i class="far fa-clock"></i> Updated Date:</b> {{ LevelData.updated_at }}</span>
          <small><b><i class="fas fa-passport"></i> Level Key:</b> {{ LevelData.level_random_key }}</small>

        </div>
        <div class="modal-footer green-success-button">
          <button type="button" class="btn btn-sm" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserInfoModal',
  props: ['LevelData'],
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
