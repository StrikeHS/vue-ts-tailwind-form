export default function init<T>(initKey: string, defaultData: T) {
  const settings = localStorage.getItem(initKey);
  return settings ? JSON.parse(settings) : defaultData;
}
