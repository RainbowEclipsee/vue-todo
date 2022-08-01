<template>
  <div>
    <h1>Todo List</h1>
    <hr />
    <TodoList v-bind:todos="todos" 
    @remove-todo='removeTodo'/>
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue'

export default {
  name: 'App',
  components: {
    TodoList,
  },
  data() {
    return {
      todos:[
        {id: 1, title: 'Купить вещь1', completed: false},
        {id: 2, title: 'Купить вещь2', completed: false},
        {id: 3, title: 'Купить вещь3', completed: false},
      ]
    }
  },
  methods:{
    removeTodo(id){
      this.todos = this.todos.filter(t => t.id !== id)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
