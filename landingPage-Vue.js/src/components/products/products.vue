<template>
  <section class="products-section">
    <div class="container">
      <h2 class="section-title">Откройте для себя натуральные решения для здоровья</h2>
      <p class="section-description">
        В нашем ассортименте вы найдете высококачественные органические
        продукты, которые помогут вам улучшить ваше самочувствие и достичь
        ваших целей в области здоровья и благополучия.
      </p>

       <div class="row">
        <ProductCard v-for="product in products" :key="product.id" :product="product" />
      </div>
     </div>
  </section>
</template>

<script>
import ProductCard from './ProductCard.vue'

export default {
  name: 'ProductsSection',
  components: {
    ProductCard
  },
  data() {
    return {
      products: [
        {
          id: 1,
          image: 'vitamins.jpg',
          title: 'Натуральные витамины',
          description:
            'Наши витаминные комплексы содержат только органические и безопасные ингредиенты, необходимые для вашего здоровья.',
          link: '#',
          linkText: 'Узнать больше'
        },
        {
          id: 2,
          image: 'organic-snacks.jpg',
          title: 'Полезные перекусы',
          description:
            'Побалуйте себя вкусными и питательными органическими снеками, идеальными для здорового образа жизни.',
          link: '#',
          linkText: 'Узнать больше'
        },
        {
          id: 3,
          image: 'sports-nutrition.jpg',
          title: 'Натуральное спортивное питание',
          description:
            'Наша линейка спортивного питания поможет вам достичь ваших фитнес-целей с помощью органических ингредиентов.',
          link: '#',
          linkText: 'Узнать больше'
        },
        {
          id: 4,
          image: 'supplements.jpg',
          title: 'Натуральные добавки',
          description:
            'Наши пищевые добавки разработаны, чтобы поддерживать ваше здоровье с помощью высококачественных натуральных компонентов.',
          link: '#',
          linkText: 'Узнать больше'
        }
      ]
    }
  }
}
</script>

<style scoped>
.products-section {
  padding: 60px 0;
}

.section-title {
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
}

.section-description {
  font-size: 18px;
  text-align: center;
  margin-bottom: 40px;
}

 
</style>
