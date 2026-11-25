<template>
  <Teleport to="body">
    <ol class="notification-list">
      <li v-for="toast in toasts" :key="toast.id" class="notification-item">
        <div class="text-sm font-semibold">{{ toast.message }}</div>
        <button @click="removeToast(toast.id)" class="notification-ack-button">Ok</button>
      </li>
    </ol>
  </Teleport>
</template>

<script setup lang="ts">
import useToast from "@/composables/useToast";

const { toasts, removeToast } = useToast();
</script>
