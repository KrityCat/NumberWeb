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

function test(str){
    switch(str){
        case "alert-success": success_prompt("提交成功");break;
        case "alert_warning": warning_prompt("错误警告");break;
        case "alert-danger": fail_prompt("提交失败");break;
        case "alert_info":	info_prompt("未查询到数据");break;
        default:alert_prompt("未查询到数据");
    }
    
}

