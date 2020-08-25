import { defineComponent, VNode, inject } from 'vue';
import { makeStyles, createStyle } from '../theme';
import { MenuOutlined } from '@ant-design/icons-vue';
const useStyle = makeStyles((theme: any) => createStyle({
    root: {
        height: 62,
        background: theme.color,
        boxShadow: theme.boxShadow,
        display: 'flex',
        padding: '0 20px',
        color: '#fff',
        alignItems: 'center'
    }
}))

interface TitleProps {
    title?: VNode
    right?: VNode
}
const Title = defineComponent((props: TitleProps) => {

    const drawerHave = inject('app-drawer-have');
    let collapsed: any = inject('app-drawer-collapsed');

    const changeMenuOpen = () => {
        // collapsed = !collapsed;
        collapsed.value = !collapsed.value
    }

    const styles = useStyle('admin-title');
    return () => <div class={styles.root}>
        { drawerHave && <span onClick={changeMenuOpen}><MenuOutlined style={{fontSize: '20px', marginRight: '15px', cursor: 'pointer'}} /></span> }
        <div style={{flex: 1, lineHeight: 1}}>{props.title}</div>
        { props.right && props.right }
    </div>

});

Title.props = {
    title: Object,
    right: Object
} as any

export default Title;