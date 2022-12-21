function resultat() {
    let firstvalue = parseInt(prompt("firstvalue"));

    let calculator = prompt("operator");

    let secondvalue = parseInt(prompt("secondvalue"));

    switch (calculator) {
        case "+":
            console.log(firstvalue + secondvalue);
            break;
        case "-":
            console.log(firstvalue - secondvalue);
            break;
        case "*":
            console.log(firstvalue * secondvalue);
            break;
        case "/":
            console.log(firstvalue / secondvalue);
        default:
            console.error("invalid");
            break;
    }
}
resultat()

// if (operator === "+") {
//     console.log(parseInt(firstValue) + parseInt(secondValue))
// } else if (operator === "-") {
//     console.log(parseInt(firstValue) - parseInt(secondValue))
// } else if (operator === "*") {
//     console.log(parseInt(firstValue) * parseInt(secondValue))
// } else if (operator === "/") {
//     console.log(parseInt(firstValue) / parseInt(secondValue))
// } else {
//     console.error("Invalid operator")
// }