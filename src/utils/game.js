function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const generateCode = (length = 4, min = 1, max = 6) => {
  const code = [];
  for (let i = 0; i < length; i++) {
    code.push(getRandom(min, max));
  }
  return code;
};

/**
 * Check if the input matches code, and returns correct placement and color.
 * 
 * @param {*} code 
 * @param {*} input 
 */
export const checkSolution = (code, input) => {
  let correct_place = 0;
  let correct_color = 0;

  if (code.length == 0 || input.length == 0) {
    return {
      correct_place: 0,
      correct_color: 0,
    };
  }

  const inputCopy = [...input];
  const codeCopy = [...code];
  for (let i = 0; i < 4; i++) {
    const cor = codeCopy[i];
    const ind = inputCopy.findIndex(j => j === cor);
    if (ind >= 0) {
      inputCopy.splice(ind, 1);
    }
  }
  correct_color = 4 - inputCopy.length;
  
  
  for (let i = 0; i < 4; i++) {
    if (input[i] == code[i]) {
      correct_place += 1;
      correct_color -= 1;
    }
  }

  return {
    correct_place,
    correct_color,
  };
};

export function checkRow(input, correct) {
  let placed = 0;
  let present = 0;

  const inputCopy = [...input];
  const correctCopy = [...correct];
  for (let i = 0; i < 4; i++) {
    const cor = correctCopy[i];
    const ind = inputCopy.findIndex(i => i === cor);
    if (ind) {
      inputCopy.splice(ind, 1);
    }
  }
  present = 4 - inputCopy.length;
  
  
  for (let i = 0; i < 4; i++) {
    if (input[i] == correct[i]) {
      placed += 1;
      present -= 1;
    }
  }
  

  
  this.attempts[this.currentAttempt] = {
    present,
    placed,
  };
  this.currentAttempt += 1;
}