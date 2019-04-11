var preClickAction = function() {
	return true;
}

var clickAction = function() { 
	
	var clickparam = (typeof window.clicktagParam == "undefined"?"clicktag":window.clicktagParam);
	
	if(typeof Enabler != "undefined") { 
		Enabler.exit("Background Exit");
	} else if(typeof dhtml != "undefined") { 
		var clickurl = dhtml.getVar("clickTAG", "");
		if(clickurl!="") window.open(clickurl, dhtml.getVar("landingPageTarget", "_blank")); 
	} else if(typeof window.clickTag != "undefined") {
		window.open(window.clickTag); 
	} else {
		if(clickparam!="clicktag" && (typeof getUriParams[clickparam] == "undefined" || getUriParams[clickparam]==""))
			clickparam = "clicktag"; 

		if(typeof getUriParams[clickparam] != "undefined" && getUriParams[clickparam]!="") window.open(getUriParams[clickparam]); 
	}
	
};

var getUriParams = function() { // IAB Standard Code Snippet
	
  var query_string = {}
  var query = window.location.search.substring(1);
  var parmsArray = query.split("&");
  
	if(parmsArray.length <= 0) return query_string;
	  for(var i = 0; i < parmsArray.length; i++) {
					var pair = parmsArray[i].split("=");
					var val = decodeURIComponent(pair[1]);
					var param = pair[0].toLowerCase();
					if (val != "" && pair[0] != "") query_string[param] = val;
	  }
	
  return query_string;
	
}();

function addClicktag(clickPreAction) { // add Clicktag to Canvas
	
	var canvases = document.getElementsByTagName("canvas");
	
	for(var c=0;c<canvases.length;c++) canvases[c].style.cursor="pointer";
		if(typeof clickPreAction == "function") preClickAction = clickPreAction;
		document.body.addEventListener("mousedown", function(e) { 
			if(e.which===1||e.button===0) window.clickok=true; 
			else window.clickok=false; 
		});
		document.body.addEventListener("touchstart", function(e) { 
			if(e.which===1||e.button===0) window.clickok=true; 
			else window.clickok=false; 
		});
	
	document.body.addEventListener("click", function(e) { 
		
		if(typeof e.target != "undefined" && e.target==document.body) return;
		
		if(window.clickok==true && !window.stopClicktag) {
			if(preClickAction()!==false)
				clickAction();
		}
		
		window.clickok=false;
		window.stopClicktag = false;
		window.clicktagParam = "clicktag";
	});
	
}