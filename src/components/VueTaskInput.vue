<template>
  <div>
    <input type="text" v-model="title" />
    <textarea v-model="description" />
  </div>
</template>

<script lang="ts">
import { Prop, Component, Vue } from "vue-property-decorator";

export interface Task {
  id?: string;
  title: string;
  description: string;
}

function newTask(): Task {
  return {
    title: "",
    description: ""
  };
}

@Component
export default class VueTaskInput extends Vue {
  @Prop({ default: newTask }) value!: Task;

  get title(): string {
    return this.value.title;
  }

  set title(title: string) {
    this.$emit("input", Object.assign({}, this.value, { title }));
  }

  get description(): string {
    return this.value.description;
  }

  set description(description: string) {
    this.$emit("input", Object.assign({}, this.value, { description }));
  }
}
</script>
