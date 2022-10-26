<template>
   <div class=" flex ">
    <div class="w-3/5 bg-slate-200 py-20">
      <div class="w-4/5 mx-auto">
        <TaskStatsVue />
        <TaskListVue/>
      </div>
    </div>
    <div class="w-2/5 bg-white py-10">
      <TaskFormVue />
    </div>
  </div>
</template>

<script>

import TaskFormVue from './components/TaskForm.vue'
import TaskStatsVue from './components/TaskStats.vue'
import TaskListVue from './components/TaskList.vue'

export default {
  name: 'App',
  components: {
    TaskFormVue,
    TaskStatsVue,
    TaskListVue
  }

}
</script>

<style src="./assets/tailwind.css">
</style>
