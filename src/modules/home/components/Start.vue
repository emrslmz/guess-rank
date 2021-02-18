<template>
  <div class="container">
    <div style="padding-top: 100px"></div>
    <div class="d-flex justify-content-center align-items-center" v-if="!registerCard">
        <div class="col-12 col-xl-4 login-card">
         <div class="text-center card-inside">
           <h5>LOGIN</h5>
         </div>
          <div align="center">
            <label for="login-username">
              <input placeholder="username" type="text" id="login-username">
            </label>
          </div>
          <div align="center">
            <label for="login-username">
              <input placeholder="password" type="text" id="login-password">
            </label>
          </div>
          <div align="center">
            <label for="login-remember-me">
              <input type="checkbox" id="login-remember-me">
              Remember me
            </label>
          </div>
          <div align="center">
            <div>
              <button class="btn btn-success w-25 btn-xl">LOGIN</button>
            </div>
          </div>
          <div align="center">
            <div>
              <small>Do not you have an account yet? <a href="#" @click="registerCard = true">Register</a></small>
              <br>
              <small><a href="#">I forgot my password</a></small>
            </div>
          </div>
      </div>
    </div>

    <div class="d-xl-flex justify-content-center align-items-center" v-else>
      <div class="col-12 col-xl-4 login-card">
        <div class="text-center card-inside">
          <h5>REGISTER</h5>
        </div>

        <div class="d-xl-flex justify-content-between" align="center">
          <label for="register-name">
            <input placeholder="Name" type="text" id="register-name">
          </label>
          <label for="register-lastname">
            <input placeholder="Lastame" type="text" id="register-lastname">
          </label>
        </div>

        <div align="center">
          <label for="register-mail">
            <input placeholder="E-mail" type="email" id="register-mail">
          </label>
        </div>

        <div align="center">
          <label for="register-password">
            <input placeholder="Password" type="text" id="register-password">
          </label>
        </div>



        <div align="center">
          <label for="login-remember-me">
            <input type="checkbox" id="login-remember-me">
            I have read and accept the <a href="#">terms.</a>
          </label>
        </div>
        <div align="center">
          <div>
            <button class="btn btn-primary w-50 btn-xl">LOGIN</button>
          </div>
        </div>
        <div align="center">
          <div>
            <small >Do you already have an account? <a @click="registerCard = false" href="#">Login</a></small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Start',
  data() {
    return {
      registerCard: false,
    }
  }
}
</script>


<style scoped>
.login-card {
  width: 100%;
  min-height: 500px;
  border-radius: 20px;
  background-color: white;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
}

.card-inside {
  padding-top: 130px;
}

#login-username {
  padding-left: 20px;
  color: #F5F8FA;
  outline: 0;
  border: none;
  background-color: #d3d3d3;
  min-width: 300px;
  height: 45px;
  border-radius: 10px;
}

#login-password {
  padding-left: 20px;
  color: #F5F8FA;
  outline: 0;
  border: none;
  background-color: #d3d3d3;
  min-width: 300px;
  height: 45px;
  border-radius: 10px;
}

#register-name {
  padding-left: 10px;
  color: #F5F8FA;
  outline: 0;
  border: none;
  background-color: #d3d3d3;
  height: 45px;
  border-radius: 10px;
}

#register-lastname {
  padding-left: 10px;
  color: #F5F8FA;
  outline: 0;
  border: none;
  background-color: #d3d3d3;
  height: 45px;
  border-radius: 10px;
}

#register-mail {
  padding-left: 20px;
  color: #F5F8FA;
  outline: 0;
  border: none;
  min-width: 330px;
  background-color: #d3d3d3;
  height: 45px;
  border-radius: 10px;
}

#register-password {
  padding-left: 20px;
  color: #F5F8FA;
  outline: 0;
  border: none;
  min-width: 330px;
  background-color: #d3d3d3;
  height: 45px;
  border-radius: 10px;
}
</style>