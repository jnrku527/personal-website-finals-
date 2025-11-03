<template>
  <nav>
    <div class="name">Your Name Here</div>
    <div class="links">
      <RouterLink to="/">About</RouterLink>
      <RouterLink to="/guestbook">Guestbook</RouterLink>
    </div>
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5%;
  background-color: white; /* White background */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05); /* Gray shadow */
  font-family: Arial, sans-serif;
  position: fixed;
  width: 90%;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
}

.name {
  font-weight: bold;
  font-size: 1.25rem;
  color: black; /* Black text */
}

.links a {
  margin-left: 1.5rem;
  text-decoration: none;
  color: gray; /* Gray link color */
  font-weight: 500;
  transition: color 0.3s;
}

.links a:hover {
  color: #007bff; /* Blue on hover */
}
</style>