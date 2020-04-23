<template>
  <div>
      <!-- 面包屑导航区 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>

    <!-- 关于添加用户和搜索框的卡片视图区 -->
    <el-card>
      <el-row :gutter="20">
        <el-col :span=8>
          <el-input placeholder="请输入内容" v-model="tableData.name" clearable>
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
        <el-col :span=4>
            <el-button type="primary" @click="showdialogVisible">添加用户</el-button>
        </el-col>
      </el-row>

  <!-- 用户相关的表格区 -->
      <el-table :data="tableData" border stripe>
        <el-table-column type="index"></el-table-column>
        <el-table-column prop="name" label="姓名" width="180"></el-table-column>
        <el-table-column prop="mail" label="邮箱" width="180"></el-table-column>
        <el-table-column prop="tele" label="电话"></el-table-column>
        <el-table-column prop="role" label="角色"></el-table-column>
         <!-- 状态栏 -->
        <el-table-column prop="tableData" label="状态">
          <template slot-scope="scope">
            <el-switch v-model="scope.row.status"></el-switch>
          </template>
        </el-table-column>
        <!-- 操作部分 -->
        <el-table-column prop="operate" label="操作">
           <template slot-scope="scope">
          <!-- 修改按钮 -->
          <el-button type="primary" icon="el-icon-edit" size="mini" @click="editform(scope.row)"></el-button>
          <!-- 删除按钮 -->
          <el-button type="danger" icon="el-icon-delete" size="mini"></el-button>
          <!-- 分配角色按钮 -->
          <el-tooltip  effect="dark" content="分配角色" placement="top" :enterable="false">
            <el-button type="warning" icon="el-icon-setting" size="mini"></el-button>
          </el-tooltip>
           </template>
        </el-table-column>
      </el-table>

      <!-- 分页区域 -->
       <el-pagination
    layout="prev, pager, next"
    :total="50">
  </el-pagination>
    </el-card>

    <!-- 添加用户对话框 -->
    <el-dialog
  title="提示"
  :visible.sync="adddialogVisible"
  width="30%"
  @close="addDialogClosed"
  >
  <!-- 添加内容主题区域 -->
  <el-form :model="addForm" :rules="addFormRules" ref="addFormRef" label-width="70px">
  <el-form-item label="用户名" prop="username">
    <el-input v-model="addForm.username"></el-input>
  </el-form-item>
  <el-form-item label="密码" prop="password">
    <el-input v-model="addForm.password"></el-input>
  </el-form-item>
    <el-form-item label="邮箱" prop="mail">
    <el-input v-model="addForm.mail"></el-input>
  </el-form-item>
    <el-form-item label="电话" prop="telephone">
    <el-input v-model="addForm.telephone"></el-input>
  </el-form-item>
  </el-form>

  <!-- 底部区域 -->
  <span slot="footer" class="dialog-footer">
    <el-button @click="adddialogVisiblechange">取 消</el-button>
    <el-button type="primary" @click="addUser">确 定</el-button>
  </span>
</el-dialog>

<!-- 修改用户资料区 -->
<el-dialog
  title="提示"
  :visible.sync="editdialogVisible"
  width="50%">
  <el-form :model="editForm"  :rules="eiditFormrules" ref="eiditFormRef" label-width="70px" >
  <el-form-item label="用户名">
    <el-input v-model="editForm.name" disabled></el-input>
  </el-form-item>
  <el-form-item label="邮箱" prop="email">
    <el-input v-model="editForm.email"></el-input>
  </el-form-item>
  <el-form-item label="手机" prop="mobile">
    <el-input v-model="editForm.mobile"></el-input>
  </el-form-item>
  </el-form>
    <!-- 底部插槽 -->
  <span slot="footer" class="dialog-footer">
    <el-button @click="editdialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="editdialogVisible = false">确 定</el-button>
  </span>
</el-dialog>
  </div>
