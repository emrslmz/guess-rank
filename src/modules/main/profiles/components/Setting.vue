<template>
  <div class="container pt-5">
    <div class="d-xl-flex justify-content-around align-items-start">
      <div class="setting-card-left mt-4">
        <div class="list-group list-group-flush">
          <h4 class="list-group-item text-center py-4">Settings</h4>
          <button class="btn" :class="settingCard === 1 ? 'button-active' : 'left-button'" @click="settingCard = 1"><i class="fas fa-user-cog"></i> General</button>
          <button class="btn" :class="settingCard === 2 ? 'button-active' : 'left-button'"  @click="settingCard = 2"><i class="far fa-image"></i> Change/Upload Avatar</button>
          <button class="btn" :class="settingCard === 3 ? 'button-active' : 'left-button'"  @click="settingCard = 3"><i class="fas fa-key"></i> Password</button>
          <button class="btn" :class="settingCard === 4 ? 'button-active' : 'left-button'"  @click="settingCard = 4"><i class="fas fa-icons"></i> Social and Other Setting</button>
        </div>
      </div>
      <div class="setting-card-right d-flex justify-content-center align-items-center col-12 col-xl-8 mt-4">
          <general-setting v-if="settingCard === 1" />
          <change-avatar v-if="settingCard === 2" />
          <change-password v-if="settingCard === 3" />
          <social-setting v-if="settingCard === 4" />
      </div>
    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'ProfileSetting',
  data() {
    return {
      settingCard: 1,
    };
  },
  components: {
    GeneralSetting: () => import('@/modules/main/profiles/components/setting/GeneralSetting.vue'),
    ChangeAvatar: () => import('@/modules/main/profiles/components/setting/ChangeAvatar.vue'),
    ChangePassword: () => import('@/modules/main/profiles/components/setting/ChangePassword.vue'),
    SocialSetting: () => import('@/modules/main/profiles/components/setting/SocialSetting.vue'),
  },
  computed: {
    ...mapGetters([
       'getUserData',
    ]),
  },
}
</script>

<style scoped>
.setting-card-left {
  width: auto;
  min-width: 200px;
  min-height: 400px;
  border-radius: 20px;
  background-color: white;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
}

.setting-card-right {
  width: auto;
  min-width: 200px;
  min-height: 600px;
  border-radius: 20px;
  background-color: white;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
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

.large-input {
  max-width: 400px;
}

.custom-input:focus {
  transition: 0.5s;
  box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 10px 0px, rgba(0, 0, 0, 0.05) 0px 1px 10px 0px;
}

.green-success-button button {
  border-radius: 10px;
  background-color: #20D489;
  color: white;
  font-weight: bold;
  min-width: 100px;
}

.green-success-button button:hover {
  background-color: #28ffa7;
  font-weight: bold;
  color: white;
}

.left-button:nth-of-type(2n) {
  background-color: #ECECF6;
}

.left-button {
  margin: 10px;
  text-align: left;
  cursor: pointer;
  background-color: white;
  box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0 , 0, 0, 0.05) 0px 1px 1px 0px;
  transition: 0.5s;
}

.left-button:hover {
  background-color: white;
  box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 10px 0px, rgba(0, 0, 0, 0.05) 0px 1px 10px 0px;
  transition: 0.5s;
}

.button-active {
  margin: 10px;
  text-align: left;
  cursor: pointer;
  background-color: #191919;
  color: white;
  box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
  transition: 0.5s;
}

.button-active:hover {
  background-color: #2b2b2b;
  color: white;
  box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 10px 0px, rgba(0, 0, 0, 0.05) 0px 1px 10px 0px;
  transition: 0.5s;
}
</style>