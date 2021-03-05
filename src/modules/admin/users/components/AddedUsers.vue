<template>
  <div class="container">
   <div class="text-center py-5">
     <h4 class="text-spacing5">Registered Users</h4>
     <small>All registered users</small>
   </div>
   <div class="d-flex justify-content-center align-items-center">
     <div class="col-12 col-xl-4 card">
        <div class="d-flex flex-column">
          <div class="d-flex justify-content-start align-items-center">
            <div class="profile-picture m-3" style="background-image: url('/assets/images/img/profile-picture.svg');"></div>
            <div class="d-flex flex-column">
              <strong>eustay</strong>
              <strong>eustay@emre.com.tr</strong>
              <strong class="text-lightgreen">Account approved <i class="far fa-check-circle"></i></strong>
<!--              <strong class="text-lightgreen">Account not approved <i class="far fa-times-circle"></i></strong>-->
              <div class="d-flex justify-content-around align-items-center pt-2">
                <i class="fab fa-steam"></i>
                <i class="fas fa-envelope"></i>
              </div>
            </div>
          </div>
          <div class="mt-2" align="center">
            <div class="progress" style="width: 300px;">
              <div class="text-white" role="progressbar" style="width: 25%; background-image: linear-gradient(to top, #0ba360 0%, #3cba92 100%);" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><b>651/2000</b></div>
            </div>
          </div>
          <div class="look-profile py-3 text-center">
            <button class="btn">dsadas</button>
          </div>
        </div>
     </div>
   </div>
  </div>
</template>

<script>

</script>

<style scoped>
.card {
  width: 100%;
  min-height: 200px;
}

.profile-picture {
  background-position: center;
  /*background-attachment: fixed;*/
  background-repeat: no-repeat;
  background-size: 70px;
  width: 70px;
  height: 70px;
  border-radius: 150px;
}

.text-spacing5 {
  letter-spacing: 5px;
  font-weight: bold;
}



.look-profile button {
  border-radius: 10px;
  background-color: #20D489;
  color: white;
  font-weight: bold;
  min-width: 100px;
}

.look-profile button:hover {
  background-color: #28ffa7;
  font-weight: bold;
  color: white;
}

</style>