<template>
  <div class="todo">
    Finished : {{ finished }} <br>
    Unfinished : {{ unfinished }} <br>
    <input type="text" :value="todoInput" @input="onInput" />
    <button @click="onSubmit">submit</button>
    <ul>
      <li
        v-for="todo in todos"
        :key="todo.id"
      >
        <todo-item
          @finish="onFinish"
          @delete="onDelete"
          @undo="undo"
          :todo="todo"
        />
      </li>
    </ul>
  </div>
</template>

<script src="./js/todo.js"></script>

<style lang="scss" scoped>
  .todo {
  }
</style>
