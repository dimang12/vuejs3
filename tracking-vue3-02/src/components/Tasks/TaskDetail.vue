<template>
  <div class="task-detail p-3">
    <div class="block-02" v-if="task != null">
      <header class="bl-header">
        <h3 class="p-3">{{ task.taskName }}</h3>
      </header>
      <div class="bl-body"></div>
      <footer class="bl-footer p-3">{{ task.dateEnd }}</footer>
    </div>
  </div>
</template>
<script>
import TasksService from "@/services/TasksService";
export default {
  props: ["id"],
  data() {
    return {
      //   curId: this.$route.params.id,
      task: null,
    };
  },
  created() {
    TasksService.getTask(this.id)
      .then((response) => {
        this.task = response.data;
        console.log(this.task);
      })
      .catch((error) => console.log(error));
  },
};
</script>