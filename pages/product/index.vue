<template>
  <NuxtLayout :name="sideBar">
    <h1>INI PRODUCT</h1>
  </NuxtLayout>
</template>

<script>
export default {
  middleware: ["authenticated"],
  layout: "sideBar",
};
</script>
