<template>
  <div class="container">
    <div style="padding-top: 300px"></div>
    <div class="d-xl-flex justify-content-center align-items-center">
     <div class="col-12 col-xl-6 text-xl-right">
       <div class="d-flex flex-column">
        <router-link to="/login-register">
          <button class="btn button-val btn--light">
                <span class="btn__inner">
                  <span class="btn__slide"></span>
                  <span class="btn__content">Let's Play</span>
                </span>
          </button>
        </router-link>
       </div>
     </div>
      <div class="d-none d-xl-block vertical-line"></div>
      <div class="col-12 col-xl-6 text-xl-left pt-4 pt-xl-1">
          <h5>Welcome Guess Rank</h5>
          <p>You guess the rank of the person in the game by watching the game in the videos we give you. Once your predictions are correct, shop at the market with the points you earn!
          <br>
          <small><a class="text-lightgreen" href="#">Terms apply*</a></small>
          </p>

      </div>
    </div>
  </div>
</template>


<style scoped>        
.vertical-line {
  border: 1px solid #6a6a6a;
  height: 250px;
  border-radius: 100px;
}
</style>