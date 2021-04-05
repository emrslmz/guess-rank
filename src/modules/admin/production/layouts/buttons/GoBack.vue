<template>
  <div class="d-flex align-items-center mb-2">
      <div class="go-back-button mx-2 my-2">
        <button :class="buttonClass" class="btn bg-warning btn-sm" @click="goBack"><i class="fas fa-undo-alt"></i> Back</button>
      </div>
  </div>
</template>

<script>
export default {
  name: 'GoBackButton',
  props: ['buttonClass'],
  data() {
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      buttonClass: '',
    };
  },
  methods: {
    goBack() {
      return this.$router.go(-1);
    }
  },
};
</script>


<style scoped>
.go-back-button button {
  background-color: white;
  color: white;
  border-radius: 10px;
  font-weight: bold;
  transition: 0.4s;
  /*min-width: 100px;*/
  text-decoration: none;
}

.go-back-button button:hover {
  background-color: #48c965;
  color: white;
  border-radius: 10px;
  font-weight: bold;
  transition: 0.4s;
}

.go-back-button span {
  background-color: white;
  color: #343A40;
  border-radius: 10px;
  font-weight: bold;
  transition: 0.4s;
  min-width: 100px;
  text-decoration: none;
}


.go-back-button span:hover {
  background-color: #48c965;
  color: white;
  border-radius: 10px;
  font-weight: bold;
  transition: 0.4s;
  text-decoration: none;
}

</style>