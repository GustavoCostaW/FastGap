function requestJsonJS(){

	var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
	$.getJSON( flickerAPI, {
		tags: "malteses",
		tagmode: "any",
		format: "json"
	})
	.done(function( data ) {
		$.each( data.items, function( i, item ) {
			$( "<img>" ).attr( "src", item.media.m ).appendTo( "#images" );
			if ( i === 8 ) {
				return false;
			}
		});
	});
}