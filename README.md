jurl
====

Javascript URL Builder and Manipulator

Introduction
============
A simple utility to parse urls and allow you to manipulate and rebuild them.

Methods
=======
**addUrlParameter(key, index):** Allows you add a new URL parameter to the URL. The new key is appened at the end of the URL. The index parameter is optional. If you provide it then the URL parameter will be positioned at exactly that index rather than appended at the end.

**setQueryParameter(key, value):** Allows you to add a new query parameter in the query string of the URL. Takes in a key and a value (the value is optional). If a key already exists then it replaces its value with the new one.

**setHashParameter(hash):** Sets the hash part of the URL to whatever you give it. If nothing is given then the hash becomes empty.

**getQueryParameter(key):** Gets the value of a query parameter based on a given key.

**getParameterIndex(key):** Gets the index of a given key based on where it is positioned in the URL parameters

**removeUrlParameter(key):** Removes the URL parameters with the given key.

**removeQueryParameter(key):** Removes the query parameter with the given key.

**build():** Builds the URL into a complete URL string.


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


Adding URL parameter at index
-----------------------------
	new jurl("http://www.example.org/m00/bar?foo=bar").addUrlParameter("foo", 1).build();	
> http://www.example.org/m00/foo/bar?foo=bar

Setting a query parameter
-------------------------
	new jurl("http://www.example.org/foo").setQueryParameter("foo", "bar").build();
> http://www.example.org/foo?foo=bar

Setting hash parameter
----------------------
	new jurl("http://www.example.org?foo=bar").setHashParameter("foo").build();	
> http://www.example.org?foo=bar#foo

Getting query parameter value
-----------------------------
	new jurl("http://www.example.org?foo=bar").getQueryParameter("foo");	
> bar

Getting URL parameter index
---------------------------
	new jurl("http://www.example.org/bar/foo/m00").getParameterIndex("foo");	
> 1

Removing a URL parameter
------------------------
	new jurl("http://www.example.org/foo/bar").removeUrlParameter("foo").build();
> http://www.example.org/bar
	
	
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
		.setHashParameter("bob")
		.build();
> http://www.example.org/foo?baz=bar#bob
	
	
	