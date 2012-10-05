test( "Add url parameter", function() {
	var url = new jurl("http://www.example.org/foo").addUrlParameter("foo").build();
  	ok( url === "http://www.example.org/foo/foo", "url parameter foo should be added: " + url );
});

test( "Add url parameter add index 1", function() {
	var url = new jurl("http://www.example.org/foo/bar/baz").addUrlParameter("m00", 1).build();
  	ok( url === "http://www.example.org/foo/m00/bar/baz", "url parameter foo should be added: " + url );
});

test( "Add url parameter add index 0", function() {
	var url = new jurl("http://www.example.org/foo/bar/baz").addUrlParameter("m00", 0).build();
  	ok( url === "http://www.example.org/m00/foo/bar/baz", "url parameter foo should be added: " + url );
});

test( "Should not add url parameter add no existing index", function() {
	var url = new jurl("http://www.example.org/foo/bar/baz").addUrlParameter("m00", 5).build();
  	ok( url === "http://www.example.org/foo/bar/baz", "url parameter foo should be added: " + url );
});

test( "Not add blank url parameter", function() {
	var url = new jurl("http://www.example.org/foo").addUrlParameter("  ").build();
  	ok( url === "http://www.example.org/foo", "url parameter should not be added: " + url );
});

test( "Not add blank url parameter", function() {
	var url = new jurl("http://www.example.org/foo").addUrlParameter().build();
  	ok( url === "http://www.example.org/foo", "url parameter foo should not be added: " + url );
});

test( "Not add blank url parameter", function() {
	var url = new jurl("http://www.example.org/foo").addUrlParameter(null).build();
  	ok( url === "http://www.example.org/foo", "url parameter foo should not be added: " + url );
});

test( "Remove url parameter", function() {
	var url = new jurl("http://www.example.org/foo").removeUrlParameter("foo").build();
  	ok( url === "http://www.example.org", "url parameter foo should be removed: " + url );
});

test( "Remove url parameter", function() {
	var url = new jurl("http://www.example.org/foo/bar").removeUrlParameter("foo").build();
  	ok( url === "http://www.example.org/bar", "url parameter foo should be removed: " + url );
});

test( "Remove url parameter", function() {
	var url = new jurl("http://www.example.org/foo").addUrlParameter("bar").build();
  	ok( url === "http://www.example.org/foo/bar", "url parameter bar should be added: " + url );
});

test( "Get parameter's index for valid key", function() {
	var url = new jurl("http://www.example.org/foo/bar");
  	ok( url.getParameterIndex("foo") === 0, "parameter index should be found. index: " + url.getParameterIndex("bar") );
});

test( "Get parameter's index for valid key", function() {
	var url = new jurl("http://www.example.org/foo/bar");
  	ok( url.getParameterIndex("bar") === 1, "parameter index should be found. index: " + url.getParameterIndex("bar") );
});

test( "Not get parameter's index for invalid key", function() {
	var url = new jurl("http://www.example.org/foo/bar");
  	ok( url.getParameterIndex("fooz") === null, "parameter index should not be found: " + url.build() );
});

test( "Not get parameter's index for invalid key", function() {
	var url = new jurl("http://www.example.org/foo/bar");
  	ok( url.getParameterIndex() === null, "parameter index should not be found: " + url.build() );
});

