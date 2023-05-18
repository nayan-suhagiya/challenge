const openPrompt = () => {
    let input = prompt("Enter roman letter");
    let inputArr = [];
    let number = 0;

    if (input == "") {
        alert("Please enter value!");
        return;
    }

    for (let i = 0; i < input.length; i++) {
        if (
            input[i] == "I" ||
            input[i] == "V" ||
            input[i] == "X" ||
            input[i] == "L" ||
            input[i] == "C" ||
            input[i] == "D" ||
            input[i] == "M"
        ) {
            inputArr.push(input[i]);
        } else {
            alert("Please enter valid value!");
            return;
        }
    }

    // console.log(inputArr);

    for (let i = 0; i < inputArr.length; i++) {
        if (inputArr[i] == "I") {
            number += 1;
        } else if (inputArr[i] == "V") {
            number += 5;
        } else if (inputArr[i] == "X") {
            number += 10;
        } else if (inputArr[i] == "L") {
            number += 50;
        } else if (inputArr[i] == "C") {
            number += 100;
        } else if (inputArr[i] == "D") {
            number += 500;
        } else if (inputArr[i] == "M") {
            number += 1000;
        }
    }

    alert("Converted Number = " + number);
};
