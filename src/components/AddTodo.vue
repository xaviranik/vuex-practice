<template>
  <div>
      <h2>Add Todo</h2>
      <div class="add">
        <form @submit.prevent="onSubmit">
          <input type="text" v-model="title" placeholder="Add New Todo...">
          <input type="submit" value="Create New Todo">
        </form>
      </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: "AddTodo",
    data() {
      return {
        title: ''
      }
    },
    methods: {
      ...mapActions(['addTodo']),
      onSubmit() {
        this.addTodo(this.title)
      }
    }
}
</script>

<style scoped>
form {
  display: flex;
}
input[type="text"] {
  flex: 10;
  padding: 10px;
  border: 1px solid #008bcf;
  outline: 0;
  border-radius: 5px 0 0 5px;
}
input[type="submit"] {
  flex: 2;
  background: #008bcf;
  color: #fff;
  border: 1px #008bcf solid;
  cursor: pointer;
  border-radius: 0px 5px 5px 0px;
}
</style>