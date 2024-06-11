<template>
  <NuxtLayout name="sideBar">
    <section class="pt-1 pb-32 py-10">
      <div class="container mx-auto">
        <div class="flex justify-center">
          <div class="w-full md:w-full">
            <div class="bg-white">
              <h2 class="text-Dark py-10 px-5 font-bold text-4xl">
                Edit Media Sosial
              </h2>

              <div class="text-black p-4 rounded-b-md">
                <nav aria-label="breadcrumb" class="mb-4 text-Dark text-2xl">
                  <ol
                    class="flex leading-none text-indigo-600 divide-x divide-indigo-400"
                  >
                    <li class="pr-4">
                      <nuxt-link to="/profile" class="hover:font-bold"
                        >Profile</nuxt-link
                      >
                    </li>
                    <li class="px-4 text-Dark" aria-current="page">
                      Media Sosial
                    </li>
                  </ol>
                </nav>
                <div class="w-full">
                  <p class="font-semibold text-Dark text-medium mb-5">
                    Kelola Link Sosial Media Anda untuk mengontrol dan menautkan
                    akun Sosial Media di Profile✨
                  </p>
                  <div class="w-full pt-10 border-t border-slate-700"></div>
                </div>
                <form ref="form" @submit.prevent="onSubmit">
                  <div class="mb-4 flex flex-wrap md:flex-nowrap md:space-x-4">
                    <div class="w-full md:w-1/2 mt-2 flex flex-col">
                      <label
                        class="block text-xl font-medium text-Dark mb-2"
                        for="fullname"
                        >Linked In</label
                      >
                      <input
                        id="linkedin"
                        name="linkedin"
                        type="text"
                        v-model="form.linkedin"
                        class="mt-1 my-5 h-10 block w-full border-2 border-black rounded-lg shadow-sm focus:border-Dark focus:ring pl-2"
                      />
                      <div
                        v-if="formErrors.linkedin"
                        class="text-red-500 text-sm mt-1"
                      >
                        {{ formErrors.linkedin }}
                      </div>
                    </div>
                    <div class="w-full md:w-1/2 mt-2 flex flex-col">
                      <label
                        class="block text-xl font-medium text-Dark mb-2"
                        for="instagram"
                        >Instagram</label
                      >
                      <input
                        id="instagram"
                        name="instagram"
                        type="text"
                        v-model="form.instagram"
                        class="mt-1 h-10 block w-full border-2 border-black rounded-lg shadow-sm focus:border-Dark focus:ring pl-2"
                      />
                      <div
                        v-if="formErrors.instagram"
                        class="text-red-500 text-sm mt-1"
                      >
                        {{ formErrors.instagram }}
                      </div>
                    </div>
                  </div>

                  <div class="mb-4 flex flex-wrap md:flex-nowrap md:space-x-4">
                    <div class="w-full md:w-1/2 flex flex-col mt-2">
                      <label
                        class="block text-xl font-medium text-Dark mb-2"
                        for="facebook"
                        >Facebook</label
                      >
                      <input
                        id="facebook"
                        name="facebook"
                        type="text"
                        v-model="form.facebook"
                        class="mt-1 h-10 block w-full border-2 border-black rounded-lg shadow-sm focus:border-Dark focus:ring pl-2"
                      />
                      <div
                        v-if="formErrors.facebook"
                        class="text-red-500 text-sm mt-1"
                      >
                        {{ formErrors.facebook }}
                      </div>
                    </div>
                    <div class="w-full md:w-1/2 flex flex-col mt-2">
                      <label
                        class="block text-xl font-medium text-Dark mb-2"
                        for="youtube"
                        >Youtube</label
                      >
                      <input
                        id="youtube"
                        name="youtube"
                        type="text"
                        v-model="form.youtube"
                        class="mt-1 h-10 block w-full border-2 border-black rounded-lg shadow-sm focus:border-Dark focus:ring pl-2"
                      />
                      <div
                        v-if="formErrors.youtube"
                        class="text-red-500 text-sm mt-1"
                      >
                        {{ formErrors.youtube }}
                      </div>
                    </div>
                  </div>
                  <div class="mb-4 flex flex-wrap md:flex-nowrap md:space-x-4">
                    <div class="w-full md:w-1/2 flex flex-col mt-2">
                      <label
                        class="block text-xl font-medium text-Dark mb-2"
                        for="twitter"
                        >Twitter</label
                      >
                      <input
                        id="twitter"
                        name="twitter"
                        type="text"
                        v-model="form.twitter"
                        class="mt-1 h-10 block w-full border-2 border-black rounded-lg shadow-sm focus:border-Dark focus:ring pl-2"
                      />
                      <div
                        v-if="formErrors.twitter"
                        class="text-red-500 text-sm mt-1"
                      >
                        {{ formErrors.twitter }}
                      </div>
                    </div>
                  </div>
                  <div class="flex justify-end mt-10">
                    <button
                      type="submit"
                      :disabled="isDisable"
                      class="bg-Hijau text-white px-4 py-2 rounded-md shadow-md hover:bg-teal-950 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <span v-if="!isDisable">Simpan</span>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  </NuxtLayout>
</template>

<script>
export default {
  layout: "sideBar",
  asyncData({ params }) {
    return {
      id: params.id,
    };
  },
  data() {
    return {
      isDisable: false,
      emailExist: false,
      formErrors: {},
      breadCrumbs: [
        { text: "Profile", disabled: false, to: "/profile", exact: true },
        { text: "Edit Media Sosial", disabled: true },
      ],
      form: {
        linkedin: "",
        instagram: "",
        youtube: "",
        twitter: "",
        facebook: "",
      },
    };
  },
  methods: {
    fetchDatasosmedById() {
      this.$axios
        .$get(`/sosmed/${this.id}`)
        .then((response) => {
          const socialMedia = response.sosmed;
          this.form.linkedin = socialMedia.linkedin;
          this.form.instagram = socialMedia.instagram;
          this.form.facebook = socialMedia.facebook;
          this.form.youtube = socialMedia.youtube;
          this.form.twitter = socialMedia.twitter;
          console.log(socialMedia);
        })
        .catch((error) => {
          this.$router.push({
            name: "profile___" + this.i18n.locale,
            params: { message: "ID_NOT_FOUND" },
          });
        });
    },
    checkEmailExist() {
      this.emailExist = false;
    },
    validateForm() {
      this.formErrors = {};
      const rules = this.rules;
      for (const field in rules) {
        const value = this.form[field];
        const error = rules[field].find((rule) => rule(value) !== true);
        if (error) {
          this.formErrors[field] = error(value);
        }
      }
      return Object.keys(this.formErrors).length === 0;
    },
    onSubmit() {
      if (this.validateForm()) {
        this.isDisable = true;
        this.$axios
          .$put(`/sosmed/${this.id}`, this.form)
          .then((response) => {
            this.isDisable = false;
            this.$router.push({
              name: "profile___" + this.i18n.locale,
              params: {
                message: "UPDATE_SUCCESS",
              },
            });
          })
          .catch((error) => {
            this.isDisable = false;
            console.log(error);
          });
      }
    },
  },
  mounted() {
    this.fetchDatasosmedById();
  },
};
</script>
