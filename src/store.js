import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        nextItemId: 0,
        items_show: [],
        items_all: [],
        status: ""
    },
    mutations: {
        addItem(state, nextContent) {
            let item = {
                id: state.nextItemId++,
                content: nextContent,
                status: false
            };
            state.items_show.push(item);
            state.items_all.push(item);
        },
        showByItemStatus(state, msg) {
            if(msg==="All"){
                state.items_show = Array.from(state.items_all);
            }else if(msg==="Active"){
                state.items_show = state.items_all.filter(i => i.status === false);
            }else{
                state.items_show = state.items_all.filter(i => i.status === true);
            }
        },
        updateState(state, item) {
            let i_selected = state.items_all.find(i => i.id === item.id);
            i_selected.status = true;
        }
        ,
        deleteItem(state, item) {
            let idx_1 = state.items_show.indexOf(item);
            state.items_show.splice(idx_1, 1);
            let idx_2 = state.items_all.indexOf(item);
            state.items_all.splice(idx_2, 1);
        }
    }
})