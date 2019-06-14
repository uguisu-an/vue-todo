<template>
  <div>
    <div v-for="(task, i) in tasks" :key="i">
      <input type="text" v-model="task.title" />
      <textarea v-model="task.description" />
    </div>
  </div>
</template>

<script lang="ts">
import { Prop, Component, Vue } from "vue-property-decorator";

export interface Task {
  title: string;
  description: string;
}

@Component({
  model: {
    prop: "tasks"
  }
})
export default class VueTaskListInput extends Vue {
  @Prop({ default: () => [] }) tasks!: Task[];
}
</script>
