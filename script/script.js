function goIndex(){
    document.location = "index.html";
}

function goAbout(){
    document.location = "about.html";
}

function goHow(){
    document.location = "order.html";
}
function goTesti(){
    document.location = "testimoni.html";
}



function testiValidation(){

    if(!checkNameFill()){
        alert("you must fill this name field");
        event.preventDefault();

    }else if(checkNameIsNumber()){
        alert("you cant use number in this field");
        event.preventDefault();

    }else if(!checkRate()){
        alert("you must fill this rate field");
        event.preventDefault();
    }else if(!checkPhoneFill()){
        alert("you must fill this phone field");
        event.preventDefault();    
    }else if(checkCommentValidation()){
        alert("you must fill this field more than 10 characters");

    }else if(checkPhoneIsAlphabet){
        alert("you must fill this field with numeric");
        event.preventDefault();


    }


}

function checkNameFill(){
    var checkName = document.getElementById('name').value;
    if(checkName == ' '){
        return false;

    }else{
        return true;

    }


}

function checkNameIsNumber(){
    var name = document.getElementById('name').value;
    var flagCheckNumber = false;

    for(let i = 0; i < name.length; i++){
        if(!isNaN(name[i])){
            flagCheckNumber = true;
        }

    }

    if(flagCheckNumber == true){
        return true;
    }else{
        return false;
    }

}

function checkRate(){
    var flag = document.getElementById('rate').value;

    if(flag == ' '){
        return false;

    }else{
        return true;
    }



}

function checkPhoneFill(){

    var checkPhone = document.getElementById('phone').value;


    if(checkPhone == ''){
        return false;

    }else{
        return true;

    }

}

function checkPhoneIsAlphabet(){
    var phone = document.getElementById('phone').value;
    var flagCheckAlphabet = false;

    for(let i = 0; i < phone.length; i++){
        if(isNaN(phone[i])){
            flagCheckNumber = true;
        }

    }

    if(flagCheckAlphabet == true){
        return true;
    }else{
        return false;
    }

}

function checkCommentValidation(){
    var checkComment = document.getElementById('comment').value;

    if(checkComment.length < 10){
        return false;
    }else{
        return true;
    }



}

$(document).ready(function(){

    var totalPic = $('.slide').length;
    var picWidth = $('.slide').width();
    var picHeight = $('.slide').height();
    var totalWidth = totalPic * picWidth;

    // setInterval(function() { 
    //     $('#slides > div:first')
    //        .fadeOut(1000)
    //        .next()
    //        .fadeIn(1000)
    //        .end()
    //        .appendTo('#slides');
    //    },  3000);

      setInterval(function() { 
        $('#slides > div:first')
           .fadeOut(0)
           .next()
           .fadeIn(0)
           .end()
           .appendTo('#slides');
       },  3000);

    $('#slides').css({
        width:totalWidth
    });

    $('#slider').css({
        width:picWidth,
        height:picHeight
    });

   

    $("#slides > div:gt(0)").hide();

    // $('#left').click(function() {
    //     $('.slide:first').appendTo('#slides');
    // });

    // $('#right').click(function() {
    //     $('.slide:last').prependTo('#slides');
    // });

   



});