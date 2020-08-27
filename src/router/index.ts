import { createRouter, createWebHistory, RouteRecordRaw, Router } from 'vue-router';
import { HomeFilled, SmileOutlined, ReadOutlined, ReconciliationOutlined, SolutionOutlined, AreaChartOutlined, LineChartOutlined, PieChartOutlined, NodeExpandOutlined, PictureOutlined } from '@ant-design/icons-vue'
import { reactive, createVNode } from 'vue'
import RouterView from '../components/routerview';
import Login from '../views/login'

declare type RouteRecordName = string | symbol;

interface AddRoute {
  (parentName: RouteRecordName, route: RouteRecordRaw): () => void;
  // (route: RouteRecordRaw): () => void;
}

interface  SystemRouterInterface {
  (parentName: RouteRecordName, route: RouteRecordRaw): () => void;
  (route: RouteRecordRaw): () => void;
}

const router = new class SystemRouter {

  constructor() {
    this.init();
  }

  public $router!: Router;

  public registeredRouter: RouteRecordRaw[] = [];

  private defaultRouter: Array<RouteRecordRaw&{hidden?:boolean}> = [
    {
      path: '/login',
      name: 'login',
      meta: { title: '登录', icon: HomeFilled },
      hidden: true,
      component: Login
    },
    {
      path: '/',
      name: 'Home',
      meta: { title: '首页', icon: HomeFilled, keepAlive: true },
      component: () => import('../views/home')
    },
    {
      path: '/components',
      meta: { title: '常用组件', icon: SolutionOutlined },
      name: 'components',
      component: createVNode(RouterView),
      children: [
        {
          path: 'copy',
          meta: { title: 'copy', icon: ReconciliationOutlined, keepAlive: true },
          name: 'copy',
          component: () => import('../views/components/copy')
        },
        {
          path: 'dragula',
          meta: { title: '拖拽', icon: NodeExpandOutlined, keepAlive: true },
          name: 'dragula',
          component: () => import('../views/components/dragula')
        },
        {
          path: 'crop',
          meta: { title: '图片裁剪', icon: PictureOutlined, keepAlive: true },
          name: 'crop',
          component: () => import('../views/components/crop')
        },
        {
          path: '',
          redirect: './copy'
        }
      ]
    },
    {
      path: '/rich-text',
      meta: { title: '富文本', icon: SolutionOutlined },
      name: 'rich-text',
      component: createVNode(RouterView),
      children: [
        {
          path: 'ckeditor',
          name: 'ckeditor',
          meta: { title: 'ckeditor', icon: ReconciliationOutlined, keepAlive: true },
          component: () => import('../views/rich-text/ckeditor')
        },
        {
          path: 'md',
          name: 'md',
          meta: { title: 'md', icon: ReadOutlined, keepAlive: true },
          component: () => import('../views/rich-text/md')
        },
        {
          path: '',
          redirect: './polyline'
        }
      ]
    },
    {
      path: '/chart',
      meta: { title: '图表', icon: AreaChartOutlined },
      name: 'chart',
      component: createVNode(RouterView),
      children: [
        {
          path: 'polyline',
          name: 'polyline',
          meta: { title: '折线图', icon: LineChartOutlined, keepAlive: true },
          component: () => import('../views/chart/polyline')
        },
        {
          path: 'piechart',
          name: 'piechart',
          meta: { title: '饼状图', icon: PieChartOutlined },
          component: () => import('../views/chart/piechart')
        },
        {
          path: '',
          redirect: './polyline'
        }
      ]
    },
    {
      path: '/routing-authority',
      meta: { title: '动态路由', icon: SmileOutlined, keepAlive: true },
      name: 'routing-authority',
      component: () => import('../views/routing-authority')
    },
    {
      path: '/about',
      meta: { title: '关于', icon: SmileOutlined, keepAlive: true },
      name: 'About',
      component: () => import('../views/About.vue')
    },
    {
      path: '/logs',
      meta: { title: '更新日志', icon: SmileOutlined, dialog: true },
      name: 'logs',
      component: () => import('../views/logs')
    },
    {
      path: '/test/:id',
      meta: { title: '路径传参' },
      name: 'test',
      hidden: true,
      component: () => import('../views/About.vue')
    },
  ]

  //检查路由格式
  checkRoute() {

  }
 
  addRoute(route: RouteRecordRaw) {
    if(this.registeredRouter.find(v => v.path == route.path)) {
      console.warn('已存在相同的路由路径');
      return ;
    }
    this.registeredRouter.push(route);
    this.$router.addRoute(route)
  };

  removeRoute(name: RouteRecordName) {
    for(let index in this.registeredRouter) {
      if(this.registeredRouter[index].name == name) {
        this.registeredRouter.splice(index as any,1);
        break;
      }
    }
    this.$router.removeRoute(name);
  }

  init() {
    this.registeredRouter = reactive(this.defaultRouter) as RouteRecordRaw[];
    this.$router = createRouter({
      history: createWebHistory(process.env.BASE_URL),
      routes: this.defaultRouter
    })
    this.$router.beforeEach((to, form, next) => {
      if(to.matched.length == 0) {
        next('/');
      } else {
        console.log(to)
        next();
      }
      
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
