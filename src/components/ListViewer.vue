<template>
  <div class="box">
    <div class="header">{{title}}</div>
    <div class="row item" v-for="item in items">
      <div class="col-10">{{item}}</div>
      <div class="col-2">
        <router-link v-if="link" :to="(link + item)">&#8674;</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListViewer",
  props: ["title", "items", "link"]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less" scoped>
.header {
  font-size: 26px;
}

.item {
  padding: 5px;
  border-radius: 3px;
  background: #379683;
  width: 300px !important;
  margin: 10px auto;
}
</style>
