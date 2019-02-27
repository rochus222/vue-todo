// @ is an alias to /src
import ListAdder from "@/components/ListAdder.vue";
import ListViewer from "@/components/ListViewer.vue";
import { mapGetters } from 'vuex'

export default {
  name: "home",
  components: {
    ListAdder,
    ListViewer
  },
  computed: {
    ...mapGetters([
      'getTodoLists'
    ])
  },
  methods: {
    addTodoList(item) {
      this.getTodoLists.push(item)
    }
  },
  created() {
    console.log('app created!')
  }
};