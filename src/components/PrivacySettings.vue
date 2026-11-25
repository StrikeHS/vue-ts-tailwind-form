<template>
  <div>
    <h2 class="text-2xl mb-4">Privacy</h2>
    <form class="space-y-4 mx-auto" @submit.prevent>
      <div class="flex items-center gap-1">
        <label for="indexing" class="cursor-pointer">
          <input
            id="indexing"
            name="indexing"
            type="checkbox"
            v-model="privacy.indexing"
            class="cursor-pointer"
          />
          <span class="select-none cursor-pointer"> Search engine indexing </span>
        </label>
      </div>
      <div>
        <label class="mb-1">Visability</label>
        <select v-model="privacy.visability">
          <option value="Private">Private</option>
          <option value="Public">Public</option>
        </select>
      </div>
      <button
        @click="addToast('Privacy settings saved successfully!')"
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
const { privacy } = useSettings();
</script>
