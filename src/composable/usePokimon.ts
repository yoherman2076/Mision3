import { ref } from 'vue'
import axios from 'axios'


export function usePokimon() {

    const apiURL = import.meta.env.VITE_API_URL
    const loading = ref(false)
    const pokemon = ref<any>(null)
    
    async function getRandomPokemon() {
      pokemon.value = null
      loading.value = true
      
      
      try {
        const randomId = Math.floor(Math.random() * 1025) + 1
      
        const response = await axios.get(`${apiURL}/pokemon/${randomId}`)
    
        pokemon.value = response.data
        
      }
      catch (error) {
        console.error("Error garrafal al obtener el pookemon:", error)
      }
      finally {
        await new Promise(resolve => setTimeout(resolve, 500))
        loading.value = false
        
      }
    
    }

    return {
        pokemon,
        getRandomPokemon,
        loading,
        apiURL
    }

}