<script setup>
import { ref, watch, nextTick, computed } from "vue";
import { X, ImageUp } from "lucide-vue-next";

const props = defineProps({
  modelValue: Boolean,
  text: String,
});

const emit = defineEmits(["update:modelValue", "update:text"]);

const textareaRef = ref(null);
const close = () => emit("update:modelValue", false);

const localText = computed({
  get: () => props.text,
  set: (val) => emit("update:text", val),
});

// ✅ ฟังก์ชันตรวจว่าเป็น Mobile หรือไม่
const isMobile = () => window.innerWidth <= 768;

// ✅ ฟังก์ชัน auto resize พร้อม logic แยก mobile/pc
const autoResize = () => {
  const el = textareaRef.value;
  if (!el) return;

  el.style.height = "auto"; // reset ก่อน
  el.style.height = `${el.scrollHeight}px`;

  const maxHeight = isMobile()
    ? window.innerHeight * 0.3 // 30vh สำหรับ mobile
    : window.innerHeight * 0.5; // 50vh สำหรับ PC

  if (el.scrollHeight > maxHeight) {
    el.style.height = `${maxHeight}px`;
    el.style.overflowY = "auto";
  } else {
    el.style.overflowY = "hidden";
  }
};

// ✅ re-run เมื่อ modal เปิด และเมื่อ resize จอ
watch(
  () => props.modelValue,
  async (val) => {
    if (val) {
      await nextTick();
      autoResize();
    }
  }
);

// ✅ handle resize event
window.addEventListener("resize", () => {
  if (props.modelValue) autoResize();
});
</script>

<template>
  <Transition name="fade">
    <div
      v-if="modelValue"
      class="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
      @click.self="close"
    >
      <div
        class="relative flex flex-col bg-theme rounded-2xl w-96 md:w-1/3 space-y-3 p-4 max-h-[90vh] overflow-hidden"
      >
        <!-- ปุ่ม Close -->
        <button
          @click="close"
          class="absolute! top-4 right-3 button-glass transition"
        >
          <X class="w-5 h-5" />
        </button>

        <!-- Header -->
        <h2 class="text-xl font-semibold text-center py-2">Create Post</h2>
        <div class="border-color-content rounded-xl"></div>

        <!-- User Info -->
        <div class="flex items-center gap-3 ps-2">
          <img
            src="https://i.pravatar.cc/40"
            alt="User Avatar"
            class="w-10 h-10 rounded-full cursor-pointer"
          />
          <div class="flex flex-col leading-tight">
            <span class="font-semibold">User #1</span>
            <p class="text-small">October</p>
          </div>
        </div>

        <!-- Textarea -->
        <textarea
          ref="textareaRef"
          v-model="localText"
          @input="autoResize"
          placeholder="What's on your mind, User?"
          class="w-full resize-none p-3 rounded-lg bg-theme border border-color focus:outline-none transition-all duration-150"
        />

        <!-- Image Upload -->
        <div
          class="border-dashed-content rounded-lg p-4 flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-theme-menu-hover transition"
        >
          <div
            class="flex items-center gap-2 text-content bg-base-300 rounded-full p-2"
          >
            <ImageUp class="w-6 h-6" />
          </div>
        </div>

        <!-- Footer -->
        <div class="flex justify-center gap-2">
          <button class="button-glass w-full">Post</button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
