//#1
function task1() {
    const num1 = parseInt(prompt("Enter first number:"));
    const num2 = parseInt(prompt("Enter second number:"));
    const num3 = parseInt(prompt("Enter third number:"));
    const nearest = [num1, num2, num3].reduce((a, b) => Math.abs(100 - a) < Math.abs(100 - b) ? a : b);
    const farthest = [num1, num2, num3].reduce((a, b) => Math.abs(100 - a) > Math.abs(100 - b) ? a : b);
    document.getElementById("task1-result").textContent = `Nearest: ${nearest}, Farthest: ${farthest}`;
}

//#2
function task2() {
    const sentence = prompt("Enter a sentence:");
    const sortedSentence = sentence.split(" ").map(word => word.split("").sort().join("")).join(" ");
    document.getElementById("task2-result").textContent = sortedSentence;
}

//#3
function task3() {
    const input = document.getElementById("task3-input").value;
    const firstNonRepeated = Array.from(input).find(char => input.indexOf(char) === input.lastIndexOf(char));
    document.getElementById("task3-result").textContent = `First non-repeating character: ${firstNonRepeated || "None"}`;
}

//#4
function task4() {
    const input = document.getElementById("task4-input").value;
    const shifted = input.replace(/[a-zA-Z]/g, char => String.fromCharCode(char.charCodeAt(0) + 1));
    alert(`Shifted: ${shifted}`);
}

//#5
function task5() {
    const words = [prompt("Enter first word:"), prompt("Enter second word:"), prompt("Enter third word:")];
    const longest = words.reduce((a, b) => a.length > b.length ? a : b);
    const shortest = words.reduce((a, b) => a.length < b.length ? a : b);
    document.getElementById("task5-result").textContent = `Longest: ${longest}, Shortest: ${shortest}`;
}

//#6
function task6() {
    const paragraph = document.getElementById("task6-paragraph");
    paragraph.innerHTML = paragraph.textContent.split(" ").map(word => {
        if (word.length > 7) return `<span style="background-color:blue">${word}</span>`;
        if (word.length < 3) return `<strong>${word}</strong>`;
        return word;
    }).join(" ");
}

//#7
function task7() {
    const paragraph = document.getElementById("task7-paragraph");
    paragraph.innerHTML = paragraph.innerHTML.replace(/\?/g, "*").replace(/!/g, "@");
}

//#8
function task8() {
    const paragraph = document.getElementById("task8-paragraph");
    paragraph.innerHTML = paragraph.innerHTML.replace(/([.?!])\s*/g, "$1<br>");
}

//#9
function task9() {
    const paragraph = document.getElementById("task9-paragraph");
    const wordCount = paragraph.textContent.split(/\s+/).length;
    alert(`Word count: ${wordCount}`);
}

//#10
function task10() {
    const paragraph = document.getElementById("task10-paragraph");
    paragraph.innerHTML = paragraph.textContent.split(" ").map(word => {
        if (word.startsWith("a")) word = `<i>${word}</i>`;
        if (word.endsWith("y")) word = `<u>${word}</u>`;
        return word;
    }).join(" ");
}

//#11
function task11() {
    const radius = parseFloat(document.getElementById("task11-radius").value);
    const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    document.getElementById("task11-result").textContent = `Volume of sphere: ${volume.toFixed(2)}`;
}

//#12
function task12() {
    const radius = parseFloat(document.getElementById("task12-radius").value);
    const height = parseFloat(document.getElementById("task12-height").value);
    const volume = Math.PI * Math.pow(radius, 2) * height;
    document.getElementById("task12-result").textContent = `Volume of cylinder: ${volume.toFixed(2)}`;
}

//#13
function task13() {
    const radius = parseFloat(document.getElementById("task13-radius").value);
    const height = parseFloat(document.getElementById("task13-height").value);
    const volume = (1 / 3) * Math.PI * Math.pow(radius, 2) * height;
    document.getElementById("task13-result").textContent = `Volume of cone: ${volume.toFixed(2)}`;
}

//#14
function task14() {
    const length = parseFloat(document.getElementById("task14-length").value);
    const width = parseFloat(document.getElementById("task14-width").value);
    const height = parseFloat(document.getElementById("task14-height").value);
    const volume = length * width * height;
    document.getElementById("task14-result").textContent = `Volume of prism: ${volume.toFixed(2)}`;
}

//#15
function task15() {
    const base = parseFloat(document.getElementById("task15-base").value);
    const height = parseFloat(document.getElementById("task15-height").value);
    const area = 0.5 * base * height;
    document.getElementById("task15-result").textContent = `Area of triangle: ${area.toFixed(2)}`;
}
