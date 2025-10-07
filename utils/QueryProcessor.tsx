export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("name")) {
    return "Apollo";
  }

  if (query.toLowerCase().includes("largest")){
    // Extract numbers (integers or decimals, including negative) from the query
    const nums = Array.from(query.matchAll(/-?\d+(?:\.\d+)?/g)).map(m => parseFloat(m[0]));

    if (nums.length === 0) {
      return "I couldn't find any numbers to compare.";
    }

    // Use up to the first three numbers (if more are provided, consider the first three)
    const consider = nums.slice(0, 3);

    const largest = consider.reduce((a, b) => (a > b ? a : b), consider[0]);

    return Number.isInteger(largest) ? largest.toString() : largest.toString();
  }

  return "";
}
