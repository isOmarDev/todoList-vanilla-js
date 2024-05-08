export function parseStringToDom(string, contentType) {
  // Create a new DOMParser
  const parser = new DOMParser();
  // Parse the string into a document fragment
  const doc = parser.parseFromString(string, contentType);
  // Return the document fragment's root element
  return doc.documentElement;
}
