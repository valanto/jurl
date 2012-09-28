var jurl = function(b){
	var that = this;
	var base;
	initialParse(b);
	
	
	
	that.build = function(){
		return base;
	}
	
	function initialParse(b){
		base = b;
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