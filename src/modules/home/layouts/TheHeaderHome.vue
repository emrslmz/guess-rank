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
        <div class="d-xl-flex justify-content-between">

            <router-link to="/category">
              <div class="header-button mx-2 my-2">
                <button class="btn btn-sm"><i class="far fa-play-circle"></i> Play</button>
              </div>
            </router-link>


            <div class="w-100">
              <router-link to="/login-register">
                <div class="header-button mx-2 my-2">
                  <button class="btn btn-sm"><i class="far fa-play-circle"></i> Register Login</button>
                </div>
              </router-link>
            </div>

            <router-link to="/profile">
              <div class="header-button mx-2 my-2">
                <button class="btn btn-sm"><i class="fas fa-user-circle"></i> Profile</button>
              </div>
            </router-link>
          </div>

        </div>
    </nav>
  </div>
</header>
</template>


<style scoped>

.header-button button {
  background-color: white;
  color: #343A40;
  border-radius: 10px;
  font-weight: bold;
  transition: 0.4s;
  min-width: 100px;
}

.header-button button:hover {
  background-color: #3c88df;
  color: white;
  border-radius: 10px;
  font-weight: bold;
  transition: 0.4s;
}

.router-link-active button {
  background-color: #3c88df;
  color: white;
  border-radius: 10px;
  font-weight: bold;
  transition: 0.4s;
}

</style>