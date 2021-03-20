<template>
  <div class="d-flex justify-content-center align-items-center game-category">
    <div class="container">
      <div class="text-center py-3">
        <h4 class="text-spacing5">Game's Categories</h4>
        <small>All Added Game Categories. Click """"" button for edit/delete.</small>
      </div>
      <div class="d-flex justify-content-around">
        <div class="col-3 game-category-card"></div>
        <div class="col-3 game-category-card"></div>
        <div class="col-3 game-category-card"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.game-category {
  min-height: 50vh;
}

.game-category-card {
  width: 100%;
  min-height: 100px;
  border-radius: 20px;
  background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
}
</style>


