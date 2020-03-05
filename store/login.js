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
        authUser: empty
    },
    mutations: {
        logout(state) {
            state.authUser = empty;
        },
        saveUser(state, u) {
            state.authUser.id = u.id;
            state.authUser.username = u.username;
        }, 
        saveRoles(state, val) {
            state.authUser.roles = val;
        },   
        saveAccessToken(state, val) {
            state.authUser.accessToken = val;
        },
        saveRefreshToken(state, val) {
            state.authUser.refreshToken = val;
        }
    },
    getters: {
        id: state => {
            return state.authUser.id;
        },
        username: state => {
            return state.authUser.username;
        },
        roles: state => {
            return state.authUser.roles;
        },
        accessToken: state => {
            return state.authUser.accessToken;
        },
        refreshToken: stare => {
            return stare.authUser.refreshToken;
        }
    },
    plugins: [vuexLocalStorage.plugin]
  });
