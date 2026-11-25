import type { Component } from "vue";

export type ITabKey = "General" | "Notification" | "Privacy";

type Genders = "Male" | "Female" | "Other";
type Countries = "USA" | "Canada" | "UK";
type Visability = "Private" | "Public";

export interface ITab {
  key: ITabKey;
  label: string;
  component: Component;
}

export interface IFadeTransitionProps {
  currentActiveComponent: Component;
  k?: string | number;
}

export interface IGeneralSettings {
  username: string;
  email: string;
  about: string;
  gender: Genders;
  country: Countries;
}

export interface INotificationSettings {
  email: boolean;
  sms: boolean;
}

export interface IPrivacySettings {
  indexing: boolean;
  visability: Visability;
}

export interface IToast {
  id: number;
  message: string;
}
