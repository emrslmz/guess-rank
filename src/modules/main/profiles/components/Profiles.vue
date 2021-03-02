<template>
<div>
  <div class="container">
  <div style="padding-top: 100px"></div>
    <div class="d-flex row justify-content-between align-items-center">

      <div class="col-12 col-xl-5 mb-3">
        {{getProfileRightCard}}
        <div class="profile-left p-2">
<!--           <div class="d-flex justify-content-start">-->
<!--             <div class="profile-button mr-1">-->
<!--               <button class="btn btn-sm" ><i class="fas fa-cog"></i> Setting</button>-->
<!--             </div>-->
<!--             <div class="profile-button mr-1">-->
<!--               <button class="btn btn-sm" ><i class="fas fa-users"></i> Reference</button>-->
<!--             </div>-->
<!--           </div>-->
            <!--PROFILE-HEADER-->
            <div class="d-flex justify-content-between align-items-center px-4 pt-3">
              <div>
                <div class="profile-picture" style="background-image: url('/assets/images/img/profile-picture.svg');"></div>
              </div>
              <div class="d-flex flex-column pr-5 mr-5">
               <b>eustay</b>
                <b>Balance: 5000<i class="fas fa-lira-sign"></i></b>
              </div>
              <div class="d-flex flex-column align-items-center">
                <strong>19</strong>
                <small style="font-size: 12px;">level</small>
              </div>
            </div>
            <div class="mt-2" align="center">
              <div class="progress" style="width: 300px">
                <div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><b>651/2000</b></div>
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

      <div class="col-12 col-xl-7 d-xl-flex justify-content-around mb-3">

          <div class="profile-right d-flex justify-content-center align-items-center">
            <div class="right-card-clear" v-if="getProfileRightCard === 1">
              <small>You can use the buttons on the left side.</small>
            </div>


            <div class="reference-card" v-else-if="getProfileRightCard === 3">
              <div class="text-center py-2">
                <h3>References</h3>
                <small>You can get free balances and gifts by inviting your friends!</small>
              </div>
              <div class="d-flex justify-content-center align-items-center py-2 px-3">
                <div class="setting-icon d-flex align-items-center">
                  <i class="fas fa-code"></i>
                </div>
                <input class="setting-input" placeholder="ReferenceCode" type="text" />
              </div>
              <div class="text-center save-button pt-3">
                <button class="btn btn-sm">Create</button>
              </div>

            </div>
          </div>
      </div>


    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Profiles',
  methods: {
    // openCard() {
    //     this.$router.replace({
    //     hash: 'setting'
    //   });
    // }
  },
};
</script>

<style scoped>
.profile-left {
  width: auto;
  min-width: 300px;
  min-height: 600px;
  border-radius: 20px;
  background-color: #FBF9F6;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
}

.profile-right {
  border-radius: 20px;
  width: 100%;
  min-height: 600px;
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

.noti-card {
  background-color: white;
  width: 90%;
  height: 80px;
  border-radius: 20px;
}

.noti-card i {
  font-size: 40px;
}
.profile-rosette i {
  padding: 0 5px 10px 0;
  font-size: 20px;
}

.profile-button button {
  background-color: #26bef3;
  color: white;
  border-radius: 10px;
  font-weight: bold;
  transition: 0.4s;
  min-width: 100px;
}

.profile-button button:hover {
  background-color: #299dba;
  color: white;
  border-radius: 10px;
  font-weight: bold;
  transition: 0.4s;
}
</style>