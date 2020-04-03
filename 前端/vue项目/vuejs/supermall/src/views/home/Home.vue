<template>
<div id="home">
  <nav-bar class="home-nav"><div slot='center'>购物街</div></nav-bar>
  
  <scroll class="content" ref="scroll">
    <!-- 绑定props值到父组件的数据中，每当父组件的数据变化，该数据传递给子组件 -->
  <home-swiper :banners="banners"></home-swiper>
   
  <recommend-view :recommend="recommends"> </recommend-view>
  <feature-view></feature-view>
  <tab-control class="tab-control" :titles= "['流行','新款','精选']" @tabClick="tabClick"></tab-control>
  <goods-list :goods="goods[currentType].list"></goods-list>
  
  </scroll>
  <!-- native修饰符当需要监听组件原生事件必须给相应的事件加上native -->
  <back-top @click.native="backClick"></back-top>
 
 
  
  </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar'
import TabControl from '../../components/content/tabControl/TabControl'
import GoodsList from '../../components/content/goods/GoodsList'
import Scroll from '../../components/common/scroll/Scroll'
import BackTop from '../../components/content/backTop/BackTop'

import HomeSwiper from '../home/childComps/HomeSwiper'
import RecommendView from '../home/childComps/RecommendView'
import FeatureView from '../home/childComps/FeatureView'


import {getHomeMultidata,getHomeGoods} from '../../network/home'



export default {

  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  data(){
    return{
      banners:[],
      recommends:[],
      //
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]}
      },
      currentType:'pop'
    }
  },
  created () {
    // 请求多个数据
    this.getHomeMultidata()
    //请求商品数据
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')

  },

  methods: {
   //事件监听相关方法
  tabClick(index){
    switch(index){
      case 0:
      this.currentType='pop'
      break
      case 1:
      this.currentType='new'
      break
      case 2:
      this.currentType='sell'
      break

    }

  },
  
  backClick(){
    //拿到这个组件的数据的方法
    this.$refs.scroll.scroll.scrollTo(0,0,300)
  },

    //网络请求相关方法
    getHomeMultidata(){
       getHomeMultidata().then(res=>{
          this.banners=res.data.data.banner.list;
          this.recommends=res.data.data.recommend.list;
         })
    },
   
   getHomeGoods(type){
    //访问对象属性可以用方括号表示，但是以字符串形式表示
    const page = this.goods[type].page+1;
     getHomeGoods(type,page).then(res=>{
     this.goods[type].list.push(...res.data.data.list)
    this.goods[type].page +=1
     
   })
  }

  
  }
}
</script>
<style scoped>
#home{
  padding-top: 44px;
  height: 100vh;
  position: relative;
}
.home-nav{
  color: #ffffff;
  background-color: var(--color-tint);
  position: fixed;
  top:0;
  right: 0;
  left: 0;
  z-index: 9;
}
.tab-control{
  position: sticky;
  top: 44px;
  z-index: 9;
 
}
.content{
  
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}

</style>







