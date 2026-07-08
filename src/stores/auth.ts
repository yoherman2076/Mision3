import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const isAuthenticated = ref(
    localStorage.getItem('isAuthenticated') === 'true'
  )

  const user = ref(
    localStorage.getItem('user') || ''
  )

  function login(email: string, password: string) {
    if (
      email === 'example@example.com' &&
      password === 'password'
    ) {
      isAuthenticated.value = true
      user.value = email

      localStorage.setItem('isAuthenticated', 'true')
      localStorage.setItem('user', email)

      return true
    }

    return false
  }

  function logout() {
    isAuthenticated.value = false
    user.value = ''

    localStorage.removeItem('isAuthenticated')
    localStorage.removeItem('user')
  }

  return {
    isAuthenticated,
    user,
    login,
    logout
  }
})