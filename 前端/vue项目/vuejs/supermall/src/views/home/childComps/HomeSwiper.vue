<template>
  <swiper>
    <swiper-item v-for="(item,index) in banners" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper,SwiperItem} from '../../../components/common/swiper'
export default {
    // 子组件接收父组件传递过来的数据
    props: {
      banners: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
        Swiper,
        SwiperItem
    }
}

</script>
<style>
</style>