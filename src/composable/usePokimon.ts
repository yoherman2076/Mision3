import { ref } from 'vue'
import axios from 'axios'


export function usePokimon() {

    const apiURL = import.meta.env.VITE_API_URL
    const loading = ref(false)
    const sevenUp = ref('')

    const pokemon = ref<any>(null)
    
    async function getRandomPokemon() {
      
      loading.value = true
      console.log('loading ONNNNNN')

      try {
        const randomId = Math.floor(Math.random() * 1025) + 1
      
        const response = await axios.get(`${apiURL}/pokemon/${randomId}`)
    
        pokemon.value = response.data
        sevenUp.value = pokemon.value.sprites.front_default
    
      }
      catch (error) {
        console.error("Error garrafal al obtener el pookemon:", error)
      }
      finally {
        await new Promise(resolve => setTimeout(resolve, 500))
        loading.value = false
        console.log("loading OFFFFFFF")
      }
    
    }

    return {
        pokemon,
        getRandomPokemon,
        loading,
        sevenUp,
        apiURL
    }

}