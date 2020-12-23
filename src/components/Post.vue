<template>
    <div style="margin-top:-30px;">
      <input id="fileUpload" v-on:change="uploadThumb" type="file" hidden>
      <el-input type="hidden" ref="post-name" :value="info.post_name" />
      <el-input type="hidden" ref="post-type" :value="info.post_type" />
      <el-row :gutter="50" style="margin-bottom: 10px;">       
        <el-col :span="20">
          <el-input size="large" v-model="info.title" :value="info.title"></el-input>
        </el-col>
      </el-row>     
      <el-row :gutter="20">      
        <el-col :span="20">
          <quill-editor id="editor1" useCustomImageHandler v-on:paste="handleImageAdded" @image-added="handleImageAdded" v-model="info.content" :value="info.content" />
        </el-col>
        <el-col :span="3">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>Publish</span>
            </div>
            <div class="text item">
              <div v-if="info.thumbnail" v-on:click="selectFile" id="thumbimage" class="el-upload-list--picture-card" :style="'background-image: url('+info.thumbnail+')'">
                <i class="el-icon-plus"></i>
              </div>              
              <div v-else v-on:click="selectFile" id="thumbimage" class="el-upload-list--picture-card">
                <i class="el-icon-plus"></i>
              </div>              
              <hr/>
              <el-select v-model="info.category" placeholder="Category">                
                <el-option
                  v-for="item in options"
                  :key="item.name"
                  :label="item.name"
                  :value="item.name">
                </el-option>
              </el-select>
              <hr/>
              <el-button  size="mini" type="success" v-on:click="publish=true; savePost(); " >Publish</el-button><br/>
              <el-button  size="mini" type="warning" v-on:click="publish=false ;savePost(); " >Save Draft</el-button><br/>
              <el-button  size="mini" type="danger">Delete</el-button><br/>

              
            </div>          
          </el-card >          
        </el-col>
      </el-row>   
 
    </div>
</template>

<script>
export default {
  name: 'Post',
  components: {
    quillEditor
  },
  data:function(){ 
    console.log("===>"+window.location.pathname.split("/")[1])     
    return {
        info : {"title": "New Title", "content":"New Content", "post_type":window.location.pathname.split("/")[1]},
        publish: false,
        options: [{"name":"Sem Categoria"}],
        editorOption:{
          modules:{
            imageDropAndPaste: {
              handler: this.handleImageAdded
            },
            //ImageResize:{},
          toolbar:{
          handlers: {
            'image': this.handleImageAdded
        }}
        }},
       value: "Sem Categoria"
    }    
  },
  mounted:function(){  
      console.log(window.location.pathname.split("/")[1])
      axios.get('/posts/'+window.location.pathname.split("/")[1])
      .then(response => {
        if(response.data){
          this.info = response.data
        }else{
          if(window.location.pathname.split("/")[1] == "page"){
            console.log("New page")
            this.info.post_type = "page"
          }else{
            console.log("New Post")
            this.info.post_type = "post"
          }
          this.info.title = "New Title"
          this.info.content = "New Content"
        }})
      axios.get('/categories').then(response => {
          this.options = response.data.categories        
        })
      
  },
  methods: {    
    savePost(event){
      console.log("copied and pasted")
      console.log(event)
      var title = this.info.title
      var content = this.info.content
      var name = this.info.post_name
      var post_type = this.info.post_type
      var publish = this.publish
      var thumbnail = this.thumbnail
      var category = this.info.category

      console.log(title)
      console.log(name)
      console.log(publish)
      console.log(thumbnail)



      
      if(!name){
        
         axios.post('/admin/posts',
        {
          "Title": title,
          "Content": content,
          "Post_Type": post_type,
          "Publish":publish,
          "Thumbnail":thumbnail,
          "Category":category
},
        { headers: {
          'Content-Type': 'application/json'
        }}
        )
        .then(function(response){
          console.log(response)
          alert(response.data.content)
        })

      }else{
        axios.put('/admin/posts/'+name,
            {
              "Title": title,
              "Content": content,
              "Post_Name": name,
              "Post_Type":post_type,
              "Publish":publish,
              "Thumbnail":thumbnail,
              "Category":category
              },
            { headers: {
              'Content-Type': 'application/json'
            }}
            )
            .then(function(response){
              console.log(response)
              alert(response.data.content)
            })
          }
      },
      handleImageAdded(file, Editor, cursorLocation, resetUploader){
        var formData = new FormData();
        formData.append("image", file);

        axios({
          url: "/admin/images",
          method: "POST",
          data: formData,
        })
          .then(result => {
            let url = result.data.url; // Get url from response
            Editor.insertEmbed(cursorLocation, "image", url);
            resetUploader();
          })
          .catch(err => {
            console.log(err);
          });
            
      },
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
            this.thumbnail = url
            this.updateThumbPreview(url)
          })
        .catch(err => {
            console.log(err);
          });
      },
      updateThumbPreview(url_image){
        console.log(url_image)
        document.getElementById("thumbimage").style = "background-image: url('"+url_image+"')"

      }                  
  }
}


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import axios from 'axios'
import  { quillEditor } from 'vue-quill-editor'
import 'quill/dist/quill.snow.css'
//import QuillImageDropAndPaste from 'quill-image-drop-and-paste'
//import ImageResize from "quill-image-resize-module";
//Quill.register('modules/imageDropAndPaste', QuillImageDropAndPaste)
//Quill.register("modules/imageResize", ImageResize);
</script>
<style>
#editor1{
  height: 650px;
  overflow-y: auto !important;
}

.el-upload-list--picture-card {
    background-color: #fbfdff;
    border: 1px dashed #c0ccda;
    border-radius: 6px;
    box-sizing: border-box;
    width: 148px;
    height: 148px;
    cursor: pointer;
    line-height: 146px;
    vertical-align: top;
    display: inline-block;
    text-align: center;
    cursor: pointer;
    outline: none;
    border-radius: 3px;
    transition: .2s;
    

}

.el-upload-list--picture-card:hover {
    border: 1px dashed #1361bb;
}
</style>
