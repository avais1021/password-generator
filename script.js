const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" ; 
const lowerSet = "abcdefghijklmnopqrstuvwxyz" ; 
const numberSet = "1234567890" ;
const symbolset = "~!@#$%^&*()_+/" ;

// const getRandomData = () => {
//     console.log( symbolset [ Math.floor(Math.random() * symbolset.length) ] )
//     console.log( symbolset [0] )
// }
// getRandomData();

// --selectors-- 
const passBox = document.getElementById("pass-box");
const totalChar = document.getElementById("total-char");
const upperCase = document.getElementById("upper-case");
const lowerCase = document.getElementById("lower-case");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");



const getRandomData = (dataSet) => {
 return dataSet [Math.floor(Math.random() * dataSet.length)];
}

const generatePassword = (password = "") => {
    if (upperCase.checked) {
        password += getRandomData(upperSet);
    }
    if(lowerCase.checked){
        password += getRandomData(lowerSet);
    }
    if(numbers.checked){
        password += getRandomData(numberSet);
    }
    if(symbols.checked){
        password += getRandomData(symbolset);
    }
    if(password.length < totalChar.value){
        return generatePassword(password)
    }
    // console.log(truncateString(password , totalChar.value))
    passBox.innerText = truncateString(password , totalChar.value);
    const clip = document.createElement("img");
    passBox.appendChild(clip);
    clip.src = 'copyIcon.png' ;
    clip.addEventListener("click" , function(){
            navigator.clipboard.writeText(passBox.innerText);
            clip.style.border = "2px solid black" ;
    })
}
generatePassword();


document.getElementById("btn").addEventListener("click" , function(){
    generatePassword();
})

function truncateString(str, num) {
    if (str.length > num) {
      return str.slice(0, num);
    } else {
      return str;
    }
  }


