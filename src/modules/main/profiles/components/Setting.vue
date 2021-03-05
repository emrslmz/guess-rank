<template>
  <div class="container pt-5 mt-5" align="center">
    <div class="setting-card col-6" >
      <div class="text-center py-2">
        <h3>Setting</h3>
      </div>
        <div class="d-xl-flex justify-content-center align-items-center">
          <div class="profile-picture" style="background-image: url('/assets/images/img/profile-picture.svg');"></div>

          <div class="text-xl-left">
            <label for="upload-picture">
              Change/upload your avatar
              <br>
              <input type="file" id="upload-picture" />
            </label>
          </div>

        </div>
        <div class="d-xl-flex justify-content-center pt-2">

          <div class="d-flex justify-content-center align-items-center py-2 px-3">
            <div class="setting-icon d-flex align-items-center">
              <i class="far fa-id-card"></i>
            </div>
            <input class="setting-input" placeholder="Your Name" type="text" />
          </div>

          <div class="d-flex justify-content-center align-items-center py-2 px-3">
            <div class="setting-icon d-flex align-items-center">
              <i class="far fa-envelope"></i>
            </div>
            <input class="setting-input" placeholder="Your e-mail" type="email" />
          </div>

        </div>

        <div class="d-xl-flex justify-content-center">

          <div class="d-flex justify-content-center align-items-center py-2 px-3">
            <div class="setting-icon d-flex align-items-center">
              <i class="far fa-user"></i>
            </div>
            <input class="setting-input" placeholder="Your Username" type="text" />
          </div>

          <div class="d-flex justify-content-center align-items-center py-2 px-3">
            <div class="setting-icon d-flex align-items-center">
              <i class="fas fa-key"></i>
            </div>
            <input class="setting-input" placeholder="Password" type="password" />
          </div>

        </div>

        <div class="d-md-flex justify-content-around">
          <div>
            <h6><i class="fas fa-globe-europe"></i> Country: Turkey</h6>
          </div>
          <div>
            <h6><i class="fas fa-birthday-cake"></i> Birthyear: 1963</h6>
          </div>
        </div>
        <div class="text-right save-button pt-5">
          <button class="btn btn-sm">Save</button>
        </div>

    </div>
  </div>
</template>

<style scoped>
.setting-card {
  width: auto;
  min-width: 300px;
  min-height: 600px;
  border-radius: 20px;
  background-color: white;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
}

.setting-input {
  height: 40px;
  border-radius: 0 8px 8px 0;
  border: none;
  background-color: #e9e9e9;
  outline:none;
}

.setting-icon {
  height: 40px;
  background-color: #e9e9e9;
  border: none;
  width: 30px;
  padding: 0 30px 0 10px;
  border-radius: 8px 0 0 8px;
}

.profile-picture {
  background-position: center;
  /*background-attachment: fixed;*/
  background-repeat: no-repeat;
  background-size: 80px;
  width: 80px;
  height: 80px;
  border-radius: 150px;
}


/*PROFILE, SETTING BUTTON*/
.save-button button {
  border-radius: 10px;
  background-color: #20D489;
  color: white;
  font-weight: bold;
  min-width: 100px;
}

.save-button button:hover {
  background-color: #28ffa7;
  font-weight: bold;
  color: white;
}

</style>