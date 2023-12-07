<template lang="">
     <form @submit.prevent>
      <h4>Создание поста</h4>
      <my-input
      v-model.trim='post.title'
        type="text"
        placeholder="Название"
      />
      <my-input
      v-model.trim='post.body'
        type="text"
        placeholder="Описание"
      />
      <My-button  @click="createPost">Добавить</My-button>
    </form>
</template>
<script>
export default {
    data(){
        return{
            post:{
                title:'',
                body:''
            }
        }
    },
    methods: {
    createPost() {
       /*  const newPost={
            id:Date.now,
            title:this.title,
            body:this.body
        } */
        this.post.id=Date.now()
        this.$emit('create',this.post)
        this.post={
            title:'',
            body:''
        }
    },
   
  },
}
</script>
<style scoped>
  My-button{
    margin-top: 15px;
    align-self: flex-end;
  }
</style>