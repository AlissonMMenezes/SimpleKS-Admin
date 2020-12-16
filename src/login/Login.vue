<template>
    <div id="app">
        <b-container class="" style="margin-top: 10%;">
            <b-form-group label-cols="4" label-cols-lg="2" label="Login" label-for="input-default">
                <b-form-input v-model="username" placeholder="type your username" id="input-default"></b-form-input>
            </b-form-group>
            <b-form-group label-cols="4" label-cols-lg="2" label="Password" label-for="input-default">
                <b-form-input v-model="password" type="password" placeholder="type your password" id="input-default"></b-form-input>
            </b-form-group>
            <b-button variant="success" v-on:click="sendLogin()">Login</b-button>
        </b-container>
        
    </div>    
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