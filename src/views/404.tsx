import { defineComponent } from 'vue';
import { makeStyles, createStyle } from '@/components/theme';
import { Button } from 'ant-design-vue'
import { useRouter } from 'vue-router';

const useStyle = makeStyles(() => createStyle({

    root: {
        background: 'linear-gradient(-40deg, #93a5cf 0%, #e4efe9 100%)',
        height: '100vh',
        overflow: 'hidden'
    },
    wrapper: {
        textAlign: 'center',
        marginTop: 100,
        '& h1': {
            color: '#fff'
        }
    }

}))

export default defineComponent(() => {
    const styles = useStyle('404-style');
    const attrs: any = {
        shape:'round'
    }
    const router = useRouter();
    return () => <div class={styles.root}>
        <div class={styles.wrapper}>
            <h1>还未美化的404页面</h1>
            <div>
                <Button {...attrs} onClick={router.back}>返回上一页</Button>
                <div style={{display:'inline-block',width:'50px',marginTop:'100px'}}></div>
                <Button {...attrs} type='primary' onClick={() => router.replace('/main/home')}>回首页</Button>
            </div>
        </div>
    </div>

})