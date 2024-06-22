<template>
    <section id='testimonials' class="testimonials bg-light py-5">
      <div class="container">
        <h2 class="text-center mb-5">Что говорят наши клиенты</h2>
        <div class="row">
          <div class="col-md-4" v-for="testimonial in testimonials" :key="testimonial.id">
            <TestimonialItem :quote="testimonial.quote" :author="testimonial.author"> </TestimonialItem>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import TestimonialItem from './TestimonialItem.vue';

  export default {
    components:{
      'TestimonialItem': TestimonialItem, 

    },
    data() {
      return {
        testimonials: [
          {
            id: 1,
            quote: 'Эти витамины действительно меня поддерживают! Чувствую себя намного бодрее и энергичнее',
            author: 'John Doe'
          },
          {
            id: 2,
            quote: 'Попробовала ваши органические снеки, они просто восхитительные! Теперь это мой любимый перекус',
            author: 'Jane Smith'
          },
          {
            id: 3,
            quote: 'Благодаря вашим натуральным добавкам я смог значительно улучшить свои спортивные результаты',
            author: 'Michael Johnson'
          }
        ]
      }
    }
  }
  </script>
  