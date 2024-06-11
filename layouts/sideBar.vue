<template>
  <section>
    <div class="flex h-full min-h-screen">
      <!-- Sidebar -->
      <div
        :class="{ 'w-64': sideDrawer, 'w-16': !sideDrawer }"
        class="bg-Dark text-white flex flex-col transition-all duration-300"
      >
        <div class="flex items-center justify-center h-16">
          <button @click="toggleSideDrawer" class="focus:outline-none">
            <svg
              :class="{ 'rotate-180': sideDrawer }"
              class="w-6 h-6 transform transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
        </div>
        <ul class="flex-1">
          <li
            v-for="(menu, index) in filteredSideMenu"
            :key="index"
            class="group"
          >
            <nuxt-link
              :to="menu.to"
              class="flex items-center p-2 hover:bg-gray-700"
            >
              <svg class="w-6 h-6">
                <use :xlink:href="`#${menu.icon}`"></use>
              </svg>
              <span v-if="sideDrawer" class="ml-2 font-bold uppercase">{{
                menu.title
              }}</span>
            </nuxt-link>
          </li>
        </ul>
      </div>

      <!-- Main Content -->
      <div class="flex-1">
        <header
          class="bg-Dark shadow text-Hijau p-4 flex justify-between items-center"
        >
          <h1 class="text-xl font-bold font-serif">{{ title }}</h1>
        </header>
        <main class="p-4">
          <Nuxt />
        </main>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  middleware: ["authenticated"],
  name: "DefaultLayout",
  data() {
    return {
      sideDrawer: false,
      title: "Pine Residence",
      originalSideMenu: [
        {
          icon: "mdi-cog",
          title: "Setting Profile",
          to: "/profile",
          middleware: ["Staff", "Admin"],
        },
        {
          icon: "mdi-package-variant",
          title: "Setting Product",
          to: "/product/",
          middleware: ["Admin"],
        },
        {
          icon: "mdi-package-variant",
          title: "Setting Article",
          to: "/article/",
          middleware: ["Admin"],
        },
        {
          icon: "mdi-account-cog",
          title: "Setting User",
          to: "/users/",
          middleware: ["Admin"],
        },
        {
          icon: "mdi-account-cog",
          title: "Log-Out",
          to: "/logout",
        },
      ],
    };
  },
  computed: {
    ...mapGetters("auth", ["level"]),
    filteredSideMenu() {
      return this.originalSideMenu.filter((menu) => {
        if (menu.middleware) {
          return menu.middleware.includes(this.level);
        }
        return true;
      });
    },
  },
  methods: {
    toggleSideDrawer() {
      this.sideDrawer = !this.sideDrawer;
    },
  },
  mounted() {
    this.$store.watch(
      (state) => state.auth.level,
      (level) => {
        if (!level) {
          this.$router.push("/login");
        }
      }
    );
  },
};
</script>
