<template>
  <div>
    <div class="container" v-if="me">
      <div class="text-center">
        <h3><i class="fas fa-key"></i> Change Your Password</h3>
        <small>To reset your password, enter your old password and new password twice.</small>
      </div>

      <div class="d-flex flex-column justify-content-center align-items-center pt-5">
        <div>
          <small>Your current password</small>
        </div>
        <div class="d-flex justify-content-center align-items-center">
          <div class="custom-input-icon">
            <i class="fas fa-key"></i>
          </div>
          <div>
            <input class="custom-input" :value="me.password" placeholder="Your Username" type="text">
          </div>
        </div>
      </div>

      <div class="d-flex flex-column justify-content-center align-items-center">
        <div>
          <small>Your new password</small>
        </div>
        <div class="d-flex justify-content-center align-items-center">
          <div class="custom-input-icon">
            <i class="fas fa-lock"></i>
          </div>
          <div>
            <input class="custom-input" :value="me.password" placeholder="New password" type="text">
          </div>
        </div>
      </div>

      <div class="d-flex flex-column justify-content-center align-items-center pb-3">
        <div>
          <small>Repeating your new password</small>
        </div>
        <div class="d-flex justify-content-center align-items-center">
          <div class="custom-input-icon">
            <i class="fas fa-lock"></i>
          </div>
          <div>
            <input class="custom-input" :value="me.password" placeholder="New password confirm" type="text">
          </div>
        </div>
      </div>

      <div class="d-flex justify-content-center">
        <div class="green-success-button">
          <button class="btn w-50">Update</button>
        </div>
      </div>
    </div>
    <div class="container" v-else>
      <vue-element-loading :active="true" spinner="mini-spinner" duration="1.5" />
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
.custom-input-icon {
  background-color: white;
  font-size: 20px;
  width: 50px;
  height: 40px;
  border-radius: 12px 0 0 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
}

.custom-input {
  border-radius: 0 12px 12px 0;
  padding-left: 10px;
  background-color: white;
  height: 40px;
  width: 100%;
  border: none;
  outline: none;
  transition: 0.5s;
  box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
}

.green-success-button button {
  margin-top: 30px;
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
