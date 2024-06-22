<template>
  <div class="feature text-center mt-4">
    <i :class="icon" class="mb-3"></i>
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.feature {
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease;
}

.feature:hover {
  transform: translateY(-5px);
}

.feature i {
  font-size: 2.5rem;
  color: #007bff;
}

.feature h3 {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}
</style>
