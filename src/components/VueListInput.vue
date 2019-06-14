<template>
  <div>
    <div v-for="(message, i) in messages" :key="i">
      <input
        type="text"
        :value="message"
        @input="e => input(i, e.target.value)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Prop, Component, Vue } from "vue-property-decorator";

@Component
export default class VueListInput extends Vue {
  @Prop({ default: () => [] }) messages!: string[];

  input(i: number, message: string) {
    this.messages.splice(i, 1, message);
  }
}
</script>
