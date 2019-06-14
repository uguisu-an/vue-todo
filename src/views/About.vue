<template>
  <div>
    <pre>{{ address }}</pre>
    <v-address-input v-model="address" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import VueAddressInput from "../components/VueAddressInput.vue";

@Component({
  components: {
    "v-address-input": VueAddressInput
  }
})
export default class Home extends Vue {
  address = {
    postcode: "123-4567",
    address: "",
    latitude: 0.0,
    longitude: 0.0
  };
}
</script>
