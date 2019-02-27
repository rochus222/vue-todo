<template>
  <div class="todo">
    <router-link to="/">back to homepage</router-link>
    <br>
    <h1>Todo list: {{id}}</h1>
    <ListAdder @new="addItemToList" />
    <ListViewer :items="items" title="Items:"/>
  </div>
</template>
<script>
import ListAdder from "@/components/ListAdder.vue";
import ListViewer from "@/components/ListViewer.vue";

export default {
  components: {
    ListAdder,
    ListViewer
  },
  data: () => ({
    items: []
  }),
  computed: {
    id() {
      return this.$route.params.id;
    },
  },
  methods: {
    addItemToList(item) {
      this.$store.dispatch('addItemToList', {list: this.id, item: item});
      this.items = this.$store.getters.getTodoListItems(this.id);
    }
  },
  mounted() {
    const todoLists = this.$store.getters.getTodoLists;
    if(!todoLists.includes(this.$route.params.id)) {
      this.$router.push("/404");
    }
    this.items = this.$store.getters.getTodoListItems(this.id);
  }
}
</script>