<template>
  <div class="grid grid-cols-12 mx-20 pb-20">
    <div class="col-span-12 md:col-span-10 flex flex-wrap justify-center items-center">
      <div v-for="(product, index) in products" :key="index">
        <market-item :item="product" />
      </div>
    </div>
    <div class="col-span-12 md:col-span-2">
      <div class="bg-cover bg-center  h-auto text-white py-24 px-10 object-fill" style="background-image: url(https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)">
        <div class="md:w-1/2">
          <p class="font-bold text-sm uppercase">Services</p>
          <p class="text-3xl font-bold">Multimedia products</p>
          <p class="text-2xl mb-10 leading-none">Atractive designs for your brand</p>
          <a href="#" class="bg-purple-800   text-white font-bold uppercase text-xs rounded hover:bg-gray-200 hover:text-gray-800 w-100">Contact us</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MarketItem from '@/modules/app/market/components/MarketItem.vue';
import { mapState, mapActions } from 'vuex';

export default {
  name: 'Market',
  components: { MarketItem },

  data() {
    return {
      errors: {},
    };
  },

  computed: {
    ...mapState('Market', ['products'])
  },

  methods: {
    ...mapActions('Market', ['getItem']),

  },

  async created() {
    try {
      await this.getItem();
    } catch (e) {
      this.errors = e;
    }
  },

};
</script>
