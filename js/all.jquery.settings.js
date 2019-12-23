jQuery(document).ready(function () {
    jQuery('#nav .container').meanmenu({
		meanMenuContainer: '#nav'
	});
});

$(document).ready(function(){
	
	$('ul li:last-child, p:last-child, .textPart .PartIn:last-child').addClass('last');
	
	$('ul li:first-child').addClass('first');

	$( ".lftSection .wrap" ).addClass(function( index ) {
		return "item-" + index;
	});
	
	$('#nav ul.menu li:nth-child(3)').addClass("listitem3");
	/*$('.wrap .halfSect:even').addClass("first");*/
	
	$( "#tabs" ).accordion({
		heightStyle: "content",
		collapsible: true,
		autoHeight: false,
		active: false,
		header: ".halfSect"
	});
	
	$( ".BoxIn.row-1" ).click(function() {
		$( ".hiddenBox" ).slideUp( "slow" );
		$( ".ui-state-active" ).fadeIn( "slow" );
	});	
	
	$('.BoxIn.row-1 .imgPart a').click(function(e){ 
		e.preventDefault();
	});

	/*$('.comments').equalHeights();*/
	
}); 


$(function(){

	var vg = $("#grid-content").vgrid({
		easing: "easeOutQuint",
		useLoadImageEvent: true,
		useFontSizeListener: true,
		time: 400,
		delay: 20,
		wait: 500,
		fadeIn: {
			time: 500,
			delay: 50
		}
	});
	$(window).load(function(e){
		vg.vgrefresh();
	});
	
	function addItem(target){
		$('.hiddenContent').fadeIn();
		vg.vgrefresh();
	}
	
	$("#load-more-examples").click(function(e){
		addItem($("#grid-content"));
		$(this).fadeOut();
	});
	
	/*$("#tabs .halfSect").click(function(e){
		vg.vgrefresh(".grid-content");
	});*/


});


$( window ).load( function()
{
    $( '.boxContainer' ).masonry({ 
		columnWidth: 1,
		itemSelector: '.Box' 
	});
	
	/*$( '#grid-content' ).masonry({ 
		gutter: 0,
		isOriginLeft : true,
		itemSelector: '.halfSect' 
	});
	
	$( '.greenBox .container' ).masonry({ 
		columnWidth: 100,
		itemSelector: '.column' 
	});*/
});
