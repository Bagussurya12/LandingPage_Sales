<template>
  <section>
    <NavbarSales></NavbarSales>
    <Master id="#"></Master>
    <WhatsAppChat></WhatsAppChat>
    <Product id="product"></Product>
    <Facilities id="facilities"></Facilities>
    <CardProfile :profile="profile" id="contact"></CardProfile>
    <Carousel id="galeri"></Carousel>
    <Location id="lokasi"></Location>
    <Footer></Footer>
  </section>
</template>

<script>
export default {
  async asyncData({ $axios, params }) {
    try {
      const response = await $axios.$get(`/user/${params.nick_name}`);
      return {
        profile: response.user,
      };
    } catch (error) {
      return { profile: {} };
    }
  },
  data() {
    return {
      profile: {
        fullName: "",
        profilePhoto: "contoh.png", // Menggunakan gambar contoh dari assets
        bio: "",
        division: "",
        socialMedia: {
          facebook: "",
          twitter: "",
          instagram: "",
          linkedin: "",
          youtube: "",
        },
      },
    };
  },
  mounted() {
    console.log(this.profile);
  },
};
</script>

<style scoped>
.container {
  @apply mx-auto p-6;
}
</style>
