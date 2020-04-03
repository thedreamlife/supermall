<template>
  <div id="app">
    <main-tab-bar></main-tab-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import MainTabBar from './components/content/maintabbar/MainTabBar'

export default {
  name: 'App',
  components: {
   MainTabBar
  }
}
</script>

<style>
@import url("../src/assets/css/base.css");
@import url("../src/assets/css/normalize.css");
</style>
