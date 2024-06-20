<template>
  <section id="pine" class="pt-20 pb-24 bg-white px-10">
    <div class="container mx-auto relative">
      <div class="flex flex-wrap justify-center mb-10">
        <div class="w-full px-4 mb-5 flex flex-col justify-center items-center">
          <img
            src="../assets/images/pine-residance-logo.svg"
            alt="Pine Residance Logo"
            class="max-w-[320px] mb-2"
          />
          <h1
            class="font-semibold text-gray-800 text-4xl font-serif text-center"
          >
            AVAILABLE UNITS
          </h1>
        </div>
      </div>
      <!-- PRODUCT -->
      <div class="flex flex-wrap justify-center relative z-10">
        <div
          v-for="product in products"
          :key="product.id"
          class="w-full md:w-1/2 lg:w-1/3 px-4 mb-10"
        >
          <div
            class="bg-white rounded-xl shadow-xl overflow-hidden relative transition-transform transform hover:scale-105"
          >
            <div class="h-64 overflow-hidden relative">
              <img
                :src="
                  require(`../../Backend/public/images/${product.gambar[0].gambar_url}`)
                "
                alt="product image"
                class="w-full h-full object-cover rounded-xl"
              />
            </div>

            <!-- TEXT PRODUCT -->
            <div class="p-4 bg-white bg-opacity-90 backdrop-blur-md">
              <div class="text-center py-4 px-6">
                <h3 class="font-bold text-2xl text-gray-900 mb-2 font-serif">
                  {{ product.title }}
                </h3>
                <p class="font-medium font-serif text-base text-gray-900 mb-4">
                  {{ product.deskripsi }}
                </p>
                <a
                  href="#"
                  class="font-medium text-sm bg-Hijau py-2 px-4 rounded-lg hover:bg-teal-900 text-white"
                  >Brochure</a
                >
              </div>
            </div>
          </div>
        </div>
        <!--  -->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      products: [],
    };
  },
  methods: {
    fetchProduct() {
      this.$axios
        .$get("/product")
        .then((response) => {
          this.products = response.products;
        })
        .catch((error) => {
          console.error("Error fetching products:", error);
        });
    },
  },
  mounted() {
    this.fetchProduct();
  },
};
</script>

<style scoped>
.transition-transform {
  transition: transform 0.3s ease-in-out;
}

.transition-opacity {
  transition: opacity 0.3s ease-in-out;
}

.backdrop-blur-md {
  backdrop-filter: blur(10px);
}

.product {
  width: 100%;
  height: 22rem;
  object-fit: cover;
}
</style>
