import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
// import Header from '../components/First/Header.vue'
// import zhuce from '../components/First/zhuce.vue'
// import index from '../components/First/index.vue'
import Der from '../views/Der.vue'
// import Login from '../views/Login.vue'
// import index from '../views/Login.vue'
import Login from '../components/Login.vue'
import reg from '../components/reg.vue'
import Gall from '../views/Gall.vue'
import Contact from '../views/Contact.vue'

Vue.use(VueRouter)

const routes = [
    // { path: '/Header', component: Header },
    // { path: '/zhuce', component: zhuce },
    // { path: '/', component: Header },
    // { path: '/index', name: 'index', component: index },
    // { path: '/', name: 'index', component: index },
    { path: '/', name: '', component: Der },
    { path: '/Der', name: 'Der', component: Der },
    { path: '/Login', name: 'Login', component: Login },
    { path: '/reg', name: 'reg', component: reg },
    { path: '/Gall', name: 'Gall', component: Gall },
    { path: '/Contact', name: 'Contact', component: Contact },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router