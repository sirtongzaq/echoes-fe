<script setup lang="ts">

</script>

<template>
  <router-view />
</template>

<style scoped>
/* Glass hover effect */
.glass:hover {
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);
  transform: translateY(-4px);
  transition: all 0.3s ease;
}

/* Buttons hover */
button:hover {
  opacity: 0.85;
  transform: translateY(-2px);
  transition: all 0.2s ease;
}
</style>
