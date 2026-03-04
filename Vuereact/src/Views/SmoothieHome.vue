<template>
    <div class="container">
      <SmoothieCard v-for="ingredient in ingredients":key="ingredient.name":ingredient="ingredient">
        <button>Put In Blender</button>
      </SmoothieCard>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import SmoothieCard from '@/Views/SmoothieCard.vue';

const ingredients = ref([
  {name: 'Banana', quantity: 1, calories: 105, price: 0.50, image:"/banana.png"},
  {name: 'Strawberries',quantity: 150,  calories: 48, price: 2.00, image:"./strawberry.png"},
  {name: 'Milk',quantity: 250,  calories: 30, price: 1.20, image:"./milk.png"},
  {name: 'Honey', quantity: 1,  calories: 64, price: 0.80},
  { name: 'Blueberries', quantity: 100, calories: 57, price: 2.50, image: "./blueberries.png" },
  { name: 'Greek Yogurt', quantity: 200, calories: 120, price: 1.50, image: "./yogurt.png" },
  { name: 'Oats', quantity: 50, calories: 190, price: 0.40, image: "./oats.png" },
  { name: 'Almond Butter', quantity: 1, calories: 98, price: 1.10, image: "./almond-butter.png" },
  { name: 'Chia Seeds', quantity: 20, calories: 97, price: 0.60, image: "./chia-seeds.png" },
  { name: 'Spinach', quantity: 50, calories: 12, price: 0.90, image: "./spinach.png" },
])
</script>

<style scoped>
.container {
  width: 50%;
  justify-content: flex-end;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
}
</style>
