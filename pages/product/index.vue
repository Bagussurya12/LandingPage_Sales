<template>
  <section>
    <div class="container mx-auto my-3">
      <div
        class="bg-primary text-dark py-4 px-2 flex justify-between items-center"
      >
        <h1 class="text-xl font-bold">Kelola Produk</h1>
        <input
          v-model="search"
          class="rounded border border-gray-400 px-3 py-1"
          placeholder="Cari Produk"
        />
      </div>
      <div class="my-3">
        <div class="flex justify-between items-center mb-4">
          <nav class="flex">
            <ol class="list-none p-0">
              <li class="inline-block">
                <a href="#" class="text-dark font-bold text-4xl">Produk</a>
              </li>
            </ol>
          </nav>
          <button
            @click="goToAddProduct"
            class="bg-Hijau hover:bg-teal-950 text-white font-bold py-2 px-4 rounded"
          >
            Tambah Produk
          </button>
        </div>
        <table class="table-auto w-full my-4 border-b-4 rounded-xl">
          <thead class="bg-Dark text-white">
            <tr>
              <th class="px-4 py-2">ID</th>
              <th class="px-4 py-2">Nama</th>
              <th class="px-4 py-2">Harga</th>
              <th class="px-4 py-2">Deskripsi</th>
              <th class="px-4 py-2">Spesifikasi</th>
              <th class="px-4 py-2">#</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(product, index) in filteredProduct" :key="index">
              <td class="border px-4 py-2">{{ product.id }}</td>
              <td class="border px-4 py-2">{{ product.title }}</td>
              <td class="border px-4 py-2">{{ product.harga }}</td>
              <td class="border px-4 py-2">{{ product.deskripsi }}</td>
              <td class="border px-4 py-2">{{ product.spesifikasi }}</td>
              <td class="border px-4 py-2">
                <button
                  @click="confirmDeleteProduct(product)"
                  class="bg-red-700 hover:bg-red-950 text-white font-bold py-1 px-2 rounded mx-2 my-2"
                >
                  Hapus
                </button>
                <button
                  @click="getProductById(product.id)"
                  class="bg-Hijau text-white font-bold py-1 px-2 rounded mx-2 my-2"
                >
                  Detail
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Modal -->
    <div v-if="dialogDelete" class="fixed z-10 inset-0 overflow-y-auto">
      <div
        class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
      >
        <div class="fixed inset-0 transition-opacity" aria-hidden="true">
          <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span
          class="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
          >&#8203;</span
        >
        <div
          class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6"
        >
          <div class="sm:flex sm:items-start">
            <div
              class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"
            >
              <svg
                class="h-6 w-6 text-red-600"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </div>
            <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <h3 class="text-lg leading-6 font-medium text-gray-900">
                Delete Product
              </h3>
              <div class="mt-2">
                <p class="text-sm leading-5 text-gray-500">
                  Are you sure you want to delete this product? This action
                  cannot be undone.
                </p>
              </div>
            </div>
          </div>
          <div class="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
            <span class="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
              <button
                @click="deleteProduct(itemDelete.id)"
                type="button"
                class="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-red-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red transition ease-in-out duration-150 sm:text-sm sm:leading-5"
              >
                Delete
              </button>
            </span>
            <span
              class="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto"
            >
              <button
                @click="closeDelete"
                type="button"
                class="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5"
              >
                Cancel
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
    <!-- End of Modal -->
  </section>
</template>

<script>
export default {
  middleware: ["authenticated"],
  layout: "sideBar",
  data() {
    return {
      itemDelete: null,
      dialogDelete: false,
      search: "",
      products: [],
    };
  },
  computed: {
    filteredProduct() {
      return this.products.filter(
        (product) =>
          product.title &&
          product.title.toLowerCase().includes(this.search.toLowerCase())
      );
    },
  },
  methods: {
    fetchProduct() {
      this.$axios
        .$get("/product")
        .then((response) => {
          if (response.status) {
            this.products = response.products;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    confirmDeleteProduct(product) {
      this.itemDelete = product;
      this.dialogDelete = true;
    },
    closeDelete() {
      this.dialogDelete = false;
      this.itemDelete = null;
    },
    deleteProduct(productId) {
      console.log("Deleting Product with ID:", productId);
      this.$axios
        .$delete(`/product/${productId}`)
        .then((response) => {
          this.products = this.products.filter(
            (product) => product.id !== productId
          );
          this.closeDelete();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getProductById(productId) {
      this.$router.push(`/product/view/${productId}`);
    },
    goToAddProduct() {
      this.$router.push("/product/create");
    },
  },
  mounted() {
    this.fetchProduct();
  },
};
</script>
