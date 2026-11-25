import {
  defaultGeneralSettings,
  defaultNotificationsSettings,
  defaultPrivacySettings,
} from "@/constants";
import type { IGeneralSettings, INotificationSettings, IPrivacySettings } from "@/type";
import { ref, watch } from "vue";
import init from "./utils/initFunc";

const general = ref<IGeneralSettings>(
  init<IGeneralSettings>("general-settings", defaultGeneralSettings),
);

const notifications = ref<INotificationSettings>(
  init<INotificationSettings>("notifications-settings", defaultNotificationsSettings),
);

const privacy = ref<IPrivacySettings>(
  init<IPrivacySettings>("privacy-settings", defaultPrivacySettings),
);

watch(
  general,
  () => {
    localStorage.setItem("general-settings", JSON.stringify(general.value));
  },
  {
    deep: true,
  },
);

watch(
  notifications,
  () => {
    localStorage.setItem("notifications-settings", JSON.stringify(notifications.value));
  },
  {
    deep: true,
  },
);

watch(
  privacy,
  () => {
    localStorage.setItem("privacy-settings", JSON.stringify(privacy.value));
  },
  {
    deep: true,
  },
);

export default function useSettings() {
  return { general, notifications, privacy };
}
