<template>
<div>
    <Headers />
    <b-container fluid class="bv-example-row">
          <b-row class="">
            <b-col col md="2">
              <Sidebar />
            </b-col>              
            <b-col col md="10">
              <router-view></router-view>
            </b-col>              
          </b-row>         
      </b-container>  
      </div> 
    
</template>


<script>
export default {
  name: 'Homepage',
  components: {
    Headers,
    Sidebar
  }
}

import Headers from './Headers.vue'
import Sidebar from './Sidebar.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
</script>
<style scoped>
h2.title {
    color: #333;
    font-weight: 400;
    line-height: 140%;
    font-size: 25px;
}

.post-content {
    font-size: 14px;
    line-height: 160%;
    color: #989898;
}
.post.excerpt {
    clear: both;
    padding: 30px 0;
    position: relative;
}
</style>