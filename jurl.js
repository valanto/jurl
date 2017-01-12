var jurl = function (b) {
	var that = this;
	var url = initialParse(b);

	that.addUrlParameter = function(key, index){
		key=trim(key);
		if(!isBlank(key)){
			if(isBlank(index) && isNaN(index)){
				url.urlParameters.push(key);
			} else {
				if(index < url.urlParameters.length){
					url.urlParameters.splice(index, 0, key);
				}
			}
		}
		return that;
	};

	that.setQueryParameter = function(key, value){
		key=trim(key);
		if(!isBlank(key)){
			url.queryParameters[key] = "";
			if(!isBlank(value)){
				url.queryParameters[key] = value;
			}
		}
		return that;
	};

	that.setHashParameter = function(hash){
		hash=trim(hash);
		if(isBlank(hash)){
			url.hashParameter = null;
		}
		url.hashParameter=trim(hash);

		return that;
	};

	that.setHashQueryParameter = function(key, value){
		key=trim(key);
		if(!isBlank(key)){
			url.hashQueryParameters[key] = "";
			if(!isBlank(value)){
				url.hashQueryParameters[key] = value;
			}
		}

		return that;
	}

	that.getHashQueryParameter = function(key){
		key=trim(key);
		if(isBlank(key) ||!url.hashQueryParameters.hasOwnProperty(key)){
			return null;
		}
		return url.hashQueryParameters[key];
	};

	that.updateCurrentHash = function(){
		var hash = that.buildHash();
		if(hash !== null){
			document.location.hash = hash;
		} else {
            document.location.hash = "";
        }
		return that;
	}

	that.getHashParameter = function(){
		return url.hashParameter;
	};

	that.getQueryParameter = function(key){
		key=trim(key);
		if(isBlank(key) ||!url.queryParameters.hasOwnProperty(key)){
			return null;
		}
		return url.queryParameters[key];
	};

	that.getParameterIndex = function(key){
		key=trim(key);
		var p;
		for(p = 0; p < url.urlParameters.length; p+=1){
			if(url.urlParameters[p] === key){
				return p;
			}
		}
		return null;
	};

	that.getHost = function(key){
		return url.base;
	};

	that.removeUrlParameter = function(key){
		key=trim(key);
		if(url.urlParameters.indexOf(key) > -1){
			url.urlParameters.splice(url.urlParameters.indexOf(key), 1);
		}
		return that;
	};

	that.removeQueryParameter = function(key){
		key=trim(key);
		if(url.queryParameters.hasOwnProperty(key)){
			delete url.queryParameters[key];
		}
		return that;
	};


	that.removeHashQueryParameter = function(key){
		key=trim(key);
		if(url.hashQueryParameters.hasOwnProperty(key)){
			delete url.hashQueryParameters[key];
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

		var hashString = that.buildHash();
		if(hashString !== null){
			urlString += "#" + hashString;
		}

		return urlString;
	};

	that.buildHash = function(){
		if(isBlank(url.hashParameter) && Object.keys(url.hashQueryParameters).length === 0){
			return null;
		}

		var hashString = "";
		if(!isBlank(url.hashParameter)){
			hashString += url.hashParameter;
		}
		if(Object.keys(url.hashQueryParameters).length > 0) {
			var hashParams =[];
			for (p in url.hashQueryParameters) {
				if (url.hashQueryParameters.hasOwnProperty(p)) {
					var paramString = p;
					var value = url.hashQueryParameters[p];
					if (!isBlank(value)) {
						paramString += "=" + value;
					}
					hashParams.push(paramString);
				}
			}
			if(hashParams.length > 0){
				hashString += "?" + hashParams.join("&");
			}
		}

		return hashString;
	};

	function isBlank (string) {
		return (string === null) || (typeof (string) === "undefined")  || (trim(string) === "");
	}

	function trim(string){
		if((string === null) || (typeof (string) === "undefined")) {
			return string;
		}
		string = string + "";
		return string.replace(/(^\s*)|(\s*$)/g, "");
	}

	function initialParse (b) {
		var urlRegex = /^((((file|gopher|news|nntp|telnet|http|ftp|https|ftps|sftp):\/\/)?(www\.)?([a-zA-Z0-9\-\.]+(\.[a-zA-Z]{2,3})?(:[a-zA-Z0-9]*)?))?(\/[%.a-zA-Z0-9\-_\/]*)?)(\?([a-zA-Z0-9\-_&=%.\/]*))?(#([a-zA-Z0-9\-\/]*)(\?([a-zA-Z0-9\-_&=\./|+%]*))?)?$/;
		var match = urlRegex.exec(b);
		if(match < 3){
			return "";
		}
		return {
			base: typeof(match[2]) === "undefined" ? "" : match[2] ,
			urlParameters: parseUrlParams(match[9]),
			queryParameters: parseQueryParams(match[11]),
			hashParameter: match[13],
			hashQueryParameters: parseQueryParams(match[15])
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
