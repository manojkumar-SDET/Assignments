// Utility function to normalize a string for anagram comparison
function normalize(word: string): string {
    return word
        .replace(/\s+/g, "")   // Step 1: Remove all spaces (ignore whitespace in comparison)
        .toLowerCase()         // Step 2: Convert to lowercase (ignore case sensitivity)
        .split("")             // Step 3: Break string into individual characters
        .sort()                // Step 4: Sort characters alphabetically
        .join("");             // Step 5: Rejoin into a single normalized string
}

// Main function to check if two strings are anagrams
function areAnagrams(word1: string, word2: string): boolean {
    // Step 6: Compare normalized versions of both strings
    return normalize(word1) === normalize(word2);
}

// Example runs to test the function
console.log(areAnagrams("Listen", "Silent")); // true → same letters, different order
console.log(areAnagrams("Hello", "Olelh"));   // true → rearranged letters
console.log(areAnagrams("Test", "Taste"));    // false → different letters