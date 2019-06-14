<template>
  <div class="d-flex justify-content-stretch">
    <input class="form-control" type="text" v-model="task.title" />
    <button class="btn btn-sm btn-secondary" @click="cancel">キャンセル</button>
    <button class="btn btn-sm btn-primary" @click="submit">保存</button>
  </div>
</template>

<script lang="ts">
import { Prop, Component, Vue } from "vue-property-decorator";
import { Task, newTask } from "@/models/task";

@Component
export default class TaskEdit extends Vue {
  @Prop({ default: newTask }) task!: Task;

  submit() {
    this.$emit("submit", this.task);
  }

  cancel() {
    this.$emit("cancel");
  }
}
</script>

<style lang="scss" scoped>
.btn {
  margin-left: 0.25rem;
  white-space: nowrap;
}
</style>
