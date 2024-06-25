<template>
  <header
    class="bg-Dark fixed top-0 left-0 w-full flex items-center z-50 py-2 font-montserrat"
  >
    <div class="container mx-auto px-2">
      <div class="flex items-center justify-between relative w-full">
        <!-- Logo and text for larger screens -->
        <div
          class="shrink-0 flex items-center mx-10 lg:mt-0 logo-container lg:order-none order-1"
        >
          <a href="#">
            <img
              src="../assets/images/logo.png"
              alt="logo"
              class="max-w-[60px] h-auto logo mt-5"
            />
          </a>
        </div>
        <!-- Hamburger button for mobile screens -->
        <div class="flex items-center lg:hidden relative z-50 order-2 -mb-20">
          <button
            id="hamburger"
            name="hamburger"
            type="button"
            class="block font-bold"
            @click="toggleNavbarMenu"
          >
            <span
              class="hamburger-line transition duration-300 ease-in-out origin-top-left"
            ></span>
            <span
              class="hamburger-line transition duration-300 ease-in-out"
            ></span>
            <span
              class="hamburger-line transition duration-300 ease-in-out origin-bottom-left"
            ></span>
          </button>
        </div>
        <!-- Navbar menu for all screens -->
        <nav
          id="navbar-menu"
          class="hidden lg:flex items-center w-full lg:w-auto bg-opacity-0 absolute top-0 right-0 mt-5 lg:order-none order-3"
        >
          <ul class="block lg:flex lg:space-x-4">
            <li class="group">
              <a
                href="#"
                class="text-base text-white font-semibold py-2 mx-2 lg:mx-4 flex group-hover:text-Hijau"
                >Home</a
              >
            </li>
            <li class="group">
              <a
                href="#contact"
                class="text-base text-white font-semibold py-2 mx-2 lg:mx-4 flex group-hover:text-Hijau"
                >Contact Us</a
              >
            </li>
            <li class="group">
              <a
                href="#lokasi"
                class="text-base text-white font-semibold py-2 mx-2 lg:mx-4 flex group-hover:text-Hijau"
                >Lokasi</a
              >
            </li>
            <li class="group">
              <a
                href="#galeri"
                class="text-base text-white font-semibold py-2 mx-2 lg:mx-4 flex group-hover:text-Hijau"
                >Gallery</a
              >
            </li>
          </ul>
        </nav>
      </div>
      <!-- Logo for mobile screens -->
      <div
        id="mobile-logo"
        class="lg:hidden flex justify-center w-full order-1"
      >
        <a href="#">
          <img
            src="../assets/images/logo.png"
            alt="logo"
            class="max-w-[60px] h-auto logo"
          />
        </a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    toggleNavbarMenu() {
      const navbarMenu = document.getElementById("navbar-menu");
      const mobileLogo = document.getElementById("mobile-logo");

      navbarMenu.classList.toggle("hidden");
      navbarMenu.classList.toggle("glass-effect");
      document.body.classList.toggle("overflow-hidden");
      mobileLogo.classList.toggle("hidden");
    },

    closeNavbarMenu(event) {
      const navbarMenu = document.getElementById("navbar-menu");
      const hamburger = document.getElementById("hamburger");
      const mobileLogo = document.getElementById("mobile-logo");

      const isClickInsideNavbar = navbarMenu.contains(event.target);
      const isClickOnHamburger = hamburger.contains(event.target);

      if (
        !isClickInsideNavbar &&
        !isClickOnHamburger &&
        !navbarMenu.classList.contains("hidden")
      ) {
        navbarMenu.classList.add("hidden");
        navbarMenu.classList.remove("glass-effect");
        document.body.classList.remove("overflow-hidden");
        hamburger.classList.remove("hamburger-active");
        mobileLogo.classList.remove("hidden");
      }
    },
  },

  mounted() {
    document.addEventListener("click", this.closeNavbarMenu);
  },

  beforeUnmount() {
    document.removeEventListener("click", this.closeNavbarMenu);
  },
};
</script>

<style>
.hamburger-line {
  @apply w-[30px] h-[2px] my-1 block bg-white;
}

.glass-effect {
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 0.5rem;
}

#navbar-menu ul {
  @apply lg:flex flex-col lg:flex-row items-center justify-center;
}

#navbar-menu ul li {
  @apply lg:my-0 my-2;
}

#mobile-logo {
  @apply mt-5 items-center flex;
  display: none;
}

@media (max-width: 767px) {
  .lg\\:hidden {
    display: none !important;
  }

  #mobile-logo {
    display: flex;
  }

  #navbar-menu {
    position: absolute;
    margin-top: 60px;
    padding-top: 10px;
    text-align: justify;
  }

  #navbar-menu {
    @apply lg:static absolute top-0 right-0 w-full lg:w-auto text-right glass-effect;
    transition: backdrop-filter 0.3s, background-color 0.3s;
  }

  .logo {
    width: 50px;
  }

  .logo-container {
    display: none;
  }
}
</style>
