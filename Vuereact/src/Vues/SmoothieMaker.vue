<template>
    <div>
        <smoothiecard v-for="value in source"/>
        <smoothiecup :ingredients="ingredients"/>
        <total :ingredients/>>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const ingredients = ref([
  {
    name: 'Banana',
    quantity: 1,
    calories: 105,
    price: 0.50
  },
  {
    name: 'Strawberries',
    quantity: 150,
    calories: 48,
    price: 2.00
  },
  {
    name: 'Almond Milk',
    quantity: 250,
    calories: 30,
    price: 1.20
  },
  {
    name: 'Honey',
    quantity: 1,
    calories: 64,
    price: 0.80
  }
])
</script>

<style lang="scss" scoped>

</style>