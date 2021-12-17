const vowels = ['a', 'e', 'i', 'o', 'u'];
export default function checkVowels(word) {
    let counts = 0;
    for (let letter of word.toLowerCase()) {
        if (vowels.includes(letter)) {
            counts++;
        }
    }
    return counts;
};
