<!-- src/components/PostCard.vue -->
<script setup>
import { defineProps } from "vue";
import { Heart, MessageCircle, Repeat2 } from "lucide-vue-next";

const props = defineProps({
  userId: Number,
  content: String,
});
</script>

<template>
  <div class="glass rounded-xl p-4 space-y-3">
    <div class="flex items-center gap-3">
      <img
        src="https://i.pravatar.cc/40"
        alt="User Avatar"
        class="w-10 h-10 rounded-full cursor-pointer"
      />
      <div class="flex flex-col leading-tight">
        <span class="font-semibold">User #{{ userId }}</span>
        <p class="text-small">October {{ userId }}</p>
      </div>
    </div>
    <p class="text-content leading-relaxed">{{ content }}</p>
    <div class="w-full h-48 bg-base-200 rounded-lg"></div>
    <div class="flex justify-between text-small gap-1">
      <button class="button-glass w-full gap-1">
        <span><Heart /></span> Like
      </button>
      <button class="button-glass w-full gap-1">
        <span class="-scale-x-100"><MessageCircle /></span> Comment
      </button>
      <button class="button-glass w-full gap-1">
        <span><Repeat2 /></span> Repost
      </button>
    </div>
  </div>
</template>
