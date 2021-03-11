<template>
  <div>
    <div class="d-xl-flex justify-content-between setting-card">

      <div class="col-12 col-xl-6">
        <div class="text-center py-2">
          <i class="fas fa-user-cog"></i>
          <h3>Setting</h3>
        </div>







        <hr>

        <div class="text-left py-4">
          <h6><i class="fas fa-calendar-alt"></i> Registration time: {{ getUserData.userData.created_at }}</h6>
          <h6><i class="fas fa-history"></i> Issue date: {{ getUserData.userData.created_at }}</h6>
        </div>


      </div>
      <div class="col-12 col-xl-6">
        <div class="text-center py-2">
          <i class="fas fa-user-cog"></i>
          <h3>Setting</h3>
        </div>


        <div class="d-flex flex-column justify-content-center pb-4">
          <div class="text-left px-2">
            <small>Username</small>
          </div>
          <div class="d-flex justify-content-center align-items-center">
            <div class="custom-input-icon">
              <i class="fas fa-user-tag"></i>
            </div>
            <div class="col-12">
              <input class="custom-input" :value="getUserData.userData.username" placeholder="Your Username" type="text">
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

        </div>

        <div class="d-flex justify-content-center align-items-end">
          <div class="green-success-button">
            <button class="btn w-50">Save</button>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>