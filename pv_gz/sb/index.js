(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_", frames: [[0,354,415,88],[0,0,491,260],[0,262,625,90]]}
];


// symbols:



(lib.button = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.header = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.vorteil = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.button();
	this.instance.setTransform(0,0,1.1508,1.1508);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,477.6,101.3), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.vorteil();
	this.instance.setTransform(0,0,1.1752,1.1752);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,734.5,105.8), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.header();
	this.instance.setTransform(0,0,1.1114,1.1114);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,545.7,289), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.Symbol4();
	this.instance.setTransform(238.8,50.6,1,1,0,0,0,238.8,50.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.9774,scaleY:0.9774,x:238.75,y:50.55},0).wait(1).to({scaleX:0.9549,scaleY:0.9549,x:238.8},0).wait(1).to({scaleX:0.9323,scaleY:0.9323},0).wait(1).to({scaleX:0.9098,scaleY:0.9098,x:238.75,y:50.6},0).wait(1).to({scaleX:0.9323,scaleY:0.9323,x:238.8,y:50.55},0).wait(1).to({scaleX:0.9549,scaleY:0.9549},0).wait(1).to({scaleX:0.9774,scaleY:0.9774,x:238.75},0).wait(1).to({scaleX:1,scaleY:1,x:238.8,y:50.6},0).wait(1).to({scaleX:0.9774,scaleY:0.9774,x:238.75,y:50.55},0).wait(1).to({scaleX:0.9549,scaleY:0.9549,x:238.8},0).wait(1).to({scaleX:0.9323,scaleY:0.9323},0).wait(1).to({scaleX:0.9098,scaleY:0.9098,x:238.75,y:50.6},0).wait(1).to({scaleX:0.9323,scaleY:0.9323,x:238.8,y:50.55},0).wait(1).to({scaleX:0.9549,scaleY:0.9549},0).wait(1).to({scaleX:0.9774,scaleY:0.9774,x:238.75},0).wait(1).to({scaleX:1,scaleY:1,x:238.8,y:50.6},0).wait(44).to({scaleX:0.9774,scaleY:0.9774,x:238.75,y:50.55},0).wait(1).to({scaleX:0.9549,scaleY:0.9549,x:238.8},0).wait(1).to({scaleX:0.9323,scaleY:0.9323},0).wait(1).to({scaleX:0.9098,scaleY:0.9098,x:238.75,y:50.6},0).wait(1).to({scaleX:0.9323,scaleY:0.9323,x:238.8,y:50.55},0).wait(1).to({scaleX:0.9549,scaleY:0.9549},0).wait(1).to({scaleX:0.9774,scaleY:0.9774,x:238.75},0).wait(1).to({scaleX:1,scaleY:1,x:238.8,y:50.6},0).wait(1).to({scaleX:0.9774,scaleY:0.9774,x:238.75,y:50.55},0).wait(1).to({scaleX:0.9549,scaleY:0.9549,x:238.8},0).wait(1).to({scaleX:0.9323,scaleY:0.9323},0).wait(1).to({scaleX:0.9098,scaleY:0.9098,x:238.75,y:50.6},0).wait(1).to({scaleX:0.9323,scaleY:0.9323,x:238.8,y:50.55},0).wait(1).to({scaleX:0.9549,scaleY:0.9549},0).wait(1).to({scaleX:0.9774,scaleY:0.9774,x:238.75},0).wait(1).to({scaleX:1,scaleY:1,x:238.8,y:50.6},0).wait(45));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,477.6,101.3);


