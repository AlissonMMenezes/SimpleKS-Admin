<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>Posts</span>
      <router-link style="margin-left: 10px;" class="el-button" plan :to="'/post/new'" >New Post</router-link>
    </div>
    <el-table :data="info">
      <el-table-column prop="title" label="title">
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
      <el-table-column prop="categories" label="categories"></el-table-column>
      <el-table-column prop="comments" label="comments"></el-table-column>
      <el-table-column prop="post_date" label="date"> </el-table-column>
<!-- 
      <template #cell(title)="row">
        <router-link :to="'/'+row.item.post_name+'/edit'">
          {{row.item.title}}
        </router-link>
      </template> -->
    </el-table>
  </el-card>
</template>

<script>
  export default {
    data() {
      return {
        fields: ['title', 'author', 'categories', 'comments', 'date'],
        info : []
      }
    }
    ,
  mounted:function(){  
      axios.get('/admin/posts')
      .then(
        response => (this.info = response.data.posts))
  }
  }

  import axios from 'axios'

</script>