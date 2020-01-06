import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import MintUI from "mint-ui"
// import Header from './components/First/Header.vue'
import Myheader from './components/myHeader.vue'
// import Login from './components/Login.vue'
import "mint-ui/lib/style.css"
axios.defaults.baseURL = 'http://127.0.0.1:4000/';
axios.defaults.withCredentials=true;
Vue.use(MintUI)
Vue.config.productionTip = false
Vue.prototype.axios = axios;
Vue.component('my-header', Myheader)
    // Vue.component('Login-login', Login)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')