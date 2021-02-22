<template>
  <div>
    <div class="text-center py-3">
      <h2>Category</h2>
    </div>
    <div class="d-flex flex-column justify-content-center align-items-center">
      <!-- DAILY AWARD-->
      <div class="category-card bonus-card text-gold d-flex justify-content-between align-items-center px-3">
         <div>
           <h1><i class="fas fa-history"></i></h1>
         </div>
          <div class="text-right">
            <h4><i class="fas fa-play-circle play-button"></i> Daily reward!</h4>
            <small>video viewing right</small>
          </div>
      </div>
      <!-- /DAILY AWARD-->

      <div class="category-card most-popular d-flex justify-content-between align-items-center px-3">
        <div>
          <h1><i class="fas fa-star"></i></h1>
        </div>
        <div>
          <h4><i class="fas fa-play-circle play-button"></i> Most Popular</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.category-card {
  margin: 10px 0 5px 0;
  border-radius: 20px;
  width: 80%;
  min-height: 100px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
}

.most-popular {
  background-image: linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%);
}
.bonus-card {
  background-image: radial-gradient(circle 248px at center, #16d9e3 0%, #30c7ec 47%, #46aef7 100%);
}
</style>
