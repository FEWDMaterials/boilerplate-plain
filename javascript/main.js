/* CURRENTLY IN: javascript/main.js */

(function(){

	// ******    GET REQUEST  *********
	// ******    Simple Implementation - starter  ******
	// var __URL__BASE__ = 'https://www.reddit.com/r/subreddit/search.json?q=albania&sort=hot';	

	// $.get(__URL__BASE__, function(data){
	// 	console.log( data.data.children[8]);
	// });						


	
	// *********   API request  ************
	// $.ajax({
	// 	url: 'https://www.reddit.com/r/subreddit/search.json?q=albania&sort=hot',
	// 	success: function(data){
	// 		console.log( data );	
	// 	}					
	// });					

	// API request and ajax protocol in a function
	
	function getData( query ){
		var __URL__BASE__ = 'https://www.reddit.com/r/subreddit/search.json?q=';	

		$.ajax({
		url: __URL__BASE__ + query,
		success: function(data){
			console.log( data.data.children[2].data.title );	
			}					
		});	
	}

	getData( 'albania' );

	// ************   Dynamic **********

	function getData( query, callback ){
		var __URL__BASE__ = 'https://www.reddit.com/r/subreddit/search.json?q=';	

		$.ajax({
		url: __URL__BASE__ + query,
		success: callback					
		});	

	}

	getData( 'albania' );


	// event object 
	$('.js-click').on('keypress', function(e){
		
		// console.log( e, 'event object' );
		if(e.keyCode === 13 ){
			var currentInput = $(this);
			// console.log( 'here' );
			// this refers to the particular event 
			// 	console.log( $(this).val() );
			if( currentInput.val() === "") return;
			// call back happens over here, could also put different functions
			getData( currentInput.val(), function(data){
				console.log( data );
			});

			// V2 of callback
			// getData( currentInput.val(), yourFunctionHere(){
				// 	do something
			// });
			$(this).val("");
		} // enter is clicked 
	});


	// can use .html() to display in screen
	// ex:   $('.placeInBrowser').html( what you are going to display );





})();