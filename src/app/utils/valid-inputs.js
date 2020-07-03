// every numeric field contains an number
export const validInputs = (...input) => input.every(num => typeof num === 'number' && !isNaN(num));