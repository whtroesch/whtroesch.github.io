(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,540,1080);


(lib.button = function() {
	this.initialize(img.button);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,540,1080);


(lib.car = function() {
	this.initialize(img.car);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,540,1080);


(lib.text1 = function() {
	this.initialize(img.text1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,540,1080);


(lib.text2 = function() {
	this.initialize(img.text2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,540,1080);


(lib.text3 = function() {
	this.initialize(img.text3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,540,1080);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
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


(lib.Symbol5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.instance = new lib.button();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,540,1080), null);


(lib.Symbol4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.instance = new lib.text3();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,540,1080), null);


(lib.Symbol3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.instance = new lib.car();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,540,1080), null);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.instance = new lib.text2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,540,1080), null);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.instance = new lib.text1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,540,1080), null);


// stage content:
(lib.index = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// text3
	this.instance = new lib.Symbol4();
	this.instance.setTransform(271,541,1,1,0,0,0,270,540);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(179).to({_off:false},0).wait(1).to({alpha:0.0217},0).wait(1).to({alpha:0.0435},0).wait(1).to({alpha:0.0652},0).wait(1).to({alpha:0.087},0).wait(1).to({alpha:0.1087},0).wait(1).to({alpha:0.1304},0).wait(1).to({alpha:0.1522},0).wait(1).to({alpha:0.1739},0).wait(1).to({alpha:0.1957},0).wait(1).to({alpha:0.2174},0).wait(1).to({alpha:0.2391},0).wait(1).to({alpha:0.2609},0).wait(1).to({alpha:0.2826},0).wait(1).to({alpha:0.3043},0).wait(1).to({alpha:0.3261},0).wait(1).to({alpha:0.3478},0).wait(1).to({alpha:0.3696},0).wait(1).to({alpha:0.3913},0).wait(1).to({alpha:0.413},0).wait(1).to({alpha:0.4348},0).wait(1).to({alpha:0.4565},0).wait(1).to({alpha:0.4783},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.5217},0).wait(1).to({alpha:0.5435},0).wait(1).to({alpha:0.5652},0).wait(1).to({alpha:0.587},0).wait(1).to({alpha:0.6087},0).wait(1).to({alpha:0.6304},0).wait(1).to({alpha:0.6522},0).wait(1).to({alpha:0.6739},0).wait(1).to({alpha:0.6957},0).wait(1).to({alpha:0.7174},0).wait(1).to({alpha:0.7391},0).wait(1).to({alpha:0.7609},0).wait(1).to({alpha:0.7826},0).wait(1).to({alpha:0.8043},0).wait(1).to({alpha:0.8261},0).wait(1).to({alpha:0.8478},0).wait(1).to({alpha:0.8696},0).wait(1).to({alpha:0.8913},0).wait(1).to({alpha:0.913},0).wait(1).to({alpha:0.9348},0).wait(1).to({alpha:0.9565},0).wait(1).to({alpha:0.9783},0).wait(1).to({alpha:1},0).wait(45));

	// text2
	this.instance_1 = new lib.Symbol2();
	this.instance_1.setTransform(269,541,1,1,0,0,0,270,540);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(90).to({_off:false},0).wait(1).to({alpha:0.0222},0).wait(1).to({alpha:0.0444},0).wait(1).to({alpha:0.0667},0).wait(1).to({alpha:0.0889},0).wait(1).to({alpha:0.1111},0).wait(1).to({alpha:0.1333},0).wait(1).to({alpha:0.1556},0).wait(1).to({alpha:0.1778},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.2222},0).wait(1).to({alpha:0.2444},0).wait(1).to({alpha:0.2667},0).wait(1).to({alpha:0.2889},0).wait(1).to({alpha:0.3111},0).wait(1).to({alpha:0.3333},0).wait(1).to({alpha:0.3556},0).wait(1).to({alpha:0.3778},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.4222},0).wait(1).to({alpha:0.4444},0).wait(1).to({alpha:0.4667},0).wait(1).to({alpha:0.4889},0).wait(1).to({alpha:0.5111},0).wait(1).to({alpha:0.5333},0).wait(1).to({alpha:0.5556},0).wait(1).to({alpha:0.5778},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.6222},0).wait(1).to({alpha:0.6444},0).wait(1).to({alpha:0.6667},0).wait(1).to({alpha:0.6889},0).wait(1).to({alpha:0.7111},0).wait(1).to({alpha:0.7333},0).wait(1).to({alpha:0.7556},0).wait(1).to({alpha:0.7778},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.8222},0).wait(1).to({alpha:0.8444},0).wait(1).to({alpha:0.8667},0).wait(1).to({alpha:0.8889},0).wait(1).to({alpha:0.9111},0).wait(1).to({alpha:0.9333},0).wait(1).to({alpha:0.9556},0).wait(1).to({alpha:0.9778},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.9773},0).wait(1).to({alpha:0.9545},0).wait(1).to({alpha:0.9318},0).wait(1).to({alpha:0.9091},0).wait(1).to({alpha:0.8864},0).wait(1).to({alpha:0.8636},0).wait(1).to({alpha:0.8409},0).wait(1).to({alpha:0.8182},0).wait(1).to({alpha:0.7955},0).wait(1).to({alpha:0.7727},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.7273},0).wait(1).to({alpha:0.7045},0).wait(1).to({alpha:0.6818},0).wait(1).to({alpha:0.6591},0).wait(1).to({alpha:0.6364},0).wait(1).to({alpha:0.6136},0).wait(1).to({alpha:0.5909},0).wait(1).to({alpha:0.5682},0).wait(1).to({alpha:0.5455},0).wait(1).to({alpha:0.5227},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.4773},0).wait(1).to({alpha:0.4545},0).wait(1).to({alpha:0.4318},0).wait(1).to({alpha:0.4091},0).wait(1).to({alpha:0.3864},0).wait(1).to({alpha:0.3636},0).wait(1).to({alpha:0.3409},0).wait(1).to({alpha:0.3182},0).wait(1).to({alpha:0.2955},0).wait(1).to({alpha:0.2727},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.2273},0).wait(1).to({alpha:0.2045},0).wait(1).to({alpha:0.1818},0).wait(1).to({alpha:0.1591},0).wait(1).to({alpha:0.1364},0).wait(1).to({alpha:0.1136},0).wait(1).to({alpha:0.0909},0).wait(1).to({alpha:0.0682},0).wait(1).to({alpha:0.0455},0).wait(1).to({alpha:0.0227},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(90));

	// text1
	this.instance_2 = new lib.Symbol1();
	this.instance_2.setTransform(269,541,1,1,0,0,0,270,540);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({alpha:0.0222},0).wait(1).to({alpha:0.0444},0).wait(1).to({alpha:0.0667},0).wait(1).to({alpha:0.0889},0).wait(1).to({alpha:0.1111},0).wait(1).to({alpha:0.1333},0).wait(1).to({alpha:0.1556},0).wait(1).to({alpha:0.1778},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.2222},0).wait(1).to({alpha:0.2444},0).wait(1).to({alpha:0.2667},0).wait(1).to({alpha:0.2889},0).wait(1).to({alpha:0.3111},0).wait(1).to({alpha:0.3333},0).wait(1).to({alpha:0.3556},0).wait(1).to({alpha:0.3778},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.4222},0).wait(1).to({alpha:0.4444},0).wait(1).to({alpha:0.4667},0).wait(1).to({alpha:0.4889},0).wait(1).to({alpha:0.5111},0).wait(1).to({alpha:0.5333},0).wait(1).to({alpha:0.5556},0).wait(1).to({alpha:0.5778},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.6222},0).wait(1).to({alpha:0.6444},0).wait(1).to({alpha:0.6667},0).wait(1).to({alpha:0.6889},0).wait(1).to({alpha:0.7111},0).wait(1).to({alpha:0.7333},0).wait(1).to({alpha:0.7556},0).wait(1).to({alpha:0.7778},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.8222},0).wait(1).to({alpha:0.8444},0).wait(1).to({alpha:0.8667},0).wait(1).to({alpha:0.8889},0).wait(1).to({alpha:0.9111},0).wait(1).to({alpha:0.9333},0).wait(1).to({alpha:0.9556},0).wait(1).to({alpha:0.9778},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.9778},0).wait(1).to({alpha:0.9556},0).wait(1).to({alpha:0.9333},0).wait(1).to({alpha:0.9111},0).wait(1).to({alpha:0.8889},0).wait(1).to({alpha:0.8667},0).wait(1).to({alpha:0.8444},0).wait(1).to({alpha:0.8222},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.7778},0).wait(1).to({alpha:0.7556},0).wait(1).to({alpha:0.7333},0).wait(1).to({alpha:0.7111},0).wait(1).to({alpha:0.6889},0).wait(1).to({alpha:0.6667},0).wait(1).to({alpha:0.6444},0).wait(1).to({alpha:0.6222},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.5778},0).wait(1).to({alpha:0.5556},0).wait(1).to({alpha:0.5333},0).wait(1).to({alpha:0.5111},0).wait(1).to({alpha:0.4889},0).wait(1).to({alpha:0.4667},0).wait(1).to({alpha:0.4444},0).wait(1).to({alpha:0.4222},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.3778},0).wait(1).to({alpha:0.3556},0).wait(1).to({alpha:0.3333},0).wait(1).to({alpha:0.3111},0).wait(1).to({alpha:0.2889},0).wait(1).to({alpha:0.2667},0).wait(1).to({alpha:0.2444},0).wait(1).to({alpha:0.2222},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.1778},0).wait(1).to({alpha:0.1556},0).wait(1).to({alpha:0.1333},0).wait(1).to({alpha:0.1111},0).wait(1).to({alpha:0.0889},0).wait(1).to({alpha:0.0667},0).wait(1).to({alpha:0.0444},0).wait(1).to({alpha:0.0222},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(179));

	// button
	this.instance_3 = new lib.Symbol5();
	this.instance_3.setTransform(271,541,1,1,0,0,0,270,540);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(179).to({_off:false},0).wait(1).to({alpha:0.0217},0).wait(1).to({alpha:0.0435},0).wait(1).to({alpha:0.0652},0).wait(1).to({alpha:0.087},0).wait(1).to({alpha:0.1087},0).wait(1).to({alpha:0.1304},0).wait(1).to({alpha:0.1522},0).wait(1).to({alpha:0.1739},0).wait(1).to({alpha:0.1957},0).wait(1).to({alpha:0.2174},0).wait(1).to({alpha:0.2391},0).wait(1).to({alpha:0.2609},0).wait(1).to({alpha:0.2826},0).wait(1).to({alpha:0.3043},0).wait(1).to({alpha:0.3261},0).wait(1).to({alpha:0.3478},0).wait(1).to({alpha:0.3696},0).wait(1).to({alpha:0.3913},0).wait(1).to({alpha:0.413},0).wait(1).to({alpha:0.4348},0).wait(1).to({alpha:0.4565},0).wait(1).to({alpha:0.4783},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.5217},0).wait(1).to({alpha:0.5435},0).wait(1).to({alpha:0.5652},0).wait(1).to({alpha:0.587},0).wait(1).to({alpha:0.6087},0).wait(1).to({alpha:0.6304},0).wait(1).to({alpha:0.6522},0).wait(1).to({alpha:0.6739},0).wait(1).to({alpha:0.6957},0).wait(1).to({alpha:0.7174},0).wait(1).to({alpha:0.7391},0).wait(1).to({alpha:0.7609},0).wait(1).to({alpha:0.7826},0).wait(1).to({alpha:0.8043},0).wait(1).to({alpha:0.8261},0).wait(1).to({alpha:0.8478},0).wait(1).to({alpha:0.8696},0).wait(1).to({alpha:0.8913},0).wait(1).to({alpha:0.913},0).wait(1).to({alpha:0.9348},0).wait(1).to({alpha:0.9565},0).wait(1).to({alpha:0.9783},0).wait(1).to({alpha:1},0).wait(45));

	// car
	this.instance_4 = new lib.Symbol3();
	this.instance_4.setTransform(269,541,1,1,0,0,0,270,540);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(90).to({_off:false},0).wait(1).to({alpha:0.0222},0).wait(1).to({alpha:0.0444},0).wait(1).to({alpha:0.0667},0).wait(1).to({alpha:0.0889},0).wait(1).to({alpha:0.1111},0).wait(1).to({alpha:0.1333},0).wait(1).to({alpha:0.1556},0).wait(1).to({alpha:0.1778},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.2222},0).wait(1).to({alpha:0.2444},0).wait(1).to({alpha:0.2667},0).wait(1).to({alpha:0.2889},0).wait(1).to({alpha:0.3111},0).wait(1).to({alpha:0.3333},0).wait(1).to({alpha:0.3556},0).wait(1).to({alpha:0.3778},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.4222},0).wait(1).to({alpha:0.4444},0).wait(1).to({alpha:0.4667},0).wait(1).to({alpha:0.4889},0).wait(1).to({alpha:0.5111},0).wait(1).to({alpha:0.5333},0).wait(1).to({alpha:0.5556},0).wait(1).to({alpha:0.5778},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.6222},0).wait(1).to({alpha:0.6444},0).wait(1).to({alpha:0.6667},0).wait(1).to({alpha:0.6889},0).wait(1).to({alpha:0.7111},0).wait(1).to({alpha:0.7333},0).wait(1).to({alpha:0.7556},0).wait(1).to({alpha:0.7778},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.8222},0).wait(1).to({alpha:0.8444},0).wait(1).to({alpha:0.8667},0).wait(1).to({alpha:0.8889},0).wait(1).to({alpha:0.9111},0).wait(1).to({alpha:0.9333},0).wait(1).to({alpha:0.9556},0).wait(1).to({alpha:0.9778},0).wait(1).to({alpha:1},0).wait(135));

	// bg
	this.instance_5 = new lib.bg();
	this.instance_5.setTransform(-1,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(270));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(269,539,272,542);
// library properties:
lib.properties = {
	id: '5A2AA1E1CD66174687123C19C417635B',
	width: 540,
	height: 1080,
	fps: 30,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [
		{src:"images/bg.jpg", id:"bg"},
		{src:"images/button.png", id:"button"},
		{src:"images/car.png", id:"car"},
		{src:"images/text1.png", id:"text1"},
		{src:"images/text2.png", id:"text2"},
		{src:"images/text3.png", id:"text3"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

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
an.compositions['5A2AA1E1CD66174687123C19C417635B'] = {
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
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;