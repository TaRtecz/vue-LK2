<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Добро пожаловать в личный кабинет, <span v-if="isLoggedIn">{{ name }}</span>
    </p>
    <div>
    <h1>This page is protected by auth</h1>
  </div>
  </div>
</template>

<script>
export default {
    name: 'Cabinet',
    data() {
        return {
          msg: 'Личный кабинет',
          name: 'ANDREY',
        }
    },
    computed: {
      isLoggedIn () {
          return localStorage.getItem('token');
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
    font-family: 'Roboto', sans-serif;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
