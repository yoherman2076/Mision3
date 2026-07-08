<template>
    <div class="flex justify-center mt-10">
        <div class="max-h-140 max-w-3xl p-8 text-center rounded-xl border-2 border-cuar my-6 space-y-6 bg-slate-800/70 shadow-2xl backdrop-blur transition duration-500 hover:-translate-y-1 hover:shadow-cyan-500/20">
            <h1 class="flex justify-center mb-10 text-5xl font-bold">Inicia sesión, puñeta</h1>
            <form
            class="space-y-6"
                @submit.prevent="handleLogin"    
            >
                <BaseInput 
                    class="mx-10 "
                    v-model="email"
                    placeholder="Correo"
                    :email="email"
                    :error="error"
                />
                <BaseInput 
                    class="mx-10"
                    v-model="password"
                    placeholder="Contramañas"
                    :password="password"
                />
        
                <BaseButton
                    type="submit"
                    class="px-6 mt-2 hover:bg-ter transition"
                >
                    Enviar
                </BaseButton>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import BaseButton from '../components/BaseButton.vue';
import BaseInput from '../components/BaseInput.vue';
import { useAuthStore } from '../stores/auth.ts'

const router = useRouter()
const auth = useAuthStore()
const email = ref('')
const password = ref('')
const error = ref('')


function handleLogin() {
    error.value = ''

    if (!email.value.includes('@')) {
        error.value = 'el correo debe contener @'
        return 
    } 
    if (password.value.length < 7) {
        error.value = 'la contraseña debe contener al menos 7 carácteres'
        return 
    }

    const success = auth.login(email.value, password.value)
    if (success) {
        router.push('/dashboard')
    } else {
        error.value = 'correo o contraseña incorrectos'
    }
}


</script>