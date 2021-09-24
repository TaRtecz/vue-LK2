<template>
  <div id="nav">
    <router-link to="/">Главная</router-link> | 
    <router-link to="/sigin">Регистрация</router-link> | 
    <router-link to="/login">Авторизация</router-link> |
    <router-link to="/contact">Контакты</router-link>
    <router-link to="/cabinet"><span v-if="isLoggedIn">cabinet</span></router-link>
    <router-link to="/login"><span @click="logout" v-if="isLoggedIn">Выход</span></router-link>
  </div>
  <router-view/>
</template>


<script>
export default {

    methods: {
      logout(){
        localStorage.removeItem('token')
      }
    },
    computed: {
      isLoggedIn () {
          return localStorage.getItem('token');
        }
    }
}
</script>

<style>
body {
  background: #dcdcdc;
}
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
