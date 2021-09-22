<template>
    <div class="container">
        <h2 class="text-center">{{ msg }}</h2>
    <div class="row">
        <div class="col-12 col-md-6 mx-auto">
            <form id="idauthform" @submit.prevent="login" novalidate method="post">
                <div class="form-group">
                    <label for="phone">Телефон</label>
                    <input v-model="authForm.phone" type="text" class="form-control" id="phone" placeholder="Телефон">
                </div>

                <div class="form-group">
                    <label for="password">Пароль</label>
                    <input v-model="authForm.password" type="password" class="form-control" id="password" placeholder="Пароль">
                </div>

                <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="Checkme">
                    <label class="form-check-label" for="Checkme">Запомнить меня</label>
                </div>

                <button type="submit" class="btn btn-primary">Авторизация</button>
            </form>
            <router-link to="/sigin" class="badge badge-primary mx-auto">Регистрация</router-link>
            <router-link to="/forgotpass" class="badge badge-primary">Забыли Пароль?</router-link>
        </div>        
    </div>
  </div>
</template>

<script>
import { required, minLength } from 'vuelidate/lib/validators'

export default {
    name: 'Login',
    data() {
        return {
          msg: 'Авторизация',
          authForm: {
            phone: '',
            password: '',
          },
        }
    },
    methods: {
      login() {
        let phone = this.phone 
        let password = this.password
        this.$store.dispatch('login', { phone, password })
       .then(() => this.$router.push('https://backend-front-test.dev.echo-company.ru/api/auth/login'))
       .catch(err => console.log(err))
      },
    },
    validations: {
      authForm:{
        phone: {
          required,
          minLength: minLength(4)
        },
      }
      
       
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
