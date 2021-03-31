/*마우스 꾸밈*/ 
$(function() { 
    
    $(document).mousemove(function(e){
        $('.mouse').css("top", e.pageY);
        $('.mouse').css("left", e.pageX);
    });


});


/*섹션4 슬라이더*/ 
$(function() { 

$('.sub').hide(); 

init(0);
function init(n){
    $('.navg').eq(n).find('.works_bg').show();
}

$(".title").click(function() {
    if($(this).prev().css("display") == "none" ){
        $(".sub").each(function(){
            if($(this).css("display") == "block") {
                $(this).slideUp();
            }
        });
        $(this).prev().slideDown();

    }else {
        return false;
    }
});

});




  




