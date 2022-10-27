<template>
    <div class="py-6">
    <h1 class="text-4xl my-10">Taches</h1>
    <template v-for="task in taksStore.getTasks" :key="task" >
      <div>
        <div class="bg-white rounded-lg flex px-4 py-4 mb-4">
          <div class="relative mr-2">
            <div class="round mr-2">
              <input type="checkbox" v-model="task.id" @click="setStatus(task.id)"/>
              <label for=""></label>
            </div>
          </div>
          <div class="pl-4">
            <span class="text-xl font-semibold">{{task.name}}</span>
            <p class="text-gray-500 text-sm">
              {{task.description}}
            </p>
            <div class="flex justify-end mt-4">
              <button class="w-7 h-7 bg-blue-100 text-blue-700 rounded-lg mr-2">
                <font-awesome-icon icon="pencil" />
              </button>
              <button class="w-7 h-7 bg-red-100 text-red-700 rounded-lg">
                <font-awesome-icon icon="trash" />
              </button>
            </div>
          </div>
        </div>
    </div>
    </template>
  </div>
</template>

<script>
import { useTaksStore } from '@/store/taks';
    export default {
    setup() {
        const taksStore = useTaksStore();
        return { taksStore };
    },
    methods:{
      setStatus(id){
        this.taksStore.setStatus(id)
        console.log(id);
      }
    }
}
</script>

<style src="../assets/tailwind.css">

</style>