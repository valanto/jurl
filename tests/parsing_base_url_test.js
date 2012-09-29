test( "Parse http://www.example.org", function() {
	var url = new jurl("http://www.example.org").build();
  	ok( url === "http://www.example.org", "example.org should remain google" );
});

test( "Parse http://www.example.org?foo=bar", function() {
	var url = new jurl("http://www.example.org?foo=bar").build();
  	ok( url === "http://www.example.org?foo=bar", "example.org should keep it's query parameter" );
});

test( "Parse http://www.example.org?foo=", function() {
	var url = new jurl("http://www.example.org?foo=").build();
  	ok( url === "http://www.example.org?foo", "example.org should keep it's query parameter" );
});

test( "Parse http://www.example.org?foo", function() {
	var url = new jurl("http://www.example.org?foo").build();
  	ok( url === "http://www.example.org?foo", "example.org should keep it's query parameter" );
});