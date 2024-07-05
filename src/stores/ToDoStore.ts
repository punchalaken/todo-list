import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'

export interface toDoObject {
    name: string,
    content: string,
    deadLine: string
}

export const useToDoStore = defineStore('ToDoStore', () => {
  const ToDo: Ref<toDoObject[]> = ref([])

  const addToDo = function(name: string, content: string, deadLine: string): void{
    ToDo.value.push({
        name,
        content,
        deadLine
    })
  }

  const delToDo = function(index: number){
    ToDo.value.splice(index, 1)
  }

  return { ToDo, addToDo, delToDo }
})
