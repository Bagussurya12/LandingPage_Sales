<template>
  <header
    class="bg-gradient-to-b from-slate-700 to-blue-500 top-0 left-0 w-full fixed flex items-center z-50 py-2 font-montserrat -mb-16"
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
        <div
          class="flex items-center lg:hidden relative z-50 order-2 -mb-20 bg-slate-400 p-2 rounded-xl"
        >
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
                @click="navigateToSection('home')"
                >Home</a
              >
            </li>
            <li class="group">
              <a
                href="#contact"
                class="text-base text-white font-semibold py-2 mx-2 lg:mx-4 flex group-hover:text-Hijau"
                @click="navigateToSection('contact')"
                >Contact Us</a
              >
            </li>
            <li class="group">
              <a
                href="#lokasi"
                class="text-base text-white font-semibold py-2 mx-2 lg:mx-4 flex group-hover:text-Hijau"
                @click="navigateToSection('lokasi')"
                >Location</a
              >
            </li>
            <li class="group">
              <a
                href="#galeri"
                class="text-base text-white font-semibold py-2 mx-2 lg:mx-4 flex group-hover:text-Hijau"
                @click="navigateToSection('galeri')"
                >Gallery</a
              >
            </li>
          </ul>
        </nav>
      </div>
      <!-- Logo and Brochure for mobile screens -->
      <div
        class="lg:hidden flex justify-between items-center w-full mt-5 order-1"
      >
        <div id="mobile-logo" class="flex justify-center w-full -mr-16">
          <a href="#">
            <img
              src="../assets/images/logo.png"
              alt="logo"
              class="max-w-[80px] h-auto logo"
            />
          </a>
        </div>
        <button
          class="bg-green-700 rounded-full text-xs text-white py-1 px-2 font-bold"
        >
          <a
            href="https://api.whatsapp.com/send/?phone=628119999331&text=Brochure%21%0D%0A%0D%0ASaya+mendapatkan+informasi+terkait+%2APerumahan+Pine+Residence+di+OCBD+Bogor%2A+dengan+Cicilan+6+Juta-an+melalui+situs+web+https%3A%2F%2Focbd.co.id%2F+.+Bisakah+Anda+memberikan+informasi+lebih+lanjut+%3F%0D%0A%0D%0ATerima+kasih.&type=phone_number&app_absent=0"
            target="_blank"
          >
            BROCHURE
          </a>
        </button>
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

    navigateToSection(sectionId) {
      this.$router.push({ name: "home", hash: `#${sectionId}` });
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

  .mobile-brochure {
    display: flex;
    justify-content: flex-end;
    width: 100%;
  }
}
</style>
