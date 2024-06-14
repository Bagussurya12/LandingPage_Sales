<template>
  <NuxtLayout :name="sideBar">
    <section>
      <div class="container mx-auto p-4">
        <h1 class="text-4xl font-bold mb-4">Create New Article</h1>
        <form @submit.prevent="onSubmit">
          <div class="mb-4">
            <label
              class="block text-xl font-medium text-gray-700 mb-2"
              for="title"
              >Title</label
            >
            <input
              id="title"
              name="title"
              type="text"
              v-model="form.title"
              :rules="rules.title"
              class="mt-1 block h-10 my-5 py-5 w-full border-2 border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
            <div v-if="formErrors.title" class="text-red-500 text-sm mt-1">
              {{ formErrors.title }}
            </div>
          </div>

          <div class="mb-4">
            <label
              class="block text-xl font-medium text-gray-700 mb-2"
              for="photos"
              >Photos</label
            >
            <input
              id="photos"
              name="photos"
              type="file"
              @change="onFileChange"
              :rules="rules.photos"
              accept="image/jpeg, image/png"
              class="block w-full text-lg text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-bold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
            <div v-if="formErrors.photos" class="text-red-500 text-sm mt-1">
              {{ formErrors.photos }}
            </div>
          </div>

          <div class="mb-4">
            <label
              class="block text-xl font-medium text-gray-700 mb-2"
              for="content"
              >Content</label
            >
            <textarea
              id="content"
              name="content"
              v-model="form.content"
              :rules="rules.content"
              class="mt-1 block w-full border-2 border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              rows="5"
            ></textarea>
            <div v-if="formErrors.content" class="text-red-500 text-sm mt-1">
              {{ formErrors.content }}
            </div>
          </div>

          <div class="flex justify-end">
            <button
              type="submit"
              :disabled="isSubmitting"
              class="bg-blue-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <span v-if="!isSubmitting">Submit</span>
              <svg
                v-else
                class="animate-spin h-5 w-5 text-white"
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
            </button>
          </div>
        </form>
      </div>
    </section>
  </NuxtLayout>
</template>

<script>
export default {
  middleware: ["authenticated"],
  layout: "sideBar",
  data() {
    return {
      isSubmitting: false,
      formErrors: {},
      form: {
        title: "",
        photos: null,
        content: "",
      },
      rules: {
        title: [(v) => !!v || this.$t("TITLE_IS_REQUIRED")],
        photos: [(v) => !!v || this.$t("photos_IS_REQUIRED")],
        content: [(v) => !!v || this.$t("content_IS_REQUIRED")],
      },
    };
  },
  methods: {
    onFileChange(event) {
      this.form.photos = event.target.files[0];
    },
    validateForm() {
      this.formErrors = {};
      if (!this.form.title) {
        this.formErrors.title = "Title is required";
      }
      if (!this.form.photos) {
        this.formErrors.photos = "Photos are required";
      }
      if (!this.form.content) {
        this.formErrors.content = "Content is required";
      }
      return Object.keys(this.formErrors).length === 0;
    },
    async onSubmit() {
      if (!this.validateForm()) {
        return;
      }

      const formData = new FormData();
      formData.append("title", this.form.title);
      formData.append("photos", this.form.photos);
      formData.append("content", this.form.content);

      this.isSubmitting = true;

      try {
        const response = await this.$axios.post("/article", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        this.$router.push({ name: "article" });
      } catch (error) {
        console.error(error);
        this.isSubmitting = false;
      }
    },
  },
};
</script>
