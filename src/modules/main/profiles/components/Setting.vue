<template>
  <div class="container pt-5" align="center">
    <div class="setting-card col-6" >
      <div class="text-center py-2">
        <i class="fas fa-user-cog"></i>
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

        <div class="d-xl-flex justify-content-between pt-4">


          <div class="d-flex flex-column justify-content-center pb-3">
            <div class="text-left px-2">
              <small>Name</small>
            </div>
            <div class="d-flex justify-content-center align-items-center">
              <div class="custom-input-icon">
                <i class="far fa-user"></i>
              </div>
              <div>
                <input class="custom-input" :value="getUserData.userData.name" placeholder="Your Name" type="text">
              </div>
            </div>
          </div>

          <div class="d-flex flex-column justify-content-center center pb-3">
            <div class="text-left px-2">
              <small>Surname</small>
            </div>
            <div class="d-flex justify-content-center align-items-center">
              <div class="custom-input-icon">
                <i class="far fa-user"></i>
              </div>
              <div>
                <input class="custom-input" :value="getUserData.userData.surname" placeholder="Your Surname" type="text">
              </div>
            </div>
          </div>


        </div>

        <div class="d-xl-flex justify-content-between">

          <div class="d-flex flex-column justify-content-center pb-4">
            <div class="text-left px-2">
              <small>Email</small>
            </div>
            <div class="d-flex justify-content-center align-items-center">
              <div class="custom-input-icon">
                <i class="fas fa-at"></i>
              </div>
              <div>
                <input class="custom-input" :value="getUserData.userData.email" placeholder="Your e-mail" type="email">
              </div>
            </div>
          </div>

          <div class="d-flex flex-column justify-content-center pb-4">
            <div class="text-left px-2">
              <small>Username</small>
            </div>
            <div class="d-flex justify-content-center align-items-center">
              <div class="custom-input-icon">
                <i class="fas fa-user-tag"></i>
              </div>
              <div>
                <input class="custom-input" :value="getUserData.userData.username" placeholder="Your Username" type="text">
              </div>
            </div>
          </div>
        </div>
      <div class="d-flex justify-content-end align-items-end">
        <div class="green-success-button">
          <button class="btn btn-sm mx-2">Edit Social Media</button>
          <button class="btn btn-sm mx-2">Edit Password</button>
        </div>
      </div>
      <hr>
      <div class="d-xl-flex flex-column justify-content-center" v-if="showChangePassword">

        <div class="d-flex flex-column justify-content-center align-items-center">
          <div>
            <small>Your current password</small>
          </div>
          <div class="d-flex justify-content-center align-items-center">
            <div class="custom-input-icon">
              <i class="fas fa-key"></i>
            </div>
            <div>
              <input class="custom-input" :value="getUserData.userData.password" placeholder="Your Username" type="text">
            </div>
          </div>
        </div>

        <div class="d-flex flex-column justify-content-center align-items-center">
          <div>
            <small>Your new password</small>
          </div>
          <div class="d-flex justify-content-center align-items-center">
            <div class="custom-input-icon">
              <i class="far fa-user"></i>
            </div>
            <div>
              <input class="custom-input" :value="getUserData.userData.password" placeholder="New password" type="text">
            </div>
          </div>
        </div>

        <div class="d-flex flex-column justify-content-center align-items-center pb-4">
          <div>
            <small>Repeating your new password</small>
          </div>
          <div class="d-flex justify-content-center align-items-center">
            <div class="custom-input-icon">
              <i class="far fa-user"></i>
            </div>
            <div>
              <input class="custom-input" :value="getUserData.userData.password" placeholder="New password confirm" type="text">
            </div>
          </div>
        </div>

      </div>

        <div class="d-md-flex justify-content-around">
          <div class="text-left">
            <h6><i class="fas fa-globe-europe"></i> Country: {{ getUserData.userData.country_id }}</h6>
            <h6><i class="fas fa-birthday-cake"></i> Birthyear: {{ getUserData.userData.birthday_at }}</h6>
          </div>
          <div class="text-left">
            <h6><i class="fas fa-calendar-alt"></i> Registration time: {{ getUserData.userData.created_at }}</h6>
            <h6><i class="fas fa-history"></i> Issue date: {{ getUserData.userData.created_at }}</h6>
          </div>
        </div>

        <div class="d-flex justify-content-center align-items-end">
          <div class="green-success-button ">
            <button class="btn w-50">Save</button>
          </div>
        </div>

    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'ProfileSetting',
  data() {
    return {
      showChangePassword: false,
    };
  },
  computed: {
    ...mapGetters([
       'getUserData',
    ]),
  },
}
</script>

<style scoped>
.setting-card {
  width: auto;
  min-width: 300px;
  min-height: 600px;
  border-radius: 20px;
  background-color: white;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
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