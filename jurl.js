var jurl = function (b) {
	var that = this;
	var url = initialParse(b);
	
	that.addUrlParameter = function(key){
		if(!isBlank(key)){
			url.urlParameters.push(key);			
		}
		return that;
	};
	
	that.removeUrlParameter = function(key){
		if(url.urlParameters.indexOf(key) > -1){
			url.urlParameters.splice(url.urlParameters.indexOf(key), 1);
		}
		return that;
	};
	
	that.removeQueryParameter = function(key){
		if(url.queryParameters.hasOwnProperty(key)){
			delete url.queryParameters[key];
		}
		return that;
	};
	
	that.build = function () {
		var urlString = url.base;
		if (url.urlParameters.length > 0) {
			urlString += "/" + url.urlParameters.join("/");
		}
		
		var params = [], p;
		for (p in url.queryParameters) {
			if (url.queryParameters.hasOwnProperty(p)) {
				var paramString = p;
				var value = url.queryParameters[p];
				if (!isBlank(value)) {
					paramString += "=" + value;
				}
				params.push(paramString);
			}
		}
		if(params.length > 0){
			urlString += "?" + params.join("&");			
		}
		return urlString;
	};
	
	function isBlank (string) {
		return (string === null) || (typeof (string) === "undefined")  || (string === "");
	}
	
	function initialParse (b) {
		var urlRegex = /^((((file|gopher|news|nntp|telnet|http|ftp|https|ftps|sftp):\/\/)?(www\.)?([a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(:[a-zA-Z0-9]*)?))(\/[a-zA-Z0-9\-_\/]*)?)(\?([a-zA-Z0-9\-_&=]*))?(#([a-zA-Z0-9\-_&=\/]*))?$/;
		var match = urlRegex.exec(b);
		if(match < 3){
			return "";
		}
		return {
			base: match[2],
			urlParameters: parseUrlParams(match[8]),
			queryParameters: parseQueryParams(match[10])
		}
	}
	
	function parseQueryParams (queryString) {
		if (isBlank(queryString)) {
			return {};
		}
		var params = {};
		var splitParams = queryString.split("&");
		var s;
		for (s=0; s < splitParams.length; s+=1) {
			var keyValueSplit = splitParams[s].split("=");
			params[keyValueSplit[0]] = "";
			if (keyValueSplit.length > 1) {
				params[keyValueSplit[0]] = keyValueSplit[1];
			}
		}
		return params;
	}
	
	function parseUrlParams (urlString) {
		if (isBlank(urlString)) {
			return [];
		}
		var params = [];
		var splitParams = urlString.split("/");
		var s;
		for (s=0; s < splitParams.length; s+=1) {
			if(!isBlank(splitParams[s])){				
				params.push(splitParams[s]);
			}
		}
		return params;
	}
	
	return that;
};

(function( $ ) {
  $.fn.jurl = function() {
	if(this.attr("href")){
	  	return new jurl(this.attr("href"));		
	}
	throw "Not href attribute on element: " + input;
   
  };
})( jQuery );