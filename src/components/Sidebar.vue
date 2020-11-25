<template>
    <div class="px-3 py-2">
        <nav class="mb-3">
            <b-nav vertical>
                <router-link to="/" tag="b-nav-item">Home</router-link>            
                <router-link to="/posts" tag="b-nav-item">Posts</router-link>
                <router-link to="/pages" tag="b-nav-item">Pages</router-link>
                <router-link to="/comments" tag="b-nav-item">Comments</router-link>
                <router-link to="/subscribers" tag="b-nav-item">Subscribers</router-link>
                <router-link to="/themes" tag="b-nav-item">Themes</router-link>
                <router-link to="/users" tag="b-nav-item">Users</router-link>
                <router-link to="/settings" tag="b-nav-item">Settings</router-link>
            </b-nav>
        </nav>
    </div>
</template>

<script>
export default {
  name: 'Sidebar',
}
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
</script>