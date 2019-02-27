<template>
  <div>
    <input v-model="item" />
    <button @click="addToList">Add</button>
  </div>
</template>

<script>
export default {
  name: "ListAdder",
  data: () => ({
    item: ""
  }),
  methods: {
    addToList() {
      if(this.item) {
        this.$emit('new', this.item)
        this.item = undefined;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
