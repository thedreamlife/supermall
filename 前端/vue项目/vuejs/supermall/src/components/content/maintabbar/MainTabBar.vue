<template>
    
    <tar-bar>
      <tar-bar-item path='/home' >
         <img slot="item-icon" src="../../../assets/img/tabbar/home.svg" alt="">
         <img slot="item-icon-active" src="../../../assets/img/tabbar/home_active.svg" alt="">
       <div slot="item-text">首页</div>
      </tar-bar-item>
      <tar-bar-item path='/category'>
        <img slot="item-icon" src="../../../assets/img/tabbar/category.svg" alt="">
        <img slot="item-icon-active" src="../../../assets/img/tabbar/category_active.svg" alt="">
       <div slot="item-text">分类</div>
      </tar-bar-item>
      <tar-bar-item path='/shopcart'>
         <img slot="item-icon" src="../../../assets/img/tabbar/shopcart.svg" alt="">
         <img slot="item-icon-active" src="../../../assets/img/tabbar/shopcart_active.svg" alt="">
       <div slot="item-text">购物</div>
      </tar-bar-item>
      <tar-bar-item path='/profile'>
        <img slot="item-icon" src="../../../assets/img/tabbar/profile.svg" alt="">
        <img slot="item-icon-active" src="../../../assets/img/tabbar/profile_active.svg" alt="">
        <div slot="item-text">我的</div>
      </tar-bar-item>
       
    </tar-bar>
</template>

<script>
import TarBar from '../../../components/common/tarbar/TarBar'
import TarBarItem from '../../../components/common/tarbar/TarBarItem'
export default {
components: {
    TarBar,
    TarBarItem
  },
}

</script>
<style>

</style>