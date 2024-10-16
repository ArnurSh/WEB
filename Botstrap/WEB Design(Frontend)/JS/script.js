//#1
function changeBackground(){
    document.body.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
}
function changeImage(id, imgg){
    document.getElementById(id).src = imgg;
}
function changeText(id, text){
    document.getElementById(id).textContent = text;
}

//#2
function addTask(){
    //Работа с вводом
    let taskText = document.getElementById('taskInput').value;
    if(taskText == ""){
        alert("You must type something");
        return;
    }
    document.getElementById('taskInput').value = "";

    //Система листа
    var ul = document.getElementById("taskList");
    var li = document.createElement('li');
    var text = document.createElement('p');
    var delBtn = document.createElement('button');
    var mark = document.createElement('input');


    delBtn.className = "todoDel";
    delBtn.onclick = function (){
        this.parentElement.remove();
    };
    delBtn.textContent = "🗙";


    mark.type = "checkbox";
    mark.className = "todoMark";


    text.className = "todoText";
    text.textContent = taskText;


    li.className = "todoItem";
    li.appendChild(text);
    li.appendChild(delBtn);
    li.appendChild(mark);
    ul.appendChild(li);
}


//#3
function sortNumbers(order) {
    let input = document.getElementById("numbersInput").value;
    let numbersArray = input.split(' ').map(Number);
    if (numbersArray.some(isNaN)) {
      alert("Please enter only numbers separated by [Space].");
      return;
    }
    if (order === 'asc') {
      numbersArray.sort(function (a,b) {
        return a - b;
    });
    } else {
      numbersArray.sort(function (a,b) {
        return b - a;
    });
    }
    document.getElementById("sortedNumbers").textContent = numbersArray.join(' ');
}
//#4
function Calculator(arph){
    let asnwer;
    var num1 = parseFloat(document.getElementById('num1_10').value);
    var num2 = parseFloat(document.getElementById('num2_10').value);
    switch(arph){
        case '+':
            asnwer = Plus(num1, num2);
            break;
        case '-':
            asnwer = Minus(num1, num2);
            break;
        case '*':
            asnwer = Multiply(num1, num2);
            break;
        case '/':
            asnwer = Divide(num1, num2);
            break;
        case '%':
            asnwer = Residue(num1, num2);
            break;
        case '^':
            asnwer = Power(num1, num2);
            break;
        default:
            alert("Invalid value")
    }
    document.getElementById('calculatorAnsw').textContent = "Answer: " + asnwer;
}
function Plus(num1, num2){
    return num1 + num2;
}
function Minus(num1, num2){
    return num1 - num2;
}
function Multiply(num1, num2){
    return num1 * num2;
}
function Divide(num1, num2){
    return num1 / num2;
}
function Residue(num1, num2){
    return num1 % num2;
}
function Power(num1, num2){
    let answ = 1;
    for(let i = 0; i < num2; i++){
        answ*= num1;
    }
    return answ;
}

//#5
function calculateTax(){
    let carPrice = document.getElementById("carPrice").value, tax;
    if(carPrice <= 0){
        alert("Don't have tax for this");
        return;
    }
        
    if(carPrice < 5000)
        tax = carPrice * 0.15;
    else if(carPrice >= 5000 && carPrice < 10000)
        tax = carPrice * 0.2;
    else
        tax = carPrice * 0.25;
    document.getElementById("taxResult").textContent = "Tax for current car is " + tax;
}