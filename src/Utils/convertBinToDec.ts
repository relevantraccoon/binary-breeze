// This file contains a utility function for converting binary to decimal.

export const convertBinaryToDecimal = (binaryValue: string): string => {
  // Initialize variables for the calculation
  let nextValue = 0;
  let priorValue = 0;
  let nextBit = 0;

  // Loop over each character in the binary string
  for (let i = 0; i < binaryValue.length; i++) {
    // Convert the binary character to 0 or 1, then calculate new decimal value using the previous value and the next bit
    // After that, update the prior value for the next iteration
    nextBit = Number(binaryValue[i]);
    nextValue = priorValue * 2 + nextBit;
    priorValue = nextValue;
  }

  // Once we're done iterating, we have our finalValue. Explicitly declaring this variable for clarity.
  const finalValue = nextValue;

  return String(finalValue);
};
