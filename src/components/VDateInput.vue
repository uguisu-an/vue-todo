<template>
  <div>
    <input
      class="form-control"
      type="date"
      :name="name"
      v-model="formatedDate"
    />
  </div>
</template>

<script lang="ts">
import { Prop, Component, Vue } from "vue-property-decorator";
import format from "date-fns/format";
import parse from "date-fns/parse";

const dateFormat = "yyyy-MM-dd";

@Component({
  model: {
    prop: "date"
  }
})
export default class VDateInput extends Vue {
  @Prop() date?: Date;
  @Prop({ default: "" }) name!: string;

  get formatedDate(): string {
    if (!this.date) return "";
    return format(this.date, dateFormat);
  }

  set formatedDate(newDate: string) {
    if (newDate) {
      this.$emit("input", parse(newDate, dateFormat, new Date()));
    } else {
      this.$emit("input", null);
    }
  }
}
</script>
