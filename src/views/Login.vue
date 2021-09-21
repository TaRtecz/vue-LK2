<template>
    <div class="container">
        <h1 class="text-center">{{ msg }}</h1>
    <div class="row">
        <div class="col-12 col-md-6 mx-auto">
            <form>
                <div class="form-group">
                    <label for="exampleInputEmail1">Телефон</label>
                    <input type="text" class="form-control" id="Phone" placeholder="Телефон">
                </div>

                <div class="form-group">
                    <label for="exampleInputPassword1">Пароль</label>
                    <input type="password" class="form-control" id="Password1" placeholder="Пароль">
                </div>

                <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1">
                    <label class="form-check-label" for="exampleCheck1">Запомнить меня</label>
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
export default {
    name: 'Login',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
