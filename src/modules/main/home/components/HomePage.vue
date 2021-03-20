<template>
  <div class="container">
    <div style="padding-top: 300px"></div>
    <div class="d-xl-flex justify-content-center align-items-center">
     <div class="col-12 col-xl-6 text-xl-right">
       <div class="d-flex flex-column">
        <router-link to="/start">
          <button class="button-valorant btn-valorant-light">
            <span class="btn-valorant-inner">
              <span class="btn-valorant-slide"></span>
              <span class="btn-valorant-content">Let's Play</span>
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



/*CUSTOM VALORANT BUTTON*/
.button-valorant {
  /* Clean style */
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  border: none;
  background: none;
  color: var(--button-text-color);
  cursor: pointer;

  /* Clean style */

  --button-text-color: var(--background-color);
  --button-text-color-hover: var(--button-background-color);
  --border-color: #7D8082;
  --button-background-color: #ece8e1;
  --highlight-color: #ff4655;
  --button-inner-border-color: transparent;
  --button-bits-color: var(--background-color);
  --button-bits-color-hover: var(--button-background-color);

  position: relative;
  margin-bottom: 20px;
  height: 60px;
  width: 270px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 14px;
  transition: all .15s ease;
}

.button-valorant::before,
.button-valorant::after {
  content: '';
  display: block;
  position: absolute;
  right: 0; left: 0;
  height: calc(50% - 5px);
  border: 1px solid white;
  transition: all .15s ease;
}

.button-valorant::before {
  top: 0;
  border-bottom-width: 0;
}

.button-valorant::after {
  bottom: 0;
  border-top-width: 0;
}

.button-valorant:active,
.button-valorant:focus {
  outline: none;
}

.button-valorant:active::before,
.button-valorant:active::after {
  right: 3px;
  left: 3px;
}

.button-valorant:active::before {
  top: 3px;
}

.button-valorant:active::after {
  bottom: 3px;
}

.btn-valorant-inner {
  position: relative;
  display: block;
  padding: 10px;
  background-color: var(--button-background-color);
  overflow: hidden;
  box-shadow: inset 0px 0px 0px 1px var(--button-inner-border-color);
}

.btn-valorant-inner::before {
  content: '';
  display: block;
  position: absolute;
  top: 0; left: 0;
  width: 2px;
  height: 2px;
  background-color: var(--button-bits-color);
}

.btn-valorant-inner::after {
  content: '';
  display: block;
  position: absolute;
  right: 0; bottom: 0;
  width: 4px;
  height: 9px;
  background-color: var(--button-bits-color);
  transition: all .2s ease;
}

.btn-valorant-slide {
  display: block;
  position: absolute;
  top: 0; bottom: -1px; left: -8px;
  width: 0;
  background-color: var(--highlight-color);
  transform: skew(-15deg);
  transition: all .2s ease;
}

.btn-valorant-content {
  position: relative;
}

.button-valorant:hover {
  color: var(--button-text-color-hover);
}

.button-valorant:hover .btn-valorant-slide {
  width: calc(100% + 15px);
}

.button-valorant:hover .btn-valorant-inner::after {
  background-color: var(--button-bits-color-hover);
}

.btn-valorant-light {
  --button-background-color: var(--background-color);
  --button-text-color: var(--highlight-color);
  --button-inner-border-color: var(--highlight-color);
  --button-text-color-hover: #ece8e1;
  --button-bits-color-hover: #ece8e1;
}


/*CUSTOM VALORANT BUTTON*/
</style>