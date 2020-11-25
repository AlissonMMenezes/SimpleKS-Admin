<template>
  <div style="margin-top:10px;">
    <b-button v-bind:href="'/page/new'" variant="outline-primary">New Page</b-button>
    <b-table striped hover :items="info.pages" :fields="fields">
      <template #cell(name)="row">
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
        fields: ['name', 'author'],
        info : []
      }
    }
    ,
  mounted:function(){  
      axios.get('/pages')
      .then(
        response => (this.info = response.data))
  }
  }

  import axios from 'axios'

</script>