v<template>
  <div class="d-flex flex-column justify-content-center align-items-center">
    <div class="container">
      <div class="text-center pt-5">
        <h4 class="text-spacing5">Added Option Groups</h4>
        <small>All game option groups added. Click the CARD to edit or delete.</small>

        <div class="d-flex justify-content-center py-3">
          <div class="top-button">
            <router-link to="/admin/other/option-group/add">
              <button class="btn btn-sm mx-1">Add Option Group</button>
            </router-link>
          </div>
        </div>

      </div>
      <div class="d-flex row justify-content-center align-items-center">
        <div class="col-3" >
            <div class="option-group-card flex-column">
              <div class="text-center">
                <h5>ASD</h5>
              </div>
              <div class="text-center">
                <b>Option in this group: <small><i>XD</i></small></b>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.option-group-card {
  margin: 15px;
  width: 100%;
  min-height: 300px;
  border-radius: 20px;
  background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  color: #191919;
  display: flex;
  justify-content: center;
  transition: 0.5s;
}

a {
  text-decoration: none;
}

.option-group-card:hover {
  font-size: 17px;
  transition: 0.5s;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, #9b86e6 0px 8px 16px -8px;
}

.top-button button {
  background-color: white;
  color: #343A40;
  border-radius: 10px;
  font-weight: bold;
  transition: 0.4s;
  min-width: 100px;
  text-decoration: none;
}

.top-button button:hover {
  background-color: #9b86e6;
  color: white;
  border-radius: 10px;
  font-weight: bold;
  transition: 0.4s;
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