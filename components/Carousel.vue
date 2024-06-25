<template>
  <section class="pb-16 bg-white px-20 pt-40">
    <div class="container mx-auto">
      <div class="w-full text-center">
        <div class="max-w-2xl mx-auto text-center mb-10">
          <h1 class="font-montserrat font-bold text-4xl text-Dark mb-5">
            GALLERY
          </h1>
        </div>
        <div class="relative w-full overflow-hidden">
          <div
            class="flex transition-transform duration-100"
            :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
          >
            <div
              v-for="(image, index) in images"
              :key="index"
              class="min-w-full relative"
            >
              <img
                :src="image"
                alt=""
                class="w-full h-[600px] object-cover rounded-xl"
              />
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
    </div>
  </section>
</template>

<script>
import satu from "@/assets/images/Carousel/1.jpg";
import dua from "@/assets/images/Carousel/2.jpg";
import tiga from "@/assets/images/Carousel/3.png";
import empat from "@/assets/images/Carousel/4.jpg";
import lima from "@/assets/images/Carousel/5.jpg";
import enam from "@/assets/images/Carousel/6.jpg";
import tujuh from "@/assets/images/Carousel/7.jpg";
import delapan from "@/assets/images/Carousel/8.png";
import sembilan from "@/assets/images/Carousel/9.jpeg";
import sepuluh from "@/assets/images/Carousel/10.png";
import sebelas from "@/assets/images/Carousel/11.png";
import duabelas from "@/assets/images/Carousel/12.jpeg";

export default {
  data() {
    return {
      currentIndex: 0,
      images: [
        satu,
        dua,
        tiga,
        empat,
        lima,
        enam,
        tujuh,
        delapan,
        sembilan,
        sepuluh,
        sebelas,
        duabelas,
      ],
    };
  },
  methods: {
    next() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },
    prev() {
      this.currentIndex =
        (this.currentIndex - 1 + this.images.length) % this.images.length;
    },
  },
};
</script>

<style scoped>
/* Add any additional styling if necessary */
</style>
