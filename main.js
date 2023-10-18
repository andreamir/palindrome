
// function isPalindrome(frase,isCaseSensitive,isSpaceSensitive) {
//   let palindrome = frase.split('').reverse().join('');

//   if (isCaseSensitive) {
//     frase = frase.toLowerCase();
//     palindrome = palindrome.toLowerCase();
//   }
//   if (isSpaceSensitive) {
//     frase = frase.split(' ').join('');
//     palindrome = palindrome.split(' ').join('');
//     // console.log(frase);
//     // console.log(palindrome);
//   }
//   if (frase == palindrome) {
//     console.log('Es palíndromo');} else
//   {console.log('No es palíndromo');}}

// isPalindrome('Ana Ana', false, false);


const frase = 'âna';
const isCaseSensitive = false;
const isSpaceSensitive = false;
const isAccentSensitive = true;
const removeAccents = str =>
  str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');


function isPalindrome(frase,isCaseSensitive,isSpaceSensitive,isAccentSensitive) {
  let palindrome = frase.split('').reverse().join('');

  if (isCaseSensitive) {
    frase = frase.toLowerCase();
    palindrome = palindrome.toLowerCase();
  }
  if (isSpaceSensitive) {
    frase = frase.split(' ').join('');
    palindrome = palindrome.split(' ').join('');
    // console.log(frase);
    // console.log(palindrome);
  }
  if (isAccentSensitive) {
    frase = removeAccents(frase);
    palindrome = removeAccents(palindrome);
  }
  console.log(frase);
  console.log(palindrome);
  if (frase == palindrome) {
    console.log('Es palíndromo');} else
  {console.log('No es palíndromo');}
}


isPalindrome(frase,isCaseSensitive,isSpaceSensitive,isAccentSensitive);
