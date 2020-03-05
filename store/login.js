import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        count: 5,
        authenticatedUser: {}
    },
    mutations: {
        increment(state) {
            state.count++;
        },
        decrement(state) {
            state.count--;
        },
        logout(state) {
            state.authenticatedUser.null
        },
        saveUser(state, u) {
            state.authenticatedUser.id = u.id;
            state.authenticatedUser.username = u.username;
        },    
        saveAccessToken(state, val) {
            state.authenticatedUser.accessToken = val;
        },
        saveRefreshToken(state, val) {
            state.authenticatedUser.refreshToken = val;
        }
    }
  });
