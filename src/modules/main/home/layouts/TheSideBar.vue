<template>
  <div>
    <div class="sidebar flex-column text-white">
      <div class="sidebar-button" title="Previous Page">
        <i class="fas fa-undo-alt" @click="goBack"></i>
      </div>
      <div class="sidebar-button" title="Home Page">
       <router-link to="/start">
         <i class="fas fa-home"></i>
       </router-link>
      </div>

      <div class="sidebar-button" title="My Basket" v-if="me">
        <router-link to="/shop">
          <i class="fas fa-shopping-basket"></i>
        </router-link>
      </div>
      <!--      <div class="sidebar-button top-" title="Next Page">-->
<!--        <i class="fas fa-undo-alt fa-flip-horizontal" @click="goNext"></i>-->
<!--      </div>-->
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: 'SideBar',
  computed: {
    ...mapState('Users', ['me']),
  },
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
  margin-top: 200px;
  background-color: #181818;
  border-radius: 0 30px 30px 0;
  width: 60px;
  height: 300px;
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
  font-size: 24px;
  opacity: 0.7;
  transition: 0.5s;
  cursor: pointer;
}

.sidebar-button i:hover {
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
}
</style>
