<template>
    <div>
        <article class="post excerpt">
            <span class="post-content">  
                <b-card title="Adsense">
                    <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
                    <b-card-text>Click the button to toggle the overlay:</b-card-text>                    
                </b-card>           
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
.card-title {
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