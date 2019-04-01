/* ASCII Shift Encryption/Decryption (7 Kyu) */

// Unfactored Solution
function asciiEncrypt(plaintext) {
  let plaintextArray = plaintext.split("");
  let encryptedText = [];
  for (let n = 0; n < plaintextArray.length; n++) {
    shiftedAsciiValue = String.fromCharCode(plaintextArray[n].charCodeAt() + n);
    encryptedText.push(shiftedAsciiValue);
  }
  return encryptedText.join("");
}

function asciiDecrypt(ciphertext) {
  let ciphertextArray = ciphertext.split("");
  let decryptedText = [];
  for (let m = 0; m < ciphertextArray.length; m++) {
    shiftedAsciiValue = String.fromCharCode(
      ciphertextArray[m].charCodeAt() - m
    );
    decryptedText.push(shiftedAsciiValue);
  }
  return decryptedText.join("");
}

// Refactored Solution
function asciiEncrypt(plaintext) {
  return converter(plaintext, getParamName(asciiEncrypt));
}

function asciiDecrypt(ciphertext) {
  return converter(ciphertext, getParamName(asciiDecrypt));
}

function converter(text, paramName) {
  let array = text.split("");
  let newText = [];
  for (let i = 0; i < array.length; i++) {
    paramName.toString() === "plaintext"
      ? (shiftedAsciiValue = String.fromCharCode(array[i].charCodeAt() + i))
      : (shiftedAsciiValue = String.fromCharCode(array[i].charCodeAt() - i));
    newText.push(shiftedAsciiValue);
  }
  return newText.join("");
}

// https://stackoverflow.com/a/9924463/3844356
function getParamName(func) {
  let STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm;
  let ARGUMENT_NAMES = /([^\s,]+)/g;
  let fnStr = func.toString().replace(STRIP_COMMENTS, "");
  let result = fnStr
    .slice(fnStr.indexOf("(") + 1, fnStr.indexOf(")"))
    .match(ARGUMENT_NAMES);
  if (result === null) result = [];
  return result;
}
