<template>
  <div class="modal fade" tabindex="-1" role="dialog" aria-labelledby="generalStatusAddedItems">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle"><i class="fas fa-laptop-code"></i> General Setting item </h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="d-flex flex-column modal-body">
          <span><b><i class="fas fa-fingerprint"></i> Item ID: </b><i>{{ ObjectId }}</i></span>
          <span><b><i class="far fa-clock"></i> Creation date: </b><i>{{ CreationDate }}</i></span>
          <span><b><i class="fas fa-highlighter"></i> Last change: </b><i v-if="CreationDate !== UpdateDate">{{ UpdateDate }}</i> <small v-else>It has never been edited before!</small></span>
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
  name: 'InfoModal',
  props: ['ObjectId', 'CreationDate', 'UpdateDate'],
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