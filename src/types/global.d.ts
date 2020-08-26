import { Ref } from 'vue'

declare global {

    interface SystemProvide {
        login:() => void
        logout:() => void,
        keepalive: Ref<string[]>,
        setKeep: (name: string) => void
        clearKeep: (name: string) => void
    }

}

export {  }