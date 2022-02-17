<template>
    <div class="block-02">
            <header class="bl-header">
                <h2 class="p-3 m-0 ">Urgent Tasks</h2>
            </header>
            <div class="p-3">
                <ul class="todo-list m-t ui-sortable">
                    <li v-for="task in tasks" :key="task.id">
                        <span class="m-l-xs">{{task.taskName}}</span>
                        <small class="label label-primary"><i class="fa fa-clock-o"></i> {{task.dateEnd}}</small>
                    </li>
                </ul>
            </div>
            <footer class="bl-footer p-3">
                footer
            </footer>
        </div>
</template>

<script>
    export default {
        name: 'Task List',
        props: {
            tasks: []
        },
        data() {
            return {
                lists: []
            }
        },
    }
</script>

<style scoped>
    .todo-list {
    list-style: none outside none;
    margin: 0;
    padding: 0;
    font-size: 14px;
    }
    .todo-list.small-list {
    font-size: 12px;
    }
    .todo-list.small-list > li {
    background: #f3f3f4;
    border-left: none;
    border-right: none;
    border-radius: 4px;
    color: inherit;
    margin-bottom: 2px;
    padding: 6px 6px 6px 12px;
    }
    .todo-list.small-list .btn-xs,
    .todo-list.small-list .btn-group-xs > .btn {
    border-radius: 5px;
    font-size: 10px;
    line-height: 1.5;
    padding: 1px 2px 1px 5px;
    }
    .todo-list > li {
    background: #f3f3f4;
    border-left: 6px solid #e7eaec;
    border-right: 6px solid #e7eaec;
    border-radius: 4px;
    color: inherit;
    margin-bottom: 2px;
    padding: 10px;
    }
    .todo-list .handle {
    cursor: move;
    display: inline-block;
    font-size: 16px;
    margin: 0 5px;
    }
    .todo-list > li .label {
    font-size: 9px;
    margin-left: 10px;
    }

</style>