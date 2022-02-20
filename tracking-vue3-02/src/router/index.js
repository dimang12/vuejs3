import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import TaskDetail from '../components/Tasks/TaskDetail.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/task-detail/:id', 
    name: 'TaskDetail',
    props: true,
    component: TaskDetail
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
