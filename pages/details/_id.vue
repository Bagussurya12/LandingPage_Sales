<template>
  <section class="pb-16 bg-white px-4 md:px-20 pt-10">
    <div class="container mx-auto flex flex-col md:flex-row">
      <!-- Carousel Wrapper -->
      <div class="w-full md:w-1/3 overflow-hidden mx-auto">
        <div
          class="flex transition-transform duration-700"
          :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
        >
          <div
            v-for="(picture, index) in form.pictures"
            :key="index"
            class="min-w-full h-200 relative"
          >
            <img
              :src="
                require(`../../../Backend/public/images/${picture.gambar_url}`)
              "
              alt=""
              class="w-full h-full object-cover rounded-xl"
            />
            <div
              class="absolute top-0 left-0 w-full h-full bg-black opacity-50 rounded-xl"
            ></div>
          </div>
        </div>
        <!-- Dots Navigation -->
        <div class="flex justify-center mt-4">
          <span
            v-for="(picture, index) in form.pictures"
            :key="index"
            @click="goToSlide(index)"
            :class="['dot', { active: currentIndex === index }]"
          ></span>
        </div>
      </div>
      <!-- Other content can be placed here -->
      <div
        class="w-full md:w-2/3 md:mt-0 md:pl-8 text-start md:text-left mt-10"
      >
        <h1 class="text-3xl font-bold mb-4 mt-5">{{ form.title }}</h1>
        <p class="text-xl mb-2">Harga: {{ form.harga }}</p>
        <p class="text-xl mb-2">
          Luas Tanah: {{ form.luas_tanah }} m² | Luas Bangunan:
          {{ form.luas_bangunan }} m²
        </p>
        <p class="text-xl mb-2">
          Jumlah Kamar Mandi: {{ form.jumlah_kamar_mandi }} | Jumlah Kamar
          Tidur: {{ form.jumlah_kamar_tidur }}
        </p>
        <p class="font-bold">Spesifikasi:</p>
        <p class="text-xl mb-2">spesifikasi: {{ form.spesifikasi }}</p>
        <p class="font-bold">Deskripsi:</p>
        <p class="text-xl mb-2">Deskripsii: {{ form.deskripsi }}</p>
      </div>
    </div>
  </section>
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
            name: "product___" + this.i18n.locale,
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
    goToSlide(index) {
      this.currentIndex = index;
    },
  },
  mounted() {
    this.fetchProduct();
  },
};
</script>

<style scoped>
.relative {
  position: relative;
}
.flex {
  display: flex;
}
.justify-start {
  justify-content: flex-start;
}
.items-start {
  align-items: flex-start;
}

.dot {
  height: 10px;
  width: 10px;
  margin: 0 5px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}
.active {
  background-color: #717171;
}

@media (max-width: 768px) {
  .flex-col {
    flex-direction: column;
  }
  .mx-auto {
    margin-left: auto;
    margin-right: auto;
  }
  .text-center {
    text-align: center;
  }
  .mt-8 {
    margin-top: 2rem;
  }
  .mt-0 {
    margin-top: 0;
  }
  .pl-8 {
    padding-left: 2rem;
  }
}
</style>
