(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1499,1000);


(lib.button = function() {
	this.initialize(img.button);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,283,76);


(lib.text = function() {
	this.initialize(img.text);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1154,1000);// helper functions:

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


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.text();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,1154,1000), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.bg();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,1499,1000), null);


(lib.button_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.button();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.11,scaleY:1.11,x:-3,y:-3},0).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,283,76);


// stage content:
(lib.göndle_sb_sitebar_an = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// button
	this.instance = new lib.button_1();
	this.instance.parent = this;
	this.instance.setTransform(19,684.2);
	this.instance.alpha = 0;
	this.instance._off = true;
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.button_1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(63).to({_off:false},0).wait(1).to({regX:154.3,regY:39.2,x:173.3,y:723.4,alpha:0.031},0).wait(1).to({alpha:0.063},0).wait(1).to({alpha:0.094},0).wait(1).to({alpha:0.125},0).wait(1).to({x:173.4,alpha:0.156},0).wait(1).to({alpha:0.188},0).wait(1).to({alpha:0.219},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.281},0).wait(1).to({alpha:0.313},0).wait(1).to({alpha:0.344},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.406},0).wait(1).to({scaleX:1,alpha:0.438},0).wait(1).to({alpha:0.469},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.531},0).wait(1).to({alpha:0.563},0).wait(1).to({alpha:0.594},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.656},0).wait(1).to({x:173.5,alpha:0.688},0).wait(1).to({alpha:0.719},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.781},0).wait(1).to({alpha:0.813},0).wait(1).to({alpha:0.844},0).wait(1).to({alpha:0.875},0).wait(1).to({alpha:0.906},0).wait(1).to({alpha:0.938},0).wait(1).to({alpha:0.969},0).wait(1).to({alpha:1},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:175.1,y:723.8},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:176.6,y:724.2},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:178.1,y:724.6},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:179.7,y:725},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:181.2,y:725.4},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:179.6,y:725},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:178.1,y:724.6},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:176.5,y:724.2},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:175,y:723.8},0).wait(1).to({scaleX:1,scaleY:1,x:173.4,y:723.4},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:175,y:723.8},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:176.6,y:724.2},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:178.2,y:724.7},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:179.9,y:725.1},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:181.5,y:725.5},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:179.9,y:725},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:178.3,y:724.6},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:176.7,y:724.2},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:175.1,y:723.8},0).wait(1).to({scaleX:1,scaleY:1,x:173.5,y:723.4},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:175.1,y:723.8},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:176.7,y:724.2},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:178.2,y:724.6},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:179.8,y:725},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:181.4,y:725.4},0).wait(7));

	// text
	this.instance_1 = new lib.Symbol3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(578,501,1,1,0,0,0,577,500);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(63).to({_off:false},0).wait(1).to({alpha:0.031},0).wait(1).to({alpha:0.063},0).wait(1).to({alpha:0.094},0).wait(1).to({alpha:0.125},0).wait(1).to({alpha:0.156},0).wait(1).to({alpha:0.188},0).wait(1).to({alpha:0.219},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.281},0).wait(1).to({alpha:0.313},0).wait(1).to({alpha:0.344},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.406},0).wait(1).to({alpha:0.438},0).wait(1).to({alpha:0.469},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.531},0).wait(1).to({alpha:0.563},0).wait(1).to({alpha:0.594},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.656},0).wait(1).to({alpha:0.688},0).wait(1).to({alpha:0.719},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.781},0).wait(1).to({alpha:0.813},0).wait(1).to({alpha:0.844},0).wait(1).to({alpha:0.875},0).wait(1).to({alpha:0.906},0).wait(1).to({alpha:0.938},0).wait(1).to({alpha:0.969},0).wait(1).to({alpha:1},0).wait(32));

	// bg
	this.instance_2 = new lib.Symbol1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(749.5,500,1,1,0,0,0,749.5,500);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({x:744.7},0).wait(1).to({x:739.9},0).wait(1).to({x:735},0).wait(1).to({x:730.2},0).wait(1).to({x:725.3},0).wait(1).to({x:720.5},0).wait(1).to({x:715.6},0).wait(1).to({x:710.8},0).wait(1).to({x:706},0).wait(1).to({x:701.1},0).wait(1).to({x:696.3},0).wait(1).to({x:691.4},0).wait(1).to({x:686.6},0).wait(1).to({x:681.7},0).wait(1).to({x:676.9},0).wait(1).to({x:672.1},0).wait(1).to({x:667.2},0).wait(1).to({x:662.4},0).wait(1).to({x:657.5},0).wait(1).to({x:652.7},0).wait(1).to({x:647.8},0).wait(1).to({x:643},0).wait(1).to({x:638.2},0).wait(1).to({x:633.3},0).wait(1).to({x:628.5},0).wait(1).to({x:623.6},0).wait(1).to({x:618.8},0).wait(1).to({x:613.9},0).wait(1).to({x:609.1},0).wait(1).to({x:604.3},0).wait(1).to({x:599.4},0).wait(1).to({x:594.6},0).wait(1).to({x:589.7},0).wait(1).to({x:584.9},0).wait(1).to({x:580},0).wait(1).to({x:575.2},0).wait(1).to({x:570.4},0).wait(1).to({x:565.5},0).wait(1).to({x:560.7},0).wait(1).to({x:555.8},0).wait(1).to({x:551},0).wait(1).to({x:546.1},0).wait(1).to({x:541.3},0).wait(1).to({x:536.5},0).wait(1).to({x:531.6},0).wait(1).to({x:526.8},0).wait(1).to({x:521.9},0).wait(1).to({x:517.1},0).wait(1).to({x:512.2},0).wait(1).to({x:507.4},0).wait(1).to({x:502.6},0).wait(1).to({x:497.7},0).wait(1).to({x:492.9},0).wait(1).to({x:488},0).wait(1).to({x:483.2},0).wait(1).to({x:478.3},0).wait(1).to({x:473.5},0).wait(1).to({x:468.7},0).wait(1).to({x:463.8},0).wait(1).to({x:459},0).wait(1).to({x:454.1},0).wait(1).to({x:449.3},0).wait(1).to({x:444.4},0).wait(1).to({x:439.6},0).wait(1).to({x:434.8},0).wait(1).to({x:429.9},0).wait(1).to({x:425.1},0).wait(1).to({x:420.2},0).wait(1).to({x:415.4},0).wait(1).to({x:410.5},0).wait(1).to({x:405.7},0).wait(56));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(577,500,1499,1000);
// library properties:
lib.properties = {
	id: '2A192A4F961F1B409513F3B41FB68244',
	width: 1154,
	height: 1000,
	fps: 24,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [
		{src:"images/bg.jpg", id:"bg"},
		{src:"images/button.jpg", id:"button"},
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
an.compositions['2A192A4F961F1B409513F3B41FB68244'] = {
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