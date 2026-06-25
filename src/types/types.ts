export interface Form {
    name: string
    surname: string
    dni: string
    email: string
    pokemon_assigned: string
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