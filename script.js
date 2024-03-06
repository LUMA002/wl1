// open modal by id
function openModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "block";
}
// divu na maibytne, do 1 tasku zrobutu vuvidd kolu 2 4usla ==, tobto odnakova kilkistb raziv, logo info z fotkoy

// close modal by id
function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "none";
    
    // Очистити масив введених чисел після закриття модального вікна 2
    if (modalId === 'modal2') {
        enteredNumbers = [];
        document.getElementById('enteredNumbers').innerText = ""; // Очистити відображення раніше введених чисел
    }
}


document.querySelector('.logo img').addEventListener('click', function() {
    openModal('modal5');
});

// close by cross button
var closeButtons = document.getElementsByClassName("close");
for (var i = 0; i < closeButtons.length; i++) {
    closeButtons[i].addEventListener("click", function() {
        var modalId = this.parentNode.id;
        closeModal(modalId);
    });
}

// close by click outside
window.addEventListener("click", function(event) {
    if (event.target.classList.contains("modal")) {
        event.target.style.display = "none";
    }
});

// Task 1
function findMostFrequentElementHandler() {
    const input = document.getElementById('arrayInput').value;
    const numbers = input.split(',').map(x => parseInt(x)).filter(x => !isNaN(x));

    if (numbers.length === 0) {
        document.getElementById('result1').innerText = "Некоректний ввід. Будь ласка, введіть числа, розділені комами.";
        return;
    }

    const counts = {};
    let maxCount = 0;
    let mostFrequentElements = [];

    for (const num of numbers) {
    counts[num] = (counts[num] || 0) + 1;
    if (counts[num] > maxCount) {
        maxCount = counts[num];
        mostFrequentElements = [num];
    } else if (counts[num] === maxCount) {
        mostFrequentElements.push(num);
    }
}
    document.getElementById('result1').innerText = `Найчастіші елементи: ${mostFrequentElements.join(', ')}`;
}

// Task 2
let enteredNumbers = []; 

function checkDuplicateNumber(num) {
    if (enteredNumbers.includes(num)) {
        document.getElementById('result2').innerText = `Число ${num} вже було введено.`;
    } else {
        enteredNumbers.push(num);
        document.getElementById('result2').innerText = `Число ${num} успішно введено.`;
    }
}

function displayEnteredNumbers() {
    let numbersList = "Раніше введені числа: " + enteredNumbers.join(", ");
    document.getElementById('enteredNumbers').innerText = numbersList;
}

// Task 3
function countVowelsHandler() {
    let input = document.getElementById('stringInput').value;
    let vowelCount = countVowels(input);
    document.getElementById('result3').innerText = `Кількість голосних: ${vowelCount}`;
}

function countVowels(str) {
    let vowels = 'aeiouAEIOU';
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

// Task 4
function decimalToBinaryHandler() {
    let decimalNumber = parseInt(document.getElementById('decimalInput').value);
    if(Number.isInteger(decimalNumber)) {
        let binaryNumber = decimalToBinary(decimalNumber);
        document.getElementById('result4').innerText = `Двійкове представлення числа ${decimalNumber}: ${binaryNumber}`;
    } else {
        document.getElementById('result4').innerText = `Будь ласка, введіть ціле число.`;
    }
}

function decimalToBinary(decimal) {
    return (decimal >>> 0).toString(2);
}

