<template>
    <div>
        <el-menu >
        <el-row class="tac">
            <el-col>
                <router-link to="/" tag="el-menu-item">Home</router-link>            
                <router-link to="/posts" tag="el-menu-item">Posts</router-link>
                <router-link to="/pages" tag="el-menu-item">Pages</router-link>
                <router-link to="/comments" tag="el-menu-item">Comments</router-link>
                <router-link to="/subscribers" tag="el-menu-item">Subscribers</router-link>
                <router-link to="/themes" tag="el-menu-item">Themes</router-link>
                <router-link to="/users" tag="el-menu-item">Users</router-link>
                <router-link to="/settings" tag="el-menu-item">Settings</router-link>
            </el-col>
        </el-row>
        </el-menu>
    </div>
</template>

<script>
export default {
  name: 'Sidebar',
}
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
</script>