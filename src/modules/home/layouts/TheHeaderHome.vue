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
        <div class="d-flex justify-content-between">

          <div class="px-2 w-100">
            <router-link to="/play">
              <button class="btn btn-info text-white btn-sm header-button">Play</button>
            </router-link>
          </div>

          <div class="px-2 w-100">
            <router-link to="/login-register">
              <button class="btn btn-info text-white btn-sm header-button">Register Login</button>
            </router-link>
          </div>

          <div class="px-2 w-100">
            <router-link to="/profile">
              <button class="btn btn-dark text-white btn-sm header-button">Profile</button>
            </router-link>
          </div>

        </div>
      </div>
    </nav>
  </div>
</header>
</template>


<style scoped>
.header-button {
  min-width: 100px;
}

</style>