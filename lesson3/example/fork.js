process.on('message', (msg) => {
    if ( msg === 'disconnect') {
        process.disconnect();
        return;
    }
    console.log(`Клинет получил: ${msg}`);
    process.send('Pong!');
})
