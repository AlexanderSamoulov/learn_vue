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
      <my-button  @click="createPost">Добавить</my-button>
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
/*   watch:{
    post:{
      handler(newVal){
        console.log(newVal,'watch');
      },
      deep:true
      
    }
  } */
}
</script>
<style scoped>
  My-button{
    margin-top: 15px;
    align-self: flex-end;
  }
</style>