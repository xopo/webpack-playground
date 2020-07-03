// every numeric field contains an number
const validInputs = (...input) => input.every(num => typeof num === 'number' && !isNaN(num));