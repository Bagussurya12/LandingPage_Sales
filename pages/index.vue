<template>
  <section class="font-montserrat">
    <Navbar></Navbar>
    <Master></Master>
    <WhatsAppChat></WhatsAppChat>
    <More></More>
    <Facilities></Facilities>
    <Product></Product>
    <PageContactMain id="contact"></PageContactMain>
    <Carousel id="galeri"></Carousel>
    <Location id="lokasi"></Location>
    <Footer></Footer>
  </section>
</template>

<script>
import More from "../components/More.vue";
import PageContactMain from "../components/PageContactMain.vue";
import WhatsAppChat from "../components/WhatsAppChat.vue";
import Location from "../components/Location.vue";

export default {
  name: "Home",
  middleware: "unauthenticated",
};
</script>
