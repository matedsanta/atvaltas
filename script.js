const DecimalToBinary = (num) => {
    let binary_number = "";

    while (num !== 0) {
        binary_number = (num % 2).toString() + binary_number;
        num = Math.floor(num / 2);
    }

    return binary_number || "0"; 
};
const BinaryToDecimal = (num) => {
    let decimal_number = 0;
    let power = 0;

    while (num > 0) {
        const last_digit = num % 10;
        decimal_number += last_digit * Math.pow(2, power);
        num = Math.floor(num / 10);
        power++;
    }

    return decimal_number;
};

const OctalToDecimal = (num) => {
    let decimal_number = 0;
    let power = 0;

    while (num > 0) {
        const last_digit = num % 10;
        decimal_number += last_digit * Math.pow(8, power);
        num = Math.floor(num / 10);
        power++;
    }

    return decimal_number;
};

const DecimalToOctal = (num) => {
    let octal_number = "";

    while (num !== 0) {
        octal_number = (num % 8).toString() + octal_number;
        num = Math.floor(num / 8);
    }

    return octal_number || "0";
};

const HexadecimalToDecimal = (num) => {
    let decimal_number = 0;
    let power = 0;
    num = num.toUpperCase(); // Ensure all characters are uppercase for consistency

    while (num.length > 0) {
        const last_char = num[num.length - 1];
        let last_digit;

        // Check if the character is a digit or a letter (A-F)
        if (last_char >= "0" && last_char <= "9") {
            last_digit = parseInt(last_char, 10);
        } else if (last_char >= "A" && last_char <= "F") {
            last_digit = last_char.charCodeAt(0) - 55; // A=10, B=11, ..., F=15
        }

        decimal_number += last_digit * Math.pow(16, power);
        num = num.slice(0, -1); // Remove the last character
        power++;
    }

    return decimal_number;
};

const DecimalToHexadecimal = (num) => {
    let hexadecimal_number = "";

    while (num !== 0) {
        const last_digit = num % 16;
        hexadecimal_number =
            (last_digit < 10
                ? last_digit
                : String.fromCharCode(last_digit + 55)
            ).toString() + hexadecimal_number;
        num = Math.floor(num / 16);
    }

    return hexadecimal_number || "0"; // If the number is 0, return "0"
};

