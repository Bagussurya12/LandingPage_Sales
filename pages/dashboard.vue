<template>
  <DashboardComponent></DashboardComponent>
</template>

<script>
import DashboardComponent from "../components/Dashboard/DashboardComponent.vue";

export default {
  middleware: ["authenticated"],
  layout: "sideBar",
};
</script>
