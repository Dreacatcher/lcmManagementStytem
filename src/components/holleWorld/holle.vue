<template>
  <div id="app">
    <h2>基于vue+webpack的单页面开发-----主页</h2>
  </div>
</template>

<script type="text/ecmascript-6">
import HolleJs from './controllers/holle'
export default {
  ...HolleJs
}

</script>
<style type="text/scss" lang="scss">
@import './scss/holle.scss';
</style>
