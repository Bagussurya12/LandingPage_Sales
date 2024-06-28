<template>
  <section class="mt-20">
    <Navbar class="mb-20"></Navbar>
    <WhatsAppChat></WhatsAppChat>
    <section class="pb-16 bg-white px-4 md:px-20">
      <div class="container mx-auto flex flex-col md:flex-row py-10">
        <!-- Carousel Wrapper -->
        <div class="w-full md:w-1/3 overflow-hidden mx-auto relative">
          <div
            class="flex transition-transform duration-700"
            :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
          >
            <div
              v-for="(picture, index) in form.pictures"
              :key="index"
              class="min-w-full h-auto relative"
            >
              <img
                :src="
                  require(`../../../Backend/public/images/${picture.gambar_url}`)
                "
                alt=""
                class="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
          <!-- Left Arrow -->
          <button
            @click="prev"
            class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-transparent m-5 text-white p-2 rounded-full text-4xl font-bold"
          >
            &lt;
          </button>
          <!-- Right Arrow -->
          <button
            @click="next"
            class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-transparent m-5 text-white p-2 rounded-full text-4xl"
          >
            &gt;
          </button>
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
          class="w-full md:w-2/3 md:mt-0 md:pl-8 text-start md:text-left mt-10 font-montserrat"
        >
          <h1 class="text-3xl font-bold mb-10 mt-5 font-montserrat">
            {{ form.title }}
          </h1>
          <p class="text-xl mb-2 font-montserrat">
            Luas Tanah: {{ form.luas_tanah }} m² | Luas Bangunan:
            {{ form.luas_bangunan }} m²
          </p>
          <p class="text-xl mb-10 font-montserrat">
            Kamar Mandi: {{ form.jumlah_kamar_mandi }} | Kamar Tidur:
            {{ form.jumlah_kamar_tidur }}
          </p>
          <p class="font-bold font-montserrat">Spesifikasi:</p>
          <p class="text-xl mb-10 font-montserrat">{{ form.spesifikasi }}</p>
          <p class="font-bold font-montserrat">Deskripsi:</p>
          <p class="text-xl mb-10 font-montserrat">{{ form.deskripsi }}</p>
          <div class="text-start">
            <a
              class="bg-gradient-to-b from-slate-700 to-blue-500 text-white py-2 px-4 w-[400px] pt-30 rounded-md transition-colors duration-300 font-montserrat font-semibold hover:font-bold"
              href="https://api.whatsapp.com/send/?phone=628119999331&text=Brochure%21%0D%0A%0D%0ASaya+mendapatkan+informasi+terkait+%2APerumahan+Pine+Residence+di+OCBD+Bogor%2A+dengan+Cicilan+6+Juta-an+melalui+situs+web+https%3A%2F%2Focbd.co.id%2F+.+Bisakah+Anda+memberikan+informasi+lebih+lanjut+%3F%0D%0A%0D%0ATerima+kasih.&type=phone_number&app_absent=0"
              target="_blank"
            >
              Booking Sekarang & Dapatkan Promo Menarik!
            </a>
          </div>
        </div>
      </div>
    </section>
    <Footer></Footer>
  </section>
</template>

<script>
export default {
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
      intervalId: null,
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
    beliSekarang() {
      // Logika untuk proses pembelian
      // Misalnya, navigasi ke halaman pembelian atau menampilkan pesan konfirmasi
      alert("Anda akan membeli produk ini");
    },
  },
  mounted() {
    this.fetchProduct();
    this.intervalId = setInterval(() => {
      this.next();
    }, 3000); // 3 detik
  },
  beforeDestroy() {
    clearInterval(this.intervalId);
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
