import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist';

Vue.use(Vuex)

const vuexLocalStorage = new VuexPersist({
    key: 'vuex', // The key to store the state on in the storage provider.
    storage: window.localStorage, // or window.sessionStorage or localForage
    // Function that passes the state and returns the state with only the objects you want to store.
    // reducer: state => state,
    // Function that passes a mutation and lets you decide if it should update the state in localStorage.
    // filter: mutation => (true)
  })
  
const empty =  {
    id: null,
    username: null,
    roles: [],
    accessToken: null,
    refreshToken: null
};

export const store = new Vuex.Store({
    state: {
        authenticatedUser: empty
    },
    mutations: {
        logout(state) {
            state.authenticatedUser = empty;
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
    },
    plugins: [vuexLocalStorage.plugin]
  });
