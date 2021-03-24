<template>
  <div class="d-flex justify-content-center align-items-center game-selected">
    <div class="container">
      <div class="text-center pt-5 mt-5">
        <h4 class="text-spacing5">Game's Categories</h4>
        <small>All Added Game Categories. Click """"" button for edit/delete.</small>
      </div>
      <div class="d-flex row flex-row justify-content-around">
        <div class="col-sm-6 col-12 game-category-card d-flex justify-content-center align-items-center text-center">
          <div>

            <div class="d-flex flex-column justify-content-center center pb-3 px-2">
              <div class="text-center px-2">
                <small>Game Name</small>
              </div>
              <div class="d-flex justify-content-center align-items-center ">
                <div class="custom-input-icon">
                  <i class="fas fa-gamepad"></i>
                </div>
                <div>
                  <input class="custom-input"   placeholder="Game names" type="text">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<style scoped>
.game-category-card {
  margin: 15px;
  width: 100%;
  min-height: 400px;
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

</style>