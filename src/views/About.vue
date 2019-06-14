<template>
  <div>
    <pre>{{ messages }}</pre>
    <v-list-input :messages="messages" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import VueListInput from "../components/VueListInput.vue";

@Component({
  components: {
    "v-list-input": VueListInput
  }
})
export default class Home extends Vue {
  messages: string[] = ["hello", "world"];
}
</script>
