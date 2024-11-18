<template>
  <div>
    <h2>App.vue</h2>
    <nav>
      <RouterLink to="/">Home</RouterLink> | <RouterLink to="/about">About</RouterLink> |
      <RouterLink :to="{ name: 'home' }">Home</RouterLink> | <RouterLink :to="{ name: 'about' }">About</RouterLink> |
      <RouterLink :to="{ name: 'user', params: { id: 'godqhr' } }">양띵균</RouterLink>
      |
      <RouterLink :to="{ name: 'user', params: { id: 'ssafy' } }">김싸피</RouterLink>
      |
      <RouterLink :to="{ name: 'login' }">로그인</RouterLink>
      |
    </nav>

    <RouterView />
  </div>
</template>

<script setup></script>

<style scoped></style>
