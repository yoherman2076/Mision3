import { defineStore } from 'pinia'
import { ref } from "vue"
import type { Trainer, TrainerForm, Pokemon } from '../types/types'

export const useTrainerStore = defineStore('trainer', ()=> {
    const trainers = ref<Trainer[]>([]);
    const editingTrainer = ref<Trainer | null>(null)
    
    function findTrainer(id: string) {
        return trainers.value.find(t => t.id === id)
    }
    function saveToLocalStorage() {
        localStorage.setItem(
            'trainers',
            JSON.stringify(trainers.value)
        )
    }
    function loadFromLocalStorage() {
        const stored = localStorage.getItem('trainers')
        if (stored) {
            trainers.value = JSON.parse(stored)
        }
    }
    function addTrainer(data: TrainerForm) {
        const trainer: Trainer = {
            id: crypto.randomUUID(),
            ...data,
            pokemon_assigned: null
        }
        trainers.value.push(trainer)
        saveToLocalStorage()
    }
    function deleteTrainer(id: string) {
        trainers.value = trainers.value.filter(
            trainer => trainer.id !== id
        )
        saveToLocalStorage()
    }
    function assignPokemon(id: string, pokemon: Pokemon) {
        const trainer = findTrainer(id)
        if(!trainer) return
        trainer.pokemon_assigned = pokemon
        saveToLocalStorage()
    }
    function updateTrainer(updatedTrainer: Trainer) {
        const trainer = findTrainer(updatedTrainer.id)
        if (!trainer) return 
        Object.assign(trainer, updatedTrainer)
        saveToLocalStorage()
    }
    function startEditing(trainer: Trainer) {
        editingTrainer.value = { ...trainer }
    }
    function clearEditing() {
        editingTrainer.value = null
    }
    loadFromLocalStorage()

    return {
        trainers,
        addTrainer,
        deleteTrainer,
        assignPokemon,
        updateTrainer,
        startEditing,
        editingTrainer,
        clearEditing
    }
})
