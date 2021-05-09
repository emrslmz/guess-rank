<template>
  <div class="container">
    <div class="d-flex row justify-content-center text-center play-home-top">
      <div class="col-4">
       <router-link to="/play/game">
         <div class="left-card d-flex justify-content-center align-items-center glow-on-hover">
           <div class="col-4">
             <h2><i class="fas fa-gamepad"></i></h2></div>
           <div class="col-8 text-left">
             <small>Watch the <i class="fas fa-video"></i>, give the correct answer and earn balance!</small>
           </div>
         </div>
       </router-link>
        <div class="left-card d-flex justify-content-center align-items-center mouse-disabled">
          <div class="col-4">
            <h2><i class="fas fa-candy-cane"></i></h2></div>
          <div class="col-8 text-left">
            <small>Watch the, give the correct answer and earn balance!</small>
          </div>
        </div>
        <div class="left-card d-flex  justify-content-center align-items-center mouse-disabled">
          <div class="col-4">
            <h2><i class="fas fa-archive"></i></h2></div>
          <div class="col-8 text-left">
            <small>Open boxes and earn great items and balances.</small>
          </div>
        </div>
      </div>
      <div class="col-2"></div>
      <div class="col-6 d-flex flex-column justify-content-center align-items-center">
        <h1><i class="fas fa-hat-wizard"></i></h1>
        <h4 class="custom-right-text">Watch and win</h4>

        <a target="_blank" href="https://www.youtube.com/watch?v=9xFYT1aleXA">
        <button class="btn btn-sm glow-on-hover"><b>Watch the tutorial video!</b> <small><i class="fas fa-external-link-alt"></i></small></button>
        </a>


      </div>
    </div>
  </div>
</template>


<style scoped>

.play-home-top {
  padding-top: 100px;
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
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
}

a {
  text-decoration: none;
}

.left-card:hover {
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgb(33, 33, 33) 0px 8px 16px -8px;
  transition: 0.5s;
}

.custom-right-text {
  font-weight: bold;
  font-size: 36px;
  color: #202c2d;
  text-shadow: 0 1px #808d93, -1px 0 #cdd2d5, -1px 2px #808d93, -2px 1px #cdd2d5, -2px 3px #808d93, -3px 2px #cdd2d5, -3px 4px #808d93, -4px 3px #cdd2d5, -4px 5px #808d93, -5px 4px #cdd2d5, -5px 6px #808d93, -6px 5px #cdd2d5, -6px 7px #808d93, -7px 6px #cdd2d5, -7px 8px #808d93, -8px 7px #cdd2d5;
}



/*COLORFUL GLOW FOR BUTTON*/
.glow-on-hover {
  height: 50px;
  border: none;
  outline: none;
  color: #fff;
  background: #111;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 10px;
}

.glow-on-hover:before {
  content: '';
  background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
  position: absolute;
  top: -2px;
  left:-2px;
  background-size: 400%;
  z-index: -1;
  filter: blur(5px);
  height: calc(100% + 4px);
  animation: infinite glowing 20s linear;
  opacity: 0;
  transition: opacity .3s ease-in-out;
  border-radius: 10px;
}

.glow-on-hover:active {
  color: #000
}

.glow-on-hover:active:after {
  background: transparent;
}

.glow-on-hover:hover:before {
  opacity: 1;
}

.glow-on-hover:after {
  z-index: -1;
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background: #111;
  left: 0;
  top: 0;
  border-radius: 10px;
}

@keyframes glowing {
  0% { background-position: 0 0; }
  50% { background-position: 400% 0; }
  100% { background-position: 0 0; }
}
/*COLORFUL GLOW FOR BUTTON*/



</style>
