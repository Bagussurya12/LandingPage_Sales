<template>
  <div class="flex items-center justify-center min-h-screen bg-white">
    <div class="max-w-md p-6 text-center">
      <h1 class="text-6xl font-bold text-red-500 mb-4">
        {{ error.statusCode }}
      </h1>
      <p class="text-2xl font-semibold mb-4 text-Hijau">
        {{ errorMessage }}
      </p>
      <p class="text-gray-600 mb-8">
        {{ errorMessageDetail }}
      </p>
      <nuxt-link
        to="/"
        class="inline-block px-4 py-2 bg-Dark text-white font-semibold rounded hover:bg-Hijau transition duration-200"
      >
        Go back to Home
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: () => ({ statusCode: 500 }),
    },
  },
  computed: {
    errorMessage() {
      switch (this.error.statusCode) {
        case 404:
          return "Page Not Found";
        case 500:
          return "Internal Server Error";
        default:
          return "An unexpected error has occurred";
      }
    },
    errorMessageDetail() {
      switch (this.error.statusCode) {
        case 404:
          return "The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.";
        case 500:
          return "There was an error processing your request. Please try again later.";
        default:
          return "An unexpected error has occurred. Please try again later.";
      }
    },
  },
};
</script>

<style scoped>
body {
  background-color: white;
}
</style>
