<template>
  <div class="todo__item">
    <span :class="todo.finished ? 'strike' : ''">{{ todo.text }}</span>
    <template v-if="!todo.finished">
      <button @click="handleFinish(todo.id)">finish</button>
      <button @click="handleDelete(todo.id)">delete</button>
    </template>
    <button v-else @click="undo(todo.id)">undo</button>
  </div>
</template>

<script src="./js/todo-item.js" />

<style lang="scss" scoped>
  .todo__item {
    .strike {
      text-decoration: line-through;
    }
  }
</style>
