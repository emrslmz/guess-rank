<template>
  <div>
    <div class="container text-center">
      <div class="text-center pt-5">
        <h4 class="text-spacing5">User Level Status</h4>
        <small>You can see the level status of users from the table.</small>

        <div class="d-flex justify-content-center py-3">
          <div class="top-button">
            <router-link to="/admin/other/video/add">
              <button class="btn btn-sm mx-1">Add Video</button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-center container all-item-box">
      <table class="table table-dark">
        <thead>
        <tr class="text-center">
          <th><i class="fab fa-slack-hash"></i></th>
          <th scope="col"><i class="fas fa-fingerprint"></i> Video ID</th>
          <th scope="col"><i class="far fa-file-video"></i> Video Name</th>
          <th scope="col"><i class="fas fa-link"></i> Video URL</th>
          <th scope="col"><i class="fas fa-th-large"></i> Video Group</th>
          <th scope="col"><i class="fas fa-gamepad"></i> Video Game</th>
          <th scope="col"><i class="fas fa-pen-square"></i> Edit/Delete</th>
        </tr>
        </thead>
        <tbody>
        <tr class="text-center">
          <th><i class="fas fa-circle"></i></th>
          <th>dsa</th>
          <th>dsa</th>
          <th>d</th>
          <th>dsa</th>
          <th>dsa</th>
          <th>dsa</th>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>



<style scoped>

.all-item-box::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
  border-radius: 10px;
  background-color: #F5F5F5;
}

.all-item-box::-webkit-scrollbar {
  width: 12px;
  background-color: #F5F5F5;
}

.all-item-box::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
  background-color: #555;
}

.table {
  border-radius: 0 0 20px 20px;
}

.all-item-box {
  height: 600px;
  overflow-y: scroll;
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
  background-color: #8948c9;
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
