<template>
<div>
  <div class="container">
  <div style="padding-top: 100px"></div>
    <div class="d-flex row justify-content-between align-items-center">

      <div class="col-12 col-xl-4 d-xl-flex justify-content-around">
          <div class="profile-left">
            <!--PROFILE-HEADER-->
            <div class="row">
              <div class="col-4 px-4 pt-3">
                <div class="profile-picture" style="background-image: url('/assets/images/img/images.jpg');"></div>
              </div>
              <div class="col-8 pt-3">
               <div class="d-flex justify-content-between align-items-start">
                <div class="d-flex flex-column">
                 <div>
                   <label>
                     <small><i class="fas fa-globe-europe"></i>: <strong>emrslmz</strong></small>
                     <br>
                     <small><i class="fas fa-envelope"></i>: <strong>shorproduction@gmail.com</strong></small>
                   </label>
                 </div>
                 <div class="d-flex justify-content-between">
                   <button class="btn btn-secondary btn-sm">Settings</button>
                   <button class="btn btn-success btn-sm">Achievement</button>
                 </div>
                </div>
                 <div class="profile-level pr-4">
                  <h2>18</h2>
                 </div>
               </div>
              </div>
            </div>
            <hr>
            <!--/PROFILE-HEADER-->
            <div class="profile-middle">
              <div class="notification d-flex flex-column align-items-center text-right">
                <div class="noti-card d-flex justify-content-between align-items-center my-1 px-3">
                  <i class="fas fa-trophy text-warning"></i>
                  <h6>New Level Unlocked!</h6>
                </div>
                <div class="noti-card d-flex justify-content-between align-items-center my-1 px-3">
                  <i class="fas fa-layer-group text-danger"></i>
                  <h6>New Videos Added!</h6>
                </div>
                <div class="noti-card d-flex justify-content-between align-items-center my-1 px-3">
                  <i class="fas fa-database text-info"></i>
                  <h6>New coat of arms has been acquired</h6>
                </div>
                <div class="noti-card d-flex justify-content-between align-items-center my-1 px-3">
                  <i class="fas fa-layer-group text-dark"></i>
                  <h6>New Videos Added!</h6>
                </div>
              </div>
            </div>
          </div>
      </div>

      <div class="col-12 col-md-8 d-xl-flex justify-content-around">
          <div class="profile-right"></div>
      </div>


    </div>
  </div>
</div>
</template>

<style scoped>
.profile-left {
  width: auto;
  min-width: 300px;
  min-height: 600px;
  border-radius: 20px;
  background-color: white;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
}

.profile-right {
  background-color: white;
  border-radius: 20px;
  width: 100%;
  min-height: 200px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
}

.profile-picture {
  background-position: center;
  /*background-attachment: fixed;*/
  background-repeat: no-repeat;
  background-size: 100px;
  width: 80px;
  height: 80px;
  border-radius: 150px;
}

.noti-card {
  background-color: #e9e9e9;
  width: 80%;
  height: 80px;
  border-radius: 20px;
}

.noti-card i {
  font-size: 40px;
}
</style>