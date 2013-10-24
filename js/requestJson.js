
/**
 * BUSCAR FOTOS NO FLICKR
 */
function requestJsonJSFlickr(){
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

/**
 * BUSCAR FOTOS NO INSTAGRAM
 */
function requestJsonJSInstagram(){

	var instagramAPI = {}; 
	
	instagramAPI.Config = {
		clientID: 'fd8538825477422db9da6dd26ee25a4f',
		url: 'https://api.instagram.com',
		tag: 'brasil'
	};

	url = instagramAPI.Config.url + "/v1/tags/" + instagramAPI.Config.tag + "/media/recent?callback=?&client_id=" + instagramAPI.Config.clientID;

	$.getJSON(url, function( photo ){
		$.each( photo.data, function( i, item ) {
			$( "<img>" ).attr( "src", item.images.standard_resolution.url).appendTo( "#images-instagram" );
		})
	});
}
