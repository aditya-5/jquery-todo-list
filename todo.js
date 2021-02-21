$('ul').on("click","li",function(){
	$(this).toggleClass("strike")
});

 $('ul').on("click","span",function(){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
}) ;

 $("#add").keypress(function(event){
 	if(event.which ===13 && $(this).val().length >0){
 		var a = $(this).val();
 		$(this).val("")
 		$('ul').append("<li><span> <i class='fas fa-trash'></i></span>"+ a +"</li>")
 	}
 });



$(".fa-plus").click(function(){
	$('input').fadeToggle()
})