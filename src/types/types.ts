export interface TrainerForm {
    name: string
    surname: string
    dni: string
    email: string
}

export interface Trainer {
    id: string
    name: string
    surname: string
    dni: string
    email: string
    pokemon_assigned: Pokemon | null
}

export type Buttons = 'button' | 'submit' | 'reset'

export type Pokemon = {
    name: string
    sprites: {
        front_default: string | null
    }
    types: {
        type: {
            name: string
        }
    }[]
}

export const typeClasses: Record<string, string> = {
    fire: 'bg-red-500 text-white',
    water: 'bg-blue-500 text-white',
    grass: 'bg-green-600 text-white',
    bug: 'bg-lime-600 text-white',
    fighting: 'bg-amber-800 text-white',
    flying: 'bg-cyan-800 text-white',
    poison: 'bg-indigo-700 text-white',
    ground: 'bg-yellow-800 text-white',
    rock: 'bg-orange-950 text-white',
    steel: 'bg-emerald-500 text-white',
    ghost: 'bg-violet-800 text-white',
    ice: 'bg-blue-400 text-white',
    electric: 'bg-amber-300 text-white',
    psychic: 'bg-fuchsia-600 text-white',
    dragon: 'bg-sky-700 text-white',
    dark: 'bg-indigo-950 text-white',
    fairy: 'bg-pink-800 text-white',
    normal: 'bg-gray-600 text-white',
}


