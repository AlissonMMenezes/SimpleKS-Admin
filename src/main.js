import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import axios from 'axios' 
import VueRouter from 'vue-router'
import Vuex from 'vuex'

// Components load
import Homepage from './components/Homepage.vue'
import Posts from './components/Posts.vue'
import Pages from './components/Pages.vue'
import Post from './components/Post.vue'
import Settings from './components/Settings.vue'
import Themes from './components/Themes.vue'
import Comments from './components/Comments.vue'
import Subscribers from './components/Subscribers.vue'
import Users from './components/Users.vue'
import Home from './components/Home.vue'
import Login from './login/Login.vue'


Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueRouter)
Vue.use(Vuex)

Vue.config.productionTip = false
Vue.prototype.$http = axios

axios.defaults.baseURL = process.env.VUE_APP_BASE_URL

const routes = [
  { path:"/login", component: Login},
  { path:"/", component: Homepage,
    children:[
      { path: '', component: Home },
      { path: '/posts', component: Posts },
      { path: '/pages', component: Pages },
      { path: '/:post_name/edit', component: Post },
      { path: '/post/new', component: Post },
      { path: '/page/new', component: Post },
      { path: '/themes', component: Themes },
      { path: '/comments', component: Comments },
      { path: '/subscribers', component: Subscribers },
      { path: '/users', component: Users },
      { path: '/settings', component: Settings }
    ]},  

]

const router = new VueRouter({
  mode: 'history',
  routes 
})

router.beforeEach((to, from, next) => {
  if ((localStorage.getItem("user") == null) && (to.path != "/login")) {
    next({path:'/login'})
  }else{
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.user}`
    next()
    //  axios.get("http://localhost:8000/validateToken").then(response=>{
    //    console.log(response)
    //   next()  
    //  }).catch(error=>{
    //    console.log(error)
    //    router.push('/login')
    //  })
  }  
})


new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')

