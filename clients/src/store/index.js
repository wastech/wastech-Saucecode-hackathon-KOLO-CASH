import { createStore } from 'vuex'
import Api from '../config/Api'
import axios from 'axios'
import router from '../router'


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
 
  actions: {
    
    async fetchProfile({commit}) {
      try{
          let res= await  Api().get('/user/getProfile')
 if (res.data.success) {
   let data=res.data.data
     console.group(data)
     commit('profile',data)

 }
 return res;
      }catch(err){
    //  commit('register_error',err.response)
    //  console.group('ss')
      }
      
  },
    async signUp({commit},userInfo) {
      try{
          let res= await  Api().post('/user/register/',userInfo)
 if (res.data.success !== undefined) {
     commit('register_success',res)
// router.push('/redirectpage')

 }
 return res;
      }catch(err){
     commit('register_error',err.response)
     console.group('ss')
      }
      
  },
  
  async confirmuser({commit},id) {
    try{
     let res= await Api().get(`/user/verifyAccount/${id}`)
     if(res.data.success){
         const msg = res.data.message;
         commit('token_success',msg)
        router.push('/login')

             }
             return res;
    }catch(err){
      console.log(err.response)
         commit('token_error',err.response)
        router.push('/signup')

    }
 },
  
  async signIn({commit},user) {
   try{
    let res= await Api().post('/user/login/',user)
    if(res.data.success){
        const token = res.data.data.token;
        const refreshToken = res.data.data.refreshToken;
        const msg = res.data.data.message;
        const user = res.data.data.user;
        localStorage.setItem('token',token);
        localStorage.setItem('refreshToken',refreshToken);
        commit('login_success',res)
        router.push('/homeboard')
        axios.defaults.headers.common["Authorization"] = token;
            }
            return res;
   }catch(err){
        commit('login_error',err.response)
   }
},
    //sign out function
    async signOut({commit}){
      delete   axios.defaults.headers.common['Authorization']
      await localStorage.removeItem('token')
      await localStorage.removeItem('refreshToken')
      commit('signOut')
      router.push('/login')
  return
  }
  },
  modules: {
  },
  mutations:{
    signOut(state,res){
      state.status = null
      state.error=null
      state.success = ''
      state.user = ''
      state.token = ''
  },
  token_success(state,res){
    state.status = 'success'
    state.success=res
},
  token_error(state,res){
    state.status = 'fail'
    state.error=res.data.message
},
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
profile(state,data){
  state.user = data

}


  }
})
