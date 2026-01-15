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

async function removeUser(id:string) {
  try {
    await AdminService.removeUserById(id)
    alert("Eliminado!")
    loadUsers();
    return
  } catch (e) {
    error.value = 'Error eliminando usuario'
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
  <div>
    <h3>
      Lista de Usuarios
    </h3>

    <div v-if="error">
      <strong>Error:</strong> {{ error }}
    </div>

    <div v-if="users && users.length > 0">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Rol</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>#{{ user.id }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>
              <span>
                {{ user.role == '0' ? 'User' : 'Admin' }}
              </span>
            </td>
            <td>
              <button @click="removeUser(user.id)">
                Eliminar
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-else-if="!error">
      <p>No se encontraron usuarios o la lista está vacía.</p>
    </div>
  </div>
</template>