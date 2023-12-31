// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
      },
      {
        path: '/post/:id',
        name: 'Post',
        component: () => import('@/views/PagePost.vue'),
      },
      {
        path: '/aboutAuthor/:id',
        name: 'AboutAuthor',
        component: () => import('@/views/AboutAuthor.vue'),
      },
      {
        path: '/admin',
        name: 'Admin',
        component: () => import('@/views/Admin.vue'),
      },
      {
        path: '/admin/post/:id',
        name: 'Revisao',
        component: () => import('@/views/Revisao.vue'),
      },
      {
        path: '/admin/user',
        name: 'User',
        component: () => import('@/views/User.vue'),
      },
    ],
  },
  {
    path: '/blog',
    component: () => import('@/layouts/default/LayoutBlog.vue'),
    children: [
      {
        path: '/blog',
        name: 'Blog',
        component: () => import('@/views/Blog.vue'),
      },
    ],
  },
  {
    path: '/inspire',
    component: () => import('@/layouts/default/Inspire.vue'),
    children: [
      {
        path: '/inspire',
        name: 'Inspire',
        component: () => import('@/views/inspireOne.vue'),
      },
      {
        path: '/inspire2',
        name: 'Inspire2',
        component: () => import('@/views/inspireTwo.vue'),
      },
      {
        path: '/inspire3',
        name: 'Inspire3',
        component: () => import('@/views/inspireThree.vue'),
      },
      {
        path: '/inspire4',
        name: 'Inspire4',
        component: () => import('@/views/inspireFour.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
