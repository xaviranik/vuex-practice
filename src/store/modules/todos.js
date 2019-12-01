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
    },
    async addTodo( { commit }, title ) {
        const url = "https://jsonplaceholder.typicode.com/todos";

        const response = await axios.post(url, { title, completed: false} )

        commit('newTodo', response.data)
    },
    async deleteTodo( { commit }, id ) {
        const url = `https://jsonplaceholder.typicode.com/todos/${id}`;

        await axios.delete(url)

        commit('removeTodo', id)
    }
}

const mutations = {
    setTodos: (state, todos) => { state.todos = todos },
    newTodo: (state, todo) => { state.todos.unshift(todo) },
    removeTodo: (state, id) => { state.todos = state.todos.filter(todo => todo.id != id) }
}

export default {
    state,
    getters,
    actions,
    mutations
}