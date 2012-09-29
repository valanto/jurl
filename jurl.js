var jurl = function (b) {
	var that = this;
	var queryParameters = [];
	var url = initialParse(b);
	
	that.build = function () {
		var urlString = url.base;
		if (url.queryParameters.length > 0) {
			var params = [], p;
			for (p in url.queryParameters) {
				if (url.queryParameters.hasOwnProperty(p)) {
					var paramString;
					var param = url.queryParameters[p];
					if (!isBlank(param.key)) {
						paramString = param.key;
					}
					if (param.hasOwnProperty("value") && !isBlank(param.value)) {
						paramString += "=" + param.value;
					}
					params.push(paramString);
				}
			}
			urlString += "?" + params.join("&");
		}
		return urlString;
	};
	
	function isBlank (string) {
		return (string === null) || (typeof (string) === "undefined")  || (string === "");
	}
	
	function initialParse (b) {
		var urlRegex = /^(((file|gopher|news|nntp|telnet|http|ftp|https|ftps|sftp):\/\/)?(www\.)?([a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(:[a-zA-Z0-9]*)?)([a-zA-Z0-9\-_\/]*))(\?([a-zA-Z0-9\-_&=]*))?(#([a-zA-Z0-9\-_&=\/]*))?$/;
		var match = urlRegex.exec(b);
		if(match < 3){
			return "";
		}
		return {
			base: match[1],
			queryParameters: parseQueryParams(match[9])
		}
	}
	
	function parseQueryParams (queryString) {
		if (isBlank(queryString)) {
			return [];
		}
		var params = [];
		var splitParams = queryString.split("&");
		var s;
		for (s=0; s < splitParams.length; s+=1) {
			var keyValueSplit = splitParams[s].split("=");
			var param = { key: keyValueSplit[0]};
			if (keyValueSplit.length > 1) {
				param.value = keyValueSplit[1];
			}
			params.push(param);
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