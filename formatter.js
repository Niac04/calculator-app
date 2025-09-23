// formatter.js
export function formatResult(result) {
  if (typeof result === "number") {
    return result.toFixed(2); // 2 decimal places
  }
  return result; // for error messages
}
