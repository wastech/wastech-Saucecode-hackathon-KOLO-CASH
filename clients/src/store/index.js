import { createStore } from 'vuex'
import Api from '../config/Api'


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
      // commit('register_request');
      try{
          let res= await Api().post('/user/register',
      user)
 if (res.data.success !== undefined) {
    //  commit('register_success',res)
 }
 return res;
      }catch(err){
    //  commit('register_error',err)
      }
  },
  },
  actions: {
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
