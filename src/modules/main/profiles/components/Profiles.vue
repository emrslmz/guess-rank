<template>
<div>
  <div class="container">
  <div style="padding-top: 100px"></div>
    <div class="d-flex row justify-content-between align-items-center">

      <div class="col-12 col-xl-5 mb-3">

        <div class="profile-left p-2">
            <div class="d-flex justify-content-between align-items-center px-4 pt-3">
              <div>
                <div class="profile-picture" style="background-image: url('/assets/images/img/profile-picture.svg');"></div>
              </div>
              <div class="d-flex flex-column pr-5 mr-5">
                <small style="font-size: 12px">Welcome, {{ getUserData.userData.name }} {{ getUserData.userData.surname }}</small>
               <b>{{ getUserData.userData.username }}</b>
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
                <div>
                  <h6>Notification box</h6>
                </div>
                <div class="noti-card d-flex justify-content-between align-items-center my-1 px-3">
                  <i class="far fa-envelope"></i>
                  <h6>Your e-mail address has not been confirmed.</h6>
                </div>
                <div class="noti-card d-flex justify-content-between align-items-center my-1 px-3">
                  <i class="fab fa-steam"></i>
                  <h6>Your account is not linked with steam</h6>
                </div>
              </div>
            </div>
          </div>
      </div>

      <div class="col-12 col-xl-7 d-xl-flex justify-content-around mb-3">

          <div class="profile-right d-flex justify-content-center align-items-center">
            <div class="reference-card">
              <div class="text-center py-2">
               <div class="d-flex justify-content-center">
                 <h3>References </h3>
               </div>
                <small>You can get free balances and gifts by inviting your friends!</small>
              </div>
              <div class="d-flex justify-content-center align-items-center py-2 px-3">
                <div class="setting-icon d-flex align-items-center">
                </div>

              </div>
              <div class="d-flex justify-content-center align-items-center pb-4">
                <div class="d-flex justify-content-center align-items-center">
                  <div class="custom-input-icon">
                    <i class="fas fa-code"></i>
                  </div>
                  <div>
                    <input class="custom-input" placeholder="Reference Code" title="coming soon!" type="text" disabled />
                  </div>
                </div>
              </div>
              <div class="text-center green-success-button">
                <button class="btn btn w-50">Create Code</button>
              </div>
            </div>

          </div>
      </div>


    </div>
  </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Profiles',
  computed: {
    ...mapGetters([
        'getUserData',
    ]),
  },
  methods: {

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
  min-width: 120px;
}

.green-success-button button:hover {
  background-color: #28ffa7;
  font-weight: bold;
  color: white;
}
</style>