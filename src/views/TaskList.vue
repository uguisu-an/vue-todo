<template>
  <div class="container">
    <ul class="list-group mb-2">
      <li v-for="(task, i) in tasks" :key="i" class="list-group-item p-1">
        <div v-if="selectedIndex === i">
          <TaskEdit
            :task="clone(task)"
            @submit="saveTask"
            @cancel="discardChanges"
          />
        </div>
        <div v-else>
          <a
            href="#"
            class="btn btn-link w-100 text-left"
            @click.prevent="select(i)"
          >
            {{ task.title }}
          </a>
        </div>
      </li>
    </ul>
    <button class="btn btn-link" @click="addTask">Add Task</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import _ from "lodash";
import TaskEdit from "../components/TaskEdit.vue";
import { Task, newTask } from "@/models/task";
import taskApi from "@/api/task-api";

@Component({
  components: {
    TaskEdit
  }
})
export default class TaskList extends Vue {
  selectedIndex = -1;

  get tasks(): Task[] {
    return this.$store.state.tasks;
  }

  created() {
    this.$store.dispatch("initTasks");
  }

  clone(task: Task) {
    return _.clone(task);
  }

  select(index: number) {
    if (this.selectedIndex >= 0) {
      this.discardChanges(this.tasks[this.selectedIndex]);
    }
    this.selectedIndex = index;
  }

  saveTask(task: Task) {
    this.$store.dispatch("saveTask", task);
    this.selectedIndex = -1;
  }

  discardChanges(task: Task) {
    // ページ移動時はまだメモリ上にあって勝手に消えるので不要
    if (!task.id) {
      this.tasks.splice(this.selectedIndex, 1);
    }
    this.selectedIndex = -1;
  }

  addTask() {
    this.tasks.push(newTask());
    this.selectedIndex = this.tasks.length - 1;
  }
}
</script>
