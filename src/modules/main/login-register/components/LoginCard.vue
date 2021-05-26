<template>
  <div>
    <div class="login-card d-flex align-items-center justify-content-center">
      <div>
        <div class="text-center pt-2">
          <h4>Login</h4>
          <small style="font-size: 9px; color: red" v-if="false"><strong>Your e-mail address or password is incorrect</strong></small>
          <small style="font-size: 9px; color: green" v-if="false"><strong>Redirecting   <i class="fas fa-circle-notch fa-spin"></i></strong></small>

        </div>
        <div class="d-flex justify-content-center align-items-center pb-4">
          <div class="d-flex justify-content-center align-items-center">
            <div class="custom-input-icon">
              <i class="fas fa-at"></i>
            </div>
            <div>
              <input class="custom-input" v-model="user.email" placeholder="E-mail" type="text">
            </div>
          </div>
        </div>

        <div class="d-flex justify-content-center align-items-center pb-4">
          <div class="d-flex justify-content-center align-items-center">
            <div class="custom-input-icon">
              <i class="fas fa-key"></i>
            </div>
            <div>
              <input class="custom-input" v-model="user.password" placeholder="Password" type="password" required>
            </div>
          </div>
        </div>

        <div class="text-center green-success-button">
          <button class="btn btn w-50" @click="login(user)">Login</button>
        </div>
        <div class="text-center">
          <small>I do not have an. <b><a class="text-primary mouse-click" @click="goRegister()">Register</a></b></small>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'LoginCard',
  data() {
    return {
      user: {
        email: null,
        password: null,
      },
    };
  },
  methods: {
    ...mapActions('LoginRegister', ['login']),
    goRegister() {
      this.$emit('goRegister');
    },
  },
};
</script>


<style scoped>
.login-card {
  width: 100%;
  min-height: 500px;
  border-radius: 20px;
  background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
}

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

.custom-input:focus {
  transition: 0.5s;
  box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 10px 0px, rgba(0, 0, 0, 0.05) 0px 1px 10px 0px;
}

.green-success-button button {
  border-radius: 10px;
  background-color: #20D489;
  color: white;
  font-weight: bold;
  min-width: 100px;
}

.green-success-button button:hover {
  background-color: #28ffa7;
  font-weight: bold;
  color: white;
}

</style>
