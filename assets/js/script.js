
/*----------------------------------------------------------------------
Load
----------------------------------------------------------------------*/
$(window).on("load", function () {
	$("#_load").fadeOut(1000);
});

/*----------------------------------------------------------------------
[Master Script]
----------------------------------------------------------------------*/
$(document).ready(function(){

    /*------------------------------------------------------------------
	Lazy Load
	------------------------------------------------------------------*/

	$('._lazy').lazy();
        
	// $('._lazy').lazy({
	//   effect: "fadeIn",
	//   effectTime: 700,
	//   threshold: 0
	// });
	
	/*------------------------------------------------------------------
	Perfect Scroll
	------------------------------------------------------------------*/
	$('._body-sync').perfectScrollbar();
	
	$('._scroll').perfectScrollbar();

});