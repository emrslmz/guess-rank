<template>
  <div class="modal fade">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title text-left" id="exampleModalLabel">Are you sure you want to delete the item named <i>{{ HeaderName }}</i> ?</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <label>This action cannot be undone.</label>
        </div>
        <div class="modal-footer">
          <div class="green-success-button">
            <button type="button" class="btn bg-primary btn-sm" data-dismiss="modal">Close</button>

          </div>
          <div class="green-success-button">
            <button class="btn bg-danger btn-sm" data-dismiss="modal" aria-label="Close" aria-hidden="true" @click="DeleteFunction"><i class="fas fa-trash"></i> Delete</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DeleteModal',
  props: [ 'HeaderName', 'DeleteFunction'],
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