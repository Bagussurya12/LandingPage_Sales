<template>
  <section class="pt-10">
    <div class="flex justify-center">
      <div class="w-full max-w-lg">
        <div class="bg-Dark shadow-md rounded-lg p-6">
          <h2 class="text-2xl font-bold mb-4 text-white">Tambah Pengguna</h2>
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
                for="nick_name"
                >Nama Panggilan</label
              >
              <input
                v-model="form.nick_name"
                :class="{ 'border-red-500': errors.nick_name }"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-Dark leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                id="nick_name"
                placeholder="Masukan Nama Panggilan"
              />
              <p v-if="errors.nick_name" class="text-red-500 text-xs italic">
                {{ errors.nick_name }}
              </p>
            </div>

            <div class="mb-4">
              <label class="block text-white text-sm font-bold mb-2" for="email"
                >Email</label
              >
              <input
                v-model="form.email"
                :class="{ 'border-red-500': errors.email }"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-Dark leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                id="email"
                placeholder="Masukan Email"
                @blur="checkEmailExist"
              />
              <p v-if="errors.email" class="text-red-500 text-xs italic">
                {{ errors.email }}
              </p>
            </div>
            <div class="mb-4">
              <label class="block text-white text-sm font-bold mb-2" for="level"
                >Peran</label
              >
              <select
                v-model="form.level"
                :class="{ 'border-red-500': errors.level }"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 font-semibold leading-tight focus:outline-none focus:shadow-outline"
                id="level"
              >
                <option value="" disabled class="text-Dark">Pilih Peran</option>
                <option
                  v-for="level in levels"
                  :key="level"
                  :value="level"
                  class="text-Dark font-semibold"
                >
                  {{ level }}
                </option>
              </select>
              <p v-if="errors.level" class="text-red-500 text-xs italic">
                {{ errors.level }}
              </p>
            </div>
            <div class="mb-4">
              <label class="block text-white text-sm font-bold mb-2" for="level"
                >Jabatan</label
              >
              <select
                v-model="form.division"
                :class="{ 'border-red-500': errors.division }"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 font-semibold leading-tight focus:outline-none focus:shadow-outline"
                id="division"
              >
                <option value="" disabled class="text-Dark">
                  Pilih Jabatan
                </option>
                <option
                  v-for="division in divisions"
                  :key="division"
                  :value="division"
                  class="text-Dark font-semibold"
                >
                  {{ division }}
                </option>
              </select>
              <p v-if="errors.division" class="text-red-500 text-xs italic">
                {{ errors.division }}
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
                @click=""
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
</template>

<script>
export default {
  layout: "sideBar",
  data() {
    return {
      isDisable: false,
      levels: ["Admin", "Staff"],
      divisions: ["SALES EXECUTIVE", "AGENT PROPERTY OCBD"],
      emailExist: false,
      nickNameExist: false,
      form: {
        fullname: "",
        nick_name: "",
        email: "",
        password: "",
        retype_password: "",
        level: "",
        division: "",
      },
      errors: {
        fullname: "",
        nick_name: "",
        email: "",
        password: "",
        retype_password: "",
        level: "",
        division: "",
      },
      rules: {
        fullname: [(v) => !!v || this.$t("FULLNAME_IS_REQUIRED")],
        nick_name: [
          (v) => !!v || this.$t("NICKNAME_IS_REQUIRED"),
          (v) => /^[a-z0-9._]+$/.test(v) || this.$t("NICKNAME_INVALID"),
        ],
        email: [
          (v) => !!v || this.$t("EMAIL_IS_REQUIRED"),
          (v) => !this.emailExist || this.$t("IS_EMAIL_EXIST"),
          (v) => /.+@.+/.test(v) || this.$t("EMAIL_INVALID"),
        ],
        password: [
          (v) => !!v || this.$t("PASSWORD_IS_REQUIRED"),
          (v) =>
            v.length >= 7 || this.$t("PASSWORD_MUST_BE_AT_LEAST_7_CHARACTER"),
        ],
        retype_password: [
          (v) => !!v || this.$t("RETYPE_PASSWORD_IS_REQUIRED"),
          (v) =>
            v === this.form.password ||
            this.$t("RE_PASSWORD_MUST_BE_SAME_WITH_PASSWORD"),
        ],
        level: [(v) => !!v || this.$t("ROLE_IS_REQUIRED")],
        division: [(v) => !!v || this.$t("DIVISION_IS_REQUIRED")],
      },
    };
  },
  methods: {
    checkEmailExist() {
      this.emailExist = false;
    },
    validateForm() {
      this.errors = {
        fullname: "",
        nick_name: "",
        email: "",
        password: "",
        retype_password: "",
        level: "",
        division: "",
      };
      let valid = true;

      if (!this.form.fullname) {
        this.errors.fullname = "Nama lengkap diperlukan.";
        valid = false;
      }
      if (!this.form.nick_name) {
        this.errors.nick_name = "Nick Name diperlukan.";
        valid = false;
      } else if (!/^[a-z0-9._]+$/.test(this.form.nick_name)) {
        this.errors.nick_name = "Nick Name tidak valid.";
        valid = false;
      } else if (this.nickNameExist) {
        this.errors.nick_name = "Nick Name Sudah Di Gunakan!";
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
      if (!this.form.level) {
        this.errors.level = "Peran diperlukan.";
        valid = false;
      }
      if (!this.form.division) {
        this.errors.division = "Peran diperlukan.";
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
              name: "users___" + this.$i18n.locale,
              params: {
                message: "CREATE_SUCCESS",
                fullname: this.form.fullname,
              },
            });
          })
          .catch((error) => {
            if (
              error.response &&
              error.response.data.message === "EMAIL_ALREADY_EXIST"
            ) {
              this.emailExist = true;
              this.errors.email = "Email sudah ada.";
            } else if (
              error.response &&
              error.response.data.message === "NICK_NAME_ALREADY_EXIST"
            ) {
              this.nickNameExist = true;
              this.errors.nick_name = "Nick Name Sudah Di Gunakan!";
            }
            this.isDisable = false;
            console.log(this.form);
          });
      }
    },
  },
};
</script>
