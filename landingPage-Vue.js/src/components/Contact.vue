<template>
  <section  id='contact'  class="contact bg-light py-5">
    <div class="container">
      <h2 class="text-center mb-5">Свяжитесь с нами</h2>
      <form>
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Имя" required>
        </div>
        <div class="form-group">
          <input type="email" class="form-control" placeholder="Email" required>
        </div>
        <div class="form-group">
          <textarea class="form-control" rows="5" placeholder="сообщение" required></textarea>
        </div>
        <div class="text-center">
          <button type="submit" class="btn btn-primary w-100 ">Submit</button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Contact'
}
</script>

<style scoped>
.contact {
  background-color: #f8f9fa;
}

.form-control {
  border-radius: 0;
}

.btn-primary {
  background-color: #007bff;
  border-color: #007bff;
}

.btn-primary:hover {
  background-color: #0056b3;
  border-color: #004a99;
}
</style>
