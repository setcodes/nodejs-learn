const notifier = require('node-notifier');

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
    const count = timerData;
    if (typeTime === 's' || typeTime === 'm') {
        count = timerData.replace(typeTime, '');
    }
    return {typeTime, count};
}

const callTimer = () => {
    return notifier.notify({
        title: 'Timer',
        message: msg
    });

}

setTimeout(callTimer, setDelay(process.argv));
