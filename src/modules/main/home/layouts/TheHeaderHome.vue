<template>
<header>
  <div class="top-bar">
    <nav class="navbar navbar-expand-lg navbar-light">
      <h5 class="pl-5">Guess Rank</h5>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse px-3" id="navbarSupportedContent">
        <div class="navbar-nav mr-auto"></div>
        <div class="d-md-flex justify-content-between align-items-center">

          <div class="d-flex align-items-center mb-2">
            <router-link to="/start">
              <div class="header-button mx-2 my-2">
                <button class="btn btn-sm"><i class="fas fa-home"></i> Start</button>
              </div>
            </router-link>
          </div>

          <div class="d-flex align-items-center mb-2" v-if="me">
            <router-link to="/play">
              <div class="header-button mx-2 my-2">
                <button class="btn btn-sm"><i class="far fa-play-circle"></i> Play</button>
              </div>
            </router-link>
          </div>

          <div class="d-flex align-items-center mb-2" v-if="me">
            <router-link to="/shop">
              <div class="header-button mx-2 my-2">
                <button class="btn btn-sm"><i class="fas fa-shopping-cart"></i> Shop</button>
              </div>
            </router-link>
          </div>


          <div class="d-flex align-items-center mb-2" v-if="!me">
            <router-link to="/login-register">
              <div class="header-button mx-2 my-2">
                <button class="btn btn-sm"><i class="far fa-hand-spock"></i> Sign in/up</button>
              </div>
            </router-link>
          </div>

          <div class="custom-vertical-hr" v-if="me"></div>

          <div class="d-flex align-items-center mb-2" v-if="me">
            <div class="dropdown header-button mx-2 my-2">
              <button class="btn btn-sm dropdown-toggle" type="button" id="profileDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Profile
              </button>
              <div class="dropdown-menu dropdown-menu-right" aria-labelledby="profileDropdown">
                <router-link to="/profiles">
                  <span class="dropdown-item btn btn-sm"><i class="far fa-user-circle"></i> Profile</span>
                </router-link>
                <router-link to="/profile/setting">
                  <span class="dropdown-item btn btn-sm" type="button"><i class="fas fa-cog"></i> Setting</span>
                </router-link>
                <span class="dropdown-item btn btn-sm" type="button"><i class="fas fa-users"></i>  Reference</span>
                <span class="dropdown-item btn btn-sm" type="button"><i class="fas fa-shopping-bag"></i> My basket</span>
                <router-link to="/buy">
                  <span class="dropdown-item btn btn-sm" type="button"><i class="far fa-gem"></i> Buy extra</span>
                </router-link>
                <span class="dropdown-item btn btn-sm text-danger" type="button" @click="logout()"><i class="fas fa-sign-out-alt "></i> Logout</span>
              </div>
            </div>
            <div class="profile-picture" style="background-image: url('/assets/images/img/profile-picture.svg');"></div>

          </div>

          <div class="d-flex align-items-center mb-2" v-if="me">
            <div class="header-balance mx-1 my-2">
               Balance: 5000<i class="fas fa-lira-sign"></i>
              <br>
              <router-link to="/buy">
                <small class="text-white">Buy <i class="fas fa-plus-circle"></i></small>
              </router-link>
            </div>
          </div>

        </div>
      </div>
    </nav>
  </div>
</header>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'TheHeaderHome',
  computed: {
    ...mapState('Users', ['me']),
  },
  methods: {
    ...mapActions('Users', ['logout']),
  },
};
</script>



<style scoped>

.top-bar {
  border-top: 5px solid #20d489;
  border-right: none;
  border-bottom: none;
  border-left: none;
}

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

.custom-vertical-hr {
  border-left: 1px solid #cbcaca;
  border-top: none;
  border-bottom: none;
  border-right: none;
  height: 20px
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
