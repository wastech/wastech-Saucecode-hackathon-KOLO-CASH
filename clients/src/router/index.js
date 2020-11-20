import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import signUp from '../views/signUp.vue'
import login from '../views/login.vue'
import About from '../views/About.vue'
import homeBoard from "../views/homeBoard.vue";
import verifyAccount from "../views/redirectPage.vue";
import Account from "../views/Account.vue";
import accountChecked from "../views/accountChecked.vue";
import trackPayment from "../views/trackPayment.vue";
import store from '../store'


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/homeboard",
    name: "homeboard",
    component: homeBoard,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/trackpayment",
    name: "trackpayment",
    component: trackPayment,
    meta: {
      requiresAuth: true,
    },
  },
  ,
  {
    path: "/accountchecked",
    name: "accountchecked",
    component: accountChecked,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/verifyAccount/:id",
    name: "verifyAccount",
    component: verifyAccount,
  },
  {
    path: "/login",
    name: "login",
    component: login,
  },
  {
    path: "/account",
    name: "account",
    component: Account,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/signup",
    name: "signup",
    component: signUp,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to,from,next)=>{
  if(to.matched.some(record=>record.meta.requiresAuth)){
    if(!store.getters.isLoggedIn){
        next("/login")
    
    }else{
        next();
    }
    }else{
        next()
        }

})

export default router
