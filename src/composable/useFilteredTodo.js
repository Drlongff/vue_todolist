import { computed,ref } from "vue"

export default function useFilteredTodo(todos) {
    const filter = ref("all")
    const filterTodos = computed(() => {
      switch (filter.value) {
        case "done":
          return todos.value.filter((todo) => todo.completed)
        case "todo":
          return todos.value.filter((todo) => !todo.completed)
        default:
          return todos.value
      }
    })

    return {
        filter,
        filterTodos
    }
}