<template>
  <div class="d-flex justify-content-center align-items-center game-add">
    <div class="container">
      <div class="text-center pt-5">
        <h4 class="text-spacing5">Add Game</h4>
        <small>All Added Game. Click card for edit/delete.</small>
      </div>
      <div class="d-flex row flex-row justify-content-around">
        <div class="col-md-8 col-12 game-add-card d-flex flex-column justify-content-center align-items-center p-5">

          <div class="d-flex justify-content-between align-items-center">
            <div class="d-flex flex-column justify-content-center center pb-3 px-2">
              <div class="text-center px-2">
                <small>Game Name</small>
              </div>
              <div class="d-flex justify-content-center align-items-center ">
                <div class="custom-input-icon">
                  <i class="fas fa-gamepad"></i>
                </div>
                <div>
                  <input class="custom-input"  placeholder="Game names" type="text" />
                </div>
              </div>
            </div>

            <div class="d-flex flex-column justify-content-center center pb-3 px-2">
              <div class="text-center px-2">
                <small>Game ID</small>
              </div>
              <div class="d-flex justify-content-center align-items-center ">
                <div class="custom-input-icon">
                  <i class="fas fa-fingerprint"></i>
                </div>
                <div>
                  <input class="custom-input"  placeholder="Game ID" type="number" />
                </div>
              </div>
            </div>
          </div>

          <div class="d-flex flex-column justify-content-center center pb-3 px-2">
            <div class="text-center px-2">
              <small>Game Description</small>
            </div>
            <div class="d-flex justify-content-center align-items-center ">
              <div class="custom-input-icon">
                <i class="fas fa-text-height"></i>
              </div>
              <div>
                <textarea cols="60" class="custom-textarea"  placeholder="Game Description"></textarea>
              </div>
            </div>
          </div>

       <div class="d-flex justify-content-around align-items center">

         <div class="d-xl-flex justify-content-center align-items-center py-3">
           <div class="game-logo-picture" style="background-image: url('/assets/images/img/profile-picture.svg');"></div>
           <div class="text-xl-left">
             <label for="upload-picture">
                Game Logo
               <br>
               <input type="file" id="upload-picture" />
             </label>
           </div>
         </div>

         <div class="d-flex flex-column justify-content-center center pb-3">
           <div class="text-left px-2">
             <small>Level </small>
           </div>
           <div class="d-flex justify-content-center align-items-center">
             <div class="custom-input-icon">
               <i class="fas fa-expand-alt"></i>
             </div>
             <select class="custom-input">
               <option value="">Counter Strike</option>
               <option value="">Valorant</option>
               <option value="">PUBG</option>
             </select>
           </div>
         </div>
       </div>

          <hr style="width: 400px">

          <div class="d-flex justify-content-between align-items-center">
            <div class="d-flex flex-column justify-content-center center pb-3 px-2">
              <div class="text-center px-2">
                <small>Background Color</small>
              </div>
              <div class="d-flex justify-content-center align-items-center ">
                <div class="custom-input-icon">
                  <i class="fas fa-sliders-h"></i>
                </div>
                <div>
                  <input class="custom-input"  placeholder="Background Color" type="text" />
                </div>
              </div>
            </div>

            <div class="d-flex flex-column justify-content-center center pb-3 px-2">
              <div class="text-center px-2">
                <small>Custom Color</small>
              </div>
              <div class="d-flex justify-content-center align-items-center ">
                <div class="custom-input-icon">
                  <i class="fas fa-palette"></i>
                </div>
                <div>
                  <input class="custom-input"  placeholder="Custom Color red, #FFF" type="text" />
                </div>
              </div>
            </div>
          </div>

         <div class="d-flex justify-content-between align-items-center">
           <div class="d-flex justify-content-between align-items center px-2">
             <div class="d-flex flex-column justify-content-center center pb-3">
               <div class="text-center">
                 <small>Game Hidden Status</small>
               </div>
               <div class="d-flex justify-content-center align-items-center">
                 <span><i class="far fa-eye-slash"></i></span>
                 <div><input class="dark-mode-button mt-2 mx-3" type="checkbox" /></div>
                 <span><i class="far fa-eye"></i></span>
               </div>
             </div>
           </div>

           <div class="d-flex justify-content-between align-items center px-2">
             <div class="d-flex flex-column justify-content-center center pb-3">
               <div class="text-center">
                 <small>Game Available</small>
               </div>
               <div class="d-flex justify-content-center align-items-center">
                 <span><i class="far fa-eye-slash"></i></span>
                 <div><input class="dark-mode-button mt-2 mx-3" type="checkbox" /></div>
                 <span><i class="far fa-eye"></i></span>
               </div>
             </div>
           </div>
         </div>

          <div class="d-flex justify-content-center">
            <div class="green-success-button">
              <button class="btn w-100 btn-sm">Add</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>

.game-add-card {
  margin: 15px;
  width: 100%;
  min-height: 200px;
  border-radius: 20px;
  background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  color: #191919;
  text-decoration: none;
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

.custom-textarea {
  border-radius: 0 12px 12px 0;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 100%;
  border: none;
  outline: none;
  transition: 0.5s;
  box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
}

.game-logo-picture {
  background-position: center;
  /*background-attachment: fixed;*/
  background-repeat: no-repeat;
  background-size: 80px;
  width: 80px;
  height: 80px;
  border-radius: 150px;
}

#upload-picture {
  font-size: 12px;
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

/****************************************/
/*APPLE CHECKBOX STYLE */
input.dark-mode-button {
  position: relative;
  appearance: none; outline: none;
  width: 50px; height: 30px;
  background-color: #ffffff; border: 1px solid #D9DADC;
  border-radius: 50px; box-shadow: inset -20px 0 0 0 #ffffff;
  transition-duration: 200ms;
}


input.dark-mode-button:after {
  content: "";
  position: absolute;
  top: 0; left: 1px;
  width: 26px; height: 26px;
  background-color: transparent;
  border-radius: 50%; box-shadow: 2px 4px 6px rgba(0,0,0,0.2);
}


input.dark-mode-button:checked {
  border-color: #20d489;
  box-shadow: inset 20px 0 0 0 #20d489;
}


input.dark-mode-button:checked:after {
  left: 20px;
  box-shadow: -2px 4px 3px rgba(0,0,0,0.05);
}

/*APPLE CHECKBOX STYLE */
/****************************************/
</style>