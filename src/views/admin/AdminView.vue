<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { AdminService } from '@/services/AdminService'
import type { User } from '@/models/User'

const users = ref<User[]>([])
const error = ref('')

async function loadUsers() {
    try {
        users.value = await AdminService.getAllUsers()
    } catch (e) {
        error.value = 'Error cargando usuarios'
    }
}

onMounted(() => {

    const userRole = localStorage.getItem('user_role')

    if (userRole !== 'Admin') {
        error.value = 'No autorizado, solo para Admin'
        return
    } else {
        loadUsers()
    }
})

</script>

<template>
  <div class="container" style="max-width: 1000px; margin: 40px auto; padding: 20px; font-family: sans-serif;">
    
    <h3 style="color: #1a1a1a; margin-bottom: 25px; border-left: 5px solid #42b883; padding-left: 15px;">
      Lista de Usuarios
    </h3>

    <div v-if="error" style="background: #fee2e2; color: #dc2626; padding: 15px; border-radius: 8px; margin-bottom: 20px; border: 1px solid #fecaca;">
      <strong>⚠️ Error:</strong> {{ error }}
    </div>

    <div v-if="users && users.length > 0" style="overflow-x: auto; box-shadow: 0 4px 15px rgba(0,0,0,0.05); border-radius: 10px;">
      <table style="width: 100%; border-collapse: collapse; background: white; text-align: left;">
        <thead style="background-color: #1a1a1a; color: white;">
          <tr>
            <th style="padding: 15px;">ID</th>
            <th style="padding: 15px;">Nombre</th>
            <th style="padding: 15px;">Email</th>
            <th style="padding: 15px;">Rol</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id" style="border-bottom: 1px solid #eee;">
            <td style="padding: 15px; color: #666;">#{{ user.id }}</td>
            <td style="padding: 15px; font-weight: 500;">{{ user.name }}</td>
            <td style="padding: 15px; color: #666;">{{ user.email }}</td>
            <td style="padding: 15px;">
              <span style="background: #e8f5e9; color: #2e7d32; padding: 4px 10px; border-radius: 20px; font-size: 0.85rem;">
                {{ user.role === '1' ? 'Admin' : 'User' }}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-else-if="!error" style="text-align: center; padding: 40px; color: #999; border: 2px dashed #eee; border-radius: 10px;">
      <p>No se encontraron usuarios o la lista está vacía.</p>
    </div>

  </div>
</template>
