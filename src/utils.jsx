export function storage(key, data = null) {
  if (!data) return JSON.parse(sessionStorage.getItem(key));
  return sessionStorage.setItem(key, JSON.stringify(data));
}
