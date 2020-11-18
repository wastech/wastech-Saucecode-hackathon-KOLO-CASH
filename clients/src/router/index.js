import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import signUp from '../views/signUp.vue'
import login from '../views/login.vue'
import About from '../views/About.vue'
import homeBoard from "../views/homeBoard.vue";
import redirectPage from "../views/redirectPage.vue";

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
  },
  {
    path: "/redirectpage",
    name: "redirectpage",
    component: redirectPage,
  },
  {
    path: "/login",
    name: "login",
    component: login,
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

// router.beforeEach((to,from,next)=>{
//   if(to.matched.some(record=>record.meta.requiresAuth)){
//     if(!store.getters.isLoggedIn){
//         next("/login")
    
//     }else{
//         next();
//     }
//     }else if(to.matched.some(record=>record.meta.requiresGuest)){
//       if(store.getters.isLoggedIn){
//           next("/order")
      
//       }else{
//           next();
//       }
//       }

// })

export default router
