<template>
  <section>
    <Navbar></Navbar>
    <section id="LocationPage" class="pb-20 pt-20 bg-white relative">
      <div class="relative">
        <img src="../assets/images/Yoga.png" alt="" class="darken-filter" />
        <h3
          class="font-bold lg:text-8xl md:text-6xl sm:text-6xl mb-10 overlay-text ml-10"
        >
          Location
        </h3>
      </div>
      <div class="container mx-auto">
        <PageLocationMain></PageLocationMain>
      </div>
    </section>
    <Footer></Footer>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.darken-filter {
  display: block;
  width: 100%;
  height: auto;
  filter: brightness(50%); /* Mengurangi kecerahan menjadi 50% */
}

.relative {
  position: relative;
}

.overlay-text {
  position: absolute;
  top: 50%; /* Posisikan di tengah vertikal */
  left: 20px; /* Posisikan di sisi kiri */
  transform: translateY(
    -50%
  ); /* Geser ke atas 50% dari tinggi elemen untuk centering vertikal */
  color: white;
  z-index: 10; /* Pastikan teks berada di depan gambar */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Tambahkan bayangan pada teks */
}
</style>
