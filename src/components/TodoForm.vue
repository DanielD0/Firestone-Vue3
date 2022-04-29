<template>
    <form @submit.prevent="procesarFormulario">
        <input type="text" 
        placeholder="Enter para agregar todo" 
        class="form-control my-3"
        v-model.trim="texto"
        >
    </form>
</template>
<script>
import { useDB } from '../composables/useDb'
import { ref,inject } from 'vue'
export default {
    setup() {
      const { agregarTodo } = useDB() 
      const texto = ref('')
      const todos = inject('todos')
      const error = inject('error')
      
      const procesarFormulario = async() =>{
        if(!texto.value.trim()){
            console.log('Texto vacio')
            return;
        }

        const todo = await agregarTodo(texto.value);
        if(todo.res){
          error.value = todo.error
          texto.value = ''
          return
        }
        //Sirve para empujar un objeto a un array de objetos
        todos.value = [...todos.value,todo]
        texto.value = ''
      }
      return {texto,procesarFormulario}
    },
}
</script>
