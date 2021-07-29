

export const mathOps = (num1, num2, operation) => {
    let result = ""
    if (operation === "addition") result = num1 + num2
    else if (operation === "subtract") result = num1 - num2
    else if (operation === "multiply") result = num1 * num2
    else if (operation === "divide") result = num1 / num2
    else result = "Operation is not valid"
    return result
}
