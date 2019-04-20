





function init() {
}
window.onload = init;

$('#dec').keypress(function (e) {
    var chr = String.fromCharCode(e.which);
    if ("1234567890".indexOf(chr) < 0)
        return false;
    return true;
});

$('#hex').keypress(function (e) {
    var chr = String.fromCharCode(e.which);
    if ("abcdefABCDEF1234567890".indexOf(chr) < 0)
        return false;
    return true;
});

$('#bin').keypress(function (e) {
    var chr = String.fromCharCode(e.which);
    if ("01 ".indexOf(chr) < 0)
        return false;
    return true;
});

$('#eqt').keypress(function (e) {
    var chr = String.fromCharCode(e.which);
    if ("xX abcdefABCDEF1234567890+-/*()^.".indexOf(chr) < 0)
        return false;
    return true;
});

function space_4(bin) {
    var bin_spaced = '';
    for (var i = 0; i < bin.length; i++) {
        bin_spaced += bin[i];
        if ((i + 1) % 4 == 0)
            bin_spaced += ' ';
    }
    return bin_spaced;
}

// adds commas before and after period
// dec = dec.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
function add_commas(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}

function dec_update() {
    var dec = Number(document.getElementById("dec").value);
    var hex = dec.toString(16);
    var bin = space_4(dec.toString(2));
    document.getElementById("hex").value = hex;
    document.getElementById("bin").value = bin;
}
function hex_update() {
    var hex = document.getElementById("hex").value;
    var dec = parseInt(hex, 16);
    var bin = space_4(dec.toString(2));
    dec = add_commas(dec);
    document.getElementById("dec").value = dec;
    document.getElementById("bin").value = bin;
}
function bin_update() {
    var bin = document.getElementById("bin").value.replace(/\s+/g, '');
    var dec = parseInt(bin, 2);
    var hex = dec.toString(16);
    dec = add_commas(dec);
    document.getElementById("dec").value = dec;
    document.getElementById("hex").value = hex;
}
function eqt_update() {
    try {
        var dec = eval(document.getElementById("eqt").value.replace(/[\^]/g, '**'));
        var hex = dec.toString(16);
        var bin = space_4(dec.toString(2));
        dec = add_commas(dec);
        document.getElementById("dec").value = dec;
        document.getElementById("hex").value = hex;
        document.getElementById("bin").value = bin;
    } catch (e) {
        /* silently pass (syntax) errors */
    }
}
function utf_update() {
    try {
        var utf = document.getElementById("utf").value;
        var b64 = window.btoa(utf);
        var hex = utf.split('').map(function (aChar) {
            return ('0' + aChar.charCodeAt(0).toString(16)).slice(-2);
        }).join('');
        document.getElementById("hex").value = hex;
        document.getElementById("utf").style.background = "white";
        document.getElementById("b64").style.background = "white";
        document.getElementById("b64").value = b64;
    } catch (e) {
        document.getElementById("b64").style.background = "#ffccf2";
    }
}
function b64_update() {
    try {
        var b64 = document.getElementById("b64").value.replace(/["']/g, "");
        var utf = window.atob(b64);
        var hex = utf.split('').map(function (aChar) {
            return ('0' + aChar.charCodeAt(0).toString(16)).slice(-2);
        }).join('');
        document.getElementById("b64").style.background = "white";
        document.getElementById("utf").style.background = "white";
        document.getElementById("utf").value = utf;
        document.getElementById("hex").value = hex;
    } catch (e) {
        document.getElementById("utf").style.background = "#ffccf2";
    }
}





