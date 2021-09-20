  <template>
    <div class="container">
        <h1 class="text-center">{{ msg }}</h1>
    <div class="row">
        <div class="col-6 mx-auto">
            <form>
                <div class="form-group">
                    <label for="exampleInputEmail1">Ваше имя</label>
                    <input type="text" class="form-control" id="Name" placeholder="Ваше имя">
                </div>

                <div class="form-group">
                    <label for="exampleInputEmail1">Телефон</label>
                    <input type="text" class="form-control" id="Phone" placeholder="Телефон">
                </div>

                <div class="form-group">
                    <label for="exampleInputPassword1">Пароль</label>
                    <input type="password" class="form-control" id="Password1" placeholder="Пароль">
                </div>

                <div class="form-group">
                    <label for="exampleFormControlFile1">Загрузите Аватар</label>
                    <input type="file" class="form-control-file" id="FileAvatar">
                </div>

                <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1">
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
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
    name: 'RegForm',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
