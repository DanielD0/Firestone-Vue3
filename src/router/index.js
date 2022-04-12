import { createRouter, createWebHistory } from 'vue-router'
import { firebase } from '../firebase' 


const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/Perfil',
    name: 'Perfil',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Perfil.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/crud',
    name: 'Crud',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Crud.vue'),
    meta: {
      requiresAuth: true
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(async(to,from,next)=>{
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  if(requiresAuth && !(await firebase.getCurrenUser())){
    next('/')
  }else{
    next()
  }
})
export default router
