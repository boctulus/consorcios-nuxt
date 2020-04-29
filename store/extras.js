export const state = () => ({
    phone: '+54 221 000000'
});

export const mutations = {
    setPhone(num){
        state.phone = num;
    }
}

export const getters = {
    get_phone(state) {
        return state.phone;
    }
}