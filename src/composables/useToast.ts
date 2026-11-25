import type { IToast } from "@/type";
import { ref } from "vue";

const toasts = ref<IToast[]>([]);

const addToast = (message: string) => {
  const id = Date.now();

  toasts.value.push({
    id,
    message,
  });

  setTimeout(() => removeToast(id), 5000);
};

const removeToast = (id: number) => {
  toasts.value = toasts.value.filter((t) => t.id !== id);
};

export default function useToast() {
  return {
    toasts,
    addToast,
    removeToast,
  };
}
