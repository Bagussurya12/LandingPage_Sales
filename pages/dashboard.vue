<template>
  <NuxtLayout :name="sideBar">
    <DashboardComponent></DashboardComponent>
  </NuxtLayout>
</template>

<script>
import DashboardComponent from "../components/Dashboard/DashboardComponent.vue";

export default {
  middleware: ["authenticated"],
  layout: "sideBar",
};
</script>
