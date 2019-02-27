<template>
  <div>
    <h1>{{title}}</h1>
    <ul>
      <li v-for="item in items">
        {{item}}
        <router-link v-if="link" :to="(link + item)">open</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ListViewer",
  props: ['title', 'items', 'link']
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
