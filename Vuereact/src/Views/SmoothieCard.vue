<template>
  <div class="card">
    <h2>{{ ingredient.name }}</h2>
    <h3>{{ ingredient.price }}</h3>
    <img :src="ingredient.image">
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
.card {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 200px;
  width: 150px;
  border: 3px solid black;
}

.card img {
    width: 100px;
    height: 100px;
}
</style>