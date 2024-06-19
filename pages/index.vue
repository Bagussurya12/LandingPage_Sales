<template>
  <section class="font-montserrat">
    <Navbar></Navbar>
    <Master></Master>
    <WhatsAppChat></WhatsAppChat>
    <Pine></Pine>
    <Facilities></Facilities>
    <PageContactMain id="contact"></PageContactMain>
    <Carousel id="galeri"></Carousel>
    <Location id="lokasi"></Location>
    <Footer></Footer>
  </section>
</template>

<script>
import PageContactMain from "../components/PageContactMain.vue";
import WhatsAppChat from "../components/WhatsAppChat.vue";

export default {
  name: "Home",
};
</script>
