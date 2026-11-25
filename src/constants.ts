import type { IGeneralSettings, INotificationSettings, IPrivacySettings } from "./type";

export const defaultGeneralSettings: IGeneralSettings = {
  about: "",
  country: "USA",
  gender: "Male",
  email: "",
  username: "",
};

export const defaultNotificationsSettings: INotificationSettings = {
  email: false,
  sms: false,
};

export const defaultPrivacySettings: IPrivacySettings = {
  indexing: false,
  visability: "Private",
};
