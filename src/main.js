//这是工程的入口文件
import Vue from 'vue';
import App from './app.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import './style.scss'; 
import './aa.scss'; 
import './bb.css'

Vue.use(ElementUI);

const root = document.createElement('div')
document.body.appendChild(root)

//mount就是讲我们的App挂载到root这样一个根节点中去
new Vue({
  render: (h) => h(App)
}).$mount(root)