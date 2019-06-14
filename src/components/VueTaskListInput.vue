<template>
  <div>
    <div v-for="(task, i) in tasks" :key="i">
      <v-task-input :value="task" @input="t => input(i, t)" />
    </div>
  </div>
</template>

<script lang="ts">
import { Prop, Component, Vue } from "vue-property-decorator";
import VueTaskInput, { Task } from "./VueTaskInput.vue";

@Component({
  model: {
    prop: "tasks"
  },
  components: {
    "v-task-input": VueTaskInput
  }
})
export default class VueTaskListInput extends Vue {
  @Prop({ default: () => [] }) tasks!: Task[];

  input(i: number, task: Task): void {
    this.$emit("input", [
      ...this.tasks.slice(0, i),
      task,
      ...this.tasks.slice(i + 1)
    ]);
  }
}
</script>
