import Vue from 'vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import {Form,
    FormItem,
    Message,
    Input,
    Button,
    Container,
    Header,
    Main,
    Aside
}from 'element-ui'

Vue.use(Container)
Vue.use(Header)
Vue.use(Main)
Vue.use(Aside)
Vue.use(Form,FormItem)
Vue.use(Button)
Vue.use(Input)
Vue.use(Element)
Vue.prototype.$message = Message