<template>
     <div class="flex -mx-4">
        <div class="px-4 w-1/3">
            <div class="flex bg-white px-4 py-6 rounded-lg">
                <div class="w-1/3 flex justify-center">
                    <font-awesome-icon icon="check" class="las la-check text-3xl text-green-400"/>
                </div>
                <div class="w-2/3 flex flex-col items-center">
                    <span class="text-2xl">{{taksStore.getCompleteTasks}}</span>
                    <span class="">Terminées</span>
                </div>
            </div>
        </div>
        <div class="px-4 w-1/3">
            <div class="flex bg-white px-4 py-6 rounded-lg">
                <div class="w-1/3 flex justify-center">
                    <font-awesome-icon icon="hourglass-half" class="las la-hourglass-half text-3xl text-orange-400"/>
                </div>
                <div class="w-2/3 flex flex-col items-center">
                    <span class="text-2xl">{{taksStore.getWaittingTask}}</span>
                    <span class="">En attente</span>
                </div>
            </div>
        </div>
        <div class="px-4 w-1/3">
            <div class="flex bg-white px-4 py-6 rounded-lg">
                <div class="w-1/3 flex justify-center">
                    <i class=""></i>
                    <font-awesome-icon icon="tasks" class="las la-tasks text-3xl text-gray-700"/>
                </div>
                <div class="w-2/3 flex flex-col items-center">
                    <span class="text-2xl">{{taksStore.getTasksSize}}</span>
                    <span class="">Total</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useTaksStore } from '@/store/taks';


    export default {
        setup(){
            const taksStore = useTaksStore()

            return {taksStore}
        },
        methods : {
            
        }
    }
</script>

<style src="../assets/tailwind.css">

</style>