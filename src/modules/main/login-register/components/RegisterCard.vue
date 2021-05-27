<template>
  <div>
    <div class="register-card py-3">
      <div class="text-center pt-2">
        <h4>Register</h4>
        <small style="font-size: 9px; color: red" v-if="false"><strong>There is already a registered user with the information you entered</strong></small>
        <small v-else>We would be <i>happy</i> to see you among us!</small>

      </div>

      <div class="d-flex justify-content-center align-items-center p-3 ">
        <div class="d-flex justify-content-center align-items-center">
          <div class="custom-input-icon">
            <i class="far fa-user-circle"></i>
          </div>
          <div>
            <input class="custom-input" v-model="user.name" placeholder="Name" type="text">
          </div>
        </div>
      </div>

      <div class="d-flex justify-content-center align-items-center pb-4">
        <div class="d-flex justify-content-center align-items-center">
          <div class="custom-input-icon">
            <i class="fas fa-feather"></i>
          </div>
          <div>
            <input class="custom-input" v-model="user.surname" placeholder="Surname" type="text">
          </div>
        </div>
      </div>


      <div class="d-flex justify-content-center align-items-center pb-4">
        <div class="d-flex justify-content-center align-items-center">
          <div class="custom-input-icon">
            <i class="far fa-user"></i>
          </div>
          <div>
            <input class="custom-input" v-model="user.username" placeholder="Username" type="text">
          </div>
        </div>
      </div>

      <div class="d-flex justify-content-center align-items-center pb-4">
        <div class="d-flex justify-content-center align-items-center">
          <div class="custom-input-icon">
            <i class="fas fa-at"></i>
          </div>
          <div>
            <input class="custom-input" v-model="user.email" placeholder="E-mail" type="email">
          </div>
        </div>
      </div>

      <div class="d-flex justify-content-center align-items-center pb-4">
        <div class="d-flex justify-content-center align-items-center" :class="user.password_confirmation === user.password ? 'confirm-password' : ''">
          <div class="custom-input-icon">
            <i class="fas fa-key"></i>
          </div>
          <div>
            <input class="custom-input" v-model="user.password" placeholder="Password" type="password" />
          </div>
        </div>
      </div>

      <div class="d-flex justify-content-center align-items-center pb-4">
        <div class="d-flex justify-content-center align-items-center" :class="user.password_confirmation === user.password ? 'confirm-password' : ''">
          <div class="custom-input-icon">
            <i class="fas fa-key"></i>
          </div>
          <div>
            <input class="custom-input" v-model="user.password_confirmation" placeholder="Password-confirm" type="password" />
          </div>
        </div>
      </div>

      <div class="text-center green-success-button">
        <button class="btn btn w-50" @click="register(user)">Register</button>
      </div>
      <div class="text-center">
        <small>I have an account. <b><a class="text-primary mouse-click" @click="goLogin()">login</a></b></small>
      </div>

    </div>
  </div>
</template>


<script>
import { mapActions } from "vuex";

export default {
  name: 'RegisterCard',
  data() {
    return {
      user: {
        name: null,
        surname: null,
        username: null,
        email: null,
        password: null,
        password_confirmation: null,
        country_id: null,
      }
    };
  },
  computed: {
  },
  methods: {
    ...mapActions('LoginRegister', ['register']),
    goLogin() {
      this.$emit('goLogin');
    }
  },
};
</script>


<style scoped>
.register-card {
  width: 100%;
  min-height: 500px;
  border-radius: 20px;
  transition: 0.5s;
  /*background-color: #E9E9E9;*/
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

.confirm-password {
  border-radius: 12px;
  box-shadow: #28FFA7 0px 0px 5px 0px, lightgreen 0px 0px 1px 0px;
  transition: 0.5s;
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
