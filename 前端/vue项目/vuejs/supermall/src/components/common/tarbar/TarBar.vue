<template>
  <div id="tab-bar">
   <slot></slot>
   </div>
</template>

<script>
export default {

}

</script>
<style>
#tab-bar{
    display: flex;
    /* text-align: center; */
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #f6f6f6;
    box-shadow: 0,-3px,1px,rgba(100, 100, 100, 0.2) ;
    z-index: 10;
  }
  .tab-bar-item{
    flex: 1;
    height: 49px;
    text-align: center;
    font-size: 14px;
  }
  .tab-bar-item img{
    width: 24px;
    height: 24px;
  }
</style>