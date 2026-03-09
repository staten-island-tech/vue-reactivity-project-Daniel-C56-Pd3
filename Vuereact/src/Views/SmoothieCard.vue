<template>
  <div class="smoothie-card">
    <h2 class="name">{{ ingredient.name }}</h2>
    <img class="image" :src="ingredient.image" :alt="ingredient.name">
    <p class="category">{{ ingredient.category }}</p>
      <slot></slot>
  </div>
</template>

<script setup>
defineProps({
  ingredient: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.smoothie-card {
  max-width: 150px;
  padding: 15px;
  border-radius: 8px;
  border: 1px solid #ddd;
  background-color: white;
}


.image {
  width: 80px;
  height: 80px;
  display: block;
  margin: 0 auto 10px;
  object-fit: contain;
}

</style>