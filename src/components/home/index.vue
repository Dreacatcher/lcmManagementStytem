<template>
	<div id="app">
		<!--头部导航-->
		<el-row class="homeContainer">
			<el-col :span="24" class="topbar-wrap">
				<el-col :span="10">
					<div class="logo" style="float:left;">
						<router-link to="/"><img src="./img/ljy-logo-0925.png"></router-link>
					</div>
					<div class="htext">
						<router-link to="/"><span>用户工作台</span></router-link>
					</div>
				</el-col>
				<el-col :span="14">
          <section class="barNav"> 
            <el-dropdown @command="handleCommand">
              <span class="el-dropdown-link">
                用户<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item  command="a1">基本资料</el-dropdown-item>
                <el-dropdown-item  command="b1">安全设置</el-dropdown-item>
                <el-dropdown-item  command="c1"  @click.native="logout">退出登录</el-dropdown-item>
                <!-- <el-dropdown-item disabled  command="d1">双皮奶</el-dropdown-item>
                <el-dropdown-item divided  command="e1">蚵仔煎</el-dropdown-item> -->
              </el-dropdown-menu>
            </el-dropdown>
            <el-dropdown @command="handleCommand">
              <span class="el-dropdown-link">
                社区<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item  command="a2">我的主页</el-dropdown-item>
                <el-dropdown-item  command="b2">我的帖子</el-dropdown-item>
                <el-dropdown-item  command="c2">我的分享</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
             <el-dropdown @command="handleCommand">
              <span class="el-dropdown-link">
                <i class="el-icon-message"></i><i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item  command="a3">我的消息</el-dropdown-item>
                <el-dropdown-item  command="b3">系统消息</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </section>
				</el-col>
			</el-col>
			<!--主内容区-->
			<el-col :span="24" class="main">
				<!--左侧导航-->
				<aside :class="{showSidebar:!collapsed}">
					<!--展开折叠开关-->
					<div class="menu-toggle" @click.prevent="collapse">
						<i class="icon-list2" v-show="!collapsed" ></i>
						<i class="icon-sort-amount-desc" v-show="collapsed" ></i>
					</div>
					<!--导航菜单-->
          <el-menu default-active="0"  router :collapse="collapsed" theme="dark" class="el-menu-vertical-demo">
						<template v-for="(item,index) in leftNav" >
							<el-submenu :index="index+''" :data-index='index' :key="index">
								<template slot="title"><i :class="item.iconCls"></i><span slot="title">{{item.name}}</span></template>
								<el-menu-item v-for="(subitem,_index) in item.subitems" :key="_index" :index="subitem.index+''">
									<span slot="title">{{subitem.name}}</span>
								</el-menu-item>
							</el-submenu>
						</template>
					</el-menu>
				</aside>
				<!--右侧内容区-->
				<section class="content-container">
					<div class="grid-content bg-purple-light">
						<el-col :span="24" class="content-wrapper">
							<transition name="fade" mode="out-in">
								<router-view></router-view>
							</transition>
						</el-col>
					</div>
				</section>
			</el-col>
		</el-row>
	</div>
</template>

