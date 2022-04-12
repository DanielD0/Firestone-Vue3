import {auth, firebase} from '../firebase'
import { useRouter } from 'vue-router'

export const useUser = () => {
    const router = useRouter()
    const signIn = async () => {
        try {
            const provider = new firebase.auth.GoogleAuthProvider()
            await auth.signInWithPopup(provider)
            router.push('/perfil')
        } catch (error) {
            console.error(error);
        }
    }
    const signOut = async () => {
        await auth.signOut();
        await router.push("/");
      };

    return {signIn,signOut}
}