<template>
    <form class="px-16 flex flex-col justify-center h-full" @submit.prevent="addTask">
        <h1 class="text-3xl font-semibold mb-10">Nouvelle tache</h1>
        <div class="mb-6">
            <input type="text" placeholder="Name" class="inline-flex w-full px-2 py-3 rounded-lg border-2 border-gray-300 focus:outline-none" v-model="task.name" required/>
        </div>
        <div class="mb-6">
            <textarea placeholder="Description of the task" class="inline-flex w-full px-3 py-4 rounded-lg border-2 border-gray-300 focus:outline-none" rows="6" v-model="task.description" required></textarea>
            </div>
            <div class="mb-6">
        <input class="bg-blue-700 text-white px-6 py-3 rounded "   type="submit" value="Enregistrer" >
        </div>
    </form>
</template>

<script>

    import { useTaksStore } from '../store/taks'
    import { v4 as uuid } from 'uuid'

    export default {

        setup(){
            const taksStore = useTaksStore();

            return {taksStore}
        },

        data(){
            return{
                task: {
                    id: uuid(),
                    name: '',
                    description: '',
                    complete: false
                }
            }
        },

        methods: {
            addTask() {
                this.taksStore.addTask(this.task)
            },
            
        },
        
    }
</script>

<style src="../assets/tailwind.css">

</style>