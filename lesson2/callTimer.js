const SECOND = 1000;
const MINUTE = 60000;
const msg = 'timer done!'

const setDelay = (args) => {
    
    const timerData = args[2];
    const timerDataParsed = parseTimer(timerData);
    switch (timerDataParsed.typeTime) {
        case "s":
            delay = timerDataParsed.count * SECOND;
            break;
        case "m":
            delay = timerDataParsed.count * MINUTE;
            break;
        default:
            delay = timerDataParsed.count;
            break;
    }
    return delay;
}

const parseTimer = (timerData) => {
    const typeTime = timerData.slice(-1);
    let count = timerData;
    if (typeTime === 's' || typeTime === 'm') {
        count = timerData.replace(typeTime, '');
    }
    return {typeTime, count};
}

const callTimer = () => {
    return console.log(msg);

}

setTimeout(callTimer, setDelay(process.argv));