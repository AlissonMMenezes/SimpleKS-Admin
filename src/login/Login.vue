<template>
    <el-main id="app" width="200px">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>Simple KS - Sign in</span>
            </div>
            <el-form >
            <el-form-item label="Login">
                <el-input  v-model="username" placeholder="type your username" id="input-default"></el-input >
                </el-form-item>
                <el-form-item label="Password">
                    <el-input  v-model="password" type="password" placeholder="type your password" id="input-default"></el-input >
                </el-form-item>
                <el-button variant="success" v-on:click="sendLogin()">Login</el-button>
            </el-form  >
        </el-card>
    </el-main>    
</template>

<script>
export default {
  name: 'Login',
  data: function(){
      return{ 
          username: "",
          password: ""
      }
  },
  methods:{
      sendLogin:function(){
          console.log(this.username)
          axios.post("/login",{"username":this.username,"password":this.password}).then(response =>{
              localStorage.user = response.data.token
              window.location.href = '/';
          }).catch( error => {
            console.log(error.response.statusText)
            alert(error.response.statusText)              
          })

      }
  }
}

import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
</script>   
<style scoped>
.box-card {
    width: 480px;
    margin: 0 auto;
  }
</style>