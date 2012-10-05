test( "Set hash param to nothing http://www.example.org/foo/bar#m00", function() {
	var url = new jurl("http://www.example.org/foo/bar#m00").setHashParameter("").build();
  	ok( url === "http://www.example.org/foo/bar", "hash parameter should disappear: " + url );
});

test( "Set hash param to nothing http://www.example.org/foo/bar#m00", function() {
	var url = new jurl("http://www.example.org/foo/bar#m00").setHashParameter("fooz").build();
  	ok( url === "http://www.example.org/foo/bar#fooz", "hash parameter should disappear: " + url );
});

test( "Set hash param to nothing http://www.example.org/foo/bar", function() {
	var url = new jurl("http://www.example.org/foo/bar").setHashParameter("m00").build();
  	ok( url === "http://www.example.org/foo/bar#m00", "hash parameter should disappear: " + url );
});
