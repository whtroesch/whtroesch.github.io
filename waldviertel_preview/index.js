(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.avant = function() {
	this.initialize(img.avant);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,639,310);


(lib.limousine = function() {
	this.initialize(img.limousine);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,639,310);


(lib.sportback = function() {
	this.initialize(img.sportback);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,639,310);


(lib.text = function() {
	this.initialize(img.text);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,639,310);


(lib.vorteil = function() {
	this.initialize(img.vorteil);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,155,155);// helper functions:

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
	this.instance = new lib.vorteil();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,155,155), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.limousine();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,639,310), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.sportback();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,639,310), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.avant();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,639,310), null);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// vorteil
	this.instance = new lib.Symbol4();
	this.instance.setTransform(88.5,204.5,1,1,0,0,0,77.5,77.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.9871,scaleY:0.9871},0).wait(1).to({scaleX:0.9742,scaleY:0.9742},0).wait(1).to({scaleX:0.9613,scaleY:0.9613},0).wait(1).to({scaleX:0.9484,scaleY:0.9484},0).wait(1).to({scaleX:0.9613,scaleY:0.9613},0).wait(1).to({scaleX:0.9742,scaleY:0.9742},0).wait(1).to({scaleX:0.9871,scaleY:0.9871},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:0.9871,scaleY:0.9871},0).wait(1).to({scaleX:0.9742,scaleY:0.9742},0).wait(1).to({scaleX:0.9613,scaleY:0.9613},0).wait(1).to({scaleX:0.9484,scaleY:0.9484},0).wait(1).to({scaleX:0.9613,scaleY:0.9613},0).wait(1).to({scaleX:0.9742,scaleY:0.9742},0).wait(1).to({scaleX:0.9871,scaleY:0.9871},0).wait(1).to({scaleX:1,scaleY:1},0).wait(25).to({scaleX:0.9871,scaleY:0.9871},0).wait(1).to({scaleX:0.9742,scaleY:0.9742},0).wait(1).to({scaleX:0.9613,scaleY:0.9613},0).wait(1).to({scaleX:0.9484,scaleY:0.9484},0).wait(1).to({scaleX:0.9613,scaleY:0.9613},0).wait(1).to({scaleX:0.9742,scaleY:0.9742},0).wait(1).to({scaleX:0.9871,scaleY:0.9871},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:0.9871,scaleY:0.9871},0).wait(1).to({scaleX:0.9742,scaleY:0.9742},0).wait(1).to({scaleX:0.9613,scaleY:0.9613},0).wait(1).to({scaleX:0.9484,scaleY:0.9484},0).wait(1).to({scaleX:0.9613,scaleY:0.9613},0).wait(1).to({scaleX:0.9742,scaleY:0.9742},0).wait(1).to({scaleX:0.9871,scaleY:0.9871},0).wait(1).to({scaleX:1,scaleY:1},0).wait(25).to({scaleX:0.9871,scaleY:0.9871},0).wait(1).to({scaleX:0.9742,scaleY:0.9742},0).wait(1).to({scaleX:0.9613,scaleY:0.9613},0).wait(1).to({scaleX:0.9484,scaleY:0.9484},0).wait(1).to({scaleX:0.9613,scaleY:0.9613},0).wait(1).to({scaleX:0.9742,scaleY:0.9742},0).wait(1).to({scaleX:0.9871,scaleY:0.9871},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:0.9871,scaleY:0.9871},0).wait(1).to({scaleX:0.9742,scaleY:0.9742},0).wait(1).to({scaleX:0.9613,scaleY:0.9613},0).wait(1).to({scaleX:0.9484,scaleY:0.9484},0).wait(1).to({scaleX:0.9613,scaleY:0.9613},0).wait(1).to({scaleX:0.9742,scaleY:0.9742},0).wait(1).to({scaleX:0.9871,scaleY:0.9871},0).wait(1).to({scaleX:1,scaleY:1},0).wait(24));

	// text
	this.instance_1 = new lib.text();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(120));

	// fzg3
	this.instance_2 = new lib.Symbol3();
	this.instance_2.setTransform(319.5,155,1,1,0,0,0,319.5,155);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(80).to({_off:false},0).wait(40));

	// fzg2
	this.instance_3 = new lib.Symbol2();
	this.instance_3.setTransform(319.5,155,1,1,0,0,0,319.5,155);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(40).to({_off:false},0).wait(39).to({_off:true},1).wait(40));

	// fzg1
	this.instance_4 = new lib.Symbol1();
	this.instance_4.setTransform(319.5,155,1,1,0,0,0,319.5,155);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(39).to({_off:true},1).wait(80));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(319.5,155,319.5,155);
// library properties:
lib.properties = {
	id: '97457D373AF1364CB060B29AB919F90A',
	width: 639,
	height: 310,
	fps: 24,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [
		{src:"images/avant.jpg", id:"avant"},
		{src:"images/limousine.jpg", id:"limousine"},
		{src:"images/sportback.jpg", id:"sportback"},
		{src:"images/text.png", id:"text"},
		{src:"images/vorteil.png", id:"vorteil"}
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
an.compositions['97457D373AF1364CB060B29AB919F90A'] = {
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