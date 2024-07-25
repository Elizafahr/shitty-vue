<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

import CardList from '../components/CardList.vue'

const favorites = ref([])

onMounted(async () => {
  try {
    const { data } = await axios.get(
      'https://1e34c0ccb6a4cd43.mokky.dev/favorites?_relations=items'
    )

    // favorites.value = data.map(obj => obj.item);
    // favorites.value = data;
    favorites.value = data.map((obj) => obj.item)
    console.log(data.map((obj) => obj.item))
    console.log(data)
    console.log(favorites.value)
  } catch (err) {
    console.log(err)
  }
})
</script>

<template>
  <h2 class="text-3xl font-bold mb-8">Мои закладки</h2>
  <br />

  <CardList :items="favorites" is-favorites />
</template>
