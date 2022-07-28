const addAction = (argsLeft, argsRight, decimal) => {
    if (!decimal) {
        const result =  +argsLeft + +argsRight;
        return result.toFixed(+decimal)
    }
    const result =  +argsLeft + +argsRight;
    return result;
}

const multiplyAction = (argsLeft, argsRight, decimal) => {
    if (decimal) {
        const result =  +argsLeft * +argsRight;
        return result.toFixed(decimal)
    }
    const result =  +argsLeft * +argsRight;
    return result;
}

const divisionAction = (argsLeft, argsRight, decimal) => {
    if (decimal) {
        const result =  +argsLeft / +argsRight;
        return result.toFixed(decimal)
    }
    const result =  +argsLeft / +argsRight;
    return result;
}
const substractAction = (argsLeft, argsRight, decimal) => {
    if (decimal) {
        const result =  +argsLeft - +argsRight;
        return result.toFixed(decimal)
    }
    const result =  +argsLeft - +argsRight;
    return result;
}

module.exports = { addAction, multiplyAction, divisionAction, substractAction };