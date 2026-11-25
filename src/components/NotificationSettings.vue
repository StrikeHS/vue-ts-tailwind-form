<template>
  <div>
    <h2 class="text-2xl mb-4">Notifications</h2>
    <form class="space-y-4 mx-auto" @submit.prevent>
      <div class="flex items-center gap-1">
        <input id="email" type="checkbox" v-model="notifications.email" />
        <label for="email" class="cursor-pointer select-none">Email Notifications</label>
      </div>
      <div class="flex items-center gap-1">
        <input id="sms" type="checkbox" v-model="notifications.sms" />
        <label for="sms" class="cursor-pointer select-none">SMS Notifications</label>
      </div>
      <button
        @click="addToast('Notification settings saved successfully!')"
        type="submit"
        class="btn-primary"
      >
        Save
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import useSettings from "@/composables/useSettings";
import useToast from "@/composables/useToast";
const { addToast } = useToast();

const { notifications } = useSettings();
</script>
