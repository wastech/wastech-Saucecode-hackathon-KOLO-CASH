// import Vuex from 'vuex'
// import Vue from 'vue'
// // import router from '../router'
// import Api from '@/config/Api'

// import axios from "axios"
// import router from '../router'
// Vue.use(Vuex)
// const state={
// token:localStorage.getItem('token') || '',
// user:{},
// status:'',
// error:null
// };
// const getters={
// isLoggedIn:state=>!!state.token,
// authStatus:state=>state.status,
// user:state=>state.user,
// error:state=>state.error
// };
// const actions={
//    async login({
//         commit
//     },user){
//         commit("auth_request");
//        try{
//         let res = await Api().post('/api/login',user)
    
//         return res
        
//        }catch(err){
// commit('auth_error',err)
//        }
      
//     },
    
// };
// const mutations={
 
// auth_request(state){
//     state.status='loading'
//     state.error=null
// }
// };

// export default({
    
//     state,
//     mutations,
//     getters,
//     actions
// });