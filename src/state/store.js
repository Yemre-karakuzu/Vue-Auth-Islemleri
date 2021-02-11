import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const store = new Vuex.store({
    state: {
        token: "",
        fbAPIKey: "AIzaSyBz30_0EXUddBsdUD_CpAlRhzRZ_ppzr1Q",

    },
    mutations: {
        setToken(state, token) {
            state.token = token
        },
        clearToken(state) {
            state.token = ""
        }
    },
    actions: {
        login({ commit, dispatch, state }, authDate) {

        },
        logout({ commit, dispatch, state }) {

        }
    },
    getter: {},
})

export default store