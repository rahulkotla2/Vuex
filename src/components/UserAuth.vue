<template>
    <button v-if="!userAuth" @click="login">Login</button>
    <button v-if="userAuth" @click="logout">Logout</button>
    <p>{{ isTestAuth }}</p>
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
        },
        isTestAuth() {
            return this.$store.getters.testAuth;
        }
    }
}
</script>