<template>
  <form
    @submit.prevent="sendDatos"
    class="max-h-140 rounded-xl border-2 border-cuar bg-slate-800/70 shadow-2xl backdrop-blur transition duration-500 hover:-translate-y-1 hover:shadow-cyan-500/20"
  >
  <div class="space-y-2 px-8">
    <!-- Cabecera -->
    <div class="text-center space-y-2">
      <h2 class="text-3xl font-bold text-white">
        Entrenador Pokémon
      </h2>
      
      <p class="text-sm text-quin">
        Introduce tus datos para registrarte.
      </p>
    </div>
    
    <!-- Campos -->
    <div class="space-y-6">
      <BaseInput
        v-model="form.name"
        placeholder="Nombre"
        :error="errors.name"
      />

      <BaseInput
        v-model="form.surname"
        placeholder="Apellido"
        :error="errors.surname"
      />

      <BaseInput
        v-model="form.email"
        placeholder="Correo electrónico"
        :error="errors.email"
      />

      <BaseInput
        v-model="form.dni"
        placeholder="DNI"
        :error="errors.dni"
      />
    
      </div>
  
      <!-- Botón -->
      <BaseButton
        type="submit"
        class="w-full rounded-lg text-lg font-semibold transition duration-300 hover:bg-cuar hover:text-prim"
      >
        Enviar
      </BaseButton>
    </div>
    
   
  </form>
</template>

<script setup lang="ts">
import {ref, watch} from 'vue'
// Para cuando el formulario funcione, ya tendré medio camino hecho porque los datos ya tienen
// el espacio para que tengan valor.
import BaseInput from './BaseInput.vue'
import BaseButton from './BaseButton.vue';
import type { TrainerForm } from '../types/types.ts'
import type { FormErrors } from '../types/types.ts'
import { useTrainerStore } from '../stores/trainerStores.ts'

const onlyLetters = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const dniRegex = /^\d{8}[A-Za-z]$/
const trainerStore = useTrainerStore()

const initialForm: TrainerForm = {
    name: "",
    surname: "",
    dni: "",
    email: ""
}
const initialErrors: FormErrors = {
  name: '',
  surname: '',
  dni: '',
  email: ''
}

const form = ref<TrainerForm>({ ...initialForm })
const errors = ref<FormErrors>({ ...initialErrors })

watch(
    () => trainerStore.editingTrainer,
    (trainer) => {
        if (!trainer) return
            form.value = {
                name: trainer.name,
                surname: trainer.surname,
                dni: trainer.dni,
                email: trainer.email
            }
    }
)

const sendDatos = () => {
  if (!validateForm()) return

    if (trainerStore.editingTrainer) {
        const updatedTrainer = {
            ...trainerStore.editingTrainer,
            ...form.value
        }
        trainerStore.updateTrainer(updatedTrainer)
        trainerStore.clearEditing()
        
    } else {
        trainerStore.addTrainer(form.value)
    }
    form.value = { ...initialForm }
    errors.value = { ...initialErrors }
}

function validateForm() {
  errors.value = { ...initialErrors }

  return (
    validateName() &&
    validateSurname() &&
    validateEmail() &&
    validateDni()
  )
}

function validateName() {
  if (!form.value.name.trim()) {
    errors.value.name = 'El nombre es obligatorio'
    return false
  }
  if (!onlyLetters.test(form.value.name)) {
    errors.value.name = 'Solo se permiten letras'
    return false
  }
  errors.value.name = ''
  return true
}
function validateSurname() {
  if (!form.value.surname.trim()) {
    errors.value.surname = 'El SURnombre es obligatorio'
    return false
  }
  if (!onlyLetters.test(form.value.surname)) {
    errors.value.surname = 'Solo se permiten letras'
    return false
  }
  errors.value.surname = ''
  return true
}
function validateEmail () {
  if (!form.value.email.trim()) {
    errors.value.email = 'El Email es obligatorio.'
    return false
  }
  if (!emailRegex.test(form.value.email)) {
    errors.value.email = 'El Email es incorrecto'
    return false
  }
  errors.value.email = ''
  return true
}
function validateDni() {
  if (!form.value.dni.trim()) {
    errors.value.dni = 'El DNI es obligatorio'
    return false
  }
  if (!dniRegex.test(form.value.dni)) {
    errors.value.dni = 'Formato: 12345678A'
    return false
  }
  errors.value.dni = ''
  return true
}

watch(() => form.value.name, validateName)
watch(() => form.value.surname, validateSurname)
watch(() => form.value.email, validateEmail)
watch(() => form.value.dni, validateDni)

</script>
