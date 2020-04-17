import Vue from 'vue'
import Element, {
  Card, Form,
  FormItem,
  Message,
  Input,
  Button,
  Container,
  Header,
  Main,
  Aside,
  Breadcrumb,
  BreadcrumbItem,
  Row,
  Col,
  Table,
  TableColumn
} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Container)
Vue.use(Header)
Vue.use(Main)
Vue.use(Aside)
Vue.use(Form, FormItem)
Vue.use(Button)
Vue.use(Input)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Card)
Vue.use(Row)
Vue.use(Col)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Element)
Vue.prototype.$message = Message
