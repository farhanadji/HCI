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