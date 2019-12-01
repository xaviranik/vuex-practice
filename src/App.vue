<template>
  <div id="app">
    <div class="container">
      <Todos/>
    </div>
  </div>
</template>

<script>
import Todos from './components/Todos.vue'

export default {
  name: 'app',
  components: {
    Todos
  }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

body {
  font-family: "Roboto";
  line-height: 1.6;
  background: #e8f7f0;
}
.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}
</style>
