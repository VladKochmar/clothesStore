<template>
  <div class="quantity">
    <button class="quantity__button minus" @click="onClick('-')">
      <v-icon icon="fa-solid fa-minus" />
    </button>
    <div class="quantity__input">
      <input v-model="model" @change="onChange" autocomplete="off" type="text" />
    </div>
    <button class="quantity__button plus" @click="onClick('+')">
      <v-icon icon="fa-solid fa-plus" />
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  maxQuantity: {
    type: Number,
    required: true
  }
})

const model = defineModel()
const prevNumber = ref(model.value)

function onChange() {
  if (!Number.isInteger(model.value) || model.value < 1 || model.value > props.maxQuantity) {
    model.value = prevNumber.value
  }
}

function onClick(mathOperation) {
  const result = mathOperation === '+' ? model.value + 1 : model.value - 1
  if (result >= 1 && result <= props.maxQuantity) {
    prevNumber.value = model.value
    model.value = result
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/base/variables';

.quantity {
  display: inline-flex;
  // .quantity__button
  &__button {
    font-size: 0.375rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.25rem;
    height: 2.25rem;
    border: 1px solid $suvaGrey;
  }
  // .quantity__input
  &__input {
    flex: 0 0 2.625rem;
    width: 2.625rem;
    font-weight: 700;
    font-size: 0.75rem;
    display: flex;
    align-items: center;
    input {
      text-align: center;
      font-weight: 700;
      font-size: 0.75rem;
      width: 100%;
      height: 100%;
      padding: 0 0.25rem;
    }
  }
}
</style>
