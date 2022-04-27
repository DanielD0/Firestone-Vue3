<template>
  <div v-if="isAuthenticated">
    <h1>crud</h1>
    <Cargando v-if="loading" />
    <div>
      <Error v-if="pintarError"/>
      <pre>{{ todos }}</pre>
    </div>
  </div>
</template>
 
<script>
import { useAuth } from "@vueuse/firebase";
import { useDB } from "../composables/useDb";
 
import Cargando from "../components/Cargando.vue";
import Error from '../components/Error.vue'
import { onMounted, ref, provide, computed } from "vue";
 
export default {
  components: { Cargando,Error },
  setup() {
    const { isAuthenticated } = useAuth();
    const { getTodos, loading } = useDB();
    const todos = ref([]);
    const error = ref(null)

    provide('error',error)

    const pintarError = computed(()=> error.value ? true: false)
 
    onMounted(async () => {
      todos.value = await getTodos();
      if (todos.value.res) {
        console.log(todos.value.error);
        error.value = todos.value.error
      }
    });
 
    return { isAuthenticated, todos, loading , pintarError};
  },
};
</script>