<template>
    <div style="margin-top:-30px;">
      <el-input type="hidden" ref="post-name" :value="info.post_name" />
      <el-input type="hidden" ref="post-type" :value="info.post_type" />
      <el-row style="margin-bottom: 10px;">       
        <el-col :span="10">
          <el-input size="large" v-model="info.title" placeholder="Page Title"></el-input>
        </el-col>
        <el-col :span="10">
          <span style="margin-left:10px; margin-right:10px;">Page Type</span>
          <el-select v-model="value" placeholder="Select">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-col>
      </el-row>
      <el-row>      
        <el-col :span="20">
          <vue-editor id="editor1" useCustomImageHandler @image-added="handleImageAdded" v-model="info.content" :value="info.content" placeholder="Page Content"></vue-editor>
        </el-col>
        <el-col :span="3">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>Publish</span>
            </div>
            <div class="text item">
              <el-button  size="mini" type="success" v-on:click="savePage(); publish=true" >Publish</el-button><br/>
              <el-button  size="mini" type="warning" v-on:click="savePage(); publish=false" >Save Draft</el-button><br/>
              <el-button  size="mini" type="danger">Delete</el-button><br/>
            </div>          
          </el-card >
        </el-col>
      </el-row>   
 
    </div>
</template>

<script>
export default {
  name: 'Page',
  components: {
    VueEditor
  },
  data:function(){ 
    console.log("===>"+window.location.pathname.split("/")[2])     
    return {
        info : {"title": "", "content":"", "post_type":"page"},
        publish: false,
        options:[
          {value:"content", "label":"Content"},
          {value:"cards","label":"Cards"},
          {value:"posts", "label":"Pages"}
          ],
        value: 'content'

    }    
  },
  mounted:function(){  
      console.log(window.location.pathname.split("/")[2])
      axios.get('/posts/'+window.location.pathname.split("/")[2])
      .then(response => {
        if(response.data){
          this.info = response.data
          this.value = this.info.layout
        }else{
          if(window.location.pathname.split("/")[2] == "page"){
            console.log("New page")
            this.info.post_type = "page"
          }else{
            console.log("New Page")
            this.info.post_type = "post"
          }
        }

      })
  },
  methods: {    
    savePage(event){
      console.log(event)
      var title = this.info.title
      var content = this.info.content
      var name = this.info.post_name
      var post_type = this.info.post_type
      var publish = this.publish
      var layout = this.value
      console.log(title)
      console.log(name)
      console.log(layout)

      
      if(!name){
        
         axios.post('/admin/pages',
        {
          "Title": title,
          "Content": content,
          "Page_Type": post_type,
          "Publish":publish,
          "layout": layout},
        { headers: {
          'Content-Type': 'application/json'
        }}
        )
        .then(function(response){
          console.log(response)
          alert(response.data.content)
        })

      }else{
        axios.put('/admin/pages/'+name,
            {
              "Title": title,
              "Content": content,
              "Page_Name": name,
              "Page_Type":post_type,
              "layout": layout
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
            
      }
      
      
  }
}


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { VueEditor } from "vue2-editor";
import axios from 'axios'
</script>

<style>
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

 #editor1{
  height: 650px;
  overflow-y: auto !important;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}
</style>
