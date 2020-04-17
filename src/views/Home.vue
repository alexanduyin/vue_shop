<template>
<el-container>
    <!-- 头部区域 -->
  <el-header>
      <div>
          <img src="../assets/iconfont/订单.svg" alt="">
          <span>电商后台管理系统</span>
      </div>
      <el-button type="info" @click="out">退出</el-button>
  </el-header>

  <el-container>
      <!-- 左边 -->
    <el-aside :width="isCollapse?'64px':'200px'">
    <div class="toggle-botton" @click="toggleclick">|||</div>
    <el-menu
      background-color="#333744"
      text-color="#fff"
      active-text-color="#409eff"
      unique-opened
      :collapse="isCollapse"
      :collapse-transition="false"
      :router="true"
      :default-active=" activePath"
      >
      <!-- 一级菜单 -->
      <el-submenu :index="item.id+''" v-for="item in menulist" :key="item.id">
          <!-- 一级菜单的模板区域 -->
        <template slot="title">
            <!-- 图标 -->
            <i class="el-icon-menu"></i>
          <!-- 文本 -->
            <span>{{item.authname}}</span>
        </template>
        <!-- 二级菜单 -->
        <el-menu-item :index="subItem.id+''" v-for="subItem in item.children" :key="subItem.id" @click="saveNavState(subItem.id+'')">
             <template slot="title">
            <!-- 二级菜单图标 -->
          <i class="el-icon-menu"></i>
          <!-- 二级菜单文本 -->
          <span>{{subItem.authname}}</span>
        </template>
        </el-menu-item>
      </el-submenu>
    </el-menu>

    </el-aside>
    <!-- 主体 -->
    <el-main>
        <router-view></router-view>
    </el-main>
  </el-container>

</el-container>

</template>
<script>
export default {
  name: 'Home',
  // created(){
  //     this.getMenuList()
  // },
  data () {
    return {
      /* 左侧菜单 */
      menulist: [
        {
          id: 1,
          authname: '用户管理',
          children: [
            {
              id: 1,
              authname: '用户列表'
            }
          ]

        },
        {
          id: 2,
          authname: '权限管理',
          children: [
            {
              id: 1,
              authname: '角色列表'
            },
            {
              id: 2,
              authname: '权限列表'
            }
          ]
        },
        {
          id: 3,
          authname: '商品管理',
          children: [
            {
              id: 1,
              authname: '商品列表'
            },
            {
              id: 2,
              authname: '分类参数'
            },
            {
              id: 3,
              authname: '商品分类'
            }
          ]

        },
        {
          id: 4,
          authname: '订单管理'

        },
        {
          id: 5,
          authname: '数据统计'

        }
      ],
      isCollapse: true,
      activePath: ''
    }
  },
  created () {
    this.activePath = window.sessionStorage.getItem('activePath')
  },
  methods: {
    out () {
      window.sessionStorage.clear()
      this.$router.push('/login')
    },
    /* 点击按钮折叠 */
    toggleclick () {
      this.isCollapse = !this.isCollapse
    },
    /* 保存链接的激活状态 */
    saveNavState (activePath) {
      window.sessionStorage.setItem('activePath', activePath)
      this.activePath = activePath
    }
    // async getMenuList(){
    //    const {data:res} = await this.$http.get('menus')
    //    if(res.meta.status !==200) return this.$message.errot(res.meta.msg);
    //    this.menulist=res.data
    // }
  }
}
</script>

<style lang="less" scoped>
.el-header {
    background-color: #37314d;
    display: flex;
    padding-left: 0;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
    >div {
        display: flex;
        align-items: center;
        color: #ffffff;

        >img {
            width: 50px;
            height: 50px;
        }
        span {
            margin-left:10px
        }
    }
}
.el-aside {
    background-color: #333744;
    el-menu {
        border-right: none;
    }
}
.el-main {
    background-color: #eaedf1;
}
.el-container {
    height: 100%;
}
.toggle-botton {
    background-color: #4a5064;
    font-size: 10px;
    line-height: 24px;
    color: #ffffff;
    text-align: center;
    letter-spacing: 0.2em;
    cursor: pointer;
}
</style>
