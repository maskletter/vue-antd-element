

declare module 'vue-router' {
    declare interface RouterLinkProps extends RouterLinkOptions  {
        /**手动添加class属性 */
        class?: string
    }
}

export {}