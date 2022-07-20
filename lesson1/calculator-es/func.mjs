export const add = (argsLeft, argsRight, decimal) => {
    if (!decimal) {
        const result =  +argsLeft + +argsRight;
        return result.toFixed(+decimal)
    }
    const result =  +argsLeft + +argsRight;
    return result;
}

export const multiply = (argsLeft, argsRight, decimal) => {
    if (decimal) {
        const result =  +argsLeft * +argsRight;
        return result.toFixed(decimal)
    }
    const result =  +argsLeft * +argsRight;
    return result;
}

export const division = (argsLeft, argsRight, decimal) => {
    if (decimal) {
        const result =  +argsLeft / +argsRight;
        return result.toFixed(decimal)
    }
    const result =  +argsLeft / +argsRight;
    return result;
}
export const substract = (argsLeft, argsRight, decimal) => {
    if (decimal) {
        const result =  +argsLeft - +argsRight;
        return result.toFixed(decimal)
    }
    const result =  +argsLeft - +argsRight;
    return result;
}
