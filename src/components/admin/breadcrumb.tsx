import { Breadcrumb } from 'ant-design-vue'
import { defineComponent, watch, createVNode } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import systemRouter from '../../router'
import { makeStyles, createStyle } from '../theme'
import { HomeFilled } from '@ant-design/icons-vue'

const useStyle = makeStyles(() => createStyle({

    item: {
        color: 'white',
        cursor: 'pointer'
    },
    itemDisable: {
        color: 'rgba(0,0,0,0.4) !important'
    }

}))


export default defineComponent(() => {

    const router = useRouter();
    const route = useRoute();
    const styles = useStyle('breadcrumb-style');


    const clickItem = (url: string) => {
        router.push(url);
    }

    return () => <>
        <Breadcrumb>
            <Breadcrumb.Item class={styles.item} onClick={() => clickItem('/')}>
                <HomeFilled />
            </Breadcrumb.Item>
            { route.matched.map((v, index) => <Breadcrumb.Item class={index == route.matched.length-1?styles.itemDisable:styles.item} onClick={() => clickItem(v.path)}>
                { v.meta && v.meta.icon && createVNode(v.meta.icon, { style: { marginRight: '5px' } }) }
                { v.meta ? v.meta.title : v.name }
            </Breadcrumb.Item> ) }
        </Breadcrumb>
    </>

})