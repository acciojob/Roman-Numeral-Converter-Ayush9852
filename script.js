function convertToRoman(num) {
    const symbols = [
        ['M', 1000],
        ['CM', 900],
        ['D', 500],
        ['CD', 400],
        ['C', 100],
        ['XC', 90],
        ['L', 50],
        ['XL', 40],
        ['X', 10],
        ['IX', 9],
        ['V', 5],
        ['IV', 4],
        ['I', 1]
    ];

    let romanNumeral = '';

    for (let i = 0; i < symbols.length; i++) {
        const [symbol, value] = symbols[i];
        
        while (num >= value) {
            romanNumeral += symbol;
            num -= value;
        }
    }

    return romanNumeral;
}

// do not edit below this line
module.exports = convertToRoman
