<template>
  <el-card class="box-card">
    <input id="fileUpload" v-on:change="uploadThumb" type="file" hidden>
    <div slot="header" class="clearfix">
      <span>Categories</span>
      <router-link style="margin-left: 10px;" class="el-button" :to="'/page/new'">New Category</router-link>
    </div>
    <el-table :data="categories" stripe style="width: 100%">
    <el-table-column prop="thumbnail" label="Thumbnail" width="180">
      <template slot-scope="scope">        
            <img width="100%" :src="scope.row.thumbnail" alt="">
      </template>
    </el-table-column>
    <el-table-column prop="category" label="Category" width="180">
      <template slot-scope="scope">        
            {{scope.row.name}}
      </template>
    </el-table-column>
    <el-table-column label="">
      <template slot-scope="scope">        
        <el-button size="small" type="primary" v-on:click="selectFile(); category=scope.row.name">Upload</el-button>
      </template>
    </el-table-column>
  </el-table>
  </el-card>
</template>

<script>
export default {
  name: 'Themes',
  data() {
      return {
        tableData: [{
          thumbnail: 'image1',
          category: 'python',
        }],
        categories: null,
        category:null
      }
    },
    mounted(){
      axios.get('/categories')
      .then(
        response => (this.categories = response.data.categories))
    },
    methods:{
      selectFile(){
        console.log("clicked to upload")
        document.getElementById("fileUpload").click()                    
      },
      uploadThumb(){
        var file = document.getElementById('fileUpload').files[0]
        var formData = new FormData();
        formData.append("image", file);
        console.log("uploading")
        axios({
          url: "/admin/images",
          method: "POST",
          data: formData,
        })
        .then(result => {
            let url = result.data.url; 
            this.saveThumb(url)
          })
        .catch(err => {
            console.log(err);
          });
      },
      saveThumb(url){
        var category = this.category
        console.log(url, category)
        axios({
          url: "/admin/categories",
          method: "POST",
          data: {"name":category,"thumbnail":url},
        })
        .then(result => {
          alert(result.data.message)
          console.log(result)
        })
        .catch(err => {
          alert(err);
        });

      }
      }
  }


import axios from 'axios'
</script>

<style scoped>
#title {
    padding: 3px 8px;
    font-size: 1.7em;
    line-height: 100%;
    height: 1.7em;
    width: 100%;
    outline: 0;
    margin: 0 0 3px;
    background-color: #fff;
}

.editor-area {
    font-family: Consolas,Monaco,monospace;
    font-size: 13px;
    padding: 10px;
    margin: 1px 0 0;
    line-height: 150%;
    border: 0;
    outline: 0;
    display: block;
    resize: vertical;
    box-sizing: border-box;
}
</style>