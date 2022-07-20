const str = 'node';
([...str].reduce( function (prev, curr) {
    return curr + prev
}));

