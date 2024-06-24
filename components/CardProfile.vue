<template>
  <section class="py-4 pb-10">
    <div class="container mx-auto">
      <div class="w-full">
        <div class="flex justify-center">
          <div class="w-full md:flex md:items-center bg-Dark">
            <div class="md:w-2/5 md:order-last md:pr-4">
              <div
                class="relative max-w-[300px] ml-auto overflow-hidden rounded-lg shadow-lg"
              >
                <img
                  class="w-full h-full object-cover"
                  :src="
                    require(`../../Backend/public/images/${profile.photos}`)
                  "
                  alt="Profile Photo"
                />
              </div>
            </div>
            <div class="md:w-3/5 md:order-first md:pl-10 mr-10">
              <div
                class="uppercase tracking-wide text-4xl md:text:2xl text-white font-semibold mb-4 ml-4"
              >
                {{ profile.fullName }}
              </div>
              <div
                class="uppercase tracking-wide text-2xl md:text-xl text-white font-semibold mb-4 ml-4"
              >
                Sales Executive
              </div>
              <p class="text-lg leading-relaxed text-white mb-6 ml-4">
                {{ profile.bio }}
              </p>
              <div class="mt-4 ml-4">
                <p class="text-gray-400">Social Media</p>
                <ul class="mt-2 flex space-x-4">
                  <li v-if="profile.socialMedia.facebook">
                    <a
                      :href="profile.socialMedia.facebook"
                      class="text-white"
                      target="_blank"
                      >Facebook</a
                    >
                  </li>
                  <li v-if="profile.socialMedia.twitter">
                    <a
                      :href="profile.socialMedia.twitter"
                      class="text-white"
                      target="_blank"
                      >Twitter</a
                    >
                  </li>
                  <li v-if="profile.socialMedia.instagram">
                    <a
                      :href="profile.socialMedia.instagram"
                      class="text-white"
                      target="_blank"
                      >Instagram</a
                    >
                  </li>
                  <li v-if="profile.socialMedia.linkedin">
                    <a
                      :href="profile.socialMedia.linkedin"
                      class="text-white"
                      target="_blank"
                      >LinkedIn</a
                    >
                  </li>
                  <li v-if="profile.socialMedia.youtube">
                    <a
                      :href="profile.socialMedia.youtube"
                      class="text-white"
                      target="_blank"
                      >YouTube</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "CardProfile",
  props: {
    profile: {
      type: Object,
      required: false,
      default: () => ({
        fullName: "",
        profilePhoto: "default.png", // Gambar default jika tidak ada profilePhoto
        bio: "",
        socialMedia: {
          facebook: "",
          twitter: "",
          instagram: "",
          linkedin: "",
          youtube: "",
        },
      }),
    },
  },
};
</script>

<style scoped>
.backdrop-filter {
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

.bg-opacity-50 {
  background-color: rgba(255, 255, 255, 0.5);
}
.glass-effect {
  backdrop-filter: blur(10px);
  background-color: rgba(
    255,
    255,
    255,
    0.2
  ); /* Adjust the color and opacity as needed */
  border-radius: 0.5rem;
}
</style>