<script>
export default {
  name: 'app',
  data: function() {
    return {
      collapsed: false,
      sysUserName: 'icon-floppy-disk',
      leftNav: [
        {
          name: '数据服务11',
          iconCls: 'icon-floppy-disk',
          subitems: [
            {
              name: '数据服务子菜单11',
              index: 'hello'
            },
            {
              name: '数据服务子菜单12',
              index: 'hello'
            },
            {
              name: '数据服务子菜单13',
              index: 'hello'
            },
            {
              name: '数据服务子菜单14',
              index: 'hello'
            }
          ]
        },
        {
          name: '数据服务22',
          iconCls: 'icon-floppy-disk',
          subitems: [
            {
              name: '数据服务子菜单211',
              index: '数据服务子菜单211'
            },
            {
              name: '数据服务子菜单212',
              index: '数据服务子菜单212'
            },
            {
              name: '数据服务子菜单213',
              index: '数据服务子菜单213'
            },
            {
              name: '数据服务子菜单214',
              index: '数据服务子菜单214'
            }
          ]
        },
        {
          name: '数据服务333',
          iconCls: 'icon-floppy-disk',
          subitems: [
            {
              name: '数据服务子菜单311',
              index: '数据服务子菜单311'
            },
            {
              name: '数据服务子菜单312',
              index: '数据服务子菜单312'
            },
            {
              name: '数据服务子菜单313',
              index: '数据服务子菜单313'
            },
            {
              name: '数据服务子菜单314',
              index: '数据服务子菜单314'
            }
          ]
        },
        {
          name: '个人中心',
          iconCls: 'icon-floppy-disk',
          subitems: [
            {
              name: '编辑个人信息',
              index: 'pubMyInfo'
            },
            {
              name: '发表文章',
              index: 'pubArticle'
            },
            {
              name: '文章列表',
              index: 'queryArticle'
            }
          ]
        }
      ]
    }
  },
  methods: {
    // 触发导航右侧内容
    handleCommand(command) {
      this.$message('click on item ' + command)
    },
    // 折叠导航栏
    collapse: function() {
      this.collapsed = !this.collapsed
    },
    // 密码修改
    uerspwd: function() {
      var _this = this
      _this.$router.push('/changepwd')
    },
    // 基本资料
    basic: function() {
      var _this = this
      _this.$router.push('/Basic_information')
    },
    // 退出登录
    logout: function() {
      var _this = this
      this.$confirm('确认退出吗?', '提示', {
        // type: 'warning'
      })
        .then(() => {
          sessionStorage.removeItem('usernkname')
          _this.$router.push('/Login')
        })
        .catch(() => {})
    },
    handleOpen(key, keyPath) {
      console.log(key)
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    }
  },
  created() {
    console.log(this.leftNav)
  },
  mounted() {
    var user = sessionStorage.getItem('usernkname')
    if (user) {
      user = JSON.parse(user)
      this.sysUserName = user.usernkname || ''
    }
  }
}
</script>
<style type="text/scss" lang="scss">
@import '../../style/_include/_all.scss';
/*body*/
.homeContainer {
  position: absolute !important;
  top: 0px;
  background-color: $mainBgb;
  bottom: 0px;
  width: 100%;

  /*头部*/
  .topbar-wrap {
    height: 60px;
    line-height: 60px;
    background: $middletBlack;
    padding: 0px;
  }
  /*主内容*/
  .main {
    display: flex;
    position: absolute;
    top: 60px;
    bottom: 0px;
    overflow: hidden;
  }
  // 导航右侧内容
  .barNav {
    float: right;
  }
  .el-dropdown {
    padding-right: 25px;
  }
  .el-dropdown-link {
    cursor: pointer;
    color: $white;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  /*左导航*/
  aside {
    min-width: 50px;
    text-align: center;
    overflow-y: scroll;
    background: $middletBlack;
  }
  .el-menu {
    background: $middletBlack;
    height: auto;
  }
  .el-submenu {
    color: $white;
    .el-submenu__title {
      width: auto;
      i,
      span {
        color: $white;
      }
      span {
        padding: 0 10px 0 10px;
      }
    }
    .el-menu-item {
      padding: 0 0px !important;
      span {
        padding: 0 10px 0 10px;
      }
    }
    &:hover {
      background: $color0c2de;
    }
    .el-submenu__title:hover {
      background: $color0c2de;
    }
  }
  .el-menu-item {
    color: $white;
  }
  .el-menu-item:hover {
    color: $white;
    background: $selectColor;
  }
  .showSidebar {
    overflow-x: hidden;
    overflow-y: auto;
  }
  /*折叠开关*/
  .menu-toggle {
    background: $selectColor;
    text-align: center;
    color: $white;
    height: 35px;
    line-height: 35px;
  }
  .menu-toggle i:hover {
    color: $btnForbid;
    cursor: pointer;
  }
  /*右内容区*/
  .content-container {
    flex: 1;
    overflow-y: scroll;
    padding: 20px;
    padding-bottom: 1px;
  }
  .content-wrapper {
    background-color: $white;
    padding: 20px;
    box-sizing: border-box;
  }
  .htext {
    width: 114px;
    float: left;
    text-align: center;
    line-height: 60px;
    height: 60px;
    border-right: 1px solid $deeptBlack;
    cursor: pointer;
  }
  .htext a {
    color: $white;
  }
  .htext:hover {
    background: $deeptBlack;
  }
  /*头部LOGO样式*/
  .logo {
    width: 63px;
    height: 60px;
    text-align: center;
    line-height: 60px;
    border-right: 1px solid $deeptBlack;
    cursor: pointer;
  }
  .logo:hover {
    background: $deeptBlack;
  }
  .logo img {
    width: 25px;
    height: 25px;
    margin-top: 12px;
  }
  /*el-下拉菜单*/
  .userinfo-inner {
    color: white;
    cursor: pointer;
  }
  .dropdown {
    float: right;
    height: 50px;
    line-height: 50px;
    width: 100px;
    text-align: center;
  }
  .dropdown:hover {
    background: $deeptBlack;
  }
  .news {
    float: right;
    height: 60px;
    line-height: 60px;
    width: 100px;
    text-align: center;
    border-right: 1px solid $deeptBlack;
  }
  .news:hover {
    background: $deeptBlack;
  }
  /* 小角标 */
  .item {
    box-sizing: border-box;
  }
  ::-webkit-scrollbar {
    width: 0px;
    height: 0px;
    background-color: $selectColor;
  }
}
</style>
