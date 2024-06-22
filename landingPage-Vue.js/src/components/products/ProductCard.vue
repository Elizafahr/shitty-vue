<template>
 <div class="cardProductMain  col-lg-3 col-md-6 ">
  <div class="product-card">
    <!-- <img :src="product.image" :alt="product.title" class="product-image" /> -->
    <h3 class="product-title">{{ product.title }}</h3>
    <p class="product-description">{{ product.description }}</p>
    <a :href="product.link" class="product-link btn-primary">{{ product.linkText }}</a>
  </div>
 </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    product: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.cardProductMain{
  padding: 20px;

}
.product-card {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 30px;
  text-align: center;
  height: max-content;
}

.product-image {
  width: 100%;
  max-height: 200px;
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 20px;
}

.product-title {
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 10px;
}

.product-description {
  font-size: 16px;
  color: #666;
  margin-bottom: 20px;
}

.product-link {
  display: inline-block;
   color: #fff;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

.product-link:hover {
 }
</style>
