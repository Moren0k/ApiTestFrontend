<script setup lang='ts'>
import { ref } from 'vue';
import { AuthService } from '@/services/AuthService';
import type { RegisterRequest, AuthResponse } from '@/models/AuthModels';


const name = ref("");
const email = ref("");
const password = ref("");
const isAdmin = ref(false)

async function handleRegister() {

    const request: RegisterRequest = {
        name: name.value,
        email: email.value,
        password: password.value,
        isAdmin: isAdmin.value
    }

    try {
        const response: AuthResponse = await AuthService.authRegister(request);

        const { accessToken, user } = response;
        localStorage.setItem("auth_token", accessToken);
        localStorage.setItem("user_role", user.role)

        alert(`Bievenido ${user.name} te has registrado correctamente`)
    } catch (error) {
        alert("Registro no exitoso")
    }
}
</script>

<template>
  <div style="
    display: flex; 
    justify-content: center; 
    align-items: center; 
    min-height: 85vh; 
    font-family: 'Segoe UI', Tahoma, sans-serif;
    background-color: #f9f9f9;
    padding: 20px;
  ">
    <div style="
      background: white; 
      padding: 40px; 
      border-radius: 12px; 
      box-shadow: 0 10px 25px rgba(0,0,0,0.1); 
      width: 100%; 
      max-width: 450px;
    ">
      <h1 style="color: #1a1a1a; margin: 0 0 10px 0; font-size: 1.8rem; text-align: center; text-transform: capitalize;">Crear Cuenta</h1>
      <p style="color: #666; margin-bottom: 30px; text-align: center;">Completa tus datos para empezar</p>

      <div style="margin-bottom: 15px;">
        <label style="display: block; margin-bottom: 5px; color: #1a1a1a; font-weight: 600; font-size: 0.9rem;">Nombre Completo</label>
        <input v-model="name" placeholder="Tu nombre" style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 6px; box-sizing: border-box; outline: none;" />
      </div>

      <div style="margin-bottom: 15px;">
        <label style="display: block; margin-bottom: 5px; color: #1a1a1a; font-weight: 600; font-size: 0.9rem;">Correo Electrónico</label>
        <input v-model="email" type="email" placeholder="ejemplo@correo.com" style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 6px; box-sizing: border-box; outline: none;" />
      </div>

      <div style="margin-bottom: 20px;">
        <label style="display: block; margin-bottom: 5px; color: #1a1a1a; font-weight: 600; font-size: 0.9rem;">Contraseña</label>
        <input v-model="password" type="password" placeholder="Mínimo 8 caracteres" style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 6px; box-sizing: border-box; outline: none;" />
      </div>

      <div style="
        display: flex; 
        align-items: center; 
        background: #f3f4f6; 
        padding: 12px; 
        border-radius: 6px; 
        margin-bottom: 25px;
        cursor: pointer;
      ">
        <input type="checkbox" v-model="isAdmin" id="adminCheck" style="width: 18px; height: 18px; cursor: pointer; accent-color: #42b883;" />
        <label for="adminCheck" style="margin-left: 10px; color: #444; font-size: 0.9rem; cursor: pointer; user-select: none;">
          Solicitar privilegios de <strong>Administrador</strong>
        </label>
      </div>

      <button @click="handleRegister" style="
        width: 100%; 
        background-color: #42b883; 
        color: white; 
        padding: 14px; 
        border: none; 
        border-radius: 6px; 
        font-weight: bold; 
        font-size: 1rem; 
        cursor: pointer; 
        transition: background 0.2s;
      ">
        Registrarse ahora
      </button>

      <div style="text-align: center; margin-top: 20px;">
        <span style="font-size: 0.85rem; color: #888;">¿Ya tienes cuenta? <a href="/login" style="color: #1a1a1a; font-weight: bold; text-decoration: none;">Inicia sesión</a></span>
      </div>
    </div>
  </div>
</template>