import './assets/main.css'

// import { createApp } from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
// 按需引入 Vant
import { Tabbar, TabbarItem, Checkbox } from 'vant';
import 'vant/es/toast/style'
// CSS 重置的现代替代方案
import 'normalize.css/normalize.css'

// 实例化 Vue 实例
const app = createApp(App)

// 安装 Vant 相关使用插件
app.use(Checkbox);
app.use(Tabbar);
app.use(TabbarItem);

// 挂载到 #app 节点
app.mount('#app')
