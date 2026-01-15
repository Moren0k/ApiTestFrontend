<script setup lang="ts">
import { ref, onMounted } from 'vue'

const canShowImages = ref(false)
const error = ref('')

onMounted(() => {
    const userRole = localStorage.getItem('user_role')

    if (userRole === 'User') {
        canShowImages.value = true
    } else {
        error.value = 'No autorizado. Solo para user'
    }
})
</script>

<template>
  <div>
    <div v-if="canShowImages">
      <div>
        <img
          src="../../img/vue.png"
          alt="Vue Logo"
        />
        <p>Vue.js</p>
      </div>

      <div>
        <img
          src="../../img/ts.png"
          alt="TypeScript Logo"
        />
        <p>TypeScript</p>
      </div>
    </div>

    <div v-else>
      <div>
        <span>⚠️</span>
        <p>{{ error }}</p>
      </div>
    </div>
  </div>
</template>
