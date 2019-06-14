<template>
  <div>
    <pre>{{ address }}</pre>
    <v-address-input v-model="address" />

    <pre>{{ tasks }}</pre>
    <v-task-list-input v-model="tasks" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import VueAddressInput from "../components/VueAddressInput.vue";
import VueTaskListInput from "../components/VueTaskListInput.vue";

@Component({
  components: {
    "v-address-input": VueAddressInput,
    "v-task-list-input": VueTaskListInput
  }
})
export default class Home extends Vue {
  address = {
    postcode: "123-4567",
    address: "",
    latitude: 0.0,
    longitude: 0.0
  };

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

  // input() {
  //   console.info("test");
  //   // this.$set(this.tasks, i, task);
  // }
}
</script>
