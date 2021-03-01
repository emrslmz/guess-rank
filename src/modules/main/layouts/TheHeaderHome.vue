<template>
<header>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light">
      <h5 class="pl-5">Guess Rank</h5>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse px-3" id="navbarSupportedContent">
        <div class="navbar-nav mr-auto"></div>
        <div class="d-md-flex justify-content-between align-items-center">

          <div class="d-flex align-items-center mb-2">
            <router-link to="/category">
              <div class="header-button mx-2 my-2">
                <button class="btn btn-sm"><i class="far fa-play-circle"></i> Play</button>
              </div>
            </router-link>
          </div>

          <div class="d-flex align-items-center mb-2">
            <router-link to="/category">
              <div class="header-button mx-2 my-2">
                <button class="btn btn-sm"><i class="fas fa-shopping-cart"></i> Shop</button>
              </div>
            </router-link>
          </div>


          <div class="d-flex align-items-center mb-2">
            <router-link to="/login-register">
              <div class="header-button mx-2 my-2">
                <button class="btn btn-sm"><i class="far fa-play-circle"></i> Register Login</button>
              </div>
            </router-link>
          </div>


          <div class="d-flex align-items-center mb-2">
            <div class="dropdown header-button mx-2 my-2">
              <button class="btn btn-sm dropdown-toggle" type="button" id="profileDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Profile {{ getProfileRightCard}}
              </button>
              <div class="dropdown-menu dropdown-menu-right" aria-labelledby="profileDropdown">
                <router-link to="/profile">
                  <span class="dropdown-item btn btn-sm"><i class="far fa-user-circle"></i> Profile</span>
                </router-link>
                <span class="dropdown-item btn btn-sm" type="button"><i class="fas fa-cog"></i> Setting</span>
                <span class="dropdown-item btn btn-sm" type="button"><i class="fas fa-users"></i>  Reference</span>
                <span class="dropdown-item btn btn-sm" type="button"><i class="fas fa-shopping-bag"></i> My basket</span>
                <span class="dropdown-item btn btn-sm" type="button"><i class="far fa-gem"></i> Buy extra</span>
              </div>
            </div>
            <div class="profile-picture" style="background-image: url('/assets/images/img/profile-picture.svg');"></div>

          </div>


          <div class="d-flex align-items-center mb-2">
            <div class="header-balance mx-1 my-2">
               Balance: 5000<i class="fas fa-lira-sign"></i>
              <br>
                <small>Buy <i class="fas fa-plus-circle"></i></small>
            </div>
          </div>

        </div>
      </div>
    </nav>
  </div>
</header>
</template>

<script>

export default {
 name: 'TheHeaderHome',

};
</script>


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
  background-color: #48c965;
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

.show button {
  background-color: #48c965;
  color: white;
  border-radius: 10px;
  font-weight: bold;
  transition: 0.4s;
}

.show button:after {
  background-color: #48c965;
  color: white;
  border-radius: 10px;
  font-weight: bold;
  transition: 0.4s;
}

.router-link-active span button {
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

.profile-picture {
  background-position: center;
  /*background-attachment: fixed;*/
  background-repeat: no-repeat;
  background-size: 50px;
  width: 50px;
  height: 50px;
  border-radius: 150px;
}

.header-balance  {
  font-size: small;
  font-weight: bold;
}

</style>