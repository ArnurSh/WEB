//#1
document.getElementById("hp1").textContent = "JavaScript can do many things.";
//#2
let candleSys = 1;
function CandleFunc(){
    if(candleSys == 1){
        document.getElementById('candle_img').src='img/candle_on.png';
        candleSys = 0;
    }
    else{
        document.getElementById('candle_img').src='img/candle_off.png';
        candleSys = 1;
    }
}
//#3
function BoldFunc(){
    document.getElementById("boldd").style.fontWeight = "700";
}
//#4
function DateAFunc(){
    document.getElementById("date").style.display = "block";
}
function DateDisAFunc(){
    document.getElementById("date").style.display = "none";
}
//#5
console.log("My name is Arnur");
//#6
let strN = "String", intN = 123, boolN = false;
console.log(strN);
console.log(intN);
console.log(boolN);
//#7
let a = parseFloat(prompt("Task 7)"));
let b = parseFloat(prompt("Task 7)"));
document.getElementById("task7.1").textContent = "a + b = " + parseFloat(a+b);
document.getElementById("task7.2").textContent = "a - b = " + parseFloat(a-b);
document.getElementById("task7.3").textContent = "a * b = " + parseFloat(a*b);
document.getElementById("task7.4").textContent = "a / b = " + parseFloat(a/b);
//#8
const date = new Date();
document.getElementById("task8").textContent = date;
//#9
const isLeapYear = year => new Date(year, 1, 29).getMonth()
if(isLeapYear(date.getFullYear()))
    document.getElementById("task9").textContent = "Yes";
else
    document.getElementById("task9").textContent = "No";
//#10
function Multiply10(){
    var num1 = parseFloat(document.getElementById('num1_10').value);
    var num2 = parseFloat(document.getElementById('num2_10').value);
    document.getElementById('task10').textContent = num1*num2;
}
function Divide10(){
    var num1 = parseFloat(document.getElementById('num1_10').value);
    var num2 = parseFloat(document.getElementById('num2_10').value);
    document.getElementById('task10').textContent = num1/num2;
}
//#11
let c11 = parseFloat(prompt("Task 11) Celsius: "));
let f11 = parseFloat(prompt("Task 11) Fahrenheit: "));
let c11f = parseFloat((c11*1.8)+32), f11c = parseFloat((f11-32)/1.8);
document.getElementById("task11.1").textContent = c11 + "°C is " + c11f + "°F";
document.getElementById("task11.2").textContent = f11 + "°F is" + f11c + "°C";
//#12
function OddOrEven(){
    var numb = parseInt(document.getElementById("task12_input").value);
    if(numb % 2 == 0)
        document.getElementById("task12").textContent = "Even";
    else
        document.getElementById("task12").textContent = "Odd";
}
//#13
function MinMax(){
    let n1 = parseFloat(prompt("Number 1: "));
    let n2 = parseFloat(prompt("Number 2: "));
    let n3 = parseFloat(prompt("Number 3: "));
    let max = Math.max(n1, n2, n3), min = Math.min(n1, n2, n3);
    document.getElementById("task13_1").textContent = "Max = " + max;
    document.getElementById("task13_2").textContent = "Min = " + min;
}
//#14
function HeronF(){
    var a = parseInt(prompt("First side: "));
    var b = parseInt(prompt("Second side: "));
    var c = parseInt(prompt("Third side: "));
    var s = (a + b + c) / 2;
    console.log("Semi-perimeter: " + s);
    var Area = Math.sqrt(s*(s-a)*(s-b)*(s-c));
    console.log("Area by Heron formula: " + Area);
    document.getElementById("task14").textContent = "Area by Heron formula: " + Area;
}
//#15
function Factorial(){
    var numb = parseInt(prompt("Number to factorial: ")), answ = 1;
    for(let i = 1; i <= numb; i++){
        answ*=i;
    }
    document.getElementById("task15").textContent = "Factorial of " + numb + " is " + answ;
}
//#16
function SoundCount(){
    var vow = 0, cons = 0;
    let word = prompt("Word: ");
    for(let i = 0; i < word.length; i++){
        if(word[i] == 'a' || word[i] == 'e' 
        || word[i] == 'i' || word[i] == 'o' 
        || word[i] == 'u' || word[i] == 'A' 
        || word[i] == 'E' || word[i] == 'I' 
        || word[i] == 'O' || word[i] == 'U')
            vow++;
        else if(word[i] == ' ')
            continue;
        else
            cons++;
    }
    document.getElementById("task16").textContent = "In " + word + " " + vow + " vowels and " + cons + " consonants";
}
//#17
function SecondsToAnother(){
    var sec = parseFloat(document.getElementById('input17').value);
    var min = sec / 60;
    var hour = min / 60;
    document.getElementById("task17").textContent = sec + " second = " + min + " min = " + hour + "hour";
}
//#18
function arrCreateUse(){
    var lenArr = parseInt(prompt("Array lenght: "));
    let arr = [];
    for(let i = 0; i < lenArr; i++)
        arr[i] = parseInt(prompt("Array item: "));
    findMostFrequent(arr);
}
function findMostFrequent(arr) {
    let frequencyMap = {};
    let maxCount = 0;
    let mostFrequent;
    for (let num of arr) {
      frequencyMap[num] = (frequencyMap[num] || 0) + 1;
      if (frequencyMap[num] > maxCount) {
        maxCount = frequencyMap[num];
        mostFrequent = num;
      }
    }
    document.getElementById("task18").textContent = mostFrequent;
}
//#19
function Fibonachi(){
    let len = parseInt(prompt("Fibonachi len: ")) - 1, n1 = 0, n2 = 1, now;
    if(len == 0 || len == 1){
        document.getElementById("task19").textContent = len;
        return;
    }
    while(len > 0){
        now = n1 + n2;
        n1 = n2;
        n2 = now;
        len--;
    }
    document.getElementById("task19").textContent = now;
}
//#20
function daysUntilNewYear() {
    const today = new Date();
    const endOfYear = new Date(today.getFullYear(), 11, 31);
  
    const timeDifference = endOfYear - today;
    const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24)) + 1;
  
    document.getElementById("task20").textContent = daysLeft;
}