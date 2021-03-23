<template>
  <div>
    <div class="text-center py-5">
      <h4 class="text-spacing5">Edit User</h4>
      <small>Edit user, do not block his account.</small>
    </div>
    <div class="d-flex justify-content-center align-items-center">
      <div class="d-flex  user-admin-edit-card text-center">
        <div>
          <div>
            <h5>You are editing <i>Emre</i>'s profile.</h5>
            <div class="text-left pl-4">
              <h6><i class="fas fa-globe-europe"></i> Country: </h6>
              <h6><i class="fas fa-birthday-cake"></i> Birthyear: </h6>
              <h6><i class="fas fa-calendar-alt"></i> Registration time: </h6>
              <h6><i class="fas fa-history"></i> Issue date: </h6>
            </div>
          </div>
          <div class="d-flex flex-column">
            <div class="d-flex justify-content-center align-items-center py-2">
              <div class="custom-input-icon">
                <i class="far fa-user"></i>
              </div>
              <div>
                <input class="custom-input"   placeholder="User Name" type="text" />
              </div>
            </div>
            <div class="d-flex justify-content-center align-items-center py-2">
              <div class="custom-input-icon">
                <i class="far fa-user"></i>
              </div>
              <div>
                <input class="custom-input"   placeholder="User Surname" type="text" />
              </div>
            </div>
          </div>

          <div class="d-flex flex-column justify-content-around">
            <div class="d-flex justify-content-center align-items-center py-2">
              <div class="custom-input-icon">
                <i class="fas fa-at"></i>
              </div>
              <div>
                <input class="custom-input"   placeholder="User email" type="text" />
              </div>
            </div>
            <div class="d-flex justify-content-center align-items-center py-2">
              <div class="custom-input-icon">
                <i class="fas fa-user-tag"></i>
              </div>
              <div>
                <input class="custom-input"   placeholder="Username" type="text" />
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'AdminUserEdit',
  computed: {
    ...mapGetters([
      'getUsersData',
    ])
  },
  methods: {
    ...mapActions([
        'getUsers',
    ])
  },

};
</script>

<style scoped>
.user-admin-edit-card {
  margin: 15px;
  width: 600px;
  min-height: 500px;
  border-radius: 20px;
  background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  color: #191919;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
}


.custom-input-icon {
  background-color: white;
  font-size: 20px;
  width: 50px;
  height: 40px;
  border-radius: 12px 0 0 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
}

.custom-input {
  border-radius: 0 12px 12px 0;
  padding-left: 10px;
  background-color: white;
  height: 40px;
  width: 100%;
  border: none;
  outline: none;
  transition: 0.5s;
  box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
}
</style>