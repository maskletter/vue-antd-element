import { createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw, Router } from 'vue-router';
import { HomeFilled, SmileOutlined, TableOutlined, GithubFilled, ReadOutlined, ReconciliationOutlined, SolutionOutlined, AreaChartOutlined, LineChartOutlined, PieChartOutlined, NodeExpandOutlined, PictureOutlined, IssuesCloseOutlined, CiOutlined, CopyrightOutlined } from '@ant-design/icons-vue'
import { reactive, createVNode } from 'vue'
import RouterView from '../components/routerview';
import Main from '@/views/main'
import Login from '../views/login'

declare type RouteRecordName = string | symbol;

export const MainKey = Symbol();

/**
 * 系统路由及权限管理
 */

const router = new class SystemRouter {

  constructor() {
    this.init();
  }

  public $router!: Router;

  /**
   * 通过授权注册的路由
   */
  public registeredRouter: RouteRecordRaw[] = [];

  /**
   * 是否为全部授权
   */
  public isAuthorizeAll: boolean = false;

  /**
   * 授权控制的路由
   * 此处的路由会被添加进左侧导航中
   */
  public authRouter: RouteRecordRaw[] = [
    {
      path: 'home',
      name: 'Home',
      meta: { title: '首页', icon: HomeFilled, keepAlive: true },
      component: () => import('../views/home')
    },
    {
      path: 'tabls',
      name: 'tabls',
      meta: { title: '表格', icon: TableOutlined, keepAlive: true },
      component: () => import('../views/table')
    },
    {
      path: 'components',
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
          path: 'container',
          meta: { title: '功能性组件', icon: ReconciliationOutlined, keepAlive: true },
          name: 'container',
          component: () => import('../views/components/container')
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
      path: 'rich-text',
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
      path: 'chart',
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
      path: 'routing-authority',
      meta: { title: '动态路由', icon: SmileOutlined, keepAlive: true },
      name: 'routing-authority',
      component: () => import('../views/routing-authority')
    },
    {
      path: 'test-404',
      meta: { title: '模拟跳转到404页面', icon: CiOutlined, keepAlive: true, onClick:()=>{
        this.$router.push('/xxxx/404/aaa')
      } },
      name: 'test-404',
      component: () => import('../views/About.vue')
    },
    {
      path: 'github',
      meta: { title: 'github', icon: GithubFilled, link: 'https://github.com/maskletter/vue-antd-element' },
      component: () => import('../views/logs')
    },
    {
      path: 'logs',
      meta: { title: '更新日志', icon: CopyrightOutlined, dialog: true },
      name: 'logs',
      component: () => import('../views/logs')
    },
    {
      path: 'about',
      meta: { title: '关于', icon: IssuesCloseOutlined, keepAlive: true },
      name: 'About',
      component: () => import('../views/About.vue')
    },
  ]

  /**
   * 无需授权的路由页
   */
  private defaultRouter: Array<RouteRecordRaw> = [
    {
      path: '/login',
      name: 'login',
      meta: { title: '登录', icon: HomeFilled },
      component: Login
    },
    {
      path: '/404',
      name: 'four',
      meta: { title: '404页面', icon: HomeFilled, keepAlive: true },
      component: () => import('../views/404')
    },
    {
      path: '/main',
      name: MainKey,
      component: Main as any,
      children: [
       
      ]
    },
  ]


  public permissionComparison(auth: any[] | string) {

    function eachAuthRouter(parent: any[], auth: any[] ) {
      const routerList: any[] = [];
      parent.forEach(v => {
        const item = auth.find(j => j.path == v.path);
        if(!item) return 
        if(item.page) {
          if(v.meta) {
            v.meta.page = item.page
          } else {
            v.meta = { page: item.page }
          }
        }
        const children = item.children && v.children ? eachAuthRouter(v.children, item.children) : []
        if(children.length) {
          children.push({
            path: '',
            redirect: './'+children[0].path
          })
        }
        routerList.push({
          ...v,
          children: children
        })
      })
      return routerList;
    }

    if(typeof(auth) == 'string' && auth == '*') {
      this.isAuthorizeAll = true
      this.authRouter.forEach(v => {
        this.addRoute(v);
      })
    } else if(typeof(auth) == 'object'){
      eachAuthRouter(this.authRouter, auth).forEach(v => {
        this.addRoute(v);
      })
    }
  }

  //检查路由格式
  checkRoute() {

  }
 
  addRoute(route: RouteRecordRaw) {
    const _router: any = this.registeredRouter.find(v => v.name == MainKey)
    if(_router.children.find((v: any) => v.path == route.path)) {
      console.warn('已存在相同的路由路径');
      return ;
    }
    _router.children.push(route);
    
    this.$router.addRoute(MainKey,route)
  };

  removeRoute(name: RouteRecordName) {
    const {children}: any = this.registeredRouter.find(v => v.name == MainKey)
    for(let index in children) {
      if(children[index].name == name) {
        children.splice(index as any,1);
        break;
      }
    }
    this.$router.removeRoute(name);
  }

  /**
   * 注册404跳转逻辑
   */
  lostPage() {
    this.$router.beforeEach(async (to,form,next) => {
      if(to.matched.length == 0) {
        next('/404');
      } else {
        next();
      }
      
    })
  }

  init() {
    this.registeredRouter = reactive(this.defaultRouter) as RouteRecordRaw[];
    this.$router = createRouter({
      history: createWebHashHistory(process.env.BASE_URL),
      routes: this.defaultRouter
    })
  }

}


export default router
