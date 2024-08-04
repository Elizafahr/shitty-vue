<script>
export default {
  data() {
    return {
      users: [],

      userName: "",
      userPass: "",
      userEmail: "",
    };
  },
  methods: {
    //динам вывод из инпута в абзац
    insertData(val) {
      this.userName = val;
    },

    //записываем пользователя в массив по нажатию
    sendData() {
      if (this.userName == "" || this.userPass == "" || this.userEmail == "") {
        return;
      } else {
        this.users.push({
          name: this.userName,
          password: this.userPass,
          email: this.userEmail,
        });
      }
    },
  },
};
</script>

<template>
  <input type="text" v-model="userName" placeholder="name" />
  <input type="password" v-model="userPass" placeholder="password" />
  <input type="email" v-model="userEmail" placeholder="email" />

  <button v-on:click="sendData()">Send</button>

  <h4>Динам вывод из инпута в абзац</h4>
  <p>{{ userName }}</p>

  <div class="" v-if="users.length > 0">
    <h4>Вывод всего массива</h4>
    <p>{{ users }}</p>

    <h4>Встроенный перебор массива</h4>
    <div v-for="(el, index) in users" :key="index">
      <div class="user">
        <h4>Имя пользователя - {{ el.name }}</h4>
        <div class="flex">
          <p>email пользователя - {{ el.email }}</p>
          <p>password пользователя - {{ el.password }}</p>
        </div>
      </div>
    </div>
  </div>

  <div class="no-users" v-if="users.length == 0">У нас нет пользователей</div>
</template>

<style scoped>
h1 {
  color: blue;
}
/* Стили для инпутов */
input[type="text"],
input[type="password"],
input[type="email"] {
  width: 50%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}

/* Стили для кнопки */
button {
  width: 50%;
  padding: 10px;
  background-color: #4c53af;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
}

/* Стили для заголовков */
h4 {
  margin-top: 20px;
  font-size: 18px;
  font-weight: bold;
}

/* Стили для абзацев */
p {
  margin-top: 10px;
  font-size: 16px;
}

/* Стили для контейнера, если есть пользователи */
.users {
  margin-top: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
}

/* Стили для контейнера, если нет пользователей */
.no-users {
  margin-top: 20px;
  font-size: 16px;
  font-style: italic;
  background-color: #dedfff;
  padding: 20px;
  border-radius: 10px;
}
.user {
  background-color: #dedfff;
  padding: 10px;
  margin: 10px 0 0 0;
  border-radius: 10px;
}
.user p {
  padding: 0px !important;
  margin: 0px !important;
}
.flex {
  display: flex;
  gap: 20px;
}
</style>
