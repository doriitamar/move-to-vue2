import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        convoies: [],
        convoyBrief: [],
        convoyProp: [],
        selectedConvoy: undefined
    },
    mutations: {
        setConvoies(state, convList) {
            state.convoies = convList;
        },
        addConvoy(state, convoy) {
            state.convoies.push(convoies);
        },
        selectConvoy(state, convoy) {
            state.selectedConvoy = convoy;
        },
        setBrief(state, briefList) {
            state.convoyBrief = briefList;
        },
        setProps(state, propList) {
            state.convoyProp = propList;
        }
    },
    actions: {
        loadData({ commit }) {
            axios.get("/src/assets/convoies.json").then(({data}) => commit('setConvoies', data))
                                                   .catch(err => alert(err));
            axios.get("/src/assets/convoyBrief.json").then(({data}) => commit('setBrief', data))
                                                     .catch(err => alert(err));
            axios.get("/src/assets/convoyProp.json").then(({data}) =>  commit('setProps', data))
                                                    .catch(err => alert(err));
        }
    }
})

export default store;