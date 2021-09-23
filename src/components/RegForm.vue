  <template>
    <div class="container">
        <h2 class="text-center">{{ msg }}</h2>
    <div class="row">
        <div class="col-12 col-md-6 mx-auto">
            <form id="idregform" @submit.prevent="registr" novalidate action="" method="post">
                <div class="form-group">
                    <label for="name">Ваше имя</label>
                    <input v-model="regForm.first_name" type="text" class="form-control" id="name" placeholder="Ваше имя">
                </div>

                <div class="form-group">
                    <label for="phone">Телефон</label>
                    <input v-model="regForm.phone" type="text" class="form-control" id="phone" placeholder="Телефон">
                </div>

                <div class="form-group">
                    <label for="password">Пароль</label>
                    <input v-model="regForm.password" type="password" class="form-control" id="password" placeholder="Пароль">
                </div>

                <div class="form-group">
                    <label for="fileAvatar">Загрузите Аватар</label>
                    <input type="file" class="form-control-file" id="fileAvatar">
                </div>

                <button type="submit" class="btn btn-primary">Регистрация</button>
            </form>
            <router-link to="/login" class="badge badge-primary">Авторизация</router-link>
                <div id="app">
                {{ info }} 
                </div>
                <ul v-if="errors && errors.length">
                    <li v-for="(index, error) of errors" :key="index">
                        {{error.message}}
                    </li>
                </ul>
        </div>        
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'RegForm',
    data() {
        return {
            msg: 'Регистрация',
            regForm: {
              phone: '',
              password: '',
              first_name: '',
              last_name: 'Doeh',
            //   fileAvatar: '',
            },
            errors: [],
            info: null,
        }
      },
    methods: {
        registr() {
            axios.post('https://backend-front-test.dev.echo-company.ru/api/user/registration', this.regForm)
            .then(response => (this.info = response))
            .catch(e => {
            this.errors.push(e)

            })
        },
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
