<template>
  <button
    @click="handleClick"
    :class="{
      'p-4 border-b-2 cursor-pointer': true,
      'border-transparent': !isActive,
      'border-b-blue-500 text-blue-500': isActive,
    }"
  >
    {{ tab.label }}
  </button>
</template>

<script setup lang="ts">
import type { ITab, ITabKey } from "@/type";
import { computed } from "vue";

const props = defineProps<{
  tab: ITab;
}>();

defineEmits<{ click: [] }>();

const model = defineModel<ITabKey>();

const isActive = computed(() => model.value === props.tab.key);

function handleClick() {
  model.value = props.tab.key;
}
</script>
