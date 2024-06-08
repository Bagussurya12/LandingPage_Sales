<template>
  <NuxtLayout :name="sideBar">
    <section>
      <div class="container mx-auto my-3">
        <div class="flex justify-center">
          <div class="flex flex-wrap md:flex-nowrap md:space-x-4">
            <div class="bg-white rounded-lg overflow-hidden">
              <div class="flex justify-center p-4">
                <img
                  :src="photo"
                  alt="Profile Photo"
                  class="rounded-lg h-64 w-64 object-cover mx-auto border-4 border-Dark"
                />
              </div>
              <div class="flex justify-center p-2">
                <h3 class="text-4xl font-bold text-Dark">Sales Executive</h3>
              </div>
              <div class="flex justify-center mb-2">
                <h3 class="text-2xl font-semibold text-Hijau">
                  @{{ nickName }}
                </h3>
              </div>
              <div class="flex justify-center text-center mb-6">
                <p class="text-lg max-w-[800px] font-mono text-Dark">
                  {{ profile.bio }}
                </p>
              </div>
              <form ref="form" @submit.prevent="onSubmit" class="mt-20">
                <h2 class="font-bold mt-10 mb-2 text-Dark text-2xl">
                  Profile Saya
                </h2>
                <p class="font-semibold text-Dark text-medium">
                  Kelola informasi profil Anda untuk mengontrol, melindungi dan
                  mengamankan akun ✨
                </p>
                <p class="font-semibold text-Dark text-medium mb-5">
                  Untuk Mengubah Profile Klik
                  <nuxt-link to="/pages/profile/edit/_id" class="font-bold"
                    >Disini 👍</nuxt-link
                  >
                </p>
                <div class="w-full pt-10 border-t border-slate-700"></div>
                <div class="mb-4 flex flex-wrap md:flex-nowrap md:space-x-4">
                  <div class="w-full md:w-1/2 mb-4 md:mb-0 flex flex-col">
                    <label
                      class="block text-xl font-medium text-Dark mb-2"
                      for="fullname"
                    >
                      Nama Lengkap
                    </label>
                    <input
                      id="fullname"
                      name="fullname"
                      type="text"
                      v-model="profile.fullName"
                      class="mt-1 my-5 h-10 block w-full border-2 border-black rounded-lg shadow-sm focus:border-Dark focus:ring pl-2"
                    />
                  </div>
                  <div class="w-full md:w-1/2 flex flex-col">
                    <label
                      class="block text-xl font-medium text-Dark mb-2"
                      for="tanggalLahir"
                    >
                      Tanggal Lahir
                    </label>
                    <input
                      id="tanggalLahir"
                      name="tanggalLahir"
                      type="text"
                      :value="formattedDate(profile.dateOfBirth)"
                      class="mt-1 h-10 block w-full border-2 border-black rounded-lg shadow-sm focus:border-Dark focus:ring pl-2"
                    />
                  </div>
                </div>
                <div class="mb-4 flex flex-wrap md:flex-nowrap md:space-x-4">
                  <div class="w-full md:w-1/2 mb-4 md:mb-0 flex flex-col">
                    <label
                      class="block text-xl font-medium text-Dark mb-2"
                      for="address"
                    >
                      Alamat
                    </label>
                    <input
                      id="address"
                      name="address"
                      v-model="profile.address"
                      class="h-10 block w-full border-2 border-black rounded-lg shadow-sm focus:border-Dark focus:ring pl-2"
                    />
                  </div>
                  <div class="w-full md:w-1/2 flex flex-col">
                    <label
                      class="block text-xl font-medium text-Dark mb-2"
                      for="gender"
                    >
                      Jenis Kelamin
                    </label>
                    <input
                      id="gender"
                      name="gender"
                      type="text"
                      v-model="profile.gender"
                      class="mt-1 h-10 block w-full border-2 border-black rounded-lg shadow-sm focus:border-Dark focus:ring pl-2"
                      placeholder="Masukkan jenis kelamin"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </NuxtLayout>
</template>

<script>
import IbuImelda from "@/assets/images/Directors/ibu-imelda.jpg";
import { jwtDecode } from "jwt-decode";

export default {
  middleware: ["authenticated"],
  layout: "sideBar",
  data() {
    return {
      profile: {},
      nickName: "",
      photo: IbuImelda,
    };
  },
  async asyncData({ store, $axios }) {
    try {
      const user = store.getters["auth/user"];
      if (!user) {
        throw new Error("User not found");
      }
      const userId = user.id;
      const response = await $axios.$get(`/profile/${userId}`);
      const pengguna = await $axios.$get(`/users/${userId}`);
      return { profile: response.profile, nickName: pengguna.user.nick_name };
    } catch (error) {
      console.error(error);
      return { profile: {} };
    }
  },
  methods: {
    formattedDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString(undefined, options);
    },
  },
};
</script>

<style scoped>
.mt-10 {
  margin-top: 2.5rem; /* Tambahkan margin atas */
}
</style>
