(function($){

// Shuffle function from: http://james.padolsey.com/javascript/shuffling-the-dom/
    
$.fn.shuffle = function() {

        var allElems = this.get(),
            getRandom = function(max) {
                return Math.floor(Math.random() * max);
            },
            shuffled = $.map(allElems, function(){
                var random = getRandom(allElems.length),
                    randEl = $(allElems[random]).clone(true)[0];
                allElems.splice(random, 1);
                return randEl;
            });
        
        this.each(function(i){
            $(this).replaceWith($(shuffled[i]));
        });
        
        return $(shuffled);
    };
})(jQuery);
   
$(function(){
	       
/*   $(".item")
       .css("background-color","#ffffff")
       .hover(function(){
           $(this).css("background-color","#ffffff");
       }, function() {
           $(this).css("background-color","#ffffff");
       })
       .click(function(){
           location.href = $(this).attr("rel"); 
           return false;
       }) ;*/
       
   $("#cat_all").click(function(){
       $(".item").slideDown();
       $("#catpicker a").removeClass("current");
       $(this).addClass("current");
       return false;
   });
   
   $(".filter").click(function(){
        var thisFilter = $(this).attr("id");
        $(".item").slideUp();
        $("."+ thisFilter).slideDown();
        $("#catpicker a").removeClass("current");
        $(this).addClass("current");
        return false;
   });
   
/*   $(".item").shuffle();*/

});