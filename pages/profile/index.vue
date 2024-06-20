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
              <div class="flex justify-center text-center mb-6 mt-10">
                <p
                  class="max-w-[800px] font-Montserrat text-Dark font-bold text-xl mt-2"
                >
                  https://pineresidence.co.id/{{ nickName }}
                </p>
                <button
                  @click="
                    copyToClipboard(`https://pineresidence.co.id/${nickName}`)
                  "
                  class="mx-5 bg-Dark rounded-lg text-white py-2 px-5"
                >
                  Copy URL
                </button>
              </div>
              <div class="w-full pt-10 border-t border-slate-700"></div>
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
                  <nuxt-link :to="`/profile/edit/${userId}`" class="font-bold"
                    >Disini 👍</nuxt-link
                  >
                </p>
                <div class="w-full pt-10 border-t border-slate-700"></div>
                <div class="mb-4 flex flex-wrap md:flex-nowrap md:space-x-4">
                  <div class="w-full md:w-1/2 mb-4 md:mb-0 flex flex-col">
                    <h1 class="block text-xl font-medium text-Dark mb-2">
                      Nama Lengkap
                    </h1>
                    <h1 class="h-10 text-Dark font-bold text-2xl">
                      {{ profile.fullName }}
                    </h1>
                    <div class="w-full pt-10 border-t border-Dark"></div>
                  </div>
                  <div class="w-full md:w-1/2 flex flex-col">
                    <h1 class="block text-xl font-medium text-Dark mb-2">
                      Tanggal Lahir
                    </h1>
                    <h1 class="h-10 text-Dark font-bold text-xl">
                      {{ formattedDate(profile.dateOfBirth) }}
                    </h1>
                    <div class="w-full pt-10 border-t border-Dark"></div>
                  </div>
                </div>
                <div class="mb-4 flex flex-wrap md:flex-nowrap md:space-x-4">
                  <div class="w-full md:w-1/2 mb-4 md:mb-0 flex flex-col">
                    <h1 class="block text-xl font-medium text-Dark mb-2">
                      Alamat
                    </h1>
                    <h1 class="h-10 text-Dark font-bold text-xl">
                      {{ profile.address }}
                    </h1>
                    <div class="w-full pt-10 border-t border-Dark"></div>
                  </div>
                  <div class="w-full md:w-1/2 flex flex-col">
                    <h1 class="block text-xl font-medium text-Dark mb-2">
                      Jenis Kelamin
                    </h1>
                    <h1 class="h-10 text-Dark font-bold text-xl">
                      {{ profile.gender }}
                    </h1>
                    <div class="w-full pt-10 border-t border-Dark"></div>
                  </div>
                </div>
                <div class="w-full flex flex-col">
                  <nuxt-link :to="`/profile/edit/${userId}`">
                    <button class="bg-Dark h-10 rounded-lg text-white w-full">
                      Ubah Profile
                    </button>
                  </nuxt-link>
                </div>
              </form>
              <form ref="form" @submit.prevent="onSubmit" class="mt-20">
                <h2 class="font-bold mt-10 mb-2 text-Dark text-2xl">
                  Media Sosial
                </h2>
                <p class="font-semibold text-Dark text-medium">
                  Kelola informasi Media Sosial Anda untuk mengontrol, dan
                  menautkan ke profile Anda ✌
                </p>
                <div class="w-full pt-10 border-t border-slate-700"></div>
                <div class="mb-4 flex flex-wrap md:flex-nowrap md:space-x-4">
                  <div class="md:w-1/2 lg:w-1/2 mb-4 md:mb-0 flex flex-col">
                    <!-- LINKED IN -->
                    <li class="flex items-center space-x-4">
                      <a
                        href="#"
                        class="w-12 h-12 flex justify-center items-center"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg
                          role="img"
                          width="20"
                          viewBox="0 0 24 24"
                          class="fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>LinkedIn</title>
                          <path
                            d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                          />
                        </svg>
                      </a>
                      <p class="text-lg font-semibold text-Dark">
                        {{ sosmed.linkedin }}
                      </p>
                    </li>
                  </div>
                  <div class="md:w-1/2 lg:w-1/2 flex flex-col">
                    <!-- INSTAGRAM -->
                    <li class="flex items-center space-x-4">
                      <a
                        href="#"
                        class="w-12 h-12 flex justify-center items-center"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg
                          role="img"
                          viewBox="0 0 24 24"
                          width="20"
                          class="fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>Instagram</title>
                          <path
                            d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"
                          />
                        </svg>
                      </a>
                      <p class="text-lg font-semibold text-Dark">
                        {{ sosmed.instagram }}
                      </p>
                    </li>
                  </div>

                  <!--  -->
                  <div
                    class="w-full md:w-1/2 lg:w-1/2 mb-4 md:mb-0 flex flex-col"
                  >
                    <!-- Facebook-->
                    <li class="flex items-center space-x-4">
                      <a
                        href="#"
                        class="w-12 h-12 flex justify-center items-center"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg
                          role="img"
                          width="20"
                          viewBox="0 0 24 24"
                          class="fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>Facebook</title>
                          <path
                            d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"
                          />
                        </svg>
                      </a>
                      <p class="text-lg font-semibold text-Dark">
                        {{ sosmed.facebook }}
                      </p>
                    </li>
                  </div>
                  <div class="md:w-1/2 lg:w-1/2 flex flex-col">
                    <!-- Youtube -->
                    <li class="flex items-center space-x-4">
                      <a
                        href="#"
                        class="w-12 h-12 flex justify-center items-center"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg
                          role="img"
                          width="20"
                          viewBox="0 0 24 24"
                          class="fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>YouTube</title>
                          <path
                            d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                          />
                        </svg>
                      </a>
                      <p class="text-lg font-semibold text-Dark">
                        {{ sosmed.youtube }}
                      </p>
                    </li>
                  </div>
                  <!--  -->
                  <div class="md:w-1/2 lg:w-1/2 flex flex-col">
                    <!-- Twiter -->
                    <li class="flex items-center space-x-4">
                      <a
                        href="#"
                        class="w-12 h-12 rounded-full flex justify-center items-center"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg
                          role="img"
                          width="20"
                          viewBox="0 0 24 24"
                          class="fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>X</title>
                          <path
                            d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
                          />
                        </svg>
                      </a>
                      <p class="text-lg font-semibold text-Dark">
                        {{ sosmed.twitter }}
                      </p>
                    </li>
                  </div>
                </div>
                <div class="w-full flex flex-col mt-10">
                  <nuxt-link :to="`/profile/sosmed/${sosmed.id}`">
                    <button class="bg-Dark h-10 rounded-lg text-white w-full">
                      Ubah Social Media
                    </button>
                  </nuxt-link>
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
import IbuImelda from "@/assets/images/News.png";

