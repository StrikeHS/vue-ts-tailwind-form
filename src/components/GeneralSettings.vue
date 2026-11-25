<template>
  <div>
    <h2 class="text-2xl mb-4">General settings</h2>
    <form class="space-y-4 mx-auto" @submit.prevent>
      <div>
        <label>Username</label>
        <input type="text" v-model="general.username" />
      </div>
      <div>
        <label>Email</label>
        <input type="email" v-model="general.email" />
      </div>
      <div>
        <label>About me</label>
        <textarea v-model="general.about"></textarea>
      </div>
      <div>
        <label>Gender</label>
        <label>
          <input type="radio" value="Male" v-model="general.gender" />
          <span>Male</span>
        </label>
        <label>
          <input type="radio" value="Female" v-model="general.gender" />
          <span>Female</span>
        </label>
        <label>
          <input type="radio" value="Other" v-model="general.gender" />
          <span>Other</span>
        </label>
      </div>
      <div>
        <label>Country</label>
        <select v-model="general.country">
          <option>USA</option>
          <option>Canada</option>
          <option>UK</option>
        </select>
      </div>
      <button
        type="submit"
        class="btn-primary"
        @click="addToast('General settings saved successfully!')"
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
const { general } = useSettings();
</script>
