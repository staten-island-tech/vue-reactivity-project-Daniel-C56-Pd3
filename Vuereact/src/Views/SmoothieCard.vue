<template>
  <div class="card">
    <h2>{{ ingredient.name }}</h2>
    <h3>{{ ingredient.price }}</h3>
    <img :src="ingredient.image">
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
  .card {
    left: 50%;
    max-width: 150px ;
    max-height: 200px ;
    margin: 15px 0;
    font-size: 15px;
    text-align: center;
    padding: 10px;
    border-radius: 5px;
    border: 3px solid #ccc;
  }
  .card img {
    height: 80px;
    width: 80px;
  }
</style>