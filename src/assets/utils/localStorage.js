export function saveTo(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

export function getFrom(key) {
  const item = localStorage.getItem(key);

  if (item === null || item === undefined) {
    return null;
  }

  try {
    return JSON.parse(item);
  } catch {
    console.log('An error occurred');
  }
}