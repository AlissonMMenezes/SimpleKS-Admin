<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>Pages</span>
      <router-link style="margin-left: 10px;" class="el-button" :to="'/page/new'">New Page</router-link>
    </div>
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
  </el-card>
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
      axios.get('/admin/pages')
      .then(
        response => (this.info = response.data.pages))
  }
  }

  import axios from 'axios'

</script>