import { createRouter, createWebHistory } from '@ionic/vue-router'
import HomeView from '../views/HomeView.vue'
import PostsView from '../views/PostsView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import LoginView from '../views/LoginView.vue'
import RegistryView from '../views/RegistryView.vue'
import LogoutView from '../views/LogoutView.vue'
import IndividualPostView from "../views/IndividualPostView.vue"
import CreatePostView from "../views/CreatePostView.vue"

import { useLoginStore } from '../stores/login'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/registry',
      name: 'registry',
      component: RegistryView
    },
    {
      path: '/logout',
      name: 'logout',
      component: LogoutView
    },
    {
      path: '/post',
      name: 'post',
      component: PostsView,
      meta: { RequireAuth: true }
    },
    {
      path: '/post/:id',
      name: 'indpost',
      component: IndividualPostView,
      meta: { RequireAuth: true }
    },
    {
      path: '/post/create/',
      name: 'createpost',
      component: CreatePostView,
      meta: { RequireAuth: true }
    },
    {
      path: '/:pathMatch(.*)*',
      name: "NotFound",
      component: NotFoundView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  const store = useLoginStore();
  if (to.matched.some(r => r.meta.RequireAuth) && !store.isLogin) {
    next('/login')
  } else {
    next()
  }
})

export default router;
