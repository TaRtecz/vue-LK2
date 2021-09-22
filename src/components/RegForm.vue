  <template>
    <div class="container">
        <h1 class="text-center">{{ msg }}</h1>
    <div class="row">
        <div class="col-12 col-md-6 mx-auto">
            <form id="idregform" @submit="checkForm" action="" method="post">
                <div class="form-group">
                    <label for="name">Ваше имя</label>
                    <input v-model="name" type="text" class="form-control" id="name" placeholder="Ваше имя">
                </div>

                <div class="form-group">
                    <label for="phone">Телефон</label>
                    <input v-model="phone" type="text" class="form-control" id="phone" placeholder="Телефон">
                </div>

                <div class="form-group">
                    <label for="password1">Пароль</label>
                    <input v-model="password1" type="password" class="form-control" id="password1" placeholder="Пароль">
                </div>

                <div class="form-group">
                    <label for="fileAvatar">Загрузите Аватар</label>
                    <input type="file" class="form-control-file" id="fileAvatar">
                </div>

                <button type="submit" class="btn btn-primary">Регистрация</button>
            </form>
            <router-link to="/login" class="badge badge-primary">Авторизация</router-link>
        </div>        
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
          errors: [],
          name: null,
          phone: null
        }
      },

  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
