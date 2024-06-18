export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  ssr: false,
  server: {
    port: 7000,
  },

  head: {
    titleTemplate: "Pine Resicence - %s",
    title: "Pine Residence",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~plugins/persistedState.js", mode: "client" },
    { src: "~plugins/axiosInterceptors.js", mode: "client" },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/axios", "@nuxtjs/i18n"],
  i18n: {
    langDir: "lang",
    defaultLocale: "id",
    locales: [
      { code: "id", name: "indonesia", iso: "id-ID", file: "id.json" },
      { code: "en", name: "english", iso: "en-EN", file: "en.json" },
    ],
  },
  router: {
    middleware: ["authenticated"], // Middleware yang akan diterapkan ke semua rute
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    prefix: "http://localhost:4000",
    proxy: true,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
