<template>
  <NuxtLayout :name="sideBar">
    <section class="pb-16 bg-white px-20 pt-20">
      <div class="container mx-auto">
        <div class="relative w-full overflow-hidden">
          <div
            class="flex transition-transform duration-700"
            :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
          >
            <div
              v-for="(picture, index) in form.pictures"
              :key="index"
              class="min-w-full relative"
            >
              <img
                :src="
                  require(`../../../../Backend/public/images/${picture.gambar_url}`)
                "
                alt=""
                class="w-full h-[600px] object-cover rounded-xl"
              />
              <div
                class="absolute top-0 left-0 w-full h-full bg-black opacity-50 rounded-xl"
              ></div>
            </div>
          </div>
          <button
            @click="prev"
            class="absolute top-1/2 left-4 transform -translate-y-1/2 bg-transparent hover:bg-Dark text-white font-bold px-4 py-2 rounded-full lg:text-6xl md:text-4xl sm:text-2xl"
          >
            &#8592;
          </button>
          <button
            @click="next"
            class="absolute top-1/2 right-4 transform -translate-y-1/2 bg-transparent hover:bg-Dark text-white font-bold px-4 py-2 rounded-full lg:text-6xl md:text-4xl sm:text-2xl"
          >
            &#8594;
          </button>
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
      idProduct: params.id,
    };
  },
  data() {
    return {
      currentIndex: 0,
      form: {
        pictures: [],
        title: "",
        harga: "",
        luas_tanah: "",
        luas_bangunan: "",
        jumlah_kamar_tidur: "",
        jumlah_kamar_mandi: "",
        deskripsi: "",
        spesifikasi: "",
      },
    };
  },
  methods: {
    fetchProduct() {
      this.$axios
        .$get(`/products/${this.idProduct}`)
        .then((response) => {
          const product = response.product;
          this.form.pictures = product.gambar;
          this.form.title = product.title;
          this.form.harga = product.harga;
          this.form.luas_tanah = product.luas_tanah;
          this.form.luas_bangunan = product.luas_bangunan;
          this.form.jumlah_kamar_tidur = product.jumlah_kamar_tidur;
          this.form.jumlah_kamar_mandi = product.jumlah_kamar_mandi;
          this.form.deskripsi = product.deskripsi;
          this.form.spesifikasi = product.spesifikasi;
        })
        .catch((error) => {
          this.$router.push({
            name: "profile___" + this.i18n.locale,
            params: { message: "ID_NOT_FOUND" },
          });
        });
    },
    next() {
      this.currentIndex = (this.currentIndex + 1) % this.form.pictures.length;
    },
    prev() {
      this.currentIndex =
        (this.currentIndex - 1 + this.form.pictures.length) %
        this.form.pictures.length;
    },
  },
  mounted() {
    this.fetchProduct();
  },
};
</script>

<style scoped>
/* Add your styles here */
</style>
