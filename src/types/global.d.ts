import { Ref } from 'vue'

declare global {

    interface SystemProvide {
        /**检查用户是否登录 */
        isLogin: () => boolean
        /**验证登录是否有效 */
        verificationLogin: () => Promise<any>
        login:(data: any) => void
        logout:() => void,
        /**tab标签存储 */
        tabs: { url: string, name: string, child: VNode, title: string }[]
        /**存储的缓存数组 */
        keepalive: Ref<string[]>,
        setKeep: (name: string) => void
        clearKeep: (name: string) => void
        // setTab: (route: RouteLocationNormalizedLoaded) => void
    }

}

export {  }