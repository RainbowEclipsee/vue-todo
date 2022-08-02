<template>
  <div>
    <h2>Todo List</h2>
    <TodoAdd @add-todo="addTodo" />
    <hr/>
    <TodoList v-bind:todos="todos" @remove-todo="removeTodo" />
  </div>
</template>


<script>
import TodoList from '@/components/TodoList.vue'
import TodoAdd from '@/components/TodoAdd.vue'

export default {
  name: 'App',
  components: {
    TodoList,
    TodoAdd,
  },
  data() {
    return {
      todos: [],
    }
  },
  mounted() {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=3')
      .then((response) => response.json())
      .then((json) => {
        this.todos = json
      })
  },
  methods: {
    removeTodo(id) {
      this.todos = this.todos.filter((t) => t.id !== id)
    },
    addTodo(todo) {
      this.todos.push(todo)
    },
  },
}
</script>