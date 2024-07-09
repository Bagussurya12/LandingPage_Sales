<template>
  <section>
    <LoginComponent></LoginComponent>
  </section>
</template>

<script>
import LoginComponent from "../components/LoginComponent.vue";

export default {
  name: "Login",
  layout: "empty",
  middleware: "unauthenticated",
};
</script>
