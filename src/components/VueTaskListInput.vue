<template>
  <div>
    <div v-for="(task, i) in tasks" :key="i">
      <v-task-input :value="task" @input="input(i)" />
    </div>
  </div>
</template>

<script lang="ts">
import { Prop, Component, Vue } from "vue-property-decorator";
import VueTaskInput from "./VueTaskInput.vue";

interface Task {
  id?: string;
  title: string;
  description: string;
}

@Component({
  components: {
    "v-task-input": VueTaskInput
  }
})
export default class VueTaskListInput extends Vue {
  @Prop({ default: () => [] }) value!: Task[];

  get tasks(): Task[] {
    return this.value;
  }

  input(i: number) {
    return (task: Task) => {
      this.$emit("input", this.value.splice(i, 1, task));
    };
  }
}
</script>
