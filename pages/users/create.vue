<template>
  <NuxtLayout :name="sideBar">
    <section class="pt-10">
      <div class="flex justify-center">
        <div class="w-full max-w-lg">
          <div class="bg-Dark shadow-md rounded-lg p-6">
            <h2 class="text-2xl font-bold mb-4 text-white">Add User</h2>
            <form @submit.prevent="onSubmit">
              <div class="mb-4">
                <label
                  class="block text-white text-sm font-bold mb-2"
                  for="fullname"
                  >Nama Lengkap</label
                >
                <input
                  v-model="form.fullname"
                  :class="{ 'border-red-500': errors.fullname }"
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-Dark leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  id="fullname"
                  placeholder="Nama Lengkap"
                />
                <p v-if="errors.fullname" class="text-red-500 text-xs italic">
                  {{ errors.fullname }}
                </p>
              </div>
              <div class="mb-4">
                <label
                  class="block text-white text-sm font-bold mb-2"
                  for="fullname"
                  >Nick Name</label
                >
                <input
                  v-model="form.nickName"
                  :class="{ 'border-red-500': errors.nickName }"
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-Dark leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  id="fullname"
                  placeholder="Nick Name"
                />
                <p v-if="errors.nickName" class="text-red-500 text-xs italic">
                  {{ errors.nickName }}
                </p>
              </div>
              <div class="mb-4">
                <label
                  class="block text-white text-sm font-bold mb-2"
                  for="email"
                  >Email</label
                >
                <input
                  v-model="form.email"
                  :class="{ 'border-red-500': errors.email }"
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-Dark leading-tight focus:outline-none focus:shadow-outline"
                  type="email"
                  id="email"
                  placeholder="Email"
                  @blur="checkEmailExist"
                />
                <p v-if="errors.email" class="text-red-500 text-xs italic">
                  {{ errors.email }}
                </p>
              </div>
              <div class="mb-4">
                <label
                  class="block text-white text-sm font-bold mb-2"
                  for="level"
                  >Role</label
                >
                <select
                  v-model="form.level"
                  :class="{ 'border-red-500': errors.level }"
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="level"
                >
                  <option value="" disabled class="text-Dark">
                    Select Role
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
                <p v-if="errors.level" class="text-red-500 text-xs italic">
                  {{ errors.level }}
                </p>
              </div>
              <div class="mb-4">
                <label
                  class="block text-white text-sm font-bold mb-2"
                  for="password"
                  >Kata Sandi</label
                >
                <input
                  v-model="form.password"
                  :class="{ 'border-red-500': errors.password }"
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-Dark leading-tight focus:outline-none focus:shadow-outline"
                  type="password"
                  id="password"
                  placeholder="Kata Sandi"
                />
                <p v-if="errors.password" class="text-red-500 text-xs italic">
                  {{ errors.password }}
                </p>
              </div>
              <div class="mb-4">
                <label
                  class="block text-white text-sm font-bold mb-2"
                  for="retype_password"
                  >Ulangi Kata Sandi</label
                >
                <input
                  v-model="form.retype_password"
                  :class="{ 'border-red-500': errors.retype_password }"
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-Dark leading-tight focus:outline-none focus:shadow-outline"
                  type="password"
                  id="retype_password"
                  placeholder="Ulangi Kata Sandi"
                />
                <p
                  v-if="errors.retype_password"
                  class="text-red-500 text-xs italic"
                >
                  {{ errors.retype_password }}
                </p>
              </div>
              <div class="flex items-center justify-between">
                <button
                  :disabled="isDisable"
                  class="bg-Hijau hover:bg-teal-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  <span v-if="!isDisable">Simpan</span>
                  <span v-else>Loading...</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </NuxtLayout>
</template>

<script>
export default {
  layout: "sideBar",
  data() {
    return {
      isDisable: false,
      levels: ["Admin", "Staff"],
      emailExist: false,
      nickNameExist: false,
      form: {
        fullname: "",
        nickName: "",
        email: "",
        password: "",
        retype_password: "",
        level: "",
      },
      errors: {
        fullname: "",
        nickName: "",
        email: "",
        password: "",
        retype_password: "",
        level: "",
      },
    };
  },
  methods: {
    checkEmailExist() {
      // Add your logic to check if the email exists
      // Set emailExist to true if the email exists
      // Reset emailExist to false if the email does not exist
      this.emailExist = false;
    },
    checkNickNameExist() {
      // Add your logic to check if the email exists
      // Set emailExist to true if the email exists
      // Reset emailExist to false if the email does not exist
      this.nickNameExist = false;
    },
    validateForm() {
      this.errors = {
        fullname: "",
        nickName: "",
        email: "",
        password: "",
        retype_password: "",
        level: "",
      };
      let valid = true;

      if (!this.form.fullname) {
        this.errors.fullname = "Nama lengkap diperlukan.";
        valid = false;
      }
      if (!this.form.nickName) {
        this.errors.nickName = "Nick Name diperlukan.";
        valid = false;
      } else if (this.nickNameExist) {
        this.errors.nickName = "Nick Name Sudah Di Gunakan!";
      }
      if (!this.form.email) {
        this.errors.email = "Email diperlukan.";
        valid = false;
      } else if (this.emailExist) {
        this.errors.email = "Email sudah ada.";
        valid = false;
      } else if (!/.+@.+/.test(this.form.email)) {
        this.errors.email = "Email tidak valid.";
        valid = false;
      }
      if (!this.form.password) {
        this.errors.password = "Kata sandi diperlukan.";
        valid = false;
      } else if (this.form.password.length < 7) {
        this.errors.password = "Kata sandi harus setidaknya 7 karakter.";
        valid = false;
      }
      if (!this.form.retype_password) {
        this.errors.retype_password = "Ketik ulang kata sandi diperlukan.";
        valid = false;
      } else if (this.form.retype_password !== this.form.password) {
        this.errors.retype_password = "Kata sandi tidak sama.";
        valid = false;
      }
      if (!this.form.level) {
        this.errors.level = "Peran diperlukan.";
        valid = false;
      }
      return valid;
    },
    onSubmit() {
      if (this.validateForm()) {
        this.isDisable = true;
        this.$axios
          .$post("/Add-User", this.form)
          .then((response) => {
            this.isDisable = false;
            this.$router.push({
              name: "users",
              params: {
                message: "CREATE_SUCCESS",
                fullname: this.form.fullname,
              },
            });
          })
          .catch((error) => {
            if (error.response.data.message == "EMAIL_EXIST") {
              this.emailExist = true;
              this.validateForm();
            }
            this.isDisable = false;
          });
      }
    },
  },
};
</script>
