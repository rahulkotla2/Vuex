import { createApp } from 'vue';
import { createStore } from 'vuex'

import App from './App.vue';

const app = createApp(App);

const counterModule = {
    state() {
        return {
            counter: 0,
        }
    },
    mutations: {
        increment(state) {
            state.counter += 2;
        },
        increase(state, payload) {
            state.counter += payload.value;
        },
    },
    actions: {
        increment(context) {
            setTimeout(() => {
                context.commit('increment');
            }, 2000);
        },
        increase(context, payload) {
            context.commit('increase', payload);
        },
    },
    getters: {
        finalCounter(state) {
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
    },
}
const store = createStore({
    modules: {
        counter: counterModule,
    },
    state() {
        return {
            loggedIn: false,
        }
    },
    mutations: {
        setAuth(state, payload) {
            state.loggedIn = payload.isAuth;
        },
    },
    actions: {
        login(context) {
            context.commit('setAuth', { isAuth: true });
        },
        logout(context) {
            context.commit('setAuth', { isAuth: false });
        },
    },
    getters: {
        userIsAuthenticated(state) {
            return state.loggedIn;
        },
    }
})

app.use(store);

app.mount('#app');