export default {
  middleware: ["authenticated"],
  layout: "sideBar",
  data() {
    return {
      profile: {},
      nickName: "",
      userId: "",
      photo: IbuImelda,
      sosmed: {},
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

      return {
        profile: response.profile,
        nickName: pengguna.user.nick_name,
        userId: pengguna.user.id,
      };
    } catch (error) {
      console.error(error);
      return { profile: {} };
    }
  },
  methods: {
    copyToClipboard(url) {
      navigator.clipboard
        .writeText(url)
        .then(() => {
          alert("URL copied to clipboard!");
        })
        .catch((err) => {
          console.error("Could not copy text: ", err);
        });
    },
    formattedDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString(undefined, options);
    },
    fetchSosmed() {
      this.$axios
        .$get(`/sosmeds/${this.profile.id}`)
        .then((respone) => {
          if (respone.status) {
            this.sosmed = respone.sosmed;
          }
          console.log(this.sosmed);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.fetchSosmed();
  },
};
</script>

<style scoped>
.mt-10 {
  margin-top: 2.5rem; /* Tambahkan margin atas */
}

.space-x-6 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(1.5rem * var(--tw-space-x-reverse));
  margin-left: calc(1.5rem * calc(1 - var(--tw-space-x-reverse)));
}

.w-12 {
  width: 3rem;
}

.h-12 {
  height: 3rem;
}
</style>
