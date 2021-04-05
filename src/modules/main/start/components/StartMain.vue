<template>
  <div class="container">
    <div class="start-main d-xl-flex align-items-center">

        <div class="col-12 col-xl-4">

          <div class="sign-card d-flex align-items-center justify-content-center">
            <router-link to="/login-register">
              <div class="text-center">
                <h6> Sign up now and start earning</h6>
                <i style="position: absolute; left: 25px; margin-top: -25px; font-size: 60px; opacity: 0.1" class="fas fa-user-plus"></i>
              </div>
            </router-link>
          </div>

          <div class="sign-card d-flex align-items-center justify-content-center">
            <router-link to="/login-register">
              <div class="text-center">
                <h6> How Do I Get Started?</h6>
                <i style="position: absolute; left: 25px; margin-top: -25px; font-size: 60px; opacity: 0.1" class="far fa-question-circle"></i>
              </div>
            </router-link>
          </div>
        </div>

      <div class="col-12 col-xl-8">
        <div class="news-card d-flex align-items-center justify-content-center">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.start-main {
  height: 70vh;
}

.sign-card {
  margin: 10px 0 10px 0;
  width: 100%;
  min-height: 100px;
  border-radius: 20px;
  background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  cursor: pointer;
  transition: 0.9s;
}

.sign-card a {
  color: #191919;
  text-decoration: none;
}

.sign-card:hover {
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 40px -5px, rgb(98, 189, 80) 0px 8px 20px -8px;
  transition: 0.5s;
}

.news-card {
  margin: 10px 0 10px 0;
  width: 100%;
  min-height: 300px;
  border-radius: 20px;
  background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  transition: 0.9s;
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