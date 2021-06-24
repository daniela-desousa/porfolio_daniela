
////hideme

$(document).ready(function() {

    /* Every time the window is scrolled ... */
    $(window).scroll( function(){

        /* Check the location of each desired element */
        $('.hideme').each( function(i){

            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){

                $(this).animate({'opacity':'1'},600);

            }

        });

    });

});




/////link


$(document).ready(function() {

generationLienAlea();

});

//quand on click sur le lien, le lien change
$("#lienaleatoire").live("click", function(){

generationLienAlea();

});


function generationLienAlea(){

var listliens = [ ];
listliens[0] = "ipk-project.html";
listliens[1] = "loreba-project.html";
listliens[2] = "lukas-chocolat-project.html";
listliens[3] = "savon-bio.html";
listliens[4] = "uhartia-project.html";
listliens[5] = "la-cabane-perchee.html";
listliens[6] = "shut-up-twist-again.html";


nb = rand(0, listliens.length - 1);

$("#lienaleatoire").attr('href', listliens[nb]);
}

function rand (min, max) {

var argc = arguments.length;
if (argc === 0) {
min = 0;
max = 2147483647;
} else if (argc === 1) {
throw new Error('Warning: rand() expects exactly 2 parameters, 1 given');
}
return Math.floor(Math.random() * (max - min + 1)) + min;

}
