//strike of done todo's
$('ul').on("click","li",function(){
	$(this).toggleClass("checked");
	})

//remove todo
$('ul').on("click","span",function(event){
	event.stopPropagation();
	$(this).parent().fadeOut(1000,function(){
			$(this).remove();

	})
	})

//add Todo

$('input[type="text"]').keypress(function(e){
	if(e.which==13){
		//take new todo text from input
		var todoText=$(this).val();
		//add the new todo to ul
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> "+ todoText +"</li>")
		//clear the input text
		$(this).val("");

	}
})

//toggle input
$(".fa-plus").click(function(){
	$("input[Type='text']").fadeToggle();
})