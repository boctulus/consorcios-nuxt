export const state = () => ({
    status: null,
    authUser: {
        id: null,
        name: null,
        username: null,
        roles: [],
        accessToken: null,
        refreshToken: null,
        exp: null,
        expires_in: null
    },
    alert: null
});

export const mutations = {

    auth_request(state){
        state.status = 'loading'
    },

    auth_success(state, payload){
        state.status = 'success'
        state.authUser.accessToken  =  payload.accessToken;
        state.authUser.refreshToken =  payload.accessToken;
        state.authUser.expires_in = payload.expires_in;
        state.authUser.exp = parseInt((new Date).getTime() / 1000) + payload.expires_in
        state.authUser.id =  payload.id;
        state.authUser.roles =  payload.roles;
        state.authUser.name =  payload.name;
        state.authUser.username = payload.username;
    },

    auth_error(state){
        state.status = 'error'
    },

    logout(state){
        state.status = '';
        state.authUser = {
            id: null,
            name: null,
            username: null,
            roles: [],
            accessToken: null,
            refreshToken: null,
            exp: null,
            expires_in: null
        };
        state.alert = null;
    },

    set_alert(state, msg){
        state.alert = msg;
    }
}


export const actions = {
    login({commit}, { username, password } ) {      
        return new Promise((resolve, reject) => {
            commit('auth_request'); 

            let payload = {};
        
            this.$axios.post('/auth/login', {
                username: username,
                password: password

            }).then( response => {
                payload.accessToken  =  response.data.data.access_token;
                payload.refreshToken =  response.data.data.refresh_token;
                payload.expires_in = response.data.data.expires_in;
                payload.exp = parseInt((new Date).getTime() / 1000) + response.data.data.expires_in; 
                payload.id =  response.data.data.uid; 
                payload.roles =  response.data.data.roles;

                this.$axios.request({
                    url: '/me',
                    method: 'get',
                    headers: {
                        'Authorization': `Bearer ${response.data.data.access_token}`
                    }
                }).then( response => {
                    payload.name =  response.data.data.name;
                    payload.username = response.data.data.username;

                    commit('auth_success', payload);
                    resolve(response);

                }).catch((error) => {
                    const response = error.response;
                    //console.log('Error', error);
                    //console.log(response.data.error);
                    this.error = response.data.error;

                    commit('auth_error');
                    reject(this.error);
                });

            }).catch((error) => {
                const response = error.response;
                console.log('Error', error);
                //console.log(response.data.error);
                //this.error = response.data.error;
                reject(this.error);
            });

        });    
    },

    register({commit}, { name, username, password } ) {      
        return new Promise((resolve, reject) => {
            commit('auth_request'); 

            let payload = {};
        
            this.$axios.post('/auth/register', {
                name: name,
                username: username,
                password: password

            }).then( response => {
                payload.accessToken  =  response.data.data.access_token;
                payload.refreshToken =  response.data.data.refresh_token;
                payload.expires_in = response.data.data.expires_in;
                payload.exp = parseInt((new Date).getTime() / 1000) + response.data.data.expires_in; 
                payload.id =  response.data.data.uid; 
                payload.roles =  response.data.data.roles;
                resolve(response);
                
            }).catch((error) => {
                const response = error.response;
                console.log('Error', error);
                //console.log(response.data.error);
                //this.error = response.data.error;
                reject(this.error);
            });

        });    
    },


    logout({commit}){
        commit('logout');
    }
}

export const getters = {
    get_user(state) {
        return state.authUser;
    },

    is_logged(state) {
        return state.authUser.id !== null;
    }
}