<template>
  <div class="container">
    <div class="text-center">
      <h3><i class="far fa-image"></i> Change Your Avatar</h3>
      <small>Create or choose your own profile picture for use only on this site</small>
    </div>
    <div class="d-xl-flex justify-content-center align-items-center py-3">
      <div class="profile-picture" style="background-image: url('/assets/images/img/profile-picture.svg');"></div>
      <div class="text-xl-left">
        <label for="upload-picture">
          Change/upload your avatar
          <br>
          <input type="file" id="upload-picture" />
        </label>
      </div>
    </div>
    <div class="d-flex justify-content-center">
      <div class="green-success-button">
        <button class="btn w-50">Save</button>
      </div>
    </div>
  </div>
</template>


<script>
import { mapGetters } from 'vuex';

export default {
  name: 'ChangeAvatar',
  computed: {
    ...mapGetters([
      'getUserData',
    ]),
  },
};
</script>



<style scoped>
.profile-picture {
  background-position: center;
  /*background-attachment: fixed;*/
  background-repeat: no-repeat;
  background-size: 80px;
  width: 80px;
  height: 80px;
  border-radius: 150px;
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