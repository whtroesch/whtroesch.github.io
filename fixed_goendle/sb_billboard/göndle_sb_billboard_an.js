(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2000,1482);


(lib.button = function() {
	this.initialize(img.button);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,283,76);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,970,250);


(lib.muffel = function() {
	this.initialize(img.muffel);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,970,250);


(lib.text = function() {
	this.initialize(img.text);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,970,250);// helper functions:

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
	this.instance = new lib.text();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,970,250), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.muffel();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,970,250), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.logo();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,970,250), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.bg();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,2000,1482), null);


(lib.button_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.button();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.724,0.724);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.78,scaleY:0.78,x:-8,y:-2},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,204.8,55);


// stage content:
(lib.göndle_sb_billboard_an = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// button
	this.instance = new lib.button_1();
	this.instance.parent = this;
	this.instance.setTransform(736.3,96.6,0.893,0.893);
	this.instance.alpha = 0;
	this.instance._off = true;
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.button_1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(63).to({_off:false},0).wait(1).to({regX:102.7,regY:27.7,x:828,y:121.4,alpha:0.031},0).wait(1).to({alpha:0.063},0).wait(1).to({alpha:0.094},0).wait(1).to({alpha:0.125},0).wait(1).to({alpha:0.156},0).wait(1).to({alpha:0.188},0).wait(1).to({alpha:0.219},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.281},0).wait(1).to({alpha:0.313},0).wait(1).to({alpha:0.344},0).wait(1).to({y:121.3,alpha:0.375},0).wait(1).to({alpha:0.406},0).wait(1).to({alpha:0.438},0).wait(1).to({alpha:0.469},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.531},0).wait(1).to({alpha:0.563},0).wait(1).to({alpha:0.594},0).wait(1).to({alpha:0.625},0).wait(1).to({x:827.9,alpha:0.656},0).wait(1).to({alpha:0.688},0).wait(1).to({alpha:0.719},0).wait(1).to({scaleY:0.89,alpha:0.75},0).wait(1).to({alpha:0.781},0).wait(1).to({alpha:0.813},0).wait(1).to({alpha:0.844},0).wait(1).to({alpha:0.875},0).wait(1).to({scaleX:0.89,alpha:0.906},0).wait(1).to({alpha:0.938},0).wait(1).to({alpha:0.969},0).wait(1).to({alpha:1},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:828.4,y:120.5},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:828.9,y:119.8},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:829.5,y:119},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:830,y:118.3},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:830.5,y:117.5},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:830,y:118.3},0).wait(1).to({scaleX:0.98,scaleY:0.99,x:829.5,y:119},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:829,y:119.8},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:828.5,y:120.6},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:828.1,y:121.4},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:828.6,y:120.6},0).wait(1).to({scaleX:0.96,scaleY:0.95,x:829.1,y:119.8},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:829.7,y:119.1},0).wait(1).to({scaleX:1.02,scaleY:1.01,x:830.2,y:118.3},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:830.8,y:117.5},0).wait(1).to({scaleX:1.02,scaleY:1.01,x:830.2,y:118.3},0).wait(1).to({scaleX:0.99,scaleY:0.98,x:829.6,y:119},0).wait(1).to({scaleX:0.96,scaleY:0.95,x:829.1,y:119.8},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:828.5,y:120.6},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:828,y:121.4},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:828.6,y:120.6},0).wait(1).to({scaleX:0.96,scaleY:0.95,x:829.2,y:119.8},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:829.8,y:119},0).wait(1).to({scaleX:1.02,scaleY:1.01,x:830.4,y:118.3},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:831,y:117.5},0).wait(1).to({scaleX:1.02,scaleY:1.01,x:830.4,y:118.3},0).wait(1).to({scaleX:0.99,scaleY:0.98,x:829.8,y:119},0).wait(1).to({scaleX:0.96,scaleY:0.95,x:829.2,y:119.8},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:828.6,y:120.5},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:828,y:121.3},0).wait(1));

	// logo
	this.instance_1 = new lib.Symbol2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(485,125,1,1,0,0,0,485,125);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(63).to({_off:false},0).wait(1).to({alpha:0.031},0).wait(1).to({alpha:0.063},0).wait(1).to({alpha:0.094},0).wait(1).to({alpha:0.125},0).wait(1).to({alpha:0.156},0).wait(1).to({alpha:0.188},0).wait(1).to({alpha:0.219},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.281},0).wait(1).to({alpha:0.313},0).wait(1).to({alpha:0.344},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.406},0).wait(1).to({alpha:0.438},0).wait(1).to({alpha:0.469},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.531},0).wait(1).to({alpha:0.563},0).wait(1).to({alpha:0.594},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.656},0).wait(1).to({alpha:0.688},0).wait(1).to({alpha:0.719},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.781},0).wait(1).to({alpha:0.813},0).wait(1).to({alpha:0.844},0).wait(1).to({alpha:0.875},0).wait(1).to({alpha:0.906},0).wait(1).to({alpha:0.938},0).wait(1).to({alpha:0.969},0).wait(1).to({alpha:1},0).wait(31));

	// text
	this.instance_2 = new lib.Symbol4();
	this.instance_2.parent = this;
	this.instance_2.setTransform(485,125,1,1,0,0,0,485,125);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(63).to({_off:false},0).wait(1).to({alpha:0.031},0).wait(1).to({alpha:0.063},0).wait(1).to({alpha:0.094},0).wait(1).to({alpha:0.125},0).wait(1).to({alpha:0.156},0).wait(1).to({alpha:0.188},0).wait(1).to({alpha:0.219},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.281},0).wait(1).to({alpha:0.313},0).wait(1).to({alpha:0.344},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.406},0).wait(1).to({alpha:0.438},0).wait(1).to({alpha:0.469},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.531},0).wait(1).to({alpha:0.563},0).wait(1).to({alpha:0.594},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.656},0).wait(1).to({alpha:0.688},0).wait(1).to({alpha:0.719},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.781},0).wait(1).to({alpha:0.813},0).wait(1).to({alpha:0.844},0).wait(1).to({alpha:0.875},0).wait(1).to({alpha:0.906},0).wait(1).to({alpha:0.938},0).wait(1).to({alpha:0.969},0).wait(1).to({alpha:1},0).wait(31));

	// muffel
	this.instance_3 = new lib.Symbol3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(485,125,1,1,0,0,0,485,125);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(11).to({_off:false},0).wait(1).to({alpha:0.053},0).wait(1).to({alpha:0.105},0).wait(1).to({alpha:0.158},0).wait(1).to({alpha:0.211},0).wait(1).to({alpha:0.263},0).wait(1).to({alpha:0.316},0).wait(1).to({alpha:0.368},0).wait(1).to({alpha:0.421},0).wait(1).to({alpha:0.474},0).wait(1).to({alpha:0.526},0).wait(1).to({alpha:0.579},0).wait(1).to({alpha:0.632},0).wait(1).to({alpha:0.684},0).wait(1).to({alpha:0.737},0).wait(1).to({alpha:0.789},0).wait(1).to({alpha:0.842},0).wait(1).to({alpha:0.895},0).wait(1).to({alpha:0.947},0).wait(1).to({alpha:1},0).wait(96));

	// Ebene_6
	this.instance_4 = new lib.Symbol1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(483.3,115.9,0.486,0.486,0,0,0,998.3,739.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:1000,regY:741,scaleX:0.49,scaleY:0.49,x:484.2,y:116.7},0).wait(125));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(482.6,-118.9,973,721);
// library properties:
lib.properties = {
	id: 'C85BA38B5DEAC945B5011F404DC7D8C1',
	width: 970,
	height: 250,
	fps: 24,
	color: "#464646",
	opacity: 0.00,
	manifest: [
		{src:"images/bg.jpg", id:"bg"},
		{src:"images/button.jpg", id:"button"},
		{src:"images/logo.png", id:"logo"},
		{src:"images/muffel.png", id:"muffel"},
		{src:"images/text.png", id:"text"}
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
an.compositions['C85BA38B5DEAC945B5011F404DC7D8C1'] = {
	getStage: function() { return exportRoot.getStage(); },
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



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;