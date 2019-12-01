import Vuex from 'vuex'
import Vue from 'vue'
import todos from './modules/todos'

Vue.use(Vuex)

//Create Store
export default new Vuex.Store({
    modules: {
        todos
    }
})