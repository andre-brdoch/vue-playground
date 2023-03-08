<template>
  <article class="cart">
    <p><b>Name:</b> {{ fullName }}</p>
    <p><b>Age:</b> {{ age }}</p>
  </article>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "AppPerson",

  props: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    age: Number,
  },

  computed: {
    fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    },
  },
});
</script>

<style scoped>
.cart {
  padding: 1rem;
  background: #fafafa;
  border: 1px solid #cacaca;
  max-width: 20rem;
  margin: 0 auto;
}
</style>
