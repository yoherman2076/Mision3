import { ref } from 'vue'
import axios from 'axios'


export function usePokimon() {
// La lógica que he seguido es que, al necesitar solo ciertos datos de los pokemones
// llamo a la API una sola vez pidiendole lo que necesito.
    const apiURL = import.meta.env.VITE_API_URL
    const loading = ref(false)
    const pokemon = ref<any>(null)
    // La función para conseguir un pokemon random busca un numero aleatorio y dentro de la cantidad máxima que hay
    // entonces, siempre se consigue un id de un pokemon que es el que se usa en el response para luego buscar la imagen
    // el nombre y el tipo.
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
        // Puse el loading más provisional y falso posible, tiene un tiempo estipilado porque
        // si no, no se vería.
      }
    
    }

    return {
        pokemon,
        getRandomPokemon,
        loading,
        apiURL
    }

}