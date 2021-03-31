/*마우스 꾸밈*/ 
$(function() { 
    
    $(document).mousemove(function(e){
        $('.mouse').css("top", e.pageY);
        $('.mouse').css("left", e.pageX);
    });


});
