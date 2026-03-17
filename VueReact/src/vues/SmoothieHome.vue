<template>
    <div class="container">
      <h2>Your Blender</h2>
      <div class="blender">
        <span v-for="(value, key) in blenderIngredients" :key="key" class="blender-item">
          {{ key }}
        </span>
      </div>
    </div>

    <div class="container">
      <h1>Smoothie Ingredients</h1>
      <div class="card">
        <SmoothieCard v-for="ingredient in ingredients" :key="ingredient.name" :ingredient="ingredient">
          <button @click="addToBlender(ingredient)" class="btn">
            Put In Blender
          </button>
        </SmoothieCard>
      </div>
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import SmoothieCard from '@/vues/SmoothieCard.vue';

const blenderIngredients = reactive({})

function addToBlender(ingredient) {
  blenderIngredients[ingredient.name] = ingredient.image
}

const ingredients = ref([
  { name: "Banana", category: "fruit", image: "./banana.png" },
  { name: "Strawberries", category: "fruit", image: "./strawberry.png" },
  { name: "Blueberries", category: "fruit", image: "./blueberries.png" },
  { name: "Raspberries", category: "fruit", image: "./raspberries.png" },
  { name: "Blackberries", category: "fruit", image: "./blackberries.png" },
  { name: "Mango", category: "fruit", image: "./mango.png" },
  { name: "Pineapple", category: "fruit", image: "./pineapple.png" },
  { name: "Apple", category: "fruit", image: "./apple.png" },
  { name: "Peach", category: "fruit", image: "./peach.png" },
  { name: "Avocado", category: "fruit", image: "./avocado.png" },
  { name: "Milk", category: "dairy", image: "./milk.png" }
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
