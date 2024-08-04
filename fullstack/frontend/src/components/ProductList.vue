<template>
  <div class="wrapper">
    <h2 class="text-xl font-semibold mb-4">Наши товары</h2>
    <router-link
      style="width: max-content !important"
      :to="{ name: 'Create' }"
      class="ml-2 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 w-max"
    >
      Add New
    </router-link>
    <div class="flex gap-4">
      
      <input
        type="text"
        class="border rounded-md py-2 pl-11 pr-4 outline-none focus:border-gray-400"
        placeholder="   Search input"
        v-model="searchQuery"
      />
    </div>
    <div class="bg-white mt-5 p-4">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div
        v-for="item in onChangeSearchInput"
        :key="item.product_id"
        class="border border-gray-200 rounded-lg overflow-hidden shadow"
      >
          <div class="p-4">
            <h3 class="text-lg font-semibold">{{ item.product_name }}</h3>
            <p class="text-gray-500">{{ item.product_color }}</p>
            <p class="text-lg font-bold">${{ item.product_price }}</p>
          </div>
          <div class="flex justify-end p-2">
            <router-link
              :to="{ name: 'Edit', params: { id: item.product_id } }"
              class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Edit
            </router-link>
            <a
              @click="deleteProduct(item.product_id)"
              class="ml-2 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Delete
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import axios
import axios from "axios";

export default {
  name: "ProductList",
  data() {
    return {
      items: [],
      searchQuery: "",
    };
  },

  created() {
    this.getProducts();
  },

  methods: {
    // Get All Products
    async getProducts() {
      try {
        const response = await axios.get("http://localhost:5000/products");
        this.items = response.data;
      } catch (err) {
        console.log(err);
      }
    },

    // Delete Product
    async deleteProduct(id) {
      try {
        await axios.delete(`http://localhost:5000/products/${id}`);
        this.getProducts();
      } catch (err) {
        console.log(err);
      }
    },
    
  },
  computed: {
    onChangeSearchInput() {
      return this.items.filter(
        (item) =>
          !this.searchQuery ||
          item.product_name
            .toLowerCase()
            .includes(this.searchQuery.toLowerCase())
      );
    },
  },
};
</script>

<style scoped>
/* Улучшенные стили для таблицы */
.table.is-striped {
  width: max-content; /* Полная ширина родителя */
  border: 1px solid #dee2e6; /* Нижняя граница ячеек */
  border-collapse: collapse; /* Слияние границ ячеек */
  margin-top: 20px; /* Отступ сверху от таблицы */
}

.table.is-striped th,
.table.is-striped td {
  padding: 5px 25px; /* Поля вокруг содержимого ячеек */
  text-align: left; /* Выравнивание текста по левому краю */
  vertical-align: middle; /* Выравнивание содержимого по вертикали */
  border-bottom: 1px solid #dee2e6; /* Нижняя граница ячеек */
}

.table.is-striped thead tr {
  background-color: #f8f9fa; /* Фон заголовков таблицы */
}

.table.is-striped tbody tr:nth-child(odd) {
  background-color: rgba(
    0,
    0,
    0,
    0.05
  ); /* Нечетные строки таблицы с легким серым фоном */
}

.has-text-centered {
  display: flex;
  gap: 10px;
}
</style>
