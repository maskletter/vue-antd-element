

declare module 'vue-router' {
    declare interface RouterLinkProps extends RouterLinkOptions  {
        /**手动添加class属性 */
        class?: string
    }
    declare interface RouteRecordSingleView {
        hidden?: boolean
    }
    declare interface RouteRecordMultipleViews {
        hidden?: boolean
    }
    declare interface RouteRecordRedirect {
        hidden?: boolean
    }

    declare type RouteRecordRaw = RouteRecordSingleView | RouteRecordMultipleViews | RouteRecordRedirect;
}

export {}