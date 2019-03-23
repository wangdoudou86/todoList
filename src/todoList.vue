<template>
  <div class="todolist">
    <input class="listName" type="text" v-model="inputValue" placeholder="添加事项" size="40"
    onfocus="if(this.placeholder==='添加事项')this.placeholder=''"
    onblur="if(this.placeholder=='')this.placeholder='添加事项'">
    <button @click="handleSubmit">提交</button>
    <ol>
      <todo-item v-for="(item,index) in list"
      :key="index"
      :content="item"
      :index="index"
      @deleteItems="deleteItem"></todo-item>
    </ol>
  </div>
</template>

<script>
import todoItem from './components/todoItem.vue'

export default {
  data(){
    return {
      inputValue:'',
      list:[]
    }
  },
  components: {
    todoItem
  },
  methods:{
    handleSubmit(){
      this.list.push(this.inputValue)
      this.inputValue = ''
    },
    deleteItem(index){
      this.list.splice(index,1)
    }
  }
}
</script>

<style scoped>
*{
    margin:0;padding:0;
    box-sizing: border-box;
  }
  body{
    position: relative;

  }
  .todolist{
    position: absolute;
    left:50%;
    top:20%;
    margin-left:-180px;

  }
  input.listName{
    height:30px;
    line-height:30px;
  }
  button{
    border:none;
    width:45px;
    height:30px;
    margin-left:5px;
    line-height:30px;
    border-radius:5px;
    cursor: pointer;
  }
  ol{
    margin-top:15px;
    margin-left:20px;
  }
</style>
