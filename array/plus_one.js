/**
 * Given a non-negative number represented as an array of digits,
 * plus one to the number.
 *
 * The digits are stored such that the most significant digit is
 * at the head of the list.
 */

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    if (digits.length === 0) return 0;
    var parity = 1;

    var i, sum, remainder, quotient;
    var result = [];
    for (i = digits.length - 1; i >= 0; i--) {
        sum = digits[i] + parity;
        quotient = parseInt(sum / 10, 10);
        remainder = sum % 10;
        result.unshift(remainder);

        parity = quotient;
    }

    if (parity >= 1) {
        result.unshift(parity);
    }

    return result;
};
