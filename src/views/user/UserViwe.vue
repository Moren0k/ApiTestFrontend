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
  <div class="container" style="
    max-width: 800px; 
    margin: 40px auto; 
    padding: 20px; 
    font-family: 'Segoe UI', sans-serif; 
    text-align: center;
  ">
    
    <div v-if="canShowImages" style="
      display: flex; 
      justify-content: center; 
      gap: 30px; 
      flex-wrap: wrap; 
      padding: 20px;
    ">
      <div style="
        background: white; 
        padding: 15px; 
        border-radius: 12px; 
        box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        transition: transform 0.3s ease;
      ">
        <img 
          src="../../img/vue.png" 
          alt="Vue Logo" 
          style="width: 120px; height: 120px; object-fit: contain; display: block;" 
        />
        <p style="margin-top: 10px; font-weight: bold; color: #42b883;">Vue.js</p>
      </div>

      <div style="
        background: white; 
        padding: 15px; 
        border-radius: 12px; 
        box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        transition: transform 0.3s ease;
      ">
        <img 
          src="../../img/ts.png" 
          alt="TypeScript Logo" 
          style="width: 120px; height: 120px; object-fit: contain; display: block;" 
        />
        <p style="margin-top: 10px; font-weight: bold; color: #3178c6;">TypeScript</p>
      </div>
    </div>

    <div v-else style="
      background-color: #fff5f5; 
      color: #c53030; 
      padding: 20px; 
      border-radius: 8px; 
      border: 1px solid #feb2b2; 
      display: inline-block; 
      margin-top: 20px;
    ">
      <div style="display: flex; align-items: center; gap: 10px;">
        <span style="font-size: 1.5rem;">⚠️</span>
        <p style="margin: 0; font-weight: 500;">{{ error }}</p>
      </div>
    </div>

  </div>
</template>