// stage content:
(lib.index = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// button
	this.instance = new lib.Symbol3();
	this.instance.setTransform(250.8,791.6,1,1,0,0,0,238.8,50.6);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(27).to({_off:false},0).wait(1).to({alpha:0.0435},0).wait(1).to({alpha:0.087},0).wait(1).to({alpha:0.1304},0).wait(1).to({alpha:0.1739},0).wait(1).to({alpha:0.2174},0).wait(1).to({alpha:0.2609},0).wait(1).to({alpha:0.3043},0).wait(1).to({alpha:0.3478},0).wait(1).to({alpha:0.3913},0).wait(1).to({alpha:0.4348},0).wait(1).to({alpha:0.4783},0).wait(1).to({alpha:0.5217},0).wait(1).to({alpha:0.5652},0).wait(1).to({alpha:0.6087},0).wait(1).to({alpha:0.6522},0).wait(1).to({alpha:0.6957},0).wait(1).to({alpha:0.7391},0).wait(1).to({alpha:0.7826},0).wait(1).to({alpha:0.8261},0).wait(1).to({alpha:0.8696},0).wait(1).to({alpha:0.913},0).wait(1).to({alpha:0.9565},0).wait(1).to({alpha:1},0).wait(1));

	// vorteil
	this.instance_1 = new lib.Symbol2();
	this.instance_1.setTransform(240.15,599,0.7896,0.7896,0,0,0,288.5,47.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15).to({_off:false},0).wait(1).to({regX:367.2,regY:52.9,x:302.25,y:603.55,alpha:0.0435},0).wait(1).to({alpha:0.087},0).wait(1).to({scaleY:0.7895,x:302.3,alpha:0.1304},0).wait(1).to({scaleX:0.7897,alpha:0.1739},0).wait(1).to({alpha:0.2174},0).wait(1).to({alpha:0.2609},0).wait(1).to({alpha:0.3043},0).wait(1).to({alpha:0.3478},0).wait(1).to({alpha:0.3913},0).wait(1).to({scaleY:0.7894,alpha:0.4348},0).wait(1).to({alpha:0.4783},0).wait(1).to({alpha:0.5217},0).wait(1).to({alpha:0.5652},0).wait(1).to({alpha:0.6087},0).wait(1).to({alpha:0.6522},0).wait(1).to({scaleY:0.7893,alpha:0.6957},0).wait(1).to({alpha:0.7391},0).wait(1).to({alpha:0.7826},0).wait(1).to({alpha:0.8261},0).wait(1).to({alpha:0.8696},0).wait(1).to({alpha:0.913},0).wait(1).to({scaleY:0.7892,alpha:0.9565},0).wait(1).to({alpha:1},0).wait(13));

	// header
	this.instance_2 = new lib.Symbol1();
	this.instance_2.setTransform(283.9,309.5,1,1,0,0,0,272.9,144.5);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:272.8,x:283.8,alpha:0.0435},0).wait(1).to({alpha:0.087},0).wait(1).to({alpha:0.1304},0).wait(1).to({alpha:0.1739},0).wait(1).to({alpha:0.2174},0).wait(1).to({alpha:0.2609},0).wait(1).to({alpha:0.3043},0).wait(1).to({alpha:0.3478},0).wait(1).to({alpha:0.3913},0).wait(1).to({alpha:0.4348},0).wait(1).to({alpha:0.4783},0).wait(1).to({alpha:0.5217},0).wait(1).to({alpha:0.5652},0).wait(1).to({alpha:0.6087},0).wait(1).to({alpha:0.6522},0).wait(1).to({alpha:0.6957},0).wait(1).to({alpha:0.7391},0).wait(1).to({alpha:0.7826},0).wait(1).to({alpha:0.8261},0).wait(1).to({alpha:0.8696},0).wait(1).to({alpha:0.913},0).wait(1).to({alpha:0.9565},0).wait(1).to({alpha:1},0).wait(28));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(311,765,281.4,77.29999999999995);
// library properties:
lib.properties = {
	id: '59DD181D3D5CC0488BDE8FADDDDE3413',
	width: 600,
	height: 1200,
	fps: 24,
	color: "#1C1F3E",
	opacity: 1.00,
	manifest: [
		{src:"images/index_atlas_.png", id:"index_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.StageGL();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['59DD181D3D5CC0488BDE8FADDDDE3413'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;