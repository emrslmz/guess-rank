<template>
  <div>
    <div class="text-center p-4">
      <h3><i class="fas fa-user-cog"></i> General Setting</h3>
      <small>You can change your name, surname, e-mail address or username. Please make sure it doesn't break the rules!</small>
    </div>
   <div class="d-flex flex-column justify-content-center align-items-center" v-if="me">
     <div class="d-xl-flex justify-content-around">

       <div class="d-flex flex-column justify-content-center pb-3 px-2">
         <div class="text-left px-2">
           <small>Name</small>
         </div>
         <div class="d-flex justify-content-center align-items-center">
           <div class="custom-input-icon">
             <i class="far fa-user"></i>
           </div>
           <div>
             <input class="custom-input" v-model="me.name" placeholder="Your Name" type="text">
           </div>
         </div>
       </div>

       <div class="d-flex flex-column justify-content-center center pb-3 px-2">
         <div class="text-left px-2">
           <small>Surname</small>
         </div>
         <div class="d-flex justify-content-center align-items-center">
           <div class="custom-input-icon">
             <i class="far fa-user"></i>
           </div>
           <div>
             <input class="custom-input" v-model="me.surname" placeholder="Your Surname" type="text">
           </div>
         </div>
       </div>


     </div>
     <div class="d-xl-flex justify-content-around">

       <div class="d-flex flex-column justify-content-center pb-4 px-2">
         <div class="text-left px-2">
           <small>Email</small>
         </div>
         <div class="d-flex justify-content-center align-items-center">
           <div class="custom-input-icon">
             <i class="fas fa-at"></i>
           </div>
           <div>
             <input class="custom-input" v-model="me.email" placeholder="Your e-mail" type="email">
           </div>
         </div>
       </div>

       <div class="d-flex flex-column justify-content-center pb-4 px-2">
         <div class="text-left px-2">
           <small>Username</small>
         </div>
         <div class="d-flex justify-content-center align-items-center">
           <div class="custom-input-icon">
             <i class="fas fa-user-tag"></i>
           </div>
           <div>
             <input class="custom-input" v-model="me.username" placeholder="Your Username" type="text">
           </div>
         </div>
       </div>
     </div>
   </div>
    <div class="d-flex flex-column justify-content-center align-items-center" v-else>
        <vue-element-loading :active="true" spinner="mini-spinner" duration="1.5" />
    </div>
    <div class="d-flex justify-content-center">
      <div class="green-success-button">
        <button class="btn w-50" @click="generalSettings(me)">Save</button>
      </div>
    </div>
  </div>
</template>


<script>
import { mapActions } from 'vuex';

export default {
  name: 'GeneralSettingCard',
  data() {
    return {
      user: {
        name: null,
        surname: null,
        email: null,
        username: null,
      }
    };
  },
  methods: {
    ...mapActions('Users', ['generalSetting']),
    generalSettings(data) {
      this.generalSetting(data);
    }
  }
};
</script>


<style scoped>
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

.green-success-button button {
  margin-top: 30px;
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
