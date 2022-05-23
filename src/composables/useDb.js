import { db, marcaTiempo } from '../firebase';
import { ref } from 'vue';
import { useAuth } from '@vueuse/firebase';
 
export const useDB = () => {
    
    const loading = ref(false);
    const referencia = db.collection('todos');
    const {user} = useAuth()
 
    const getTodos = async () => {
        try {
            loading.value = true;
            const res = await referencia.get()
            return res.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }));
        } catch (error) {
            return {
                error,
                res: true
            }
        } finally {
            loading.value = false
        }
    }

    const agregarTodo = async(texto) =>{
        try {
            const todo = {
                texto: texto,
                fecha: marcaTiempo(),
                estado: false,
                uid: user.value.uid
            }
            const res = await referencia.add(todo)
            return{
                id: res.id,
                ...todo
            }
        } catch (error) {
            return {
                error,
                res: true
            }
        }
    }

    const eliminarTodo = async (id) =>{
        try {
            await referencia.doc(id).delete()
            return {
                res:false
            }
        } catch (error) {
            return {
                error,
                res: true
            }
        }
    }

    const modificarTodo = async(todo)=>{
        try {
            await referencia.doc(todo.id).update({
                estado: !todo.estado
            })
            return {
                res: false
            }
        } catch (error) {
            return {
                error,
                res:true
            }
        }
    }
 
    return { getTodos,agregarTodo,eliminarTodo,modificarTodo,loading }
}