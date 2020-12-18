<template>
    <div>        
        <el-menu class="el-menu-demo" mode="horizontal"   background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b">
            <router-link to="/" tag="el-menu-item">Alisson Machado</router-link>
        <el-submenu index="2">
            <template slot="title" style="float: right;">Profile</template>
                <el-menu-item  v-on:click="dialogVisible = true">Change Password</el-menu-item >
                <el-menu-item  v-on:click="logout">Logout</el-menu-item >                
        </el-submenu>
        </el-menu>
        <el-dialog
        title="Change your Password"
        :visible.sync="dialogVisible"
        >
        <el-form ref="form" @submit.stop.prevent="handleSubmit">
            <el-form-item label="New Password" label-for="name-input" invalid-feedback="Name is required" >
            <el-input type="password" id="name-input" v-model="new_password" required></el-input>
            </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">Cancel</el-button>
            <el-button type="primary" v-on:click="updatePassword">Confirm</el-button>
        </span>
        </el-dialog>        
    </div>
</template>


<script>
export default {
  name: 'Headers',
  data:function(){
    return{
        new_password: null,
        dialogVisible: false
    }

  },
  methods:{
    changePassword:function(){
    this.$bvModal.show("modal-prevent-closing")
    },
    updatePassword:function(){
        axios({
            method: "PUT",
            url: "/password",
            data: {"password":this.new_password}})
        .then(result => {
            alert(result.data.content)
        }).catch(err => {
            console.log(err);
        })
        this.dialogVisible = false


    },
    logout(){
        localStorage.removeItem("user")
        window.location.href = "/"
    }

  }
}
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import axios from 'axios'
</script>