function lsAvailable() {
    try {
        var storage = window['localStorage'];
        if (storage.getItem('ytrng-cfg')) {
            return true
        }
        var x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return false
    }
}

function parsePlaylistID(str) {
    var match = str.match(/list\=([A-z0-9_\+\-]+)/i)
    return match ? match[1] : false
}

function shuffle(a, rng) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(rng() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}
