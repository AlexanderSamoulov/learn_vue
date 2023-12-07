<template lang="">
   <div class="post">
    <div>
      <div><strong>Название: </strong>{{ post.title }}</div>
      <div><strong>Описание: </strong>{{ post.body }}</div>
    </div>
    <div class='post__btn'>
        <My-button @click="$emit('remove', post)">Удалить</My-button>
    </div>
    </div>
</template>
<script>
/* import MyButton from './UI/MyButton.vue' */

export default {
    props:{
        post:{
            type:Object,
            required:true,
        }
    }
}
</script>
<style lang="">
    
</style>