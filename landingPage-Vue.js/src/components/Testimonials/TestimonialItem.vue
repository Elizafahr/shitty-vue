<template>
  <div class="testimonial text-center">
    <i class="fas fa-quote-left mb-3"></i>
    <p>{{ quote }}</p>
    <p class="font-weight-bold">{{ author }}</p>
  </div>
</template>

<script>
export default {
  props: {
    quote: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>
