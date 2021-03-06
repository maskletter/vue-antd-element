import { defineComponent, inject, ref, reactive } from 'vue'
import { makeStyles, createStyle } from '@/components/theme'
import { message, Input, Button, Avatar } from 'ant-design-vue'
import { UserOutlined, EditFilled } from '@ant-design/icons-vue'
import Br from '@/components/br'
import { useRouter } from 'vue-router'
import Headimg from '@/assets/headimg.jpg'
import sysRouter from '@/router'
import { account } from '@/mock/user'

const useStyle = makeStyles((theme: any) => createStyle({
    '@global': {
        '#login-container': {
            '& .ant-input-prefix, & .anticon': {
                color: '#fff'
            },
            '& input': {
                background: 'transparent',
                border: 'none',
                borderBottom: '1px solid #484856',
                outline: 'none',
                color: '#fff'
            },
        }
    },
    root: {
        height: '100vh',
        // background: '#f5f5f5',
        backgroundImage: 'linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    wrapper: {
        width: 340,
        textAlign: 'center',
        boxShadow: theme.boxShadow,
        borderRadius: '15px', 
        overflow: 'hidden',
        padding: 0,
        background: '#2b2b36',
    },
    avtar: {
        marginTop: 30,
        marginBottom: 30
    },
    headInfo: {
        background: '#23232e',
        height: 50,
        textAlign: 'right',
        '&>span': {
            display: 'inline-block',
            width: 20,
            height: 20,
            borderRadius: '50%',
            margin: '16px 10px 0px 0px',
            background: '#6756ea'
        }
    }

}))

export default defineComponent(() => {

    const styles = useStyle('login-style');

    const system: SystemProvide = inject<any>('system');
    const loading = ref(false)
    const router = useRouter();
    const form = reactive({name:'admin',password:'123456'})

    const login = () => {
        if(!form.name) {
            return message.error({content:<text>请输入用户名</text>})
        }
        if(!form.password) {
            return message.error({content:<text>请输入密码</text>})
        }
        loading.value = true
        setTimeout(() => {
            system.login({
                username: form.name,
                token:'dahwdhaw9d89a7d78a6d75a7wdawd'
            });
            sysRouter.permissionComparison(account.getRoute(form.name).authority)
            console.log(2321)
            router.push('/main/home')
        }, 1500)
    }

    return () => <div class={styles.root} id='login-container'>
        <div class={styles.wrapper} >
            <div class={styles.headInfo}>
                <span></span>
                <span style={{background: '#ea569a'}}></span>
                <span style={{background: '#f1c85f'}}></span>
            </div>
            <div >
                <Avatar class={styles.avtar} size={69} src={Headimg} />
                {/* <img class={styles.asvtar} src={Headimg} alt=""/> */}
                <Input v-model={[form.name,'value']} placeholder='用户名(随便写)' v-slots={{
                    prefix: () => <UserOutlined />
                }} />
                <Br height={20} />
                <Input.Password v-model={[form.password,'value']} placeholder='密码(随便写)' v-slots={{
                    prefix: () => <EditFilled />
                }} />
                <Br height={60} />
                <Button loading={loading.value} onClick={login} style={{width: '100%', height: '60px'}} type='danger'>登录</Button>
            </div>
            <div style={{color: 'white', textAlign: 'left', padding: '5px 20px'}}>
                <p style={{marginBottom: '0px'}}>全部权限: admin , 密码随便写</p>
                <p style={{marginBottom: '0px'}}>部分权限: admin1 , 密码随便写</p>
            </div>
        </div>
        
    </div>

})