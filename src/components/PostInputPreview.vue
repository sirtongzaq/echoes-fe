<!-- src/components/PostInputPreview.vue -->
<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  text: String,
  showModal: Boolean,
});

const emit = defineEmits(["open"]);

const handleClick = () => emit("open");
</script>

<template>
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
        class="bg-base-200 text-left flex-1 rounded-xl cursor-pointer p-2 overflow-hidden text-ellipsis line-clamp-1"
        @click="handleClick"
      >
        {{
          !showModal && text ? text.slice(0, 50) : "What's on your mind, User?"
        }}
      </button>
    </div>
    <div class="border-color-content rounded-xl"></div>
    <div class="flex justify-around">
      <button class="button-glass w-full gap-2 justify-center">
        <span class="text-error">●</span> Live Video
      </button>
      <button class="button-glass w-full gap-2 justify-center">
        <span class="text-success">●</span> Photo/Video
      </button>
    </div>
  </div>
</template>
