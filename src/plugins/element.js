import Vue from 'vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import {Form,FormItem }from 'element-ui'
import {Button} from 'element-ui'
import {Input} from 'element-ui'
import { Message }from 'element-ui'

Vue.use(Form,FormItem)
Vue.use(Button)
Vue.use(Input)
Vue.use(Element)
Vue.prototype.$message = Message