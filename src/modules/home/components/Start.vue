<template>
  <div class="container">
    <div style="padding-top: 100px"></div>
    <div class="d-flex justify-content-center align-items-center">
        <div class="col-4 login-card">
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
          <div class="px-4" align="left">
            <label for="login-remember-me">
              <input type="checkbox" id="login-remember-me">
              Remember me
            </label>
          </div>
          <div align="center">
            <div>
              <button class="btn btn-green w-50 btn-xl">LOGIN</button>
            </div>
          </div>
          <div align="center">
            <div>
              <small>Do not you have an account yet?</small>
              <br>
              <small><a href="#">I forgot my password</a></small>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>                                       


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
  background-color: #2c2c2c;
  min-width: 300px;
  height: 45px;
  border-radius: 10px;
}

#login-password {
  padding-left: 20px;
  color: #F5F8FA;
  outline: 0;
  border: none;
  background-color: #2c2c2c;
  min-width: 300px;
  height: 45px;
  border-radius: 10px;
}

.btn-green {
  border: 1px solid #cecece;
  background-color: white;
  color: #343A40;
  border-radius: 10px;
  font-weight: bold;
  transition: 0.4s;
}

.btn-green:hover {
  border: 1px solid white;
  background-color: #20D489;
  color: white;
  border-radius: 10px;
  font-weight: bold;
  transition: 0.4s;
}
</style>