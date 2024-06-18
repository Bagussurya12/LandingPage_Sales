<template>
  <section>
    <Navbar></Navbar>
    <Master></Master>
    <TextMaster></TextMaster>
    <Pine></Pine>
    <Facilities></Facilities>
    <CardProfile :profile="profile"></CardProfile>
    <Carousel></Carousel>
    <Location></Location>
    <Footer></Footer>
  </section>
</template>

<script>
import CardProfile from "~/components/CardProfile.vue";
import contoh from "@/assets/images/contoh.png"; // Ubah sesuai path yang benar

export default {
  components: {
    CardProfile,
  },
  async asyncData({ $axios, params }) {
    try {
      const response = await $axios.$get(`/user/${params.nickName}`);
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
        photos: contoh, // Menggunakan gambar contoh.png dari assets
        bio: "",
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
};
</script>

<style scoped>
.container {
  @apply mx-auto p-6;
}
</style>
