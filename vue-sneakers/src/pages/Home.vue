<script setup>
import { reactive, watch, ref, onMounted } from 'vue'
import axios from 'axios'
import debounce from 'lodash.debounce'
import { inject } from 'vue'
import CardList from '../components/CardList.vue'

const { cart, addToCart, removeFromCart } = inject('cart')

 const items = ref([])

 const filters = reactive({
  sortBy: 'title', // По умолчанию сортировка по названию
  searchQuery: '' // Поиск без начальных значений
})

// Функция для добавления или удаления товара из корзины
const onClickAddPlus = (item) => {
  if (!item.isAdded) {
    addToCart(item)
  } else {
    removeFromCart(item)
  }
}

//  сортировка
const onChangeSelect = (event) => {
  filters.sortBy = event.target.value
}

//   функция для поля поиска
const onChangeSearchInput = debounce((event) => {
  filters.searchQuery = event.target.value
}, 300)

//   функция для добавления товара в избранное
const addToFavorite = async (item) => {
  try {
    if (!item.isFavorite) {
      const obj = {
        item_id: item.id
      }

      item.isFavorite = true

      const { data } = await axios.post(`https://1e34c0ccb6a4cd43.mokky.dev/favorites`, obj)
      console.log(item)

      item.favoriteId = data.id
    } else {
      item.isFavorite = false
      await axios.delete(`https://1e34c0ccb6a4cd43.mokky.dev/favorites/${item.favoriteId}`)
      item.favoriteId = null
    }
  } catch (err) {
    console.log(err)
  }
}

//   функция для отображения что товар избран 
const fetchFavorites = async () => {
  try {
    const { data: favorites } = await axios.get(`https://1e34c0ccb6a4cd43.mokky.dev/favorites`)

    items.value = items.value.map((item) => {
      const favorite = favorites.find((favorite) => favorite.item_id === item.id)

      if (!favorite) {
        return item
      }
      console.log(item)

      return {
        ...item,
        isFavorite: true,
        favoriteId: favorite.id
      }
    })
  } catch (err) {
    console.log(err)
  }
}

//   функция для получения списка товаров
const fetchItems = async () => {
  try {
    const params = {
      sortBy: filters.sortBy
    }

    if (filters.searchQuery) {
      params.title = `*${filters.searchQuery}*`
    }

    const { data } = await axios.get(`https://1e34c0ccb6a4cd43.mokky.dev/items`, {
      params
    })

    items.value = data.map((obj) => ({
      ...obj,
      isFavorite: false,
      favoriteId: null,
      isAdded: false
    }))
  } catch (err) {
    console.log(err)
  }
}

 onMounted(async () => {
  const localCart = localStorage.getItem('cart')
  cart.value = localCart ? JSON.parse(localCart) : []

  await fetchItems()
  await fetchFavorites()

  items.value = items.value.map((item) => ({
    ...item,
    isAdded: cart.value.some((cartItem) => cartItem.id === item.id)
  }))
})

// Отслеживание изменений в корзине и обновление состояния товаров
watch(cart, () => {
  items.value = items.value.map((item) => ({
    ...item,
    isAdded: false
  }))
 })

 watch(filters, fetchItems)
</script>

<template>
  <div class="flex justify-between items-center flex-wrap ">
    <h2 class="text-3xl font-bold mb-8">Все кроссовки</h2>

    <div class="flex flex-wrap sm:flex-nowrap gap-4">
      <select @change="onChangeSelect" class="py-2 px-3 border rounded-md outline-none w-full md:w-auto">
        <option value="name">По названию</option>
        <option value="price">По цене (дешевые)</option>
        <option value="-price">По цене (дорогие)</option>
      </select>
    
      <div class="relative w-full md:w-auto">
        <img class="absolute left-4 top-3" src="/search.svg" />
        <input
          @input="onChangeSearchInput"
          class="border rounded-md py-2 pl-11 pr-4 outline-none focus:border-gray-400 w-full md:w-auto"
          type="text"
          placeholder="Поиск..."
        />
      </div>
    </div>
    
  </div>

  <div class="mt-10">
    <CardList :items="items" @add-to-favorite="addToFavorite" @add-to-cart="onClickAddPlus" />
  </div>
</template>
