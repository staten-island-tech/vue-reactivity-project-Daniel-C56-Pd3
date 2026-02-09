<template>
    <div>
        <smoothiecard v-for="value in source"/>
        <smoothiecup :ingredients="ingredients"/>
        <total :ingredients/>>
    </div>
</template>

<script setup>
    import {ref} from 'vue'
    const ingredients = ref([
        { },

    ])
</script>

<style lang="scss" scoped>

</style>