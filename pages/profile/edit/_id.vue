<template>
  <section class="pt-1 pb-32 py-10">
    <div class="container mx-auto">
      <div class="flex justify-center">
        <div class="w-full md:w-full">
          <div class="bg-white">
            <h2 class="text-Dark py-10 px-5 font-bold text-4xl">
              Edit Profile
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
                    Profile Update
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
                      >Nama Lengkap</label
                    >
                    <input
                      id="fullname"
                      name="fullname"
                      type="text"
                      :rules="rules.fullName"
                      v-model="form.fullName"
                      class="mt-1 my-5 h-10 block w-full border-2 border-black rounded-lg shadow-sm focus:border-Dark focus:ring pl-2"
                    />
                    <div
                      v-if="formErrors.fullName"
                      class="text-red-500 text-sm mt-1"
                    >
                      {{ formErrors.fullName }}
                    </div>
                  </div>
                  <div class="w-full md:w-1/2 mt-2 flex flex-col">
                    <label
                      class="block text-xl font-medium text-Dark mb-2"
                      for="dateOfBirth"
                      >Tanggal Lahir</label
                    >
                    <input
                      id="dateOfBirth"
                      name="dateOfBirth"
                      type="date"
                      :rules="rules.dateOfBirth"
                      v-model="form.dateOfBirth"
                      class="mt-1 h-10 block w-full border-2 border-black rounded-lg shadow-sm focus:border-Dark focus:ring pl-2"
                    />
                    <div
                      v-if="formErrors.dateOfBirth"
                      class="text-red-500 text-sm mt-1"
                    >
                      {{ formErrors.dateOfBirth }}
                    </div>
                  </div>
                </div>

                <div class="mb-4 flex flex-wrap md:flex-nowrap md:space-x-4">
                  <div class="w-full md:w-1/2 flex flex-col mt-2">
                    <label
                      class="block text-xl font-medium text-Dark mb-2"
                      for="gender"
                      >Gender</label
                    >
                    <select
                      id="gender"
                      name="gender"
                      :rules="rules.gender"
                      v-model="form.gender"
                      class="mt-1 h-10 block w-full border-2 border-black rounded-lg shadow-sm focus:border-Dark focus:ring pl-2"
                    >
                      <option
                        v-for="gender in genders"
                        :key="gender"
                        :value="gender"
                        class="text-Dark"
                      >
                        {{ gender }}
                      </option>
                    </select>
                    <div
                      v-if="formErrors.gender"
                      class="text-red-500 text-sm mt-1"
                    >
                      {{ formErrors.gender }}
                    </div>
                  </div>
                  <div class="w-full md:w-1/2 flex flex-col mt-2">
                    <label
                      class="block text-xl font-medium text-Dark mb-2"
                      for="address"
                      >Alamat</label
                    >
                    <input
                      id="address"
                      name="address"
                      type="text"
                      :rules="rules.address"
                      v-model="form.address"
                      class="mt-1 h-10 block w-full border-2 border-black rounded-lg shadow-sm focus:border-Dark focus:ring pl-2"
                    />
                    <div
                      v-if="formErrors.address"
                      class="text-red-500 text-sm mt-1"
                    >
                      {{ formErrors.address }}
                    </div>
                  </div>
                </div>
                <div class="mb-4 flex flex-wrap md:flex-nowrap md:space-x-4">
                  <div class="w-full md:w-1/2 flex flex-col mt-2">
                    <label
                      class="block text-xl font-medium text-Dark mb-2"
                      for="bio"
                      >Bio</label
                    >
                    <input
                      id="bio"
                      name="bio"
                      type="text"
                      :rules="rules.bio"
                      v-model="form.bio"
                      class="mt-1 h-10 block w-full border-2 border-black rounded-lg shadow-sm focus:border-Dark focus:ring pl-2"
                    />
                    <div
                      v-if="formErrors.bio"
                      class="text-red-500 text-sm mt-1"
                    >
                      {{ formErrors.bio }}
                    </div>
                  </div>
                  <div class="w-full md:w-1/2 flex flex-col mt-2">
                    <label
                      class="block text-xl font-medium text-Dark mb-2"
                      for="bio"
                      >Foto Profile</label
                    >
                    <input
                      id="photos"
                      name="photos"
                      type="file"
                      @change="onFileChange"
                      accept="image/jpeg, image/png, image/jpeg"
                      placeholder="Masukan Foto"
                      class="block min-w-full text-lg text-Dark file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-bold file:bg-Hijau file:text-Dark hover:file:bg-violet-100"
                    />
                    <div
                      v-if="formErrors.photos"
                      class="text-red-500 text-sm mt-1"
                    >
                      {{ formErrors.photos }}
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
</template>

<script>
import moment from "moment";

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
      genders: ["Pria", "Wanita"],
      formErrors: {},
      breadCrumbs: [
        { text: "Profile", disabled: false, to: "/profile", exact: true },
        { text: "Edit Profile", disabled: true },
      ],
      form: {
        fullName: "",
        dateOfBirth: "",
        gender: "",
        address: "",
        photos: "",
        bio: "",
      },
      rules: {
        fullName: [(v) => !!v || this.$t("FULLNAME_IS_REQUIRED")],
        dateOfBirth: [(v) => !!v || this.$t("DATE_OF_BIRTH_IS_REQUIRED")],
        gender: [(v) => !!v || this.$t("GENDER_IS_REQUIRED")],
        address: [(v) => !!v || this.$t("ADDRESS_IS_REQUIRED")],
        bio: [(v) => !!v || this.$t("BIO_IS_REQUIRED")],
      },
    };
  },
  methods: {
    formattedDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString(undefined, options);
    },
    fetchDataProfileById() {
      this.$axios
        .$get(`/profile/${this.id}`)
        .then((response) => {
          const profile = response.profile;
          this.form.fullName = profile.fullName;
          this.form.dateOfBirth = moment(profile.dateOfBirth).format(
            "YYYY-MM-DD"
          ); // Format for input[type="date"]
          this.form.gender = profile.gender;
          this.form.address = profile.address;
          this.form.photos = profile.profilePhoto;
          this.form.bio = profile.bio;
        })
        .catch((error) => {
          this.$router.push({
            name: "profile___" + this.i18n.locale,
            params: { message: "ID_NOT_FOUND" },
          });
        });
    },

    onFileChange(event) {
      const file = event.target.files[0];
      this.form.photos = file;
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
        this.form.dateOfBirth = moment(this.form.dateOfBirth).format(
          "DD/MM/YYYY"
        );
        const formData = new FormData();
        if (this.form.photos) {
          formData.append("photos", this.form.photos);
        }

        formData.append("fullName", this.form.fullName);
        formData.append("dateOfBirth", this.form.dateOfBirth);
        formData.append("bio", this.form.bio);
        formData.append("address", this.form.address);
        formData.append("gender", this.form.gender);

        this.isDisable = true;
        this.$axios
          .$put(`/profile/${this.id}`, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then((response) => {
            this.isDisable = false;
            console.log(response);
            console.log("SUCCESS_UPDATE");
            this.$router.push({
              name: "dashboard___" + this.$i18n.locale,
              params: {
                message: "UPDATE_SUCCESS",
                fullname: this.form.fullName,
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
    this.fetchDataProfileById();
  },
};
</script>
