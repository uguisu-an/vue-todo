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

@Component({
  components: {
    TaskEdit
  }
})
export default class TaskList extends Vue {
  selectedIndex = -1;

  tasks: Task[] = [
    {
      id: 1,
      title: "buy milk",
      description: ""
    },
    {
      id: 2,
      title: "call john",
      description: ""
    }
  ];

  clone(task: Task) {
    return _.clone(task);
  }

  select(index: number) {
    if (this.selectedIndex >= 0) {
      this.discardChanges(this.tasks[this.selectedIndex]);
    }
    this.selectedIndex = index;
  }

  incrementedId() {
    return Math.max(...this.tasks.map(t => t.id || 0)) + 1;
  }

  saveTask(task: Task) {
    this.tasks.splice(
      this.selectedIndex,
      1,
      Object.assign({}, task, { id: this.incrementedId })
    );
    this.selectedIndex = -1;
  }

  discardChanges(task: Task) {
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
