<template>
  <nav style="
    background-color: #1a1a1a; 
    color: white; 
    padding: 0.8rem 2rem; 
    display: flex; 
    justify-content: space-between; 
    align-items: center;
    box-shadow: 0 2px 10px rgba(0,0,0,0.3);
    font-family: sans-serif;
  ">
    <div style="font-weight: bold; font-size: 1.2rem; letter-spacing: 1px;">
      Api<span style="color: #42b883;">Test</span>
    </div>

    <div style="display: flex; gap: 20px; align-items: center;">
      <router-link to="/login" style="color: #ddd; text-decoration: none; font-size: 0.9rem; transition: 0.3s;">Login</router-link>
      <router-link to="/register" style="color: #ddd; text-decoration: none; font-size: 0.9rem; transition: 0.3s;">Register</router-link>
      <router-link to="/admin" style="color: #ddd; text-decoration: none; font-size: 0.9rem; transition: 0.3s;">Admin</router-link>
      <router-link to="/user" style="color: #ddd; text-decoration: none; font-size: 0.9rem; transition: 0.3s;">User</router-link>
    </div>
  </nav>
</template>