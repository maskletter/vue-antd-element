import { CSSProperties } from "vue";

interface CommonProps {
    class?: string,
    style?: string|CSSProperties
}

declare module 'ant-design-vue/types/menu/menu-item' {
    interface MenuItem {
        $props: {  [index in keyof MenuItem]?: MenuItem[index]; } & {
            onClick?: () => void
        } & CommonProps;
    }
}
declare module 'ant-design-vue/types/menu/menu-item-group' {
    interface MenuItemGroup {
        $props: {  [index in keyof MenuItemGroup]?: MenuItemGroup[index]; } & CommonProps;
    }
}

declare module 'ant-design-vue/types/menu/sub-menu' {
    interface SubMenu {
        $props: {  [index in keyof SubMenu]?: SubMenu[index]; } & CommonProps;
    }
}
declare module 'ant-design-vue/types/menu/icon' {
    interface Icon {
        $props: {  [index in keyof Icon]?: Icon[index]; } & CommonProps;
    }
}
declare module 'ant-design-vue/types/timeline/timeline-item' {
    interface TimelineItem {
        $props: {  [index in keyof TimelineItem]?: TimelineItem[index]; } & CommonProps;
    }
}
declare module 'ant-design-vue/types/meta' {
    interface Meta {
        $props: {  [index in keyof Meta]?: Meta[index]; } & CommonProps;
    }
}
declare module 'ant-design-vue/types/list/list-item' {
    interface ListItem {
        $props: {  [index in keyof ListItem]?: ListItem[index]; } & CommonProps;
    }
}
declare module 'ant-design-vue/types/input/input-group' {
    interface InputGroup {
        $props: {  [index in keyof InputGroup]?: InputGroup[index]; } & {
            placeholder?: string
        } & CommonProps;
    }
}
declare module 'ant-design-vue/types/input/input-search' {
    interface InputSearch {
        $props: {  [index in keyof InputSearch]?: InputSearch[index]; } & {
            placeholder?: string
        } & CommonProps;
    }
}
declare module 'ant-design-vue/types/input/password' {
    interface Password {
        $props: {  [index in keyof Password]?: Password[index]; } & {
            placeholder?: string
        } & CommonProps;
    }
}
declare module 'ant-design-vue/types/input/textArea' {
    interface TextArea {
        $props: {  [index in keyof TextArea]?: TextArea[index]; } & {
            placeholder?: string
        } & CommonProps;
    }
}

declare module 'ant-design-vue/types/tabs/tab-pane' {
    interface TabPane {
        $props: {  [index in keyof TabPane]?: TabPane[index]; } & {
            closable?: boolean
        } & CommonProps;
    }
}
declare module 'ant-design-vue/types/breadcrumb/breadcrumb-item' {
    interface BreadcrumbItem {
        $props: {  [index in keyof BreadcrumbItem]?: BreadcrumbItem[index]; } & {
            class?: string
            onClick?: () => void
        } & CommonProps;
    }
}
declare module 'ant-design-vue/types/form/form-item' {
    interface FormItem {
        $props: {  [index in keyof FormItem]?: FormItem[index]; } & CommonProps;
    }
}
declare module 'ant-design-vue/types/button/button' {
    interface Button {
        shape: 
    }
}


declare module 'ant-design-vue' {

    declare class Menu{
        $props: {  [index in keyof Menu]?: Menu[index]; } & CommonProps;
    }

    declare class Icon {
        $props: {  [index in keyof Icon]?: Icon[index]; } & CommonProps;
    }

    declare class Dropdown {
        $props: {  [index in keyof Dropdown]?: Dropdown[index]; } & CommonProps;
    }

    declare class Tabs {
        $props: {  [index in keyof Tabs]?: Tabs[index]; } & {
            onTabClick?: (index: any) => void
        } & CommonProps;
    }
    declare class Avatar {
        $props: {  [index in keyof Avatar]?: Avatar[index]; } & {
            style?: CSSProperties
        } & CommonProps;
    }
    declare class Popover {
        $props: {  [index in keyof Popover]?: Popover[index]; } & CommonProps;
    }
    declare class Empty {
        $props: {  [index in keyof Empty]?: Empty[index]; } & CommonProps;
    }
    declare class Breadcrumb {
        $props: {  [index in keyof Breadcrumb]?: Breadcrumb[index]; } & CommonProps;
    }
    declare class Card {
        $props: {  [index in keyof Card]?: Card[index]; } & {
            class?: string
        } & CommonProps;
    }
    declare class Row {
        $props: {  [index in keyof Row]?: Row[index]; } & CommonProps;
    }
    declare class Col {
        $props: {  [index in keyof Col]?: Col[index]; } & CommonProps;
    }
    declare class BackTop {
        $props: {  [index in keyof BackTop]?: BackTop[index]; } & CommonProps;
    }
    declare class Modal {
        $props: {  [index in keyof Modal]?: Modal[index]; } & {
            onOk?: () => void
            onCancel?: () => void
        } & CommonProps;
    }
    declare class Button {
        $props: {  [index in keyof Button]?: Button[index]; } & {
            onClick?: () => void
            shape?: 'circle' | 'circle-outline' | 'round',
        } & CommonProps;
    }
    declare class Timeline {
        $props: {  [index in keyof Timeline]?: Timeline[index]; } & CommonProps;
    }
    declare class Form {
        $props: {  [index in keyof Form]?: Form[index]; } & CommonProps;
    }
    declare class Checkbox {
        $props: {  [index in keyof Checkbox]?: Checkbox[index]; } & CommonProps;
    }
    declare class Input {
        $props: {  [index in keyof Input]?: Input[index]; } & {
            placeholder?: string
        } & CommonProps;
    }
    declare class List {
        $props: {  [index in keyof List]?: List[index]; } & {
            dataSource?: any
        } & CommonProps;
    }
    declare class Spin {
        $props: {  [index in keyof Spin]?: Spin[index]; } & {
            dataSource?: any
        } & CommonProps;
    }
    
}

export {}