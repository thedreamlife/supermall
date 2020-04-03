<template>

    <div class="recommend">
        <div v-for="(item,index) in recommend" :key="index" class="item-recommend">
         <a :href="item.link">
             <img :src="item.image" alt="">
             <div>{{item.title}}</div>
         </a>
         
  </div>
    </div>
  
</template>

<script>
export default {
    props:{
        recommend:{
            //type类型为数组
            type:Array,
            default(){
                return []
            }
        }
    }
}

</script>
<style>
.recommend{
    display: flex;
    width: 100%;
}

.item-recommend{
    flex: 1;
    text-align: center;
    font-size: 12px;
    padding: 10px 0 10px;
    border-bottom: 10px solid #eee;
   
}
.item-recommend img{
    width: 70px;
    height: 70px;
   
}
</style>