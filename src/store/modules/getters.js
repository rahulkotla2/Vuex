export default {
    finalCounter(state, getters) {
        console.log("Outside", state, getters)
        return state.counter * 3;
    },
    normalisedCounter(state, getters) {
        const finalCounter = getters.finalCounter;
        if (finalCounter < 0) {
            return 0;
        }
        if (finalCounter > 100) {
            return 100;
        }
        return finalCounter;
    },
    testAuth(state) {
        // console.log(state);
        return state.loggedIn;
    },
}