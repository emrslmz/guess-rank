<template>
  <div class="relative w-full">
    <label class="block text-blueGray-600 text-xs font-bold mb-2" :for="vmId"> {{ label }} </label>
    <input v-bind="$attrs" :id="vmId" v-model="model" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none disabled:bg-gray-200 disabled:opacity-50 focus:ring w-full ease-linear transition-all duration-150" />
    <errors v-if="isError" :name="name" :errors="fieldErrors"/>
  </div>
</template>

<script>
import { randomString } from '@/core/utils/string.utils';

import Errors from '@/core/components/errors/Errors.vue';

export default {
  name: 'GrInput',

  components: {
    Errors,
  },

  inheritAttrs: false,

  props: {
    name: {
      required: true,
      type: String,
      default: '',
    },

    label: {
      required: true,
      type: String,
      default: '',
    },

    modelValue: {
      type: [String, Boolean, Number],
      default: '',
      description: 'Radio value',
    },

    errors: {
      required: false,
      type: Object,
      default: () => {},
    }
  },
  emits: ['input', 'update:modelValue'],

  data() {
    return {
      vmId: '',
    };
  },

  computed: {
    model: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit('update:modelValue', value);
      },
    },

    isError() {
      return !!(this.errors && this.errors[this.name]);
    },

    fieldErrors() {
      if (this.isError) {
        return this.errors[this.name];
      }
      return [];
    },
  },

  mounted() {
    this.vmId = randomString();
  },
};
</script>

<style scoped></style>
