<template>
  <article class="post excerpt" style="padding-top: 20px;">
    <b-container fluid>
      <input type="hidden" ref="post-name" :value="info.post_name" />
      <input type="hidden" ref="post-type" :value="info.post_type" />
      <b-row>       
        <b-col sm="9">
          <b-form-textarea
            v-model="info.title"
            size="lg"
            placeholder="Small textarea"
            :value="info.title"
          ></b-form-textarea>
        </b-col>
      </b-row>
      <b-row class="mt-2">      
        <b-col sm="9">
          <vue-editor useCustomImageHandler @image-added="handleImageAdded" v-model="info.content" :value="info.content"></vue-editor>
        </b-col>
      </b-row>
      <b-row class="mt-2" >      
        <b-button style="margin-left: 20px;" variant="success" v-on:click="savePost">Publish</b-button>
        <b-button style="margin-left: 20px;" variant="warning">Save Draft</b-button>
        <b-button style="margin-left: 20px;" variant="danger">Delete</b-button>
      </b-row>
    </b-container>
  </article>
</template>

<script>
export default {
  name: 'Post',
  components: {
    VueEditor
  },
  data:function(){ 
    console.log("===>"+window.location.pathname.split("/")[1])     
    return {
        info : {"title": "New Title", "content":"New Content", "post_type":window.location.pathname.split("/")[1]}
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
        }

      })
  },
  methods: {    
    savePost(event){
      console.log(event)
      var title = this.info.title
      var content = this.info.content
      var name = this.info.post_name
      var post_type = this.info.post_type
      console.log(title)
      console.log(name)

      
      if(!name){
        
         axios.post('/posts',
        {
          "Title": title,
          "Content": content,
          "Post_Type": post_type},
        { headers: {
          'Content-Type': 'application/json'
        }}
        )
        .then(function(response){
          console.log(response)
          alert(response.data.content)
        })

      }else{
        axios.put('/posts/'+name,
            {
              "Title": title,
              "Content": content,
              "Post_Name": name,
              "Post_Type":post_type,
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
          url: "/images",
          method: "POST",
          data: formData
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