<template>
  <div>
    <input type="hidden" :name="name" :value="value" />
    <input type="text" style="width: 3rem;" v-model="first" />-
    <input type="text" style="width: 4rem;" v-model="second" />
  </div>
</template>

<script lang="ts">
import { Prop, Component, Vue } from "vue-property-decorator";

function merge(first: string, second: string): string {
  return first.length + second.length > 0 ? `${first}-${second}` : "";
}

function partFirst(postcode: string): string {
  const i = postcode.indexOf("-");
  if (i < 0) {
    return postcode;
  } else {
    return postcode.slice(0, i);
  }
}

function partSecond(postcode: string): string {
  const i = postcode.indexOf("-");
  if (i < 0) return "";
  return postcode.slice(i + 1);
}

@Component
export default class VuePostcodeInput extends Vue {
  @Prop({ default: "" }) name!: string;
  @Prop({ default: "" }) value!: string;

  get first(): string {
    return partFirst(this.value);
  }

  set first(newFirst: string) {
    this.$emit("input", merge(newFirst, this.second));
  }

  get second(): string {
    return partSecond(this.value);
  }

  set second(newSecond: string) {
    this.$emit("input", merge(this.first, newSecond));
  }
}
</script>
