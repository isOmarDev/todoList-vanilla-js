export const uniqueId = (function generateId() {
  let id = 0;
  return () => {
    return id += 1;
  }
})();
