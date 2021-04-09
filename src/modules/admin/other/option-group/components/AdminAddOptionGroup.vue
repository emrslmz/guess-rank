<template>
  <div class="d-flex flex-column justify-content-center align-items-center">
    <div class="container">
      <div class="text-center pt-5">
        <h4 class="text-spacing5">Added Option Groups</h4>
        <small>All game option groups added. Click the CARD to edit or delete.</small>
      </div>
    </div>
    <div class="option-group-card flex-column col-12 col-md-6">

     <div class="d-flex justify-content-center align-items-center">

       <div class="d-flex flex-column justify-content-center center pb-3 px-2">
         <div class="text-left px-2">
           <small>Option Group name</small>
         </div>
         <div class="d-flex justify-content-center align-items-center">
           <div class="custom-input-icon">
             <i class="far fa-hand-scissors"></i>
           </div>
           <div>
             <input class="custom-input"  placeholder="Group Name" type="text">
           </div>
         </div>
       </div>

       <div class="d-flex flex-column justify-content-center center pb-3 px-2">
         <div class="text-left px-2">
           <small>Option Group Time</small>
         </div>
         <div class="d-flex justify-content-center align-items-center">
           <div class="custom-input-icon">
             <i class="fas fa-stopwatch"></i>
           </div>
           <div>
             <input class="custom-input"  placeholder="Time -Def: 10" type="number">
           </div>
         </div>
       </div>
     </div>

      <div class="d-flex justify-content-center align-items center pb-5">

        <div class="d-flex justify-content-between align-items center px-4">
          <div class="d-flex flex-column justify-content-center center">
            <div class="text-center">
              <small>Group is active?</small>
            </div>
            <div class="d-flex justify-content-center align-items-center">
              <div>
                <input class="dark-mode-button mt-2 mx-3" :value="null"  type="radio" />
              </div>
            </div>
          </div>
        </div>


        <div class="d-flex flex-column justify-content-center center ">
          <div class="text-left px-2">
            <small>Select Option</small>
          </div>
          <div class="d-flex justify-content-center align-items-center">
            <div class="custom-input-icon">
              <i class="fas fa-circle"></i>
            </div>
            <div>
              <select class="custom-select">
                <option>mkmlş</option>
                <option value="null" disabled>None</option>
              </select>
            </div>
          </div>
        </div>

      </div>

      <div class="row text-center">

         <div class="col-3">
           <h6>Options</h6>
         </div>

      </div>

      <div class="d-flex green-success-button justify-content-center align-items center">
        <button class="btn mx-2"><i class="fas fa-plus"></i> Add</button>
      </div>

    </div>
  </div>
</template>


<style scoped>
.option-group-card {
  margin: 15px;
  width: 100%;
  min-height: 400px;
  border-radius: 20px;
  background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  color: #191919;
  display: flex;
  justify-content: center;
  transition: 0.5s;
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

.custom-select {
  border-radius: 0 12px 12px 0;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 120px;
  border: none;
  outline: none;
  transition: 0.5s;
  box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
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