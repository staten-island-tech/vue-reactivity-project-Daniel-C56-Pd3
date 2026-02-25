<template>
    <div>
        <SmoothieCard v-for="ingredient in ingredients":key="ingredient.name":ingredient="ingredient"/>SmoothieCard>
        <h2>TEST</h2>
    </div>
</template>



<script setup>
import { ref } from 'vue'
import SmoothieCard from 'src/Views/SmoothieCard.vue';

const ingredients = ref([
  {name: 'Banana', quantity: 1, calories: 105, price: 0.50},
  {name: 'Strawberries',quantity: 150,  calories: 48, price: 2.00},
  {name: 'Almond Milk',quantity: 250,  calories: 30, price: 1.20},
  {name: 'Honey', quantity: 1,  calories: 64, price: 0.80}
])
</script>


<style scoped>
div {
  padding: 16px;
}


h1 {
  text-align: center;
  margin-bottom: 20px;
}
.container {
  display: flex;
  width: 80vw;
  margin: 20px auto;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}
.card {
  border: 1px solid #ccc;
  padding: 12px;
  margin-bottom: 12px;
  border-radius: 6px;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
</style>
