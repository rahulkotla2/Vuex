export default {
    userIsAuthenticated(state, getters) {
        console.log("inside", state, getters)
        return state.loggedIn;
    }
}