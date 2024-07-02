<template>
  <section>
    <div class="flex h-full min-h-screen">
      <!-- Sidebar -->
      <div
        :class="{ 'w-64': sideDrawer, 'w-16': !sideDrawer }"
        class="bg-Dark text-white flex flex-col transition-all duration-300 fixed h-full"
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
                stroke-width="4"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
        </div>
        <ul class="flex-1 font-montserrat">
          <li
            v-for="(menu, index) in filteredSideMenu"
            :key="index"
            class="group px-4 py-4"
          >
            <nuxt-link :to="menu.to" class="flex items-center">
              <img
                v-if="menu.icon"
                :src="require(`@/assets/images/admin/${menu.icon}`)"
                :alt="menu.title"
                class="w-6 h-6 mr-2"
              />
              <span
                v-if="sideDrawer"
                class="ml-2 font-bold uppercase font-montserrat"
                >{{ menu.title }}</span
              >
            </nuxt-link>
          </li>
        </ul>
      </div>

      <!-- Main Content -->
      <div
        :class="{ 'ml-64': sideDrawer, 'ml-16': !sideDrawer }"
        class="flex-1 transition-all duration-300"
      >
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
          icon: "Profile.png",
          title: "Setting Profile",
          to: "/profile",
          middleware: ["Staff", "Admin"],
        },
        {
          icon: "Product.png",
          title: "Setting Product",
          to: "/product/",
          middleware: ["Admin"],
        },
        {
          icon: "User.png",
          title: "Setting User",
          to: "/users/",
          middleware: ["Admin"],
        },
        {
          icon: "Logout.png",
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

<style scoped>
/* Optional: Adjust the z-index if needed */
.fixed {
  z-index: 10;
}
</style>
