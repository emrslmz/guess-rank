<template>
  <div>
    <div class="sidebar flex-column text-white">

      <div class="sidebar-button" title="Previous Page">
        <i class="fas fa-undo-alt" @click="goBack"></i>
      </div>

      <div class="sidebar-button-small" title="Home Page">
        <router-link to="/admin/home">
         <i class="fas fa-home"></i>
       </router-link>
      </div>

      <div class="sidebar-button-small" title="Users">
        <router-link to="/admin/user/users">
          <i class="fas fa-user-cog"></i>
        </router-link>
      </div>

      <div class="sidebar-button-small" title="Shop Settings">
        <router-link to="/admin/shop">
          <i class="fas fa-store"></i>
        </router-link>
      </div>

<!--      <div class="sidebar-button-small" title="Games Settings">-->
<!--        <router-link to="/admin/other/game">-->
<!--          <i class="fas fa-gamepad"></i>-->
<!--        </router-link>-->
<!--      </div>-->

<!--      <div class="sidebar-button-small" title="Levels Settings">-->
<!--        <router-link to="/admin/other/level">-->
<!--          <i class="fas fa-star-half-alt"></i>-->
<!--        </router-link>-->
<!--      </div>-->

<!--      <div class="sidebar-button-small" title="Videos Settings">-->
<!--        <router-link to="/admin/other/video">-->
<!--          <i class="fab fa-youtube"></i>-->
<!--        </router-link>-->
<!--      </div>-->

<!--      <div class="sidebar-button-small" title="Video Group Settings">-->
<!--        <router-link to="/admin/other/video-group">-->
<!--          <i class="fas fa-th-list"></i>-->
<!--        </router-link>-->
<!--      </div>-->

<!--      <div class="sidebar-button-small" title="Video Option Settings">-->
<!--        <router-link to="/admin/other/option">-->
<!--          <i class="fas fa-circle"></i>-->
<!--        </router-link>-->
<!--      </div>-->

<!--      <div class="sidebar-button-small" title="Option Group Setting">-->
<!--        <router-link to="/admin/other/option-group">-->
<!--          <i class="fas fa-square"></i>-->
<!--        </router-link>-->
<!--      </div>-->

    </div>
  </div>
</template>

<script>
export default {
  name: 'SideBar',
  methods: {
    goBack() {
        return this.$router.go(-1);
      }
    },
    // goNext() {
    //   this.$router.go(1);
    // },
};
</script>

<style scoped>
.sidebar {
  display: flex;
  padding: 0 5px 0 5px;
  justify-content: center;
  align-items: center;
  margin-top: 300px;
  background-color: #181818;
  border-radius: 0 30px 30px 0;
  width: 60px;
  min-height: 300px;
  position: absolute;
  left: 0;
  z-index: +1;
}

.sidebar-button a {
  text-decoration: none;
  color: white;
}

.sidebar-button i {
  padding: 5px 0 5px 0;
  font-size: 28px;
  opacity: 0.7;
  transition: 0.5s;
  cursor: pointer;
}

.sidebar-button i:hover {
  opacity: 1;
  transition: 0.2s;
}


.sidebar-button-small a {
  text-decoration: none;
  color: white;
}

.sidebar-button-small i {
  padding: 5px 0 5px 0;
  font-size: 18px;
  opacity: 0.7;
  transition: 0.5s;
  cursor: pointer;
}

.sidebar-button-small i:hover {
  opacity: 1;
  transition: 0.2s;
}


@media screen and (max-width: 660px) {

  .sidebar {
    display: none;
  }

  .sidebar-button {
    display: none;
  }

  .sidebar-button-small {
    display: none;
  }
}
</style>