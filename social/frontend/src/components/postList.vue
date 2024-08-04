<template>
     <table >
      <thead>
        <td>post_id</td>
        <td>username</td>
        <td>title</td>
      </thead>
      <tr v-for="post in posts" :key="post.post_id">
        <td>{{post.post_id}}</td>
        <td>{{post.username}}</td>
        <td>{{post.title}}</td>

      </tr>
    </table>
  </template>
  
  
  <script>
  // import axios
  import axios from "axios";
  
  export default {
    name: "postList",
    data() {
      return {
        posts: [],
      };
    },
  
    created() {
      this.getPosts();
    },
  
    methods: {
      // Get All Products
      async getPosts() {
        try {
          const response = await axios.get("http://localhost:5000/posts");
          this.posts = response.data;
        } catch (err) {
          console.log(err);
        }
      },
  
    //   // Delete Product
    //   async deleteProduct(id) {
    //     try {
    //       await axios.delete(`http://localhost:5000/products/${id}`);
    //       this.getProducts();
    //     } catch (err) {
    //       console.log(err);
    //     }
    //   },
    },
  };
  </script>
  
  <style scoped>
 
  </style>
  