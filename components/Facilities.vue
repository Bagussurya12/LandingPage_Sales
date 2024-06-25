<template>
  <section id="facilities" class="pb-10 bg-white">
    <div class="relative">
      <img
        src="../assets/images/Pine-Residance_images/pine.png"
        alt=""
        class="w-full"
      />
      <div
        class="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center"
      >
        <h1
          class="text-white text-2xl md:text-4xl font-bold font-Montserrat mb-2"
        >
          -Pine Residence-
        </h1>
        <h5 class="text-white text-lg md:text-xl font-bold font-Montserrat">
          A Metropolis Sanctuary
        </h5>
      </div>
    </div>
    <div class="container mx-auto px-4 py-4 mt-5">
      <div class="max-w-2xl mx-auto text-center mb-5">
        <h1 class="font-bold text-3xl font-Montserrat text-Dark mb-5">
          THE FIRST RESIDENTIAL DISTRICT THE BEST LOCATION IN BOGOR CITY
        </h1>
        <h2 class="font-semibold text-blue-500 font-Montserrat text-2xl mb-4">
          Facilities
        </h2>
      </div>
      <!-- FACILITIES -->
      <div
        class="flex flex-wrap justify-center px-8 mx-auto lg:justify-center lg:flex-row md:flex-col"
      >
        <div class="flex items-start lg:w-1/2 md:w-full p-4 m-5 max-w-[600px]">
          <img
            src="../assets/icons/smart-home-icon.png"
            alt=""
            class="w-16 mr-4 mt-4"
          />
          <div>
            <h3 class="text-2xl font-semibold mb-2">Smart Home System</h3>
            <p class="text-lg">
              Fitur detektor asap, akses cctv, sensor pintu, detektor gas dan
              keamanan lainnya.
            </p>
          </div>
        </div>
        <!--  -->
        <div class="flex items-start lg:w-1/2 md:w-full p-4 m-5 max-w-[600px]">
          <img
            src="../assets/icons/security.png"
            alt=""
            class="w-16 mr-4 mt-4"
          />
          <div>
            <h3 class="text-2xl font-semibold mb-2">24 Hour Security System</h3>
            <p class="text-lg">
              One gate system dan dilengkapi CCTV memberikan perlindungan
              menyeluruh untuk hunian Anda.
            </p>
          </div>
        </div>
        <!--  -->
        <div class="flex items-start lg:w-1/2 md:w-full p-4 m-5 max-w-[600px]">
          <img
            src="../assets/icons/plant-icon.png"
            alt=""
            class="w-16 mr-4 mt-4"
          />
          <div>
            <h3 class="text-2xl font-semibold mb-2">Green Environment</h3>
            <p class="text-lg">
              Lingkungan yang dikelilingi oleh keindahan alam, ditandai dengan
              udara segar yang menyegarkan.
            </p>
          </div>
        </div>
        <!--  -->
        <div class="flex items-start lg:w-1/2 md:w-full p-4 m-5 max-w-[600px]">
          <img
            src="../assets/icons/exclusive.png"
            alt=""
            class="w-16 mr-4 mt-4"
          />
          <div>
            <h3 class="text-2xl font-semibold mb-2">Exclusive Amenities</h3>
            <p class="text-lg">
              Lingkungan yang dikelilingi oleh keindahan alam, ditandai dengan
              udara segar yang menyegarkan.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "FacilitiesSection",
};
</script>

<style scoped>
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.overlay h1 {
  color: white;
  font-size: 4rem;
  font-weight: bold;
}

@media (min-width: 768px) {
  .overlay h1 {
    font-size: 6rem;
  }
}
</style>
