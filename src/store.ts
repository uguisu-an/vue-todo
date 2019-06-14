import Vue from "vue";
import Vuex from "vuex";
import { Task } from "@/models/task";

import taskApi from "@/api/task-api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [] as Task[]
  },
  mutations: {},
  actions: {
    async getTasks({ state }) {
      state.tasks = await taskApi.getTasks();
    }
  }
});
