// utils/delayImport.js
export function delayImport(importFn, delay = 2000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      importFn().then(resolve);
    }, delay);
  });
}
