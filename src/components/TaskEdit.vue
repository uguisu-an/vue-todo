<template>
  <form @submit.prevent="submit">
    <div>
      <div class="mb-1">
        <input
          class="form-control"
          type="text"
          v-model="task.title"
          v-focus
          required
        />
      </div>
      <div>
        <button class="btn btn-sm btn-primary">保存</button>
        <button class="btn btn-sm btn-link" @click.prevent="cancel">
          キャンセル
        </button>
      </div>
    </div>
  </form>
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
    this.$emit("cancel", this.task);
  }
}
</script>

<style lang="scss" scoped>
.btn {
  margin-left: 0.25rem;
  white-space: nowrap;
}
</style>
