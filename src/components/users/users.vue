<template>
  <div>
      <!-- 面包屑导航区 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 卡片视图区 -->
    <el-card>
      <el-row :gutter="20">
        <el-col :span=8>
          <el-input placeholder="请输入内容">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
        <el-col :span=4>
            <el-button type="primary">添加用户</el-button>
        </el-col>
      </el-row>
  <!-- 表格区 -->
      <el-table :data="tableData" border stripe>
        <el-table-column type="index"></el-table-column>
        <el-table-column prop="name" label="姓名" width="180"></el-table-column>
        <el-table-column prop="mail" label="邮箱" width="180"></el-table-column>
        <el-table-column prop="tele" label="电话"></el-table-column>
        <el-table-column prop="role" label="角色"></el-table-column>
        <el-table-column prop="status" label="状态">
            <el-switch v-model="tableData.status"></el-switch>
        </el-table-column>
        <el-table-column prop="operate" label="操作"></el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'users',
  data () {
    return {
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
        role: '1',
        status: true
      },
      {
        name: '张三',
        mail: '上海市普陀区金沙江路 1518 弄',
        tele: '1',
        role: '1',
        status: true
      }, {
        name: '张三',
        mail: '上海市普陀区金沙江路 1518 弄',
        tele: '1',
        role: '1',
        status: true
      }, {
        name: '张三',
        mail: '上海市普陀区金沙江路 1518 弄',
        tele: '1',
        role: '1',
        status: true
      }]
    }
  },
  creater () {
    // this.getUserList
  },
  methods: {
    // async getUserList(){
    // const {data:res} = await this.$hhtp.get('users',{params:this.queryInfo})
    // if(res.meta.status!==200)
    // {return this.$hhtp.error('获取用户列表失败');}
    // this.userlist=res.data.users;
    // this.total=res.data.total

    // }
  }
}
</script>

<style>

</style>
