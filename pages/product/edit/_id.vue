<template>
  <NuxtLayout name="sideBar">
    <section class="pt-1 pb-32 py-10">
      <div class="container mx-auto">
        <div class="flex justify-center">
          <div class="w-full md:w-full">
            <div class="bg-white">
              <h2 class="text-Dark py-10 px-5 font-bold text-4xl">Edit User</h2>

              <div class="text-black p-4 rounded-b-md">
                <nav aria-label="breadcrumb" class="mb-4 text-Dark text-2xl">
                  <ol
                    class="flex leading-none text-Hijau divide-x divide-indigo-400"
                  >
                    <li class="pr-4">
                      <nuxt-link to="/product" class="hover:text-Dark"
                        >Product</nuxt-link
                      >
                    </li>
                    <li class="px-4 text-Dark" aria-current="page">
                      Tambah Produk
                    </li>
                  </ol>
                </nav>
                <form @submit.prevent="onSubmit">
                  <div class="mb-4 flex flex-wrap md:flex-nowrap md:space-x-4">
                    <div class="w-full md:w-1/2 mb-4 md:mb-0 flex flex-col">
                      <label
                        class="block text-xl font-medium text-Dark mb-2"
                        for="title"
                        >Nama Produk</label
                      >
                      <input
                        id="title"
                        name="title"
                        type="text"
                        v-model="form.title"
                        required
                        class="mt-1 my-5 h-10 block w-full border-2 border-black rounded-lg shadow-sm focus:border-Dark focus:ring pl-2"
                      />
                      <div
                        v-if="formErrors.title"
                        class="text-red-500 text-sm mt-1"
                      >
                        {{ formErrors.title }}
                      </div>
                    </div>
                    <div class="w-full md:w-1/2 flex flex-col">
                      <label
                        class="block text-xl font-medium text-Dark mb-2"
                        for="harga"
                        >Harga</label
                      >
                      <input
                        id="harga"
                        name="harga"
                        type="text"
                        v-model="form.harga"
                        class="mt-1 h-10 block w-full border-2 border-black rounded-lg shadow-sm focus:border-Dark focus:ring pl-2"
                      />
                      <div
                        v-if="formErrors.harga"
                        class="text-red-500 text-sm mt-1"
                      >
                        {{ formErrors.harga }}
                      </div>
                    </div>
                  </div>
                  <div class="mb-4 flex flex-wrap md:flex-nowrap md:space-x-4">
                    <div class="w-full md:w-1/2 mb-4 md:mb-0 flex flex-col">
                      <label
                        class="block text-xl font-medium text-Dark mb-2"
                        for="luas_tanah"
                        >Luas Tanah</label
                      >
                      <input
                        id="luas_tanah"
                        name="luas_tanah"
                        type="number"
                        v-model="form.luas_tanah"
                        placeholder="Masukan Luas Tanah"
                        class="mt-1 my-5 h-10 block w-full border-2 border-black rounded-lg shadow-sm focus:border-Dark focus:ring pl-2"
                      />
                      <div
                        v-if="formErrors.luas_tanah"
                        class="text-red-500 text-sm mt-1"
                      >
                        {{ formErrors.luas_tanah }}
                      </div>
                    </div>
                    <div class="w-full md:w-1/2 flex flex-col">
                      <label
                        class="block text-xl font-medium text-Dark mb-2"
                        for="luas_bangunan"
                        >Luas Bangunan</label
                      >
                      <input
                        id="luas_bangunan"
                        name="luas_bangunan"
                        type="number"
                        v-model="form.luas_bangunan"
                        placeholder="Masukan Luas Bangunan"
                        class="mt-1 h-10 block w-full border-2 border-black rounded-lg shadow-sm focus:border-Dark focus:ring pl-2"
                      />
                      <div
                        v-if="formErrors.luas_bangunan"
                        class="text-red-500 text-sm mt-1"
                      >
                        {{ formErrors.luas_bangunan }}
                      </div>
                    </div>
                    <div class="w-full md:w-1/2 mb-4 md:mb-0 flex flex-col">
                      <label
                        class="block text-xl font-medium text-Dark mb-2"
                        for="jumlah_kamar_tidur"
                        >Jumlah Kamar Tidur
                      </label>
                      <input
                        id="jumlah_kamar_tidur"
                        name="jumlah_kamar_tidur"
                        type="number"
                        placeholder="Masukan Jumlah Kamar Tidur"
                        v-model="form.jumlah_kamar_tidur"
                        class="mt-1 my-5 h-10 block w-full border-2 border-black rounded-lg shadow-sm focus:border-Dark focus:ring pl-2"
                      />
                      <div
                        v-if="formErrors.jumlah_kamar_tidur"
                        class="text-red-500 text-sm mt-1"
                      >
                        {{ formErrors.jumlah_kamar_tidur }}
                      </div>
                    </div>
                    <div class="w-full md:w-1/2 flex flex-col">
                      <label
                        class="block text-xl font-medium text-Dark mb-2"
                        for="jumlah_kamar_mandi"
                        >Jumlah Kamar Mandi</label
                      >
                      <input
                        id="jumlah_kamar_mandi"
                        name="jumlah_kamar_mandi"
                        type="number"
                        placeholder="Masukan Jumlah Kamar Mandi"
                        v-model="form.jumlah_kamar_mandi"
                        class="mt-1 h-10 block w-full border-2 border-black rounded-lg shadow-sm focus:border-Dark focus:ring pl-2"
                      />
                      <div
                        v-if="formErrors.jumlah_kamar_mandi"
                        class="text-red-500 text-sm mt-1"
                      >
                        {{ formErrors.jumlah_kamar_mandi }}
                      </div>
                    </div>
                  </div>
                  <div class="mb-4 flex flex-wrap md:flex-nowrap md:space-x-4">
                    <div class="w-full md:w-1/2 flex flex-col">
                      <label
                        class="block text-xl font-medium text-gray-700 mb-2"
                        for="Deskripsi"
                        >Deskripsi</label
                      >
                      <textarea
                        id="deskripsi"
                        name="deskripsi"
                        v-model="form.deskripsi"
                        class="mt-1 block w-full border-2 border-black rounded-lg shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        rows="5"
                        placeholder="Masukan Deskripsi Produk"
                      ></textarea>
                      <div
                        v-if="formErrors.deskripsi"
                        class="text-red-500 text-sm mt-1"
                      >
                        {{ formErrors.deskripsi }}
                      </div>
                    </div>
                    <div class="w-full md:w-1/2 flex flex-col">
                      <label
                        class="block text-xl font-medium text-gray-700 mb-2"
                        for="spesifikasi"
                        >Spesifikasi</label
                      >
                      <textarea
                        id="spesifikasi"
                        name="spesifikasi"
                        v-model="form.spesifikasi"
                        class="mt-1 block w-full border-2 border-black rounded-lg shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        rows="5"
                        placeholder="Masukan spesifikasi Produk"
                      ></textarea>
                      <div
                        v-if="formErrors.spesifikasi"
                        class="text-red-500 text-sm mt-1"
                      >
                        {{ formErrors.spesifikasi }}
                      </div>
                    </div>
                  </div>
                  <div class="mb-4 flex flex-wrap md:flex-nowrap md:space-x-4">
                    <div class="w-full flex flex-col">
                      <label
                        class="block text-xl mb-4 font-medium text-gray-700"
                        for="photos"
                        >Foto Produk</label
                      >
                      <div
                        v-for="(photo, index) in form.photos"
                        :key="index"
                        class="mb-4"
                      >
                        <input
                          :id="'photos-' + index"
                          name="photos"
                          type="file"
                          @change="onFileChange($event, index)"
                          accept="image/jpeg, image/png"
                          class="block w-full text-lg text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-bold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                        />

                        <div
                          v-if="formErrors.photos && formErrors.photos[index]"
                          class="text-red-500 text-sm mt-1"
                        >
                          {{ formErrors.photos[index] }}
                        </div>
                      </div>
                      <button
                        type="button"
                        @click="addFileInput"
                        class="bg-Dark text-white px-4 py-2 rounded-md shadow-md max-w-[300px]"
                      >
                        Tambah Foto
                      </button>
                    </div>
                  </div>
                  <div class="flex justify-end mt-10">
                    <button
                      type="submit"
                      :disabled="isSubmitting"
                      class="bg-Hijau text-white px-4 py-2 rounded-md shadow-md hover:bg-teal-950 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <span v-if="!isSubmitting">Simpan</span>
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
      isSubmitting: false,
      formErrors: {},
      form: {
        title: "",
        harga: "",
        luas_tanah: "",
        luas_bangunan: "",
        jumlah_kamar_tidur: "",
        jumlah_kamar_mandi: "",
        deskripsi: "",
        spesifikasi: "",
        photos: [null], // Start with one input
      },
    };
  },
  methods: {
    async fetchProduct() {
      this.$axios
        .$get("/product/${this.id}")
        .then((response) => {
          const productData = response.product;
          this.form.id = productData.id;
          this.form.title = productData.title;
          this.form.harga = productData.harga;
          this.form.luas_tanah = productData.luas_tanah;
          this.form.luas_bangunan = productData.luas_bangunan;
          this.form.jumlah_kamar_mandi = productData.jumlah_kamar_mandi;
          this.form.jumlah_kamar_tidur = productData.jumlah_kamar_tidur;
          this.form.deskripsi = productData.deskripsi;
          this.form.spesifikasi = productData.spesifikasi;
          this.form.photos = productData.gambar;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    addFileInput() {
      this.form.photos.push(null); // Add new null entry to photos array
    },
    onFileChange(event, index) {
      this.$set(this.form.photos, index, event.target.files[0]); // Set file at specific index
    },
    async validateForm() {
      this.formErrors = {};
      if (!this.form.title) {
        this.formErrors.title = "Title is required";
      }
      if (!this.form.harga) {
        this.formErrors.harga = "Harga is required";
      }
      // Validate other fields...

      // Create a new FormData object
      const formData = new FormData();

      // Append files to the FormData object
      this.form.photos.forEach((photo, index) => {
        formData.append("photos", photo);
      });

      console.log("Validation errors:", this.formErrors);

      // Return validation result
      return Object.keys(this.formErrors).length === 0;
    },

    async onSubmit() {
      console.log("Submit button clicked");

      if (!this.validateForm()) {
        console.log("Validation failed");
        return;
      }

      const formData = new FormData();
      formData.append("title", this.form.title);
      formData.append("harga", this.form.harga);
      formData.append("luas_tanah", this.form.luas_tanah);
      formData.append("luas_bangunan", this.form.luas_bangunan);
      formData.append("jumlah_kamar_tidur", this.form.jumlah_kamar_tidur);
      formData.append("jumlah_kamar_mandi", this.form.jumlah_kamar_mandi);
      formData.append("deskripsi", this.form.deskripsi);
      formData.append("spesifikasi", this.form.spesifikasi);

      // Append photos correctly
      this.form.photos.forEach((photo, index) => {
        formData.append("photos", photo); // Use 'photos' as the field name
      });

      this.isSubmitting = true;

      try {
        console.log("Sending data to backend");
        const response = await this.$axios.post("/product", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        console.log("Data sent successfully:", response);
        this.$router.push({ name: "product" });
      } catch (error) {
        console.error("Error sending data:", error);
        this.isSubmitting = false;
        this.formErrors.submit = "Failed to submit data. Please try again.";
      }
    },
  },
};
</script>
