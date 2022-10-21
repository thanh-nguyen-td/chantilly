function deleteWhitespaceInputLengthZero (items){
    var idName = items.id
        var valueEmail = document.getElementById(idName).value;
        if(valueEmail.length == 0){
            valueEmail = valueEmail.trim();
            document.getElementById(idName).value = valueEmail
        }
}; 


function checkSpecialCharactersInput (items){
    var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if(format.test(items.value)){
        alert("lỗi mất tiu rừi")
    }
}
