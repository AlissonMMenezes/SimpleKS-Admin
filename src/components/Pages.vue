<template>
  <div style="margin-top:10px;">
    <router-link class="btn btn-outline-primary" :to="'/page/new'" variant="outline-primary">New Page</router-link>
    <el-table :data="info">
      <el-table-column prop="name" label="name">
        <template slot-scope="scope">
        <el-button          
          type="text"
          size="small">
          <router-link :to="'/'+scope.row.post_name+'/edit'">
            {{scope.row.title}}
          </router-link>          
        </el-button>
      </template>
      </el-table-column>
      <el-table-column prop="author" label="author"></el-table-column>
    </el-table>
  </div>
</template>


<script>
  export default {
    data() {
      return {
        fields: ['name', 'author'],
        info : []
      }
    }
    ,
  mounted:function(){  
      axios.get('/pages')
      .then(
        response => (this.info = response.data.pages))
  }
  }

  import axios from 'axios'

</script>