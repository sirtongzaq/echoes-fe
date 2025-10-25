<script setup>
import { ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import { Home, User, Settings, Menu } from "lucide-vue-next";
import ThemeToggle from "@/components/ThemeToggle.vue";

const router = useRouter();
const route = useRoute();
const sidebarOpen = ref(false);

const menuItems = [
  { icon: Home, path: "/home" },
  { icon: User, path: "/profile" },
  { icon: Settings, path: "/settings" },
];

const navigate = (path) => {
  router.push(path);
  sidebarOpen.value = false; // ปิด sidebar อัตโนมัติหลังคลิก
};

const isActive = (path) => route.path === path;

onMounted(() => {
  // console.log("Current route:", route.path);
  // console.log("isActive", isActive(route.path));
})
</script>

<template>
  <div
    class="flex flex-row h-screen w-screen bg-theme transition-colors duration-300 text-content"
  >
    <!-- Sidebar (Desktop) -->
    <aside
      class="hidden md:flex sticky top-0 h-screen w-16 bg-theme-menu border-r border-color backdrop-blur-none transition-colors duration-300 flex-col items-center py-4"
    >
      <ul class="flex flex-col gap-4">
        <li
          v-for="item in menuItems"
          :key="item.path"
          @click="navigate(item.path)"
          :class="[
            'p-3 rounded-lg cursor-pointer transition-colors duration-200',
            isActive(item.path)
              ? 'bg-theme-menu-hover text-primary'
              : 'glass-text',
          ]"
        >
          <component :is="item.icon" class="w-6 h-6" />
        </li>
        <li class="flex items-center justify-center mt-auto">
          <ThemeToggle />
        </li>
      </ul>
    </aside>

    <!-- Mobile Top Bar -->
    <header
      class="md:hidden fixed top-0 left-0 right-0 h-12 bg-theme-menu border-b border-color flex items-center justify-between px-4 z-50"
    >
      <button @click="sidebarOpen = !sidebarOpen" class="text-content">
        <Menu class="w-6 h-6 text-content" />
      </button>
      <ThemeToggle />
    </header>

    <!-- Mobile Sidebar Overlay -->
    <transition name="fade">
      <div
        v-if="sidebarOpen"
        class="fixed inset-0 bg-black/50 z-40"
        @click="sidebarOpen = false"
      ></div>
    </transition>

    <!-- Mobile Sidebar Drawer -->
    <transition name="slide">
      <aside
        v-if="sidebarOpen"
        class="fixed top-0 left-0 h-full w-48 bg-theme-menu border-r border-color p-4 flex flex-col gap-4 z-50"
      >
        <ul>
          <li
            v-for="item in menuItems"
            :key="item.path"
            @click="navigate(item.path)"
            :class="[
              'flex items-center gap-3 p-2 rounded-lg cursor-pointer transition-colors duration-200',
              isActive(item.path)
                ? 'bg-theme-menu-hover text-primary'
                : 'glass-text',
            ]"
          >
            <component :is="item.icon" class="w-5 h-5" />
            <span>{{ item.path.replace("/", "") || "Home" }}</span>
          </li>
        </ul>
      </aside>
    </transition>

    <!-- Content -->
    <main class="flex-1 p-4 overflow-y-auto mt-10 md:mt-0">
      <slot />
    </main>
  </div>
</template>

<style scoped>
/* .bg-theme-menu-hover {
  background-color: rgba(255, 255, 255, 0.1);
} */

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}
.slide-enter-from {
  transform: translateX(-100%);
}
.slide-leave-to {
  transform: translateX(-100%);
}
</style>
