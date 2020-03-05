import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        authenticatedUser: {
            id: null,
            username: null,
            roles: [],
            accessToken: null,
            refreshToken: null
        }
    },
    mutations: {
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
    },
    getters: {
        id: state => {
            return state.authenticatedUser.id;
        },
        username: state => {
            return state.authenticatedUser.username;
        },
        roles: state => {
            return state.authenticatedUser.roles;
        },
        accessToken: state => {
            return state.authenticatedUser.accessToken;
        },
        refreshToken: stare => {
            return stare.authenticatedUser.refreshToken;
        }
    }
  });
