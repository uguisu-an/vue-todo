<template>
  <div>
    <pre>{{ postcode }}</pre>
    <v-postcode-input v-model="postcode" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Home extends Vue {
  postcode = "123-4567";
}
</script>
