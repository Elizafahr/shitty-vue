<template>
  <section  id='features' class="features py-5">
    <div class="container">
      <h2 class="text-center mb-5">Почему выбирают нас?</h2>
      <div class="row">
        <div class="col-lg-4 col-md-6  " v-for="feature in features" :key="feature.id">
          <feature-card :icon="feature.icon" :title="feature.title" :description="feature.description" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import FeatureItem from '../Features/FeatureItem.vue'

export default {
  components: {
    'feature-card': FeatureItem
  },
  data() {
    return {
    features: [
      {
          id: 1,
          icon: 'fas fa-cutlery',
          title: 'Сертифицированное качество',
          description: 'Мы гордимся тем, что все наши продукты имеют необходимые сертификаты качества и безопасности'
        },
        {
          id: 2,
          icon: 'fas fa-leaf',
          title: 'Натуральные ингредиенты',
          description: 'Все наши продукты изготовлены из натуральных, органических компонентов, без синтетических добавок'
        },
        {
          id: 3,
          icon: 'fas fa-shopping-bag',
          title: 'Широкий ассортимент',
          description: 'В нашем ассортименте вы найдете все необходимое для здорового образа жизни: от витаминов до спортивного питания'
        },
        
      ]
    }
  }
}
</script>
