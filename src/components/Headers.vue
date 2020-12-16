<template>
    <div>        
        <b-navbar toggleable="lg" type="dark" variant="info">
            <b-navbar-brand>Alisson Machado</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
            </b-collapse>
        <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown text="Profile" right>
                <b-dropdown-item v-on:click="changePassword">Change Password</b-dropdown-item>
                <b-dropdown-item href="#">Logout</b-dropdown-item>                
            </b-nav-item-dropdown>
        </b-navbar-nav>
        </b-navbar>
        <b-modal
        id="modal-prevent-closing"
        ref="modal"
        title="Change your password"
        @ok="updatePassword"
        >
        <form ref="form" @submit.stop.prevent="handleSubmit">
            <b-form-group
            label="New Password"
            label-for="name-input"
            invalid-feedback="Name is required"
            >
            <b-form-input
                type="password"
                id="name-input"
                v-model="new_password"
                required
            ></b-form-input>
            </b-form-group>
        </form>
        </b-modal>
    </div>
</template>


<script>
export default {
  name: 'Headers',
  data:function(){
    return{
        new_password: null
    }

  },
  methods:{
      changePassword:function(){
        this.$bvModal.show("modal-prevent-closing")
      },
      updatePassword:function(){
          alert("updating password")
          console.log(this.new_password)
      }
  }
}
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
</script>