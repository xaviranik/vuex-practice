import axios from "axios"


const state = {
    todos: []
}

const getters = {
    allTodos: (state) => state.todos
}

const actions = {
    async fetchTodos({ commit }) {
        const url = "https://jsonplaceholder.typicode.com/todos";

        const response = await axios.get(url)

        commit('setTodos', response.data)
    }
}

const mutations = {
    setTodos: (state, todos) => {state.todos = todos}
}

export default {
    state,
    getters,
    actions,
    mutations
}