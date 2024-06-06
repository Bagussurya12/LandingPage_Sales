<template>
  <NuxtLayout :name="sideBar">
    <section>
      <div class="flex justify-center">
        <div class="w-full max-w-lg">
          <div class="bg-white shadow-md rounded-lg p-6">
            <h2 class="text-2xl font-bold mb-4">Add User</h2>
            <form @submit.prevent="onSubmit">
              <div class="mb-4">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="fullname"
                  >Nama Lengkap</label
                >
                <input
                  v-model="form.fullname"
                  :class="{ 'border-red-500': errors.fullname }"
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="email"
                  >Email</label
                >
                <input
                  v-model="form.email"
                  :class="{ 'border-red-500': errors.email }"
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="role"
                  >Role</label
                >
                <select
                  v-model="form.role"
                  :class="{ 'border-red-500': errors.role }"
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="role"
                >
                  <option value="" disabled>Select Role</option>
                  <option v-for="role in roles" :key="role" :value="role">
                    {{ role }}
                  </option>
                </select>
                <p v-if="errors.role" class="text-red-500 text-xs italic">
                  {{ errors.role }}
                </p>
              </div>
              <div class="mb-4">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="password"
                  >Kata Sandi</label
                >
                <input
                  v-model="form.password"
                  :class="{ 'border-red-500': errors.password }"
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="retype_password"
                  >Ulangi Kata Sandi</label
                >
                <input
                  v-model="form.retype_password"
                  :class="{ 'border-red-500': errors.retype_password }"
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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
      roles: ["Admin", "Staff"],
      emailExist: false,
      form: {
        fullname: "",
        email: "",
        password: "",
        retype_password: "",
        role: "",
      },
      errors: {
        fullname: "",
        email: "",
        password: "",
        retype_password: "",
        role: "",
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
    validateForm() {
      this.errors = {
        fullname: "",
        email: "",
        password: "",
        retype_password: "",
        role: "",
      };
      let valid = true;

      if (!this.form.fullname) {
        this.errors.fullname = "Nama lengkap diperlukan.";
        valid = false;
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
      if (!this.form.role) {
        this.errors.role = "Peran diperlukan.";
        valid = false;
      }
      return valid;
    },
    onSubmit() {
      if (this.validateForm()) {
        this.isDisable = true;
        this.$axios
          .$post("/users", this.form)
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
