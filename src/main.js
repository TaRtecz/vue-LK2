import { createApp } from 'vue'
import Vue from "vue"
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')

// const token = localStorage.getItem('token');

Vue.use(Vuelidate)


Vue.directive('phone', {
    bind(el) {
        el.oninput = function(e) {
            if (!e.isTrusted) {
                return;
            }

            const x = this.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
            this.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
            el.dispatchEvent(new Event('input'));
        }
    },
});