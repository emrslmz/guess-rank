<template>
  <div class="d-flex justify-content-center align-items-center admin-login-page">
    <div class="login-card py-4">

      <div class="text-center py-3">
        <h4>Welcome</h4>
      </div>

      <div class="d-flex flex-column justify-content-center center pb-3 px-2">
        <div class="text-center px-2">
          <small>E-mail</small>
        </div>
        <div class="d-flex justify-content-center align-items-center ">
          <div class="custom-input-icon">
            <i class="fas fa-user-astronaut"></i>
          </div>
          <div>
            <input class="custom-input"   placeholder="Your email" type="text">
          </div>
        </div>
      </div>

      <div class="d-flex flex-column justify-content-center center pb-3 px-2">
        <div class="text-center px-2">
          <small>Password</small>
        </div>
        <div class="d-flex justify-content-center align-items-center ">
          <div class="custom-input-icon">
            <i class="fas fa-key"></i>
          </div>
          <div>
            <input class="custom-input"   placeholder="Your Password" type="password">
          </div>
        </div>
      </div>

        <div class="text-center">
          <label class="checkbox-input">
            <input type="checkbox" checked  />
            <span class="checkmark"></span>
            Save my login information
          </label>
        </div>

      <div class="d-flex justify-content-center">
        <div class="green-success-button">
          <button class="btn btn-light-success btn-xl w-100">Login</button>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
.admin-login-page {
  height: 90vh;
}

.login-card {
  width: 20%;
  min-height: 300px;
  border-radius: 20px;
  background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  color: #191919;
  text-decoration: none;
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


.checkbox-input {
  font-weight: bold;
  position: relative;
  cursor: pointer;
  font-size: small;

}

.checkbox-input input {
  opacity: 0;
}

.checkmark {
  left: -10px;
  position: absolute;
  height: 25px;
  width: 25px;
  background-color: white;
  border-radius: 8px;
}

.checkbox-input:hover input ~ .checkmark {
  background-color: white;
}

.checkbox-input input:checked ~ .checkmark {
  background-color: #20d489;
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.checkbox-input input:checked ~ .checkmark:after {
  display: block;
}

.checkbox-input .checkmark:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>