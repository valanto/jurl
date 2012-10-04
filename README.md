jurl
====

Javascript URL Builder and Manipulator

Introduction
============
A simple utility to parse urls and allow you to manipulate and rebuild them.

Methods
=======
	addUrlParameter(key): Allows you add a new URL parameter to the URL. The new key is 	
						  appened at the end of the URL.
	setQueryParameter(key, value): Allows you to add a new query parameter in the query
								   string of the URL. Takes in a key and a value (the 
								   value is optional). If a key already exists then it 
								   replaces its value with the new one.
	removeUrlParameter(key): Removes the URL parameters with the given key.
	removeQueryParameter(key): Removes the query parameter with the given key.
	build(): Builds the URL into a complete URL string.


Examples
========
Parsing a URL
-------------
	new jurl("http://www.example.org?foo=bar").build();	
> http://www.example.org?foo=bar
	
Adding URL parameter
--------------------
	new jurl("http://www.example.org?foo=bar").addUrlParameter("foo").build();	
> http://www.example.org/foo?foo=bar

Removing a URL parameter
------------------------
	new jurl("http://www.example.org/foo/bar").removeUrlParameter("foo").build();
> http://www.example.org/bar
	
Setting a query parameter
-------------------------
	new jurl("http://www.example.org/foo").setQueryParameter("foo", "bar").build();
> http://www.example.org/foo?foo=bar
	
Removing a query parameter
--------------------------
	new jurl("http://www.example.org/foo?foo=bar").removeQueryParameter("foo").build();
> http://www.example.org/foo
	
Chaining all
------------
	new jurl("http://www.example.org/foo?foo=bar")
		.addUrlParameter("m00")
		.removeUrlParameter("m00")
		.removeQueryParameter("foo")
		.setQueryParameter("baz", "bar")
		.build();
> http://www.example.org/foo?baz=bar
	
	
	