<template>
 <div class="items">
     <li>{{content}}</li>
     <button @click="handleDelete">完成</button>
 </div>
</template>

<script>
export default {
   props:['content','index'],
   methods:{
       handleDelete(){
           this.$emit('deleteItems',this.index)
       }
   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
    margin:0;padding:0;
    box-sizing: border-box;
  }
  .items{
    display:flex;
    flex-direction: row;
    margin-bottom:10px;
    /* justify-content:center; */
  }
   li{
    margin-right:5px;
    font-size:14px;
    line-height: 30px;
  }
  button{
    border:none;
    width:39px;
    height:26px;
    line-height: 30px;
    border-radius:5px;
    cursor: pointer;
    text-align: center;
  }
</style>
