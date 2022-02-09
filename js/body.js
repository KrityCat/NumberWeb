function NumberTest() {
    var txt = "";
    var inpObj = document.getElementById("Number");
    if(isNumeric(inpObj.value)) {
        txt = "you input not number";
    } else if (inpObj.validity.rangeUnderflow) {
        txt = "you input small number";
    } else {
        txt = "you input yes";
    }
    document.getElementById("sure").innerHTML = txt;
}

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}