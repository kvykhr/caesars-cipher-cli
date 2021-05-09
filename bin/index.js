#!/usr/bin/env node

console.log( "Hello!" );

const fs = require('fs')

process.stdin.setEncoding('utf8');

const funcmod = require('./module');

const yargs = require("yargs");

const options = yargs
 .usage("Usage: ")
 .option("a", { alias: "action", describe: "encode/decode", type: "string", demandOption: true })
 .option("s", { alias: "shift", describe: "shift value", type: "number", demandOption: true })
 .argv;


//

function rot13(str) { // LBH QVQ VG!
  
  var string = "";
  for(var i = 0; i < str.length; i++) {
    var temp = str.charAt(i);
    if(temp !== " " || temp!== "!" || temp!== "?") {
       string += String.fromCharCode(13 + String.prototype.charCodeAt(temp));
    } else {
      string += temp;
    }
  }
  
  return string;
}

// Change the inputs below to test
//console.log(rot13("SERR PBQR PNZC")); //should decode to "FREE CODE CAMP"









// Function will implement Caesar Cipher to
// encrypt / decrypt the msg by shifting the letters
// of the message acording to the key


var caesarShift = function (str, amount) {
  // Wrap the amount
  if (amount < 0) {
    return caesarShift(str, amount + 26);
  }

  // Make an output variable
  var output = "";

  // Go through each character
  for (var i = 0; i < str.length; i++) {
    // Get the character we'll be appending
    var c = str[i];

    // If it's a letter...
    if (c.match(/[a-z]/i)) {
      // Get its code
      var code = str.charCodeAt(i);

      // Uppercase letters
      if (code >= 65 && code <= 90) {
        c = String.fromCharCode(((code - 65 + amount) % 26) + 65);
      }

      // Lowercase letters
      else if (code >= 97 && code <= 122) {
        c = String.fromCharCode(((code - 97 + amount) % 26) + 97);
      }
    }

    // Append
    output += c;
  }

  // All done!
  return output;
};










function encrypt(msg, key)
{
    var encMsg = "";

    for(var i = 0; i < msg.length; i++)
    {
        var code = msg.charCodeAt(i);

        // Encrypt only letters in 'A' ... 'Z' interval
        if (code >= 65 && code <= 65 + 26 - 1)
        {
            code -= 65;
            code = funcmod.funcmod(code + key, 26);
            code += 65;
        }

        encMsg += String.fromCharCode(code);
    }

    return encMsg;
}

console.log(caesarShift("This is secret. Message about!", options.shift)); //should decode
console.log(caesarShift("This is secret. Message about!", 0)); //should decode
