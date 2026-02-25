<template>
    <div>
        <h2>{{ ingredient.name }}</h2>
        <h3>{{ ingredient.price }}</h3>
    </div>
</template>


<script setup>
defineProps({
    ingredient:{
        type:Object,
        required: true,
    }
})

</script>


<style scoped>
div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 200px;
    width: 150px;
    border: 3px soild black;
}

</style>
