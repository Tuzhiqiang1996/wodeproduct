import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);

export default new Vuex.Store({
  //保存用户登录状态
  state: {
    uname: ""
  },
  mutations: {
    //修改state中的变量
    setUname(state, uname) {
      state.uname = uname;
    }
  },
  actions: {
    //发送异步ajax请求，从服务器端获取数据
    loginin(context,user){//context代表整个vuex对象
(async function(){
  var result = await axios.get('login',{params:user});
  console.log(result)
  context.commit('setUname',result.data.uname)
    })()
    }
  },
  modules: {}
});
