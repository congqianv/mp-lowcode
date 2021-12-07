const routes = [
  {
    path: '/',
    name: "Home",
    meta: {
      title: "首页"
    },
    component: ()=> import('@/pages/home/index.vue')
  }
]

export default routes