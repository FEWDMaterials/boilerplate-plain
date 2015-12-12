/* CURRENTLY IN: javascript/songkickAPI.js */

(function(){

	// api key: 3TSuSqinVs9l0xVk;

	// $.ajax({
 //  		url: "http://api.songkick.com/api/3.0/artists/480448/calendar.json?apikey=3TSuSqinVs9l0xVk&jsoncallback=?",
 //  		dataType: "jsonp", // <== JSON-P request
 //  		success: function(data){ 
 //    	$.each(data["resultsPage"]["results"]["event"], function(i, entry){
 //        	$("#events").append('<li><a href="' + entry.uri+'">'+entry.displayName +'</a></li>');
 //    		});
 //  		}     
 //  	});
 
 	var url = "http://api.songkick.com/api/3.0/search/artists.json?query='radiohead'&apikey=3TSuSqinVs9l0xVk";
 	console.log( url );
 	// var apikey = 3TSuSqinVs9l0xVk;

	// $.ajax({
	//     type: "get",
	//     url: url,
	//     success: function(data){
	//     	console.log( data );
	//     },
	//     crossDomain : true,
	//     xhrFields: {
	//         withCredentials: true
	//     }
	// })
	//     .done(function( data ) {
	//         console.log("done");
	//     })
	//     .fail( function(xhr, textStatus, errorThrown) {
	//         console.log(xhr.responseText);
	//         console.log(textStatus);
 //    });

		
	// songKick API

	// $.getJSON("http://api.songkick.com/api/3.0/search/locations.json?query=new-york&apikey=3TSuSqinVs9l0xVk&jsoncallback=?",
	// 	function(data){
	// 		console.log( data );
	// })  


	// search by location 
	// http://api.songkick.com/api/3.0/search/locations.json?query={search_query}&apikey={your_api_key}

	var artistSearch = "http://api.songkick.com/api/3.0/search/artists.json?query=soja&apikey=3TSuSqinVs9l0xVk&jsoncallback=?";


	 // $.ajax({
		// url:  "http://api.songkick.com/api/3.0/artists/480448/calendar.json?apikey=3TSuSqinVs9l0xVk&jsoncallback=?",
		// dataType:   "jsonp", // <== JSON-P request
		// success: function(data){ 
		//     $.each(data["resultsPage"]["results"]["event"], function(i, entry){
		        
		//         console.log( entry.uri + entry.displayName );
		//     });
		// }     
  // 	});

	// new york city id = 7644
	 // $.ajax({
		// url:  "http://api.songkick.com/api/3.0/metro_areas/7644/calendar.json&apikey=3TSuSqinVs9l0xVk&jsoncallback=?",
		// dataType:   "jsonp", // <== JSON-P request
		// success: function(data){ 
		// 	console.log( data );
		// }     
  // 	});
	  	

	//  **************   GETS EVENTS IN NEW YORK CITY - 50 PAGES PER DAY  	
	// $.getJSON("http://api.songkick.com/api/3.0/events.json?location=clientip&apikey=3TSuSqinVs9l0xVk&jsoncallback=?",
	// 	function(data){
	// 	// data is JSON response object
	// 	// console.log( data );
	// 	$.each(data["resultsPage"]["results"]["event"], function(i, entry){
	// 	    var results =  entry.uri + entry.displayName;
	// 	    console.log( results );
	// 	    $('.js-results').append( results );
	// 	});
	// });  	
	
	// ******   get ip address and pass into the get request for songkick  ********

	// info.io api request 
	// $.get("http://ipinfo.io", function(response) {
 //    	console.log(response.ip);
	// }, "jsonp");

	//************** GET USERS IP LOCATIONS *************//
	
	function ipAddressLocation(){
		$.ajax({
			url:  "http://ipinfo.io",
			dataType:   "jsonp", // <== JSON-P request
			success: function(response){ 
				var ipLocation = response.ip;
					console.log( ipLocation );
					// $('.js-results').html( ipLocation );
			}     
   		});		
	}
	ipAddressLocation();
	
	// pass ip address into 
	function getEventdata(){
		var __BASE__URL__ = "http://api.songkick.com/api/3.0/events.json"
			, __API__KEY = "3TSuSqinVs9l0xVk";

		$.getJSON(  __BASE__URL__ + "?location=clientip&apikey=" + __API__KEY + "&jsoncallback=?",
			function(data){
				var results = data.resultsPage.results.event[2].displayName
				$('.js-results').html( results + " " + "BAND NAME");
		}); 
	}
	getEventdata();



})();