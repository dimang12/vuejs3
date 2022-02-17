<template>
  <div class="home">
    <div class="row p-3 m-0">
        <div class="col-md-7 col-sm-12">
            <task-list :tasks="tasks"></task-list>
        </div>
        <div class="col-md-5 col-sm-12">
            <project-list></project-list>
        </div>
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
import TaskList from '../components/Home/TaskList.vue';
import ProjectList from '../components/Home/ProjectList.vue';

export default {
  name: "Home",
  components: {
      TaskList, ProjectList
  },
  data() {
      return {
          tasks: [
            {
                id: '387389432',
                taskName: 'The first task', 
                dateEnd: '02/12/2022'
            }, 
            {
                id: '732432764',
                taskName: 'The second task',
                dateEnd: '02/22/2022'
            }
          ]
      }
  },
};
</script>
