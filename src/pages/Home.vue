<script setup>
import Layout from "@/layouts/Layout.vue";
import PostInputPreview from "@/components/PostInputPreview.vue";
import PostCard from "@/components/PostCard.vue";
import PostModal from "@/components/PostModal.vue";
import { ref } from "vue";

const text = ref("");
const showPostModal = ref(false);

const openPostModal = () => (showPostModal.value = true);
const closePostModal = () => (showPostModal.value = false);
</script>

<template>
  <Layout>
    <div class="flex flex-col md:flex-row gap-4 p-4 h-full md:max-w-1/3 max-w-full mx-auto">
      <main class="flex-1 flex flex-col gap-4">
        <PostInputPreview
          :text="text"
          :show-modal="showPostModal"
          @open="openPostModal"
        />

        <div class="flex flex-col gap-4">
          <PostCard
            v-for="n in 20"
            :key="n"
            :user-id="n"
            content="This is a sample post content — you can replace it with real feed data."
          />
        </div>
      </main>

      <PostModal v-model="showPostModal" v-model:text="text" />
    </div>
  </Layout>
</template>
