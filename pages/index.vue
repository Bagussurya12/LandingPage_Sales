<template>
  <section class="font-montserrat">
    <Navbar></Navbar>
    <Master></Master>
    <WhatsAppChat></WhatsAppChat>
    <Pine></Pine>
    <PageContactMain></PageContactMain>
    <Facilities></Facilities>
    <Carousel></Carousel>
    <Location></Location>
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
