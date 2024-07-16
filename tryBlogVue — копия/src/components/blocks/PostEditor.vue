<template>
   <div class="content" v-show="show">
     <div class="ui form">
       <div class="field">
        <label>Название</label>
        <input type="text" :value="value.title" @input="updateTitle" /> <!-- Обновление значения при вводе -->
      </div>
       <div class="field">
        <label>Содержание</label>
        <textarea :value="value.body" @input="updateDescription"></textarea> <!-- Обновление значения при вводе -->
      </div>
       <div class="ui two buttons">
        <button class="ui basic button" @click="closeForm">Закрыть X</button> <!-- Закрытие формы при клике -->
      </div>
    </div>
  </div>
  </template>
  
  <script>
   export default {
    props: ['show', 'value'],  
    methods: {
      // Метод обновления значения названия при изменении ввода
      updateTitle(event) {
        this.$emit('update:title', event.target.value);
      },
      // Метод обновления значения описания при изменении ввода
      updateDescription(event) {
        this.$emit('update:body', event.target.value);
      },
      // Метод закрытия формы
      closeForm() {
        this.$emit('close');
      }
    }
  }
  </script>
  

<style scoped>
 

.ui.form .field label {
  font-weight: bold;
}

.ui.form .field input[type="text"],
.ui.form .field textarea {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.ui.two.buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.ui.basic.button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
}

.ui.basic.button:hover {
  background-color: #0056b3;
}
</style>
