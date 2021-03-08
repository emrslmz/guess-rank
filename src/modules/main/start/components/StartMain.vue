<template>
  <div class="container">
    <div class="d-xl-flex justify-content-between align-items-start5">

        <div class="col-12 col-xl-4 mt-5">
          <div class="sign-card d-flex align-items-center justify-content-center">
            <router-link to="/login-register">
              <div class="text-center">
                <h6> Sign up now and start earning</h6>
              </div>
            </router-link>
          </div>
        </div>
      <div class="col-12 col-xl-8 mt-5">
        <div class="news-card d-flex align-items-center justify-content-center">
          <div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.sign-card {
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
  width: 100%;
  min-height: 300px;
  border-radius: 20px;
  background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  transition: 0.9s;
}



.news-carousel-pic {
  background-position: revert;
  background-repeat: no-repeat;
  background-size: 600px;
  transition: 0.5s;
  width: 100%;
  height: 300px;
  border-radius: 20px;
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