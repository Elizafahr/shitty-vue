<template>
    <li class="nav-item">
      <a :href="href" class="nav-link text-white">{{ text }}</a>
    </li>
  </template>
  
  <script>
  export default {
    name: 'NavLink',
    props: {
      href: {
        type: String,
        required: true
      },
      text: {
        type: String,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>
  </style>
  