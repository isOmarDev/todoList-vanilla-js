export const generateSequentialId = (function generateId() {
  let id = 0;
  return () => {
    return id += 1;
  }
})();

/**
 * Generates a unique identifier combining current timestamp and random characters.
 * @returns {string} A unique identifier string.
 */
export function generateUniqueId() {
  const timestamp = Date.now().toString(36); // Convert current timestamp to base-36 string
  const randomChars = Math.random().toString(36).slice(2); // Generate random characters
  return `${timestamp}-${randomChars}`;
}
