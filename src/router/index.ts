import { createRouter, createWebHistory, RouteRecordRaw, Router } from 'vue-router';
import Home from '../views/Home.vue'
import { HomeFilled, SmileOutlined, AreaChartOutlined, LineChartOutlined, PieChartOutlined } from '@ant-design/icons-vue'
import { reactive, createVNode } from 'vue'
import RouterView from '../components/routerview';

const router = new class SystemRouter {

  constructor() {
    this.init();
  }

  public $router!: Router;

  public registeredRouter: RouteRecordRaw[] = [];

  private defaultRouter: Array<RouteRecordRaw&{hidden?:boolean}> = [
    {
      path: '/',
      name: 'Home',
      meta: { title: '首页', icon: HomeFilled },
      component: () => import('../views/home')
    },
    {
      path: '/dragula',
      meta: { title: '拖拽', icon: SmileOutlined },
      name: 'dragula',
      component: () => import('../views/dragula')
    },
    {
      path: '/chart',
      meta: { title: '图表', icon: AreaChartOutlined },
      name: 'chart',
      component: createVNode(RouterView, {
        keep: true
      }),
      children: [
        {
          path: 'polyline',
          meta: { title: '折线图', icon: LineChartOutlined },
          component: () => import('../views/chart/polyline')
        },
        {
          path: 'piechart',
          meta: { title: '饼状图', icon: PieChartOutlined },
          component: () => import('../views/chart/piechart')
        },
        {
          path: '',
          redirect: './polyline'
        }
      ]
      // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
      path: '/about',
      meta: { title: '关于', icon: SmileOutlined },
      name: 'About',
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
      path: '/logs',
      meta: { title: '更新日志', icon: SmileOutlined, dialog: true },
      name: 'logs',
      component: () => import(/* webpackChunkName: "about" */ '../views/logs')
    },
    {
      path: '/test/:id',
      meta: { title: '路径传参' },
      name: 'test',
      hidden: true,
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  ]

  init() {
    this.registeredRouter = reactive(this.defaultRouter) as RouteRecordRaw[];
    this.$router = createRouter({
      history: createWebHistory(process.env.BASE_URL),
      routes: this.defaultRouter
    })
    this.$router.beforeEach((to, form, next) => {
      console.log(to.path)
      next();
    })
  }

}

// const routes: Array<RouteRecordRaw> = [
//   {
//     path: '/',
//     name: 'Home',
//     meta: { title: '首页' },
//     component: Home as any
//   },
//   {
//     path: '/about',
//     meta: { title: '关于' },
//     name: 'About',
//     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//   },
//   {
//     path: '/test/:id',
//     meta: { title: '路径传参' },
//     name: 'test',
//     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//   }
// ]

// const router = createRouter({
//   history: createWebHistory(process.env.BASE_URL),
//   routes
// })

export default router
