import { ref } from "vue";

const isDark = ref(false);

// อ่านค่า theme จาก localStorage ตอนเริ่ม
if (localStorage.getItem("theme") === "dark") {
  isDark.value = true;
  document.documentElement.setAttribute("data-theme","dark");
} else {
  document.documentElement.setAttribute("data-theme","light");
}

export function useTheme() {
  const toggleDarkMode = () => {
    isDark.value = !isDark.value;
    if (isDark.value) {
      document.documentElement.setAttribute("data-theme","dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme","light");
      localStorage.setItem("theme", "light");
    }
  };

  return { isDark, toggleDarkMode };
}
