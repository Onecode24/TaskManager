import { defineStore } from "pinia";

export const useTaksStore = defineStore('tasks',{
   state:() => ({
    tasks: []
   }),
   getters: {
    // get all tasks of the store
    getTasks(){
        return this.tasks;
    },
    getTasksSize(){
        return this.tasks.length
    } 
   },
   actions: {
    // add new task to the store
    addTask(task){
        this.tasks.push(task);
    }
   }
})
 
