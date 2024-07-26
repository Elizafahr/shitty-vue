<template>
  <div class="wrapper">
    <router-link :to="{ name: 'Create' }" class="button is-success mt-5"
      >Add New</router-link
    >
    <table class="table is-striped is-bordered mt-2 is-fullwidth">
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Price</th>
          <th class="has-text-centered">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.product_id">
          <td>{{ item.product_name }}</td>
          <td>{{ item.product_price }}</td>
          <td class="has-text-centered actions-buttons">
            <router-link
              :to="{ name: 'Edit', params: { id: item.product_id } }"
              class="button is-info is-small"
              >Edit</router-link
            >
            <a
              class="button is-danger is-small"
              @click="deleteProduct(item.product_id)"
              >Delete</a
            >
          </td>
        </tr>
      </tbody>
    </table>
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
