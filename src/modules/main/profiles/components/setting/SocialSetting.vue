<template>
  <div>
    <div class="container" v-if="me">
      <div class="text-center">
        <h3><i class="fas fa-cogs"></i> Social and Other</h3>
        <small>Add or update social media accounts. You can also change other settings here.</small>
      </div>

      <div class="text-left">
        <h6><i class="fas fa-globe-europe"></i> Country: {{ me.country_id }}</h6>
        <h6><i class="fas fa-birthday-cake"></i> Birthyear: {{ me.birthday_at }}</h6>
        <h6><i class="fas fa-calendar-alt"></i> Registration time: <small>{{ me.created_at }}</small></h6>
        <h6><i class="fas fa-history"></i> Issue date: <small>{{ me.updated_at }}</small></h6>
      </div>

      <div class="d-flex flex-column justify-content-center align-items-center pb-4">
        <div>
          <small>Add Steam profile</small>
        </div>
        <div class="d-flex justify-content-center align-items-center">
          <div class="custom-input-icon">
            <i class="fab fa-steam"></i>
          </div>
          <div>
            <input class="custom-input" :value="me.steam" placeholder="Steam link." type="text">
          </div>
        </div>
      </div>
        <p>buraya steam sign in ve email doğrulama butonu gelecek</p>

      <div class="d-flex justify-content-center">
        <div class="green-success-button">
          <button class="btn w-50">Update</button>
        </div>
      </div>
    </div>
    <div class="container" v-else>
      <vue-element-loading :active="true" spinner="mini-spinner" duration="1.5" />
    </div>
  </div>
</template>


<script>
export default {
  name: 'ChangeAvatar',
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
