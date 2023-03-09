<template>
  <div>
    <h2>View Model:</h2>
    <article class="cart">
      <p><b>Name:</b> {{ fullName }}</p>
      <p><b>Age:</b> {{ age }}</p>
    </article>
  </div>
</template>

<!-- view model in separate file -->
<script src="./vm"></script>

<style scoped>
.cart {
  padding: 1rem;
  background: #fafafa;
  border: 1px solid #cacaca;
  max-width: 20rem;
  margin: 0 auto;
}
</style>
