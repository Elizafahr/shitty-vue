 
<template>
  <div>
    <header-component />
    <hero-component />
    <features-component />
    <testimonials-component />
    <testimonials /> 
    <products />
    <footer-component />
  </div>
</template>

<script>
import HeaderComponent from './components/Header.vue'
import HeroComponent from './components/Hero.vue'
import FeaturesComponent from './components/Features/Features.vue'
import TestimonialsComponent from './components/Testimonials/Testimonials.vue'
import products from './components/products/products.vue'
import Contact from './components/Contact.vue'
import FooterComponent from './components/Footer.vue'

export default {
  components: {
    'header-component': HeaderComponent,
    'hero-component': HeroComponent,
    'features-component': FeaturesComponent,
    'testimonials-component': TestimonialsComponent,
    'products': products,
    'footer-component': FooterComponent,
    'Contact': Contact,
   }
}
</script>
