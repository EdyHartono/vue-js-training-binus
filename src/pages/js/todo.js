import TodoItem from '@/components/TodoItem'

export default {
  data () {
    return {
      counter: 1,
      todos: [
        {
          id: 1,
          text: 'Belajara VueJs',
          finished: false
        }
      ],
      todoInput: ''
    }
  },
  components: {
    TodoItem
  },
  computed: {
    unfinished () {
      function printTodo (todo) {
        console.log(todo)
        return !todo.finished
      }
      return this.todos.filter(todo => printTodo(todo)).length
    },
    finished () {
      return this.todos.filter(todo => todo.finished).length
    }
  },
  methods: {
    onInput (e) {
      this.todoInput = e.target.value
    },
    onSubmit () {
      this.counter += 1
      const todo = {
        id: this.counter,
        text: this.todoInput,
        finished: false
      }
      this.todos.push(todo)
      this.todoInput = ''
      this.counter += 2
    },
    onFinish (id) {
      this.todos = this.todos.map(item => {
        if (item.id === id) {
          item.finished = true
        }
        return item
      })
    },
    onDelete (id) {
      this.todos = this.todos.filter(item => id !== item.id)
    },
    undo (id) {
      this.todos = this.todos.map(item => {
        if (item.id === id) {
          item.finished = false
        }
        return item
      })
    }
  }
}
