// @ is an alias to /src
import ListAdder from "@/components/ListAdder.vue";
import ListViewer from "@/components/ListViewer.vue";
import { mapGetters, mapActions } from 'vuex'

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
    ...mapActions({
      addTodoList: 'createTodoList'
    })
  },
  created() {
    console.log('app created!')
  }
};