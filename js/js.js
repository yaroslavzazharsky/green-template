$(document).ready(function(){
    //menu
	$('.button').click(function(){
		$('.nav').toggleClass('active');
		$('.button').toggleClass('active');
	});
    //slider
  $('.slider').slick({
      dots:true,
      arrows:false,
  })
})
