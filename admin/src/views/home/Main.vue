<template>
  <el-container style="height: 100vh;background-color: #f0f4f4;">
    <div class="aside"
         :class="{hidden: isCollapse}"
         style="background-color: #fff;">
      <div class="logo"
           :class="{hidden: isCollapse}">
        <img alt="Vue logo"
             src="../../assets/logo.png" />
      </div>
      <el-menu class="el-menu-vertical-demo"
               :collapse="isCollapse"
               unique-opened
               menu-trigger='hover'
               router
               :class="{hidden: isCollapse}"
               :collapse-transition="true"
               :default-openeds="['1', '3']">
        <el-submenu index="1"
                    :class="{hidden: isCollapse}">
          <template slot="title"><i class="el-icon-message"></i>用戶管理</template>
          <el-menu-item-group>
            <template slot="title">用戶列表</template>
            <el-menu-item index="/users">总用戶列表</el-menu-item>
            <div class=""></div>
            <el-menu-item index="/administrators">管理员列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </div>

    <el-container>
      <el-header :class="{hidden: !isCollapse}"
                 style="text-align: right; font-size: 12px;">
        <div class="box">
          <div class="MenuToggleMenu"
               @click="toggleMenu"><i class="el-icon-s-grid"></i></div>
          <div class="messageComb">
            <i class="el-icon-message"
               style="font-size:20px;margin-right:10px;margin-bottom: 25px;"></i>
            <el-avatar style="margin-right:10px;margin-top:10px;"
                       src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png">
            </el-avatar>
            <el-dropdown style="margin-right:10px;margin-bottom: 25px;">
              <span style="">
                王小虎<i class="el-icon-arrow-down"
                   style="margin-left:5px;"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>查看</el-dropdown-item>
                <el-dropdown-item>新增</el-dropdown-item>
                <el-dropdown-item>删除</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
      </el-header>
      <el-main>
        <router-view :key="$route.path"></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
// @ is an alias to /src
import { mapState, mapMutations } from 'vuex'
import types from '@/store/types'
import store from '../../store/index'

export default {
  name: 'Main',
  components: {

  },
  computed: {
    ...mapState({
      isCollapse: (state) => (state.collapse.isCollapse),
    }),
  },
  data () {
    return {

    }
  },
  methods: {
    ...mapMutations({
      toggleMenu: types.SET_COLLAPSE,
    }),
  },
  created () {
  },

}
</script>


<style lang="scss" scoped>
.el-header {
  /* background-color: #b3cbcb; */
  background-color: #fff;
  width: 100%;
  color: #333;
  height: 80px;
  box-shadow: 0 2px 3px hsla(0, 0%, 7%, 0.1), 0 0 0 1px hsla(0, 0%, 7%, 0.1);
  /* line-height: 60px; */
  transition: all 1s;
  &.hidden {
    padding: 0;
  }
}

.box {
  margin-right: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.aside {
  color: #333;
  box-shadow: 0 2px 3px hsla(0, 0%, 7%, 0.1), 0 0 0 1px hsla(0, 0%, 7%, 0.1);
  //height: calc(100vh - 80px);
  width: 200px;
  padding: 0 0 0 30px;
  border-right: 1px solid #fdf0fc;
  animation: menuAni 1s ease-in;
  transition: all 1s;
  overflow: hidden;
  &.hidden {
    width: 65px;
    padding: 0;
  }
}
@keyframes menuAni {
  0% {
    transform: translateX(-300px);
  }
}
.logo {
  margin: 0 20px;
  margin-top: 10px;
  width: 150px;
  transition: all 1.5s;
  &.hidden {
    width: 40px;
  }
}
.logo img {
  width: 100%;
  &.hidden {
    width: 40px;
  }
}

.el-submenu {
  background-color: #fff;
}

.MenuToggleMenu {
  font-size: 20px;
  margin-bottom: 20px;
  vertical-align: middle;
}

.el-main {
  width: 100%;
  height: 100%;
}
</style>
