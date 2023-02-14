<template>
    <button v-if="!userAuth" @click="login">Login</button>
    <button v-if="userAuth" @click="logout">Logout</button>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    methods: {
        ...mapActions(['login', 'logout'])
    },
    computed: {
        userAuth() {
            return this.$store.getters.userIsAuthenticated;
        }
    }
}
</script>