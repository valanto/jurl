test( "Parse http://www.google.com", function() {
	var url = new jurl("http://www.google.com").build();
  	ok( url === "http://www.google.com", "google.com should remain google" );
});