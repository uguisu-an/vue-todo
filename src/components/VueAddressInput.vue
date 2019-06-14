<template>
  <div>
    <input type="hidden" v-model.number="latitude" />
    <input type="hidden" v-model.number="longitude" />
    <v-postcode-input v-model="postcode" />
    <textarea v-model="address"></textarea>
  </div>
</template>

<script lang="ts">
import { Prop, Component, Vue } from "vue-property-decorator";

interface Address {
  postcode: string;
  address: string;
  latitude: number;
  longitude: number;
}

function newAddress(): Address {
  return {
    postcode: "",
    address: "",
    latitude: 0.0,
    longitude: 0.0
  };
}

@Component
export default class VueAddressInput extends Vue {
  @Prop({ default: newAddress }) value!: Address;

  get postcode(): string {
    return this.value.postcode;
  }

  set postcode(postcode: string) {
    this.input({ postcode });
  }

  get address(): string {
    return this.value.address;
  }

  set address(address: string) {
    this.input({ address });
  }

  get latitude(): number {
    return this.value.latitude;
  }

  set latitude(latitude: number) {
    this.input({ latitude });
  }

  get longitude(): number {
    return this.value.longitude;
  }

  set longitude(longitude: number) {
    this.input({ longitude });
  }

  input(params: object) {
    this.$emit("input", Object.assign({}, this.value, params));
  }
}
</script>
