
$( 'button' ).click(function( event ) {

    var siblings = $( "div.card-footer" ).siblings();
    var cardTitle = siblings.get( 0 ).innerHTML;

    console.log( 'You have just checked for more info on ' + cardTitle );

});

