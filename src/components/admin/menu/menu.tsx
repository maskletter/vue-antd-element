import { defineComponent } from "vue";
import { makeStyles, createStyle } from '@/components/theme';

const useStyle = makeStyles(() => createStyle({

    root: {
        margin: 0,
        padding: 0,
    },

    li: {
        margin: 0,
        padding: '0 20px',
        listStyle: 'none',
        lineHeight: '50px',
        transition: '.2s linear all',
        '&:hover': {
            cursor: 'pointer',
            background: 'rgba(0,0,0,0.1)'
        }
    }

}))

const Menu = defineComponent(() => {

    const styles = useStyle('menu-style');
    return () => <ul class={styles.root}>
        <li class={styles.li}>第一个</li>
        <li class={styles.li}>第一个</li>
        <li class={styles.li}>第一个</li>
        <li class={styles.li}>第一个</li>
    </ul>

})

export default Menu;