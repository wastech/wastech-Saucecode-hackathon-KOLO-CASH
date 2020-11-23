import { createStore } from 'vuex'
import Api from '../config/Api'
import axios from 'axios'


export default createStore({
  state: {
    token:localStorage.getItem('token') || '',
        success:null,
        error:null,
        user:{},
        status:'',

  },
  getters:{
    isLoggedIn: state=>!!state.token ,
    error: state=>state.error,
    success: state=>state.success,
    user: state=>state.user,
    token: state=>state.token
  },
  mutations: {
    async signUp({commit},user) {
      try{
          let res= await Api().post('/user/register',
      user)
 if (res.data.success !== undefined) {
 }
 return res;
      }catch(err){
      }
  },
  },
  actions: {
    async signOut({commit}){
      await localStorage.removeItem('token')
      await localStorage.removeItem('refreshToken')
      commit('signOut')
      delete   axios.defaults.headers.common['Authorization']
  return
  }
  },
  modules: {
  },
  mutations:{
    register_success(state,res){
      state.status = 'success'
      state.error=null
      state.success = res.data.message
  },
  register_error(state,res){
      state.status = 'failure'
      state.error=res.data.message
      state.success = ''
  },
  login_success(state,res){
    state.status = 'success'
    state.error=null
    state.token = res.data.data.token
    state.user = res.data.data.user
    state.success = res.data.message
},
login_error(state,res){
    state.status = 'failure'
    state.error=res.data.message
    state.success = ''
},


  }
})
