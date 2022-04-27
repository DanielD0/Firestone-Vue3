import { db } from '../firebase';
import { ref } from 'vue';
 
export const useDB = () => {
    
    const loading = ref(false);
    const referencia = db.collection('todos');
 
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
 
    return { getTodos, loading }
}