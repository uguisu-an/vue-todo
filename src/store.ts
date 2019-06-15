import Vue from "vue";
import Vuex from "vuex";
import Task from "@/models/task";

import taskApi from "@/api/task-api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [] as Task[]
  },
  mutations: {
    setTask(state, { task, newTask }) {
      const i = state.tasks.findIndex(t => t.id === task.id);
      if (i < 0) {
        state.tasks.push(newTask);
      } else {
        state.tasks.splice(i, 1, newTask);
      }
    }
  },
  actions: {
    async initTasks({ state }) {
      state.tasks = await taskApi.getTasks();
    },
    async saveTask({ commit }, task: Task) {
      const newTask = await taskApi.save(task);
      commit("setTask", { task, newTask });
    }
  }
});
