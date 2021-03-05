<template>
  <div class="container">
   <div class="text-center py-5">
     <h4 class="text-spacing5">Registered Users</h4>
     <small>All registered users</small>
     <div class="d-flex justify-content-center">
      <div class="added-user-button" :class="showTable ? 'added-user-button-active' : ''">
        <button class="btn btn-sm mx-1" @click="showTable = !showTable">Table view</button>
      </div>
       <div class="added-user-button">
         <button class="btn btn-sm mx-1" data-toggle="modal" data-target="#exampleModalCenter">General Status</button>
       </div>
        <div class="added-user-button">
         <router-link to="/admin/user/add-user">
           <button class="btn btn-sm mx-1">Add User</button>
         </router-link>
       </div>
     </div>
   </div>
   <div class="row d-flex justify-content-center align-items-center" v-if="!showTable">
      <div class="col-4 p-3 card" v-for="(user, index) in getUsersData.usersData" :key="index">
          <div class="d-flex flex-column">
            <div class="d-flex justify-content-start align-items-center">
              <div class="profile-picture m-3" style="background-image: url('/assets/images/img/profile-picture.svg');"></div>
              <div class="d-flex flex-column">
                <strong>{{ user.name }}</strong>
                <strong>{{ user.email }}</strong>
                <strong class="text-lightgreen" v-if="user.email_verified_at">Account approved <i class="far fa-check-circle"></i></strong>
                <strong class="text-lightgreen" v-else>Account not approved <i class="far fa-times-circle"></i></strong>
                <div class="d-flex justify-content-start align-items-center pt-2">
                  <small><b>connected:</b></small>
                  <i class="fab fa-steam px-1"></i>
                  <i class="fas fa-envelope px-1"></i>
                </div>
              </div>
            </div>
            <div class="mt-2" align="center">
              <div class="progress" style="width: 300px;">
                <div class="text-white" role="progressbar" style="width: 25%; background-image: linear-gradient(to top, #0ba360 0%, #3cba92 100%);" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><b>651/2000</b></div>
              </div>
            </div>
            <div class="d-flex flex-column look-profile py-3 text-center">
              <button class="btn">Edit</button>
              <small>{{ user.created_at }}</small>
            </div>
          </div>
        </div>
  </div>
  <div class="row d-flex justify-content-center align-items-center" v-else>
    <table class="table table-striped table-dark">
      <thead>
      <tr>
        <th><i class="fab fa-slack-hash"></i></th>
        <th>Avatar</th>
        <th>Name</th>
        <th>Created</th>
        <th class="text-right pr-5">Edit-View-Delete</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(user, index) in getUsersData.usersData.reverse()" :key="index">
        <th>{{ index+1 }}</th>
        <td><div class="profile-picture-small" style="background-image: url('/assets/images/img/profile-picture.svg');"></div></td>
        <td>{{ user.name }}</td>
        <td>{{ user.created_at }}</td>
        <td>
          <div class="look-profile text-right pr-5">
            <button class="btn btn-sm">Edit</button>
          </div>
        </td>
      </tr>
      </tbody>
    </table>
  </div>

    <!-- Modal -->
    <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle"><i class="fas fa-columns"></i> General Status</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            Total Users:
          </div>
          <div class="modal-footer added-user-button">
            <button type="button" class="btn btn-secondary btn-sm" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal -->

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'AddedUsers',
  data() {
    return {
      showTable: false,
    };
  },
  computed: {
    ...mapGetters([
        'getUsersData',
    ]),
  },
  methods: {
    ...mapActions([
       'getUsers',
    ]),
  },
  created() {
    this.getUsers();
  },
};
</script>

<style scoped>
.card {
  width: 100%;
  min-height: 200px;
  margin: 10px;
}

.profile-picture {
  background-position: center;
  /*background-attachment: fixed;*/
  background-repeat: no-repeat;
  background-size: 70px;
  width: 70px;
  height: 70px;
  border-radius: 150px;
}

.profile-picture-small {
  background-position: center;
  /*background-attachment: fixed;*/
  background-repeat: no-repeat;
  background-size: 30px;
  width: 30px;
  height: 30px;
  border-radius: 150px;
}

.text-spacing5 {
  letter-spacing: 5px;
  font-weight: bold;
}

.look-profile button {
  border-radius: 10px;
  background-color: #20D489;
  color: white;
  font-weight: bold;
  min-width: 100px;
}

.look-profile button:hover {
  background-color: #28ffa7;
  font-weight: bold;
  color: white;
}

.added-user-button button {
  background-color: white;
  color: #343A40;
  border-radius: 10px;
  font-weight: bold;
  transition: 0.4s;
  min-width: 100px;
  text-decoration: none;
}

.added-user-button button:hover {
  background-color: #191919;
  color: white;
  border-radius: 10px;
  font-weight: bold;
  transition: 0.4s;
}

.added-user-button-active button {
  background-color: #191919;
  color: white;
  border-radius: 10px;
  font-weight: bold;
  transition: 0.4s;
}

</style>