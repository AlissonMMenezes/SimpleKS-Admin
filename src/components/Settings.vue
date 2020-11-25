<template>
    <div>
        <article class="post excerpt">
            <h2 class="title">test</h2>
            <span class="post-content">  
                here will be the homepage              
            </span>        
        </article>
    </div>
</template>


<script>
export default {
  name: 'Homepage'
}


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