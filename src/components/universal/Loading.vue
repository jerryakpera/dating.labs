<template>
  <div class="loading">
    <b-spinner
      :variant="variant"
    ></b-spinner>
  </div>
</template>

<script>
export default {
  props: ["variant"]
}
</script>

<style scoped>
.loading {
  width: 100px;
  margin: 5% auto;
  text-align: center;
}
</style>