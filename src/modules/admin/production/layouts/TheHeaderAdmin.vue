<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light">
      <h5 class="pl-5">Guess Rank</h5>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse px-3" id="navbarSupportedContent">
        <div class="navbar-nav mr-auto"></div>
        <div class="d-md-flex justify-content-between align-items-center">

          <!--HOME BUTTON-->
          <div class="d-flex align-items-center mb-2">
            <router-link to="/admin/home">
              <div class="header-button mx-2 my-2">
                <button class="btn btn-sm"><i class="fas fa-home"></i> Home</button>
              </div>
            </router-link>
          </div>
          <!--HOME BUTTON-->


          <!--USER SETTING-->
          <div class="d-flex align-items-center mb-2">
            <div class="dropdown header-button mx-2 my-2">
              <button class="btn btn-sm dropdown-toggle" type="button" id="profileDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-user-cog"></i> Users
              </button>
              <div class="dropdown-menu dropdown-menu-right" aria-labelledby="profileDropdown">
                <router-link to="/admin/user/users">
                  <span class="dropdown-item btn btn-sm"><i class="fas fa-users"></i> All Users</span>
                </router-link>
                <router-link to="/admin/user/add-user">
                  <span class="dropdown-item btn btn-sm"><i class="fas fa-user-plus"></i> Add Users</span>
                </router-link>
                <router-link to="/admin/user/admins">
                  <span class="dropdown-item btn btn-sm" type="button"><i class="fas fa-user-shield"></i> Admins</span>
                </router-link>
              </div>
            </div>
          </div>
          <!--/USER SETTING-->


          <!--SHOP SETTING-->
          <div class="d-flex align-items-center mb-2">
            <router-link to="/admin/shop">
              <div class="header-button mx-2 my-2">
                <button class="btn btn-sm"><i class="fas fa-store"></i> Shop</button>
              </div>
            </router-link>
          </div>
          <!--/SHOP SETTING-->


          <!--/OTHER SETTING-->
          <div class="d-flex align-items-center mb-2">
            <div class="dropdown header-button mx-2 my-2">
              <button class="btn btn-sm dropdown-toggle" type="button" id="otherDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-expand"></i> Other Setting
              </button>
              <div class="dropdown-menu dropdown-menu-right" aria-labelledby="otherDropdown">

                <router-link to="/admin/other">
                  <span class="dropdown-item btn btn-sm"><i class="fas fa-tachometer-alt"></i> Home</span>
                </router-link>
                <div style="height: 3px;"></div>
                <router-link to="/admin/other/game">
                  <span class="dropdown-item btn btn-sm"><i class="fas fa-gamepad"></i> Game Setting</span>
                </router-link>
                <router-link to="/admin/other/level">
                  <span class="dropdown-item btn btn-sm"><i class="fas fa-star-half-alt"></i> Level Setting</span>
                </router-link>
                <router-link to="/admin/other/video">
                  <span class="dropdown-item btn btn-sm"><i class="fab fa-youtube"></i> Videos</span>
                </router-link>
                <router-link to="/admin/other/video-group">
                  <span class="dropdown-item btn btn-sm"><i class="fas fa-th-list"></i> Video Group</span>
                </router-link>
                <router-link to="/admin/other/option">
                  <span class="dropdown-item btn btn-sm"><i class="fas fa-circle"></i> Video Options</span>
                </router-link>
                <router-link to="/admin/other/option-group">
                  <span class="dropdown-item btn btn-sm"><i class="fas fa-square"></i> Options Group</span>
                </router-link>
                <router-link to="/admin/other/movement">
                  <span class="dropdown-item btn btn-sm text-success"><i class="fas fa-sign"></i> Movements</span>
                </router-link>
              </div>
            </div>
          </div>
          <!--/OTHER SETTING-->


          <div class="d-flex align-items-center mb-2">
            <router-link to="/start">
              <div class="header-button mx-2 my-2">
                <button class="btn bg-dark btn-sm text-white"><i class="fas fa-home"></i> Start</button>
              </div>
            </router-link>

          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<style scoped>
.header-button button {
  background-color: white;
  color: #343A40;
  border-radius: 10px;
  font-weight: bold;
  transition: 0.4s;
  min-width: 100px;
  text-decoration: none;
}

.header-button button:hover {
  background-color: #4882c9;
  color: white;
  border-radius: 10px;
  font-weight: bold;
  transition: 0.4s;
}

.header-button span {
  background-color: white;
  color: #343A40;
  border-radius: 10px;
  font-weight: bold;
  transition: 0.4s;
  min-width: 100px;
  text-decoration: none;
}

.header-button a {
  text-decoration: none;
}

.header-button span:hover {
  background-color: #48c965;
  color: white;
  border-radius: 10px;
  font-weight: bold;
  transition: 0.4s;
  text-decoration: none;
}

.router-link-active button {
  background-color: #48c965;
  color: white;
  border-radius: 10px;
  font-weight: bold;
  transition: 0.4s;
  text-decoration: none;
}

.router-link-active span {
  background-color: #48c965;
  color: white;
  border-radius: 10px;
  font-weight: bold;
  transition: 0.4s;
  text-decoration: none;
}
</style>
