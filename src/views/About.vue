<template>
  <div class="container">
    <ul class="list-group mb-2">
      <li v-for="(task, i) in tasks" :key="i" class="list-group-item p-1">
        <div v-if="selectedIndex === i">
          <TaskEdit
            :task="clone(task)"
            @submit="saveTask"
            @cancel="discardTask"
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
    <!-- <button class="btn btn-primary">Add Task</button> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import _ from "lodash";
import TaskEdit from "../components/TaskEdit.vue";
import { Task } from "@/models/task";

@Component({
  components: {
    TaskEdit
  }
})
export default class About extends Vue {
  selectedIndex = -1;

  tasks = [
    {
      title: "buy milk"
    },
    {
      title: "call john"
    }
  ];

  clone(task: Task) {
    return _.clone(task);
  }

  select(index: number) {
    this.selectedIndex = index;
  }

  saveTask(task: Task) {
    this.tasks.splice(this.selectedIndex, 1, task);
    this.selectedIndex = -1;
  }

  discardTask(task: Task) {
    this.selectedIndex = -1;
  }
}
</script>
