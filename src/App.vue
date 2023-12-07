<template>
  <div class="app">
    <header>
    <h1>Страница с постами</h1>
    <my-select
    v-model="selectedSort"
    :options="sortOptions"
    >
    </my-select>
    <my-button @click="showDialog">Создать пост</my-button>
    </header>
    <my-dialog v-model:show="dialogVisible">
      <PostForm  @create="createPost"/>
    </my-dialog>
   <PostList :posts="sortedPosts" @remove="removePost" v-if="isLoad"/>
   <div class="loadBar" v-else><img src="https://usagif.com/wp-content/uploads/loading-65.gif" alt="" srcset=""></div>
  </div>
</template>

<script>
import PostForm from '@/components/PostForm.vue';
import PostList from './components/PostList.vue';
export default {
  components:{
    PostForm, PostList
  },
  data() {
    return {
      posts: [],
      dialogVisible:false,
      isLoad:false,
      selectedSort:'',
      sortOptions:[
        {value: 'title', name:'По названию'},
        {value: 'body', name:'По содержимому'}
      ]
    };
  },
  methods:{
    createPost(post){
      this.posts.push(post);
      this.dialogVisible=false;
    },
    removePost(post){
      this.posts=this.posts.filter(p=> p.id!==post.id)
    },
    showDialog(){
      this.dialogVisible=true;
    },
     fechPosts(){
      try {
        fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
      .then(response=>response.json())
      .then(data=>{
        this.posts=data;
        
      })
      .finally(()=>this.isLoad=true)
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
      this.fechPosts()
    },
    computed:{
      sortedPosts(){
        return [...this.posts].sort((post1,post2)=>post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]))
      }
    },
    watch:{
     
    }
};
</script>

<style scoped>
header{
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
.loadBar{
  position: fixed;
  top:40vh;
  bottom: 0;
  right: 0;
  left: 0;
  left: 0;
  width: 60px;
  margin: auto;
}

</style>
