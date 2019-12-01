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

        const response = await axios.post(url, { 
            title,
            completed: false
        })

        commit('newTodo', response.data)
    },
    async deleteTodo( { commit }, id ) {
        const url = `https://jsonplaceholder.typicode.com/todos/${id}`;

        await axios.delete(url)

        commit('removeTodo', id)
    },
    async filterTodos( {commit}, e ) {
        const limit = e.target.value
        const url = `https://jsonplaceholder.typicode.com/todos?_limit=${limit}`;

        const response = await axios.get(url)

        commit('setTodos', response.data)
    },
    async updateTodo( {commit}, todo) {
        const url = `https://jsonplaceholder.typicode.com/todos/${todo.id}`;

        const updatedTodo = {
            id: todo.id,
            title: todo.title,
            completed: !todo.completed
        }

        await axios.put(url, updatedTodo)

        commit('updateTodo', updatedTodo)
    }
}

const mutations = {
    setTodos: (state, todos) => { state.todos = todos },
    newTodo: (state, todo) => { state.todos.unshift(todo) },
    removeTodo: (state, id) => { state.todos = state.todos.filter(todo => todo.id != id) },
    updateTodo: (state, updatedTodo) => {
        const index = state.todos.findIndex(todo => todo.id == updatedTodo.id)

        if(index != -1) {
            state.todos.splice(index, 1, updatedTodo)
        }
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}