import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import '@yike-design/ui/es/index.less'
import '@yike-design/ui/es/components/styles/basis.less'
// 引入全局方法
import { YkMessage, YkNotification } from '@yike-design/ui'

const app = createApp(App)
app.config.globalProperties.$notification = YkNotification
app.config.globalProperties.$message = YkMessage
app.mount('#app')
