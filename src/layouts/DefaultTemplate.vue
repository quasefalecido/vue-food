<template>
  <div>
    <header-component />

    <div class="comtainer cpmtainer-body">
      <router-view></router-view>
    </div>

    <footer-component />
  </div>
</template>

<script>
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import HeaderComponent from "./_partitials/header.vue";
import FooterComponent from "./_partitials/footer.vue";

export default {
  components: {
    HeaderComponent,
    FooterComponent,
  },
};
</script>

<style scoped>
@import url("../assets/css/vuefood.css");
@import url("../assets/css/reset.css");
</style>