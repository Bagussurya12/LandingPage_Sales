<template>
  <NuxtLayout :name="sideBar">
    <h1>INI profile</h1>
  </NuxtLayout>
</template>

<script>
export default {
  middleware: ["authenticated"],
  layout: "sideBar",
};
</script>
