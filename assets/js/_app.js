$(document).ready(function(){
    
    // toggle
    $("._toggle").on('click', function(){
        $("._menu").toggleClass('_menu-active');
    });

    $("._toggle-back").on('click', function(e){
        $("._menu").removeClass('_menu-active');

        e.preventDefault();
    });

});