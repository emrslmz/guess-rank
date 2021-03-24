<template>
  <div class="game-category-home flex-column">
    <div class="text-center py-3">
      <h4 class="text-spacing5">Shop Setting</h4>
      <small>Add/edit or delete product.</small>
    </div>
    <div>
      <router-link to="/admin/shop/items">
        <button class="button-valorant">
          <span class="btn-valorant-inner">
            <span class="btn-valorant-slide"></span>
            <span class="btn-valorant-content"><i class="fas fa-store"></i> Added Product</span>
          </span>
        </button>
      </router-link>
    </div>


    <div>
      <router-link to="/admin/shop/items-add">
        <button class="button-valorant btn-valorant-light">
          <span class="btn-valorant-inner">
            <span class="btn-valorant-slide"></span>
            <span class="btn-valorant-content"><i class="fas fa-plus-circle"></i> Add Item</span>
          </span>
        </button>
      </router-link>
    </div>
  </div>
</template>


<style scoped>
.game-category-home {
  display: flex;
  align-items: center;
  justify-content: center;
  /*background-color: #0f1923;*/
}

a {
  color: #191919;
}
a:hover {
  color: #00F
}

/*CUSTOM VALORANT BUTTON*/
.button-valorant {
  /* Clean style */
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  border: none;
  background: none;
  color: var(--button-text-color);
  cursor: pointer;
  /* Clean style */

  --button-text-color: var(--background-color);
  --button-text-color-hover: var(--button-background-color);
  --border-color: #7D8082;
  --button-background-color: #ece8e1;
  --highlight-color: #ff4655;
  --button-inner-border-color: transparent;
  --button-bits-color: var(--background-color);
  --button-bits-color-hover: var(--button-background-color);

  position: relative;
  padding: 8px;
  margin-bottom: 20px;
  height: 80px;
  width: 400px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 14px;
  transition: all .15s ease;
}

.button-valorant::before,
.button-valorant::after {
  content: '';
  display: block;
  position: absolute;
  right: 0; left: 0;
  height: calc(50% - 5px);
  border: 1px solid var(--border-color);
  transition: all .15s ease;
}

.button-valorant::before {
  top: 0;
  border-bottom-width: 0;
}

.button-valorant::after {
  bottom: 0;
  border-top-width: 0;
}

.button-valorant:active,
.button-valorant:focus {
  outline: none;
}

.button-valorant:active::before,
.button-valorant:active::after {
  right: 3px;
  left: 3px;
}

.button-valorant:active::before {
  top: 3px;
}

.button-valorant:active::after {
  bottom: 3px;
}

.btn-valorant-inner {
  position: relative;
  display: block;
  padding: 20px 30px;
  background-color: var(--button-background-color);
  overflow: hidden;
  box-shadow: inset 0px 0px 0px 1px var(--button-inner-border-color);
}

.btn-valorant-inner::before {
  content: '';
  display: block;
  position: absolute;
  top: 0; left: 0;
  width: 2px;
  height: 2px;
  background-color: var(--button-bits-color);
}

.btn-valorant-inner::after {
  content: '';
  display: block;
  position: absolute;
  right: 0; bottom: 0;
  width: 4px;
  height: 4px;
  background-color: var(--button-bits-color);
  transition: all .2s ease;
}

.btn-valorant-slide {
  display: block;
  position: absolute;
  top: 0; bottom: -1px; left: -8px;
  width: 0;
  background-color: var(--highlight-color);
  transform: skew(-15deg);
  transition: all .2s ease;
}

.btn-valorant-content {
  position: relative;
}

.button-valorant:hover {
  color: var(--button-text-color-hover);
}

.button-valorant:hover .btn-valorant-slide {
  width: calc(100% + 15px);
}

.button-valorant:hover .btn-valorant-inner::after {
  background-color: var(--button-bits-color-hover);
}

.btn-valorant-light {
  --button-background-color: var(--background-color);
  --button-text-color: var(--highlight-color);
  --button-inner-border-color: var(--highlight-color);
  --button-text-color-hover: #ece8e1;
  --button-bits-color-hover: #ece8e1;
}

/*CUSTOM VALORANT BUTTON*/

</style>