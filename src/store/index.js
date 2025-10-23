import Vue from 'vue'
import Vuex from 'vuex'
import createedPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
    plugins: [createedPersistedState()],
    state: {
        memos: [
    {id: 1, body: 'サンプルのメモです'},        
    ]
    },
    mutations: {
        save(state, memo) {
            const max = state.memos.length > 0
              ? Math.max(...state.memos.map(m => m.id))
              : 0;
            memo.id = max + 1;
            state.memos.push(memo);
          },
        update(state,data) {
            var x = state.memos.find(memo => memo.id == data.id);
            x.body = data.body
        },
        remove(state, id) {
            for (var i=0; i<state.memos.length; i++) {
                if (state.memos[i].id == id) {
                    state.memos.splice(i, 1);
                }
            }
        }
    }
})