<template>
  <div>

   <div v-if="this.ready === true">
     <div class="d-flex justify-content-between align-items-center option" v-if="this.showOption === true">
       <div class="d-flex flex-column justify-content-center align-items-center px-3" v-for="(option, index) in getVideoOptionData" :key="index">
         <h5 class="fas fa-apple-alt" @click="answerOption(option.video_option_id)"></h5>
         <small>{{ option.option_name }}</small>
       </div>
       <div class="d-flex flex-column justify-content-center align-items-center px-3">
         <h5 style="font-size: small" class="fas fa-dot-circle text-danger" title="Pass"></h5>
         <h5 style="font-size: small" class="far fa-flag" title="Report"></h5>
       </div>
     </div>

     <div v-else>
       <p> {{ this.showOptionTime }} </p>
     </div>

   </div>

    <div v-else>
      <i>Stylishs will appear when everything is ready. </i>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  props: ['ready'],
  data() {
    return {
      showOptionTime: 5,
      showOption: false
    };
  },
  name: 'VideoOptionCard',
  computed: {
    ...mapGetters([
        'getVideoOptionData',
    ])
  },
  methods: {
    ...mapActions([
        'getVideoOption',
        'postUserAnswer',
    ]),
    async answerOption(optionId) {
     await this.postUserAnswer({optionId: optionId, videoId: this.$route.params.key})
    },
  },
  created() {
    this.getVideoOption(this.$route.params.key);

      setInterval(() => {
        if (this.showOptionTime > 0) {
          this.showOptionTime--;
        } else {
          this.showOption = true;
        }
      }, 1000);
  }
};
</script>


<style scoped>
.green-success-button button {
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
.option h5 {
  opacity: 0.8;
  transition: 0.2s;
  cursor: pointer;
}

.option h5:hover {
  font-size: 24px;
  opacity: 1;
  transition: 0.2s;
}

</style>
