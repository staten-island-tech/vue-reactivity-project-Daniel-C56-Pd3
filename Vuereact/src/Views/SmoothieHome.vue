<template>
    <div class="blender-container">
      <h2>Your Blender</h2>
      <div class="blender-list">
        <span v-for="(value, key) in blenderIngredients" :key="key" class="blender-item">
          {{ key }}
        </span>
      </div>
    </div>

    <div class="cards-container">
      <h1>Smoothie Ingredients</h1>
      <div class="card-grid">
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
import SmoothieCard from '@/Views/SmoothieCard.vue';

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
  { name: "Milk", category: "dairy", image: "./milk.png" },
  { name: "Greek Yogurt", category: "dairy", image: "./yogurt.png" },
  { name: "Almond Milk", category: "dairy", image: "./almond-milk.png" },
  { name: "Coconut Milk", category: "dairy", image: "./coconut-milk.png" },
  { name: "Oats", category: "grains", image: "./oats.png" },
  { name: "Granola", category: "grains", image: "./granola.png" },
  { name: "Honey", category: "sweetener", image: "./honey.png" },
  { name: "Maple Syrup", category: "sweetener", image: "./maple-syrup.png" },
  { name: "Dates", category: "sweetener", image: "./dates.png" },
  { name: "Almond Butter", category: "butter", image: "./almond-butter.png" },
  { name: "Peanut Butter", category: "butter", image: "./peanut-butter.png" },
  { name: "Cashew Butter", category: "butter", image: "./cashew-butter.png" },
  { name: "Chia Seeds", category: "seeds", image: "./chia-seeds.png" },
  { name: "Flax Seeds", category: "seeds", image: "./flax-seeds.png" },
  { name: "Pumpkin Seeds", category: "seeds", image: "./pumpkin-seeds.png" },
  { name: "Spinach", category: "greens", image: "./spinach.png" },
  { name: "Kale", category: "greens", image: "./kale.png" },
  { name: "Coconut Flakes", category: "topping", image: "./coconut-flakes.png" },
  { name: "Dark Chocolate Chips", category: "topping", image: "./chocolate-chips.png" },
  { name: "Protein Powder", category: "protein", image: "./protein-powder.png" }
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
