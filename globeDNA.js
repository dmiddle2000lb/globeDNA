(function( $ ) {

  var alphabet = [ "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z" ],
      css = [ '.block { display: inline-block; height: 20px; width: 20px; color: rgba(0,0,0,0);}' ].join(''),
      next = '';

  $('<style>' + css + '</style>').appendTo( 'head' );

  var comparator = function ( letter ) {
    var al = alphabet.length;
    for ( i = 0; i < al; i++ ) {
      if ( alphabet[ i ] == letter.toLowerCase() ) {
        return i;
      }
    }
    return false;
  },

  color = function( el ) {
    var character = el.text().split( '' ),
    article_dna = '';

    if ( character.length) {
      $( character ).each(function( i, letter ) {
        if ( letter == ' ' ) return article_dna += '<span class="block spacer"></span>';
        var sat = ( letter == letter.toUpperCase() ) ? '100%' : '50%',
            hue = ( ( comparator( letter ) ) / 26 ) * 100 * 3.6;
        return article_dna += '<span style="background: hsla( '+ hue.toString() +' , '+ sat +' , 50%, 1 )" class="block">' + letter + '</span>' + next;
      });
      return el.empty().append( article_dna );
    }
  },

  blocks = {
    init: function() {
      return this.each(function() {
        return color( $( this ) );
      });
    }
  };

  return $.fn.globeDNA = function() {
    return blocks.init.apply( this, [].slice.call( arguments, 0 ) );
  }

})( jQuery );

$(function() {
    $( '.article-body:not( .in-section .article-body )' ).globeDNA();
});

