<template>
  <div>

    <div v-if="this.ready === true">
     <div class="d-flex justify-content-between align-items-center option" v-if="this.showOption === true">
       <div class="d-flex flex-column justify-content-center align-items-center px-3" v-for="(option, index) in getVideoOptionData" :key="index">
         <h5 class="fas fa-egg" :class="optionAnswer.optionShake === true ? 'shake ' : ''" @click="answerOption(option.video_option_id, index)" disabled="disabled"></h5>
         <small>{{ option.option_name }}</small>
       </div>
       <div class="d-flex flex-column justify-content-center align-items-center px-3">
         <h5 style="font-size: small" class="fas fa-hands-helping text-success" title="Pass"></h5>
         <h5 style="font-size: small" class="far fa-flag" title="Report"></h5>

       </div>



       <div class="modal fade" :class="this.modalShow === true ? 'show' : ''" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
         <div class="modal-dialog modal-dialog-centered" role="document">
           <div class="modal-content">
             <div class="modal-header">
               <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
               <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                 <span aria-hidden="true">&times;</span>
               </button>
             </div>
             <div class="modal-body">
               ...
             </div>
             <div class="modal-footer">
               <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
               <button type="button" class="btn btn-primary">Save changes</button>
             </div>
           </div>
         </div>
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
      showOptionTime: 3,
      showOption: false,
      optionAnswer: {
        optionShake: false,
        optionDisable: true, //false disable true active
      },
      modalShow: false,
    };
  },
  name: 'VideoOptionCard',
  computed: {
    ...mapGetters([
        'getVideoOptionData',
        'getUserAnswer',
    ])
  },
  methods: {
    ...mapActions([
        'getVideoOption',
        'postUserAnswer',
    ]),
    async answerOption(optionId, index) {
      if (this.optionAnswer.optionDisable === true) {
        this.optionAnswer.optionShake = true;
        this.optionAnswer.optionDisable = false;

        this.modalShow = true;

        await this.postUserAnswer({optionId: optionId, videoId: this.$route.params.key});

        setTimeout(() => {
          this.getVideoOptionData.splice(index, 1);
          this.optionAnswer.optionShake = false;
          this.optionAnswer.optionDisable = true;

          if (this.getUserAnswer && this.getUserAnswer.is_correct === false) {
            this.$confetti.start();
            setTimeout(() => {
              this.$confetti.stop();
            }, 4000)
          }
        }, 3000);
      }
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



.shake {
  /* Start the shake animation and make the animation last for 0.5 seconds */
  animation: shake 0.5s;

  /* When the animation is finished, start again */
  animation-iteration-count: infinite;
  transition: 0.5s;
}

@keyframes shake {
  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
}

.colorfasted {
  color: white;
  animation: falseAnswer 2s infinite alternate;
}


@keyframes falseAnswer{
  0% { color: green; }
  100% { color: red; }

}
</style>
