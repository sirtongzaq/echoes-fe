<!-- src/pages/Home.vue -->
<script setup>
import ThemeToggle from "@/components/ThemeToggle.vue";
import Layout from "@/layouts/Layout.vue";
import { ref } from "vue";
import { PlusCircle } from "lucide-vue-next";

const showPostModal = ref(false);

const openPostModal = () => (showPostModal.value = true);
const closePostModal = () => (showPostModal.value = false);
</script>

<template>
  <Layout>
    <div
      class="flex flex-col md:flex-row gap-4 p-4 h-full md:max-w-1/3 max-w-full mx-auto"
    >
      <!-- ===== Main Feed Area ===== -->
      <main class="flex-1 flex flex-col gap-4">
        <!-- Post Container (like Facebook “What’s on your mind?”) -->
        <div
          class="glass rounded-xl p-4 flex flex-col gap-3 hover:bg-theme-menu-hover transition"
        >
          <div class="flex flex-row items-center gap-3">
            <img
              src="https://i.pravatar.cc/40"
              alt="User Avatar"
              class="w-10 h-10 rounded-full cursor-pointer"
            />
            <button
              class="bg-base-200 text-left flex-1 rounded-xl cursor-pointer p-2"
              @click="openPostModal"
            >
              What's on your mind?, User
            </button>
          </div>
          <div class="flex border-t border-color-content justify-around">
            <div class="size-15 bg-amber-100 mt-4"></div>
            <div class="size-15 bg-amber-400 mt-4"></div>
            <div class="size-15 bg-amber-800 mt-4"></div>
          </div>
        </div>

        <!-- Feed (list of posts) -->
        <div class="flex flex-col gap-4">
          <div v-for="n in 20" :key="n" class="glass rounded-xl p-4 space-y-3">
            <div class="flex items-center gap-3">
              <img
                src="https://i.pravatar.cc/40"
                alt="User Avatar"
                class="w-10 h-10 rounded-full cursor-pointer"
              />
              <div class="flex flex-col leading-tight">
                <span class="font-semibold">User #{{ n }}</span>
                <p class="text-small">Octerber {{ n }}</p>
              </div>
            </div>
            <p class="text-content leading-relaxed">
              This is a sample post content #{{ n }} — you can replace it with
              real feed data.
            </p>
          </div>
        </div>
      </main>
    </div>

    <!-- ===== Post Modal ===== -->
    <Transition name="fade">
      <div
        v-if="showPostModal"
        class="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
        @click.self="closePostModal"
      >
        <div class="bg-theme-menu p-6 rounded-2xl w-96 md:w-1/2 space-y-3">
          <h2 class="text-xl font-semibold">Create Post</h2>
          <textarea
            rows="4"
            placeholder="What's on your mind?"
            class="w-full p-3 rounded-lg bg-theme border border-color focus:outline-none"
          />
          <div class="flex justify-end gap-2">
            <button
              class="px-4 py-2 bg-gray-500 rounded-lg"
              @click="closePostModal"
            >
              Cancel
            </button>
            <button class="px-4 py-2 bg-primary text-white rounded-lg">
              Post
            </button>

            <button class="button-glass">Post</button>
          </div>
        </div>
      </div>
    </Transition>
  </Layout>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
