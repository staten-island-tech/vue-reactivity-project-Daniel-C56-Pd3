<template>
    <div class="container">
      <SmoothieCard v-for="ingredient in ingredients":key="ingredient.name":ingredient="ingredient">
        <button @click="add(ingredient)">Put In Blender</button>
      </SmoothieCard>
      <div>
        
      </div>
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import SmoothieCard from '@/Views/SmoothieCard.vue';

let addstuff = reactive({ingredients1 : null, ingredients2 : null, ingredients3: null, ingredients4:null })
function add(ingredient){
  //addstuff[ingredient.name] = ingredient.image
  console.log(ingredient)
}

const ingredients = ref([
  {name: 'Banana',  price: 0.50, image:"/banana.png"},
  {name: 'Strawberries',  price: 2.00, image:"./strawberry.png"},
  {name: 'Milk',  price: 1.20, image:"./milk.png"},
  {name: 'Honey', price: 0.80},
  { name: 'Blueberries',  price: 2.50, image: "./blueberries.png" },
  { name: 'Greek Yogurt',   price: 1.50, image: "./yogurt.png" },
  { name: 'Oats',  price: 0.40, image: "./oats.png" },
  { name: 'Almond Butter', alories: 98, price: 1.10, image: "./almond-butter.png" },
  { name: 'Chia Seeds', price: 0.60, image: "./chia-seeds.png" },
  { name: 'Spinach', price: 0.90, image: "./spinach.png" },
])
</script>

<style scoped>
.container {
  width: 50%;
  margin-left: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
</style>
