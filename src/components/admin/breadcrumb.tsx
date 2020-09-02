import { Breadcrumb } from 'ant-design-vue'
import { defineComponent, watch, createVNode, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import systemRouter, { MainKey } from '../../router'
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
    onMounted(() => {
        console.log(route.matched)
    })
    return () => <>
        <Breadcrumb>
            
            { route.matched.map((v, index) => v.name != MainKey ? <Breadcrumb.Item class={index == route.matched.length-1?styles.itemDisable:styles.item} onClick={() => clickItem(v.path)}>
                { v.meta && v.meta.icon && createVNode(v.meta.icon, { style: { marginRight: '5px' } }) }
                { v.meta ? v.meta.title : v.name }
            </Breadcrumb.Item>: <Breadcrumb.Item class={styles.item} onClick={() => clickItem('/main/home')}>
                <HomeFilled />
            </Breadcrumb.Item> ) }
        </Breadcrumb>
    </>

})