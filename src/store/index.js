import { createStore } from 'vuex'
import authMutations from './mutations.js';
import authGetters from './getters.js';
import authActions from './actions.js';
import counterModule from './modules/index.js'

const store = createStore({
    modules: {
        counter: counterModule,
    },
    state() {
        return {
            loggedIn: false,
        }
    },
    mutations: authMutations,
    actions: authActions,
    getters: authGetters,
})

export default store