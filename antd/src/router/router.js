/**
 * 
 * @router
 * 统一配置home页面路由
 * 
 */
//路由使用组件
import index from '../pages/homepages/index'
import nav2 from '../pages/homepages/nav2/nav2'

 /**
  * 具体路由配置
  */
 export const HomeRoute = HomeRoutefc()

function HomeRoutefc() {
    let HomeRoutes = [
        {
            name:'首页',
            path:'/',
            commtent:index,
            child:false,
            icon:'home',
            id:1,
        },
        {
            name:'说明',
            path:'/',
            commtent:nav2,
            icon:'calendar',
            id:2,
            child:false, 
        },
        {
            name:'菜单一',
            path:'/',
            commtent:false,
            id:3,
            icon:'code-sandbox',
            child:[
                {
                    name:'说明1',
                    path:'/',
                    commtent:nav2,
                    icon:'',
                    child:false,
                    id:'3-1'
                },
                {
                    name:'说明2',
                    path:'/',
                    commtent:nav2,
                    icon:'',
                    child:false, 
                    id:'3-2'
                }
            ],
        }

    ]
    return HomeRoutes
}