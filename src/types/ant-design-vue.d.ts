
declare module 'ant-design-vue/types/menu/menu-item' {
    interface MenuItem {
        $props: {  [index in keyof MenuItem]?: MenuItem[index]; } & {
            onClick?: () => void
        };
    }
}
declare module 'ant-design-vue/types/menu/menu-item-group' {
    interface MenuItemGroup {
        $props: {  [index in keyof MenuItemGroup]?: MenuItemGroup[index]; };
    }
}

declare module 'ant-design-vue/types/menu/sub-menu' {
    interface SubMenu {
        $props: {  [index in keyof SubMenu]?: SubMenu[index]; };
    }
}
declare module 'ant-design-vue/types/menu/icon' {
    interface Icon {
        $props: {  [index in keyof Icon]?: Icon[index]; };
    }
}
declare module 'ant-design-vue/types/timeline/timeline-item' {
    interface TimelineItem {
        $props: {  [index in keyof TimelineItem]?: TimelineItem[index]; };
    }
}
declare module 'ant-design-vue/types/meta' {
    interface Meta {
        $props: {  [index in keyof Meta]?: Meta[index]; };
    }
}
declare module 'ant-design-vue/types/list/list-item' {
    interface ListItem {
        $props: {  [index in keyof ListItem]?: ListItem[index]; };
    }
}

declare module 'ant-design-vue/types/tabs/tab-pane' {
    interface TabPane {
        $props: {  [index in keyof TabPane]?: TabPane[index]; } & {
            closable?: boolean
        };
    }
}
declare module 'ant-design-vue/types/breadcrumb/breadcrumb-item' {
    interface BreadcrumbItem {
        $props: {  [index in keyof BreadcrumbItem]?: BreadcrumbItem[index]; } & {
            class?: string
            onClick?: () => void
        };
    }
}


declare module 'ant-design-vue' {

    declare class Menu{
        $props: {  [index in keyof Menu]?: Menu[index]; };
    }

    declare class Icon {
        $props: {  [index in keyof Icon]?: Icon[index]; };
    }

    declare class Dropdown {
        $props: {  [index in keyof Dropdown]?: Dropdown[index]; };
    }

    declare class Tabs {
        $props: {  [index in keyof Tabs]?: Tabs[index]; } & {
            onTabClick?: (index: any) => void
        };
    }
    declare class Avatar {
        $props: {  [index in keyof Avatar]?: Avatar[index]; } & {
            style?: CSSProperties
        };
    }
    declare class Popover {
        $props: {  [index in keyof Popover]?: Popover[index]; };
    }
    declare class Empty {
        $props: {  [index in keyof Empty]?: Empty[index]; };
    }
    declare class Breadcrumb {
        $props: {  [index in keyof Breadcrumb]?: Breadcrumb[index]; };
    }
    declare class Card {
        $props: {  [index in keyof Card]?: Card[index]; };
    }
    declare class Row {
        $props: {  [index in keyof Row]?: Row[index]; };
    }
    declare class Col {
        $props: {  [index in keyof Col]?: Col[index]; };
    }
    declare class BackTop {
        $props: {  [index in keyof BackTop]?: BackTop[index]; };
    }
    declare class Modal {
        $props: {  [index in keyof Modal]?: Modal[index]; } & {
            onOk?: () => void
            onCancel?: () => void
        };
    }
    declare class Button {
        $props: {  [index in keyof Button]?: Button[index]; } & {
            onClick?: () => void
        };
    }
    declare class Timeline {
        $props: {  [index in keyof Timeline]?: Timeline[index]; };
    }
    declare class Input {
        $props: {  [index in keyof Input]?: Input[index]; };
    }
    declare class List {
        $props: {  [index in keyof List]?: List[index]; } & {
            dataSource?: any
        };
    }

}

export {}