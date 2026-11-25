<template>
  <div class="max-w-2xl mx-auto px-4">
    <nav class="font-medium text-center text-gray-500 border-b border-gray-200 mb-4">
      <ul class="flex flex-wrap -mb-px">
        <li v-for="tab in tabs" :key="tab.key">
          <TabButton v-model="currentTab" :tab="tab" />
        </li>
      </ul>
    </nav>
    <FadeTransition>
      <component :is="currentActiveComponent" :key="currentTab"></component>
    </FadeTransition>
    <ToastNotification></ToastNotification>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import type { ITab, ITabKey } from "./type";
import TabButton from "./components/TabButton.vue";
import GeneralSettings from "./components/GeneralSettings.vue";
import NotificationSettings from "./components/NotificationSettings.vue";
import PrivacySettings from "./components/PrivacySettings.vue";
import FadeTransition from "./components/FadeTransition.vue";
import ToastNotification from "./components/ToastNotification.vue";

const currentTab = ref<ITabKey>("General");

const tabs: ITab[] = [
  { key: "General", label: "General", component: GeneralSettings },
  { key: "Notification", label: "Notification", component: NotificationSettings },
  { key: "Privacy", label: "Privacy", component: PrivacySettings },
];

const currentActiveComponent = computed(
  () => tabs.find((t) => t.key === currentTab.value)?.component,
);
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
