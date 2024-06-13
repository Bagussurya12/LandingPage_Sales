<template>
  <NuxtLayout :name="sideBar">
    <section class="pt-1 pb-32 py-10">
      <div class="container mx-auto">
        <div class="flex justify-center">
          <div class="w-full md:w-full">
            <div class="bg-white">
              <h2 class="text-Dark py-10 px-5 font-bold text-4xl">Edit User</h2>

              <div class="text-black p-4 rounded-b-md">
                <nav aria-label="breadcrumb" class="mb-4 text-Dark text-2xl">
                  <ol
                    class="flex leading-none text-indigo-600 divide-x divide-indigo-400"
                  >
                    <li class="pr-4">
                      <nuxt-link to="/users" class="hover:underline"
                        >Users</nuxt-link
                      >
                    </li>
                    <li class="px-4 text-Dark" aria-current="page">
                      Edit User
                    </li>
                  </ol>
                </nav>
                <form ref="form" @submit.prevent="onSubmit">
                  <div class="mb-4 flex flex-wrap md:flex-nowrap md:space-x-4">
                    <div class="w-full md:w-1/2 mb-4 md:mb-0 flex flex-col">
                      <label
                        class="block text-xl font-medium text-Dark mb-2"
                        for="fullname"
                        >Nama Lengkap</label
                      >
                      <input
                        id="fullname"
                        name="fullname"
                        type="text"
                        v-model="form.fullname"
                        :rules="rules.fullname"
                        class="mt-1 my-5 h-10 block w-full border-2 border-black rounded-lg shadow-sm focus:border-Dark focus:ring pl-2"
                      />
                      <div
                        v-if="formErrors.fullname"
                        class="text-red-500 text-sm mt-1"
                      >
                        {{ formErrors.fullname }}
                      </div>
                    </div>
                    <div class="w-full md:w-1/2 flex flex-col">
                      <label
                        class="block text-xl font-medium text-Dark mb-2"
                        for="email"
                        >Email</label
                      >
                      <input
                        id="email"
                        name="email"
                        type="email"
                        v-model="form.email"
                        :rules="rules.email"
                        class="mt-1 h-10 block w-full border-2 border-black rounded-lg shadow-sm focus:border-Dark focus:ring pl-2"
                      />
                      <div
                        v-if="formErrors.email"
                        class="text-red-500 text-sm mt-1"
                      >
                        {{ formErrors.email }}
                      </div>
                    </div>
                  </div>
                  <div class="mb-4 flex flex-wrap md:flex-nowrap md:space-x-4">
                    <div class="w-full md:w-1/2 mb-4 md:mb-0 flex flex-col">
                      <label
                        class="block text-xl font-medium text-Dark mb-2"
                        for="level"
                        >Level</label
                      >
                      <select
                        id="level"
                        name="level"
                        v-model="form.level"
                        class="h-10 block w-full border-2 border-black rounded-lg shadow-sm focus:border-Dark focus:ring pl-2"
                      >
                        <option value="" disabled selected hidden>
                          Pilih Level
                        </option>
                        <option
                          v-for="level in levels"
                          :key="level"
                          :value="level"
                          class="text-Dark"
                        >
                          {{ level }}
                        </option>
                      </select>
                      <div
                        v-if="formErrors.level"
                        class="text-red-500 text-sm mt-1"
                      >
                        {{ formErrors.level }}
                      </div>
                    </div>
                    <div class="w-full md:w-1/2 flex flex-col">
                      <label
                        class="block text-xl font-medium text-Dark mb-2"
                        for="nickName"
                        >Nick Name</label
                      >
                      <input
                        id="nickName"
                        name="nickName"
                        type="text"
                        v-model="form.nickName"
                        class="mt-1 h-10 block w-full border-2 border-black rounded-lg shadow-sm focus:border-Dark focus:ring pl-2"
                        placeholder="Masukan nickName"
                      />
                      <div
                        v-if="formErrors.nickName"
                        class="text-red-500 text-sm mt-1"
                      >
                        {{ formErrors.nickName }}
                      </div>
                    </div>
                  </div>
                  <div class="mb-4 flex flex-wrap md:flex-nowrap md:space-x-4">
                    <div class="w-full md:w-1/2 flex flex-col">
                      <label
                        class="block text-xl font-medium text-Dark mb-2"
                        for="password"
                        >Kata Sandi</label
                      >
                      <input
                        id="password"
                        name="password"
                        type="password"
                        v-model="form.password"
                        class="mt-1 h-10 block w-full border-2 border-black rounded-lg shadow-sm focus:border-Dark focus:ring pl-2"
                        placeholder="Masukan Kata Sandi"
                      />
                      <div
                        v-if="formErrors.password"
                        class="text-red-500 text-sm mt-1"
                      >
                        {{ formErrors.password }}
                      </div>
                    </div>
                    <div class="w-full md:w-1/2 mb-4 md:mb-0 flex flex-col">
                      <label
                        class="block text-xl font-medium text-Dark mb-2"
                        for="retype_password"
                        >Konfirmasi Kata Sandi</label
                      >
                      <input
                        id="retype_password"
                        name="retype_password"
                        type="password"
                        v-model="form.retype_password"
                        class="mt-1 h-10 block w-full border-2 border-black rounded-lg shadow-sm focus:border-Dark focus:ring pl-2"
                        placeholder="Ulangi Kata Sandi"
                      />
                      <div
                        v-if="formErrors.retype_password"
                        class="text-red-500 text-sm mt-1"
                      >
                        {{ formErrors.retype_password }}
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
  middleware: ["authenticated"],
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
      levels: ["Admin", "Staff"],
      formErrors: {},
      breadCrumbs: [
        { text: "Users", disabled: false, to: "/users", exact: true },
        { text: "Edit User", disabled: true },
      ],
      form: {
        fullname: "",
        email: "",
        level: "",
        nickName: "",
        password: "",
        retype_password: "",
      },
      rules: {
        fullname: [(v) => !!v || this.$t("FULLNAME_IS_REQUIRED")],
        email: [
          (v) => !!v || this.$t("EMAIL_IS_REQUIRED"),
          (v) => /.+@.+/.test(v) || this.$t("EMAIL_INVALID"),
          (v) => !this.emailExist || this.$t("EMAIL_EXIST"),
        ],
        password: [
          (v) => v.length === 0 || !!v || this.$t("PASSWORD_REQUIRED"),
          (v) =>
            v.length === 0 ||
            v.length >= 7 ||
            this.$t("PASSWORD_MUST_BE_AT_LEAST_7_CHARACTER"),
        ],
        retype_password: [
          (v) =>
            v === this.form.password ||
            this.$t("RE_PASSWORD_MUST_BE_SAME_WITH_PASSWORD"),
        ],
      },
    };
  },
  methods: {
    fetchDataUserById() {
      this.$axios
        .$get(`/users/${this.id}`)
        .then((response) => {
          const userData = response.user;
          this.form.fullname = userData.fullname;
          this.form.email = userData.email;
          this.form.level = userData.level;
          this.form.nickName = userData.nick_name;
        })
        .catch((error) => {
          this.$router.push({
            name: "users___" + this.$i18n.locale, // Changed this.i18n.locale to this.$i18n.locale
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
          .$put(`/users/${this.id}`, this.form)
          .then((response) => {
            this.isDisable = false;
            this.$router.push({
              name: "users___" + this.$i18n.locale,
              params: {
                message: "UPDATE_SUCCESS",
                fullname: this.form.fullname,
              },
            });
          })
          .catch((error) => {
            if (
              error.response &&
              error.response.data.message === "EMAIL_EXIST"
            ) {
              this.formErrors.email = "Email sudah ada.";
            } else if (
              error.response &&
              error.response.data.message === "NICK_NAME_EXIST"
            ) {
              this.formErrors.nickName = "Nick Name Sudah Digunakan!";
            } else {
              console.error(error);
            }
            this.isDisable = false;
          });
      }
    },
  },
  mounted() {
    this.fetchDataUserById();
  },
};
</script>
