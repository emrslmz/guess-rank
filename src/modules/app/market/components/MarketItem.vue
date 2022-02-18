<template>
  <div>
    <div class="w-80 w-full p-4">
      <div class="card flex flex-col justify-center bg-white rounded-lg shadow-2xl">
        <span class="inline-block text-white text-center bg-emerald-400 text-xs font-bold rounded-t-lg py-1 w-100" v-if="item.is_available">Şimdi alınabilir</span>
        <div class="p-8">
          <div class="prod-title">
            <p class="text-2xl uppercase text-gray-900 font-bold">{{ item.name }}</p>
            <p class="uppercase text-sm text-gray-400">
              {{ item.random_key }}
            </p>
          </div>
          <div class="prod-img">
            <img src="/public/img/items/fiveseven_monkey_business.png"
                 class="w-full object-cover object-center" />
          </div>
          <div class="prod-info grid gap-10">
            <div>
              <ul class="flex flex-row justify-center items-center">
                <li class="mr-4 last:mr-0">
              <span
                  class="block p-1 border-2 border-gray-500 rounded-full transition ease-in duration-300">
                <a href="#blue" class="block w-6 h-6 bg-blue-900 rounded-full"></a>
              </span>
                </li>
                <li class="mr-4 last:mr-0">
              <span
                  class="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
                <a href="#yellow" class="block w-6 h-6 bg-yellow-500 rounded-full"></a>
              </span>
                </li>
                <li class="mr-4 last:mr-0">
              <span
                  class="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
                <a href="#red" class="block w-6 h-6 bg-red-500 rounded-full"></a>
              </span>
                </li>
                <li class="mr-4 last:mr-0">
              <span
                  class="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
                <a href="#green" class="block w-6 h-6 bg-green-500 rounded-full"></a>
              </span>
                </li>
              </ul>
            </div>
            <div class="flex flex-wrap justify-between items-center text-gray-900">
              <p class="font-bold text-xl w-full">{{ item.price }} $</p>
              <button
                  class="px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none w-full">Sepete ekle</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MarketItem',
  props: {
    item: {
      required: true,
      type: Object,
      default: () => {},
    },
  }
};
</script>
