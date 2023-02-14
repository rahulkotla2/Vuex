<template>
    <h2>{{ counter }}</h2>
    <p>we do more here....</p>
</template>

<script>
export default {
    computed: {
        counter() {
            return this.$store.getters['counter/normalisedCounter'];
        }
    }
}
</script>