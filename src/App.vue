<template>
  <div id="app">
    <div class="container">
      <p align="center">
        <img alt="Vue logo" src="@/assets/logo.png">
      </p>
      <router-view/>
    </div>
  </div>
</template>

<style lang="less">
  body {
    background: #ccc !important;
  }

  a, a:hover {
    color: inherit !important;
  }

  .box {
    width: 300px;
    margin: 0 auto;
  }
</style>