</template>

<script>
export default {
  name: 'users',
  data () {
    /* 校验规则 */
    var checkEmail = (rule, value, cb) => {
      const regEmail = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/
      if (regEmail.test(value)) {
        return cb
      }
      cb(new Error('请输入合法的邮箱'))
    }
    var checkTele = (rule, value, cb) => {
      const regTele = /^(0|86|17951)?(13[0-9]|15[0-9]|17[678]|18[0-9]|14[57])[0-9]{8}$/
      if (regTele.test(value)) {
        return cb
      }
      cb(new Error('请输入合法的手机号'))
    }
    return {
      /* 定义邮箱规则 */
    // queryInfo:{
    //   query:'',
    //   pagenum: 1,
    //   pagesize: 2,
    //   userlist:[],
    //   total:[],
      tableData: [{
        name: '张三',
        mail: '上海市普陀区金沙江路 1518 弄',
        tele: '1',
        status: true
      },
      {
        name: '李四',
        mail: '上海市普陀区金沙江路 1518 弄',
        tele: '2',
        status: true
      }, {
        name: '王五',
        mail: '上海市普陀区金沙江路 1518 弄',
        tele: '1',
        status: true
      }, {
        name: '张三',
        mail: '上海市普陀区金沙江路 1518 弄',
        tele: '1',
        status: true
      }],

      adddialogVisible: false,
      /* 新增用户表单 */
      addForm: {
        username: '',
        password: '',
        mail: '',
        tele: ''
      },
      editForm: {},
      /* 校验规则 */
      addFormRules: {
        username: [{
          required: true,
          message: '请输入用户名',
          trigger: 'blur'
        }, {
          min: 3,
          max: 10,
          message: '用户名的长度在3-10个字符之间',
          trigger: 'blur'
        }
        ],
        password: [{
          required: true,
          message: '请输入密码',
          trigger: 'blur'
        }, {
          min: 6,
          max: 15,
          message: '密码的长度在6-15个字符之间',
          trigger: 'blur'
        }],
        mail: [{
          required: true,
          message: '请输入邮箱',
          trigger: 'blur'
        },
        {
          validator: checkEmail,
          trigger: 'blur'
        }],
        telephone: [{
          required: true,
          message: '请输入联系方式',
          trigger: 'blur'
        },
        {
          validator: checkTele,
          trigger: 'blur'
        }]
      },
      editdialogVisible: false,
      eiditFormrules: {
        email: [{ required: true, message: '请输入用户的邮箱', trigger: 'blur' },
          { validator: checkEmail, trigger: 'blur' }
        ],
        mobile: [{ required: true, message: '请输入用户的手机', trigger: 'blur' },
          { validator: checkTele, trigger: 'blur' }
        ]

      }
    }
  },
  // created () {
  //   // this.getUserList
  // },
  methods: {
    // async getUserList(){
    // const {data:res} = await this.$hhtp.get('users',{params:this.queryInfo})
    // if(res.meta.status!==200)
    // {return this.$hhtp.error('获取用户列表失败');}
    // this.userlist=res.data.users;
    // this.total=res.data.total
    // }
    // getUserList () {},
    /* 删除用户操作 */
    adddialogVisiblechange () {
      this.adddialogVisible = false
    },
    showdialogVisible () {
      this.adddialogVisible = true
    },
    addDialogClosed () {
      this.$refs.addFormRef.resetFields()
    },
    addUser () {
      this.$refs.addFormRef.validate(valid => {
        if (!valid) return
        this.addForm.push(this.tableData)
        this.adddialogVisible = false
      })
    },
    editform  (row) {
      this.editdialogVisible = true
      // this.tableData.forEach((value, i) => {
      //   this.editForm = this.tableData[i]
      // })
      console.log(row)
      /* 这里本来应该写一个关于I的函数获取当前行的数据 */
    }
  }
}
</script>
<style>

</style>
