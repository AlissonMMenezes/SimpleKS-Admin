<template>
  <div style="margin-top:10px;">
  <router-link  class="btn btn-outline-primary" :to="'/post/new'" variant="outline-primary">New Post</router-link>
    <b-table striped hover :items="info.posts" :fields="fields" style="margin-top:10px;">
      <template #cell(title)="row">
        <router-link :to="'/'+row.item.post_name+'/edit'">
          {{row.item.title}}
        </router-link>
      </template>
    </b-table>
  </div>
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
      axios.get('/posts')
      .then(
        response => (this.info = response.data))
  }
  }

  import axios from 'axios'

</script>