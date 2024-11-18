<template>
  <h2>App.vue</h2>
  <!-- pascal case도 됨 -->
  <MyComponent />
  <!-- kebab-case도 됨 -->
  <my-component />
</template>

<script setup>
// 상대경로
// import MyComponent from "./components/MyComponent.vue";
// @은 src 경로를 뜻하는 약어
import MyComponent from "@/components/MyComponent.vue";
</script>

<style scoped></style>
