test( "Parse http://www.example.org", function() {
	var url = new jurl("http://www.example.org").build();
  	ok( url === "http://www.example.org", "example.org should remain google" );
});

test( "Parse http://www.example.org?foo=bar", function() {
	var url = new jurl("http://www.example.org?foo=bar").build();
  	ok( url === "http://www.example.org?foo=bar", "example.org should keep it's query parameter: " + url );
});

test( "Parse http://www.example.org?foo=", function() {
	var url = new jurl("http://www.example.org?foo=").build();
  	ok( url === "http://www.example.org?foo", "example.org should keep it's query parameter: " + url );
});

test( "Parse http://www.example.org?foo", function() {
	var url = new jurl("http://www.example.org?foo").build();
  	ok( url === "http://www.example.org?foo", "example.org should keep it's query parameter: " + url );
});

test( "Parse url params http://www.example.org/foo/bar", function() {
	var url = new jurl("http://www.example.org/foo/bar").build();
  	ok( url === "http://www.example.org/foo/bar", "example.org should keep it's parameters: " + url );
});

test( "Parse url params http://www.example.org/foo/bar/", function() {
	var url = new jurl("http://www.example.org/foo/bar/").build();
  	ok( url === "http://www.example.org/foo/bar", "example.org should keep it's parameters: " + url );
});

test( "Parse url param http://www.example.org/foo/bar", function() {
	var url = new jurl("http://www.example.org/foo/bar").build();
  	ok( url === "http://www.example.org/foo/bar", "example.org should keep it's parameter: " + url );
});

test( "Parse hash param http://www.example.org/foo/bar#m00", function() {
	var url = new jurl("http://www.example.org/foo/bar#m00").build();
  	ok( url === "http://www.example.org/foo/bar#m00", "example.org should keep it's hash parameter: " + url );
});

test( "Parse complex url with query and url params http://www.example.org/fooz/bar/?foo=bar&boo&m00=true", function() {
	var url = new jurl("http://www.example.org/fooz/bar/?foo=bar&boo&m00=true").build();
  	ok( url === "http://www.example.org/fooz/bar?foo=bar&boo&m00=true", "should parse complex url and query params: "+ url );
});



