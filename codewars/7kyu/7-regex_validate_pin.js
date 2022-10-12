/**
 * Name: Regex validate PIN code
 * Description: ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
 * Link: https://www.codewars.com/kata/55f8a9c06c018a0d6e000132/train/javascript
 */
function validatePIN(pin) {
    const hasBannedChar = ['.', '+', '-', ' ', '\n'].some(char => pin.includes(char))

    if (hasBannedChar) return false
    if (isNaN(pin)) return false
    if (pin.length !== 4 && pin.length !== 6) return false

    return true
}