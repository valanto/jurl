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
	var url = new jurl("http://www.example.org/foo").build();
  	ok( url === "http://www.example.org/foo", "example.org should keep it's parameter: " + url );
});

test( "Parse complex url with query and url params http://www.example.org/fooz/bar/?foo=bar&boo&m00=true", function() {
	var url = new jurl("http://www.example.org/fooz/bar/?foo=bar&boo&m00=true").build();
  	ok( url === "http://www.example.org/fooz/bar?foo=bar&boo&m00=true", "should parse complex url and query params: "+ url );
});

test( "Remove url parameter", function() {
	var url = new jurl("http://www.example.org/foo").removeUrlParameter("foo").build();
  	ok( url === "http://www.example.org", "url parameter foo should be removed: " + url );
});

test( "Remove url parameter", function() {
	var url = new jurl("http://www.example.org/foo/bar").removeUrlParameter("foo").build();
  	ok( url === "http://www.example.org/bar", "url parameter foo should be removed: " + url );
});

test( "Remove query parameter", function() {
	var url = new jurl("http://www.example.org/foo?foo=bar").removeQueryParameter("foo").build();
  	ok( url === "http://www.example.org/foo", "query parameter foo should be removed: " + url );
});

test( "Remove query parameter", function() {
	var url = new jurl("http://www.example.org/foo?foo=bar&baz=bar").removeQueryParameter("foo").build();
  	ok( url === "http://www.example.org/foo?baz=bar", "query parameter foo should be removed: " + url );
});

test( "Remove query parameter", function() {
	var url = new jurl("http://www.example.org/foo?foo=bar&foo=bar").removeQueryParameter("foo").build();
  	ok( url === "http://www.example.org/foo", "query parameter foo should be removed: " + url );
});

test( "Add url parameter", function() {
	var url = new jurl("http://www.example.org/foo").addUrlParameter("foo").build();
  	ok( url === "http://www.example.org/foo/foo", "url parameter foo should be added: " + url );
});

test( "Remove url parameter", function() {
	var url = new jurl("http://www.example.org/foo").addUrlParameter("bar").build();
  	ok( url === "http://www.example.org/foo/bar", "url parameter bar should be added: " + url );
});

test( "Add query parameter", function() {
	var url = new jurl("http://www.example.org/foo").setQueryParameter("foo", "bar").build();
  	ok( url === "http://www.example.org/foo?foo=bar", "query parameter foo should be added: " + url );
});

test( "Not add blank query parameter", function() {
	var url = new jurl("http://www.example.org/foo").setQueryParameter(" ").build();
  	ok( url === "http://www.example.org/foo", "query parameter foo should not be added: " + url );
});

test( "Update query parameter", function() {
	var url = new jurl("http://www.example.org/foo?foo=bar&baz=bar").setQueryParameter("foo", "m00").build();
  	ok( url === "http://www.example.org/foo?foo=m00&baz=bar", "query parameter foo should be updated: " + url );
});

test( "Add query parameter", function() {
	var url = new jurl("http://www.example.org/foo?baz=bar").setQueryParameter("foo").build();
  	ok( url === "http://www.example.org/foo?baz=bar&foo", "query parameter foo should be added: " + url );
});
