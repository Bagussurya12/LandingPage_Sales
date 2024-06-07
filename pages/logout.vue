<template>
  <section class="pt-32 pb-32 mt-10">
    <div class="container mx-auto">
      <div class="flex justify-center">
        <div class="w-10/12 md:w-1/3">
          <div
            class="bg-Dark text-white p-6 rounded-md shadow-md flex items-center justify-between"
          >
            <h2 class="text-3xl mb-0">Logout</h2>
            <svg
              class="animate-spin h-8 w-8 ml-3 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                class="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              ></circle>
              <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8H4z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  layout: "auth",
  middleware: ["authenticated"],
  mounted() {
    setTimeout(() => {
      this.$store.commit("auth/logout");
      this.$router.push({ name: "Login___" + this.$i18n.locale });
    }, 3000);
  },
};
</script>
