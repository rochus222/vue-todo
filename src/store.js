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
      const newState = Object.assign({}, state);
      if (!newState.items[data.list]) {
        Vue.set(newState.items, data.list, []);
      }

      newState.items[data.list].push(data.item);
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
      return commit("setTodoList", name);
    },
    addItemToList({commit}, data) {
      return commit({
        type: "setItemToList",
        list: data.list,
        item: data.item
      });
    }
  }
});
