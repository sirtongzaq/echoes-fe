<script setup lang="ts">
import { useTheme } from "../composables/useTheme";
import { Sun, Moon } from "lucide-vue-next";

const { isDark, toggleDarkMode } = useTheme();
</script>

<template>
  <label class="dark-toggle">
    <input type="checkbox" :checked="isDark" @change="toggleDarkMode" />

    <!-- Sun Icon -->
    <Sun class="icon sun text-warning" />

    <!-- Moon Icon -->
    <Moon class="icon moon text-primary" />
  </label>
</template>

<style scoped>
.dark-toggle {
  position: relative;
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
}

.dark-toggle input {
  display: none;
}

.icon {
  position: absolute;
  top: 0;
  left: 0;
  width: 1.5rem;
  height: 1.5rem;
  transition: transform 0.5s ease, opacity 0.5s ease;
}

/* Sun default visible */
.sun {
  opacity: 1;
  transform: rotate(0deg) scale(1);
}

/* Moon default hidden */
.moon {
  opacity: 0;
  transform: rotate(-90deg) scale(0);
}

/* When checked (dark mode) */
.dark-toggle input:checked ~ .sun {
  opacity: 0;
  transform: rotate(90deg) scale(0);
}

.dark-toggle input:checked ~ .moon {
  opacity: 1;
  transform: rotate(0deg) scale(1);
}
</style>
