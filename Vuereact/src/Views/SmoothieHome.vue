<template>
    <div>
        <SmoothieCard v-for="ingredient in ingredients":key="ingredient.name":ingredient="ingredient"/>SmoothieCard>
    </div>
</template>



<script setup>
import { ref } from 'vue'
import SmoothieCard from '@/Views/SmoothieCard.vue';

const ingredients = ref([
  {name: 'Banana', quantity: 1, calories: 105, price: 0.50, image:"/"},
  {name: 'Strawberries',quantity: 150,  calories: 48, price: 2.00, image:"./strawberry.png"},
  {name: 'Milk',quantity: 250,  calories: 30, price: 1.20, image:"./milk.png"},
  {name: 'Honey', quantity: 1,  calories: 64, price: 0.80}
])
</script>


<style scoped>
div {
  padding: 5px;
}


h1 {
  text-align: center;
  margin-bottom: 5px;
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
  padding: 16px;
  margin-bottom: 16px;
  width: 300px;
  flex-direction: column;
  align-items: center;
}

</style>
