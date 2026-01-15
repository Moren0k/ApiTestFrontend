<script setup lang='ts'>
import { ref } from 'vue';
import { AuthService } from '@/services/AuthService';
import type { LoginRequest, AuthResponse } from '@/models/AuthModels';
import { useRouter } from "vue-router";

const router = useRouter();
const email = ref("");
const password = ref("");

async function handleLogin() {

  const request: LoginRequest = {
    email: email.value,
    password: password.value,
  };

  try {
    const response: AuthResponse = await AuthService.authLogin(request);

    const { accessToken, user } = response;

    localStorage.setItem("auth_token", accessToken);
    localStorage.setItem("user_role", user.role);

    if (user.role === "Admin") {
      router.push("/admin");
    } else {
      router.push("/user");
    }

    alert(`Bienvenido ${user.name}`);
  } catch (error) {
    alert("Usuario o contraseña incorrectos");
  }
}
</script>

<template>
  <div style="
    display: flex; 
    justify-content: center; 
    align-items: center; 
    min-height: 80vh; 
    font-family: 'Segoe UI', sans-serif;
    background-color: #f9f9f9;
  ">
    <div style="
      background: white; 
      padding: 40px; 
      border-radius: 12px; 
      box-shadow: 0 10px 25px rgba(0,0,0,0.1); 
      width: 100%; 
      max-width: 400px;
      text-align: center;
    ">
      <h1 style="color: #1a1a1a; margin-bottom: 10px; font-size: 2rem;">Bienvenido</h1>
      <p style="color: #666; margin-bottom: 30px;">Ingresa tus credenciales para continuar</p>

      <div style="margin-bottom: 20px; text-align: left;">
        <label style="display: block; margin-bottom: 8px; color: #1a1a1a; font-weight: 600; font-size: 0.9rem;">Email</label>
        <input 
          v-model="email" 
          type="email"
          placeholder="correo@ejemplo.com" 
          style="
            width: 100%; 
            padding: 12px 15px; 
            border: 1px solid #ddd; 
            border-radius: 6px; 
            box-sizing: border-box;
            outline: none;
            transition: border-color 0.3s;
          "
        />
      </div>

      <div style="margin-bottom: 30px; text-align: left;">
        <label style="display: block; margin-bottom: 8px; color: #1a1a1a; font-weight: 600; font-size: 0.9rem;">Contraseña</label>
        <input 
          v-model="password" 
          type="password"
          placeholder="••••••••" 
          style="
            width: 100%; 
            padding: 12px 15px; 
            border: 1px solid #ddd; 
            border-radius: 6px; 
            box-sizing: border-box;
            outline: none;
          "
        />
      </div>

      <button @click="handleLogin" style="
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
        Iniciar Sesión
      </button>

      <p style="margin-top: 20px; font-size: 0.85rem; color: #888;">
        ¿No tienes cuenta? <a href="/register" style="color: #1a1a1a; font-weight: bold; text-decoration: none;">Registrarse</a>
      </p>
    </div>
  </div>
</template>