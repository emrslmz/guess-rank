<template>
  <div class="container">
    <div class="start-main d-xl-flex align-items-center">

        <div class="col-12 col-xl-4">

          <div v-if="me">
            <router-link to="/play">
              <div class="start-card-frame d-flex align-items-center justify-content-center" >
                  <div class="text-right">
                    <h6>Get started to earn rewards!</h6>
                    <i style="position: absolute; left: 35px; margin-top: -30px; font-size: 60px; opacity: 0.1" class="fas fa-comment-dollar"></i>
                  </div>
              </div>
            </router-link>
          </div>

         <div v-else>
           <router-link to="/login-register">
             <div class="start-card-frame d-flex align-items-center justify-content-center" >
               <div>
                 <h6>Sign up now and start earning</h6>
                 <i style="position: absolute; left: 25px; margin-top: -25px; font-size: 60px; opacity: 0.1" class="fas fa-user-plus"></i>
               </div>
             </div>
           </router-link>
         </div>

          <div>
            <a href="">
            <div class="start-card-frame d-flex align-items-center justify-content-center">
                <div class="text-center">
                  <h6> How Do I Get Started? Click to watch the tutorial video</h6>
                  <i style="position: absolute; left: 25px; margin-top: -30px; font-size: 50px; opacity: 0.1" class="far fa-question-circle"></i>
                </div>
              </div>
            </a>
          </div>

        </div>

      <div class="col-12 col-xl-8">
         <div class="news-card d-flex align-items-center justify-content-center" v-if="me">
           <router-link to="/play/game">
            <h2 class="text-white"><i class="fas fa-history ml-4"></i> Daily Reward</h2>
           </router-link>
         </div>

        <div class="use-user-card d-flex flex-column align-items-center justify-content-center" v-else>
           <div class="text-dark">
             <h2>1,593 people registered! </h2>
             <h6>256,360 hours of video watched</h6>
             <h6>12000 options ticked</h6>
             <h6>560 items reached their owners</h6>
           </div>

          <router-link to="/login-register">
            <button class="btn game-button"><i class="fas fa-play"></i> SIGN IN/UP</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.start-main {
  height: 70vh;
}

a {
  color: #191919;
  text-decoration: none;
}

.start-card-frame {
  margin: 10px 0 10px 0;
  width: 100%;
  min-height: 100px;
  border-radius: 20px;
  background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  cursor: pointer;
  transition: 0.9s;
}



.start-card-frame:hover {
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 40px -5px, rgb(98, 189, 80) 0px 8px 20px -8px;
  transition: 0.5s;
  border-radius: 25px;
}


.news-card {
  margin: 10px 0 10px 0;
  width: 100%;
  min-height: 300px;
  border-radius: 20px;
  /*background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);*/
  background-image: linear-gradient(-60deg, #ff5858 0%, #f09819 100%);
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  transition: 0.9s;
}

.news-card:hover {
  border-radius: 30px;
  transition: 0.5s;
  cursor: pointer;
}

.news-card a {
  text-decoration: none;
}

.news-card h2 {
  transition: 0.5s;
}

.news-card h2:hover {
  font-size: 36px;
  transition: 0.5s;
}

.use-user-card {
  margin: 10px 0 10px 0;
  width: 100%;
  min-height: 300px;
  border-radius: 20px;
  background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  transition: 0.9s;
}

.use-user-card a {
  text-decoration: none;
}



.game-button{
  font-weight: bold;
  background-color: lightgray;
  min-width: 100px;
  height: 40px;
  text-shadow: -1px -1px black, 1px 1px white;
  color: gray;
  font-size: 16px;
  border-radius: 7px;
  box-shadow: 0 .2em gray;
  -webkit-user-select: none;  /* Chrome all / Safari all */
  -moz-user-select: none;     /* Firefox all */
  -ms-user-select: none;      /* IE 10+ */
  user-select: none;

}
.game-button:active {
  box-shadow: none;
  position: relative;
  top: .2em;
}

.game-button:hover {
  box-shadow: none;
  position: relative;
  top: .2em;
  color: lightseagreen;
}

</style>
