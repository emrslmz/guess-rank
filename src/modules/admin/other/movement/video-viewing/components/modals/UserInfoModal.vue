<template>
  <div class="modal fade" tabindex="-1" role="dialog" aria-labelledby="userInfoData">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content text-dark">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle"><i class="fas fa-user-tag"></i> User ID: {{ UserData.id }} </h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="d-flex flex-column modal-body text-left">

          <span><b><i class="fas fa-user"></i> User Name:</b> {{ UserData.name }} {{ UserData.surname }}</span>
          <span><b><i class="fas fa-at"></i> E-mail:</b> {{ UserData.email }}</span>
          <span><b><i class="fas fa-globe-americas"></i> Country: </b> {{ UserData.country_id }}</span>
          <span><b><i class="fas fa-calendar-alt"></i> Created Date:</b> {{ UserData.created_at }}</span>
          <span><b><i class="far fa-clock"></i> Updated Date:</b> {{ UserData.updated_at }}</span>
          <span><b><i class="fab fa-steam"></i> Steam:</b> <i v-if="UserData.steam_username">{{ UserData.steam_username }}</i> <i v-else>missing / not entered</i></span>

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
  props: ['UserData'],
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
