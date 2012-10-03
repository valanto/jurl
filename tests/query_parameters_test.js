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

test( "Chaining various methods", function() {
	var url = new jurl("http://www.example.org/foo?foo=bar")
		.addUrlParameter("m00")
		.removeUrlParameter("m00")
		.removeQueryParameter("foo")
		.setQueryParameter("baz", "bar")
		.build();
  	ok( url === "http://www.example.org/foo?baz=bar", "chaining various: " + url );
});
