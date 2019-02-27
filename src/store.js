import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todoLists: [],
    items: {}
  },
  mutations: {
    setTodoList(state, name) {
      state.todoLists.push(name);
    },
    setItemToList(state, data) {
      if (!state.items[data.list]) {
        state.items[data.list] = [];
      }

      state.items[data.list].push(data.item);
    }
  },
  getters: {
    getTodoLists(state) {
      return state.todoLists;
    },
    getTodoListItems(state) {
      return id => state.items[id];
    }
  },
  actions: {
    createTodoList({commit}, name) {
      commit("setTodoList", name)
      return true;
    },
    addItemToList({commit}, data) {
      commit("setItemToList", data)
      return true;
    }
  }
});
