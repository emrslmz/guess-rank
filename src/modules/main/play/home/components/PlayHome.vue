<template>
  <div class="container">
    <div class="d-flex row justify-content-center text-center play-home-top">
      <div class="col-4 border-black">
       <router-link to="/play/game">
         <div class="left-card d-flex  justify-content-center align-items-center">
           <div class="col-4">
             <h2><i class="fas fa-gamepad"></i></h2></div>
           <div class="col-8 text-left">
             <small>Watch the <i class="fas fa-video"></i>, give the correct answer and earn balance!</small>
           </div>
         </div>
       </router-link>
        <div class="left-card d-flex  justify-content-center align-items-center">
          <div class="col-4">
            <h2><i class="fas fa-candy-cane"></i></h2></div>
          <div class="col-8 text-left">
            <small>Watch the, give the correct answer and earn balance!</small>
          </div>
        </div>
        <div class="left-card d-flex  justify-content-center align-items-center">
          <div class="col-4">
            <h2><i class="fas fa-archive"></i></h2></div>
          <div class="col-8 text-left">
            <small>Open boxes and earn great items and balances.</small>
          </div>
        </div>
      </div>
      <div class="col-2"></div>
      <div class="col-6 border-black">ads</div>
    </div>
  </div>
</template>


<style scoped>

.play-home-top {
  padding-top: 100px;
}
.border-black {
  border: 1px solid black;
}

.left-card {
  margin: 20px 0 20px 0;
  width: 100%;
  min-height: 100px;
  border-radius: 20px;
  background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  color: #191919;
  cursor: pointer;
  transition: 0.5s;
}

a {
  text-decoration: none;
}

.left-card:hover {
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgb(33, 33, 33) 0px 8px 16px -8px;
  transition: 0.5s;
}
</style>