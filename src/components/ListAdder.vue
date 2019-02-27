<template>
  <div class="box">
    <input v-model="item" />
    <button @click="addToList">+</button>
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
<style scoped lang="less" scoped>
  input {
    background: #557A95;
    border: none;
    padding: 5px;
    border-radius: 3px;
    color: #FFFFFF;
    width: 250px;
  }

  button {
    border: none;
    padding: 5px;
    border-radius: 3px;
    color: #FFFFFF;
    background: #5D5C61;
    margin: 0 5px;
    width: 40px;
    font-weight: 700;
  }
</style>
