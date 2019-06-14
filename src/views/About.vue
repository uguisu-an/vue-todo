<template>
  <div>
    <pre>{{ tasks }}</pre>
    <v-task-list-input v-model="tasks" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import VueTaskListInput from "../components/VueTaskListInput.vue";

@Component({
  components: {
    "v-task-list-input": VueTaskListInput
  }
})
export default class Home extends Vue {
  tasks = [
    {
      id: 1,
      title: "to do 1",
      description: "hello world"
    },
    {
      id: 2,
      title: "task 2",
      description: "hi hi hi hi !"
    }
  ];
}
</script>
