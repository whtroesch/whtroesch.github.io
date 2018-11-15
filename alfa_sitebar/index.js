(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.alfa = function() {
	this.initialize(img.alfa);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,450,145);


(lib.assets = function() {
	this.initialize(img.assets);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,450,203);


(lib.button = function() {
	this.initialize(img.button);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,257,56);


(lib.dann = function() {
	this.initialize(img.dann);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,450,60);


(lib.fcalogo = function() {
	this.initialize(img.fcalogo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,450,91);


(lib.titel = function() {
	this.initialize(img.titel);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,450,129);


(lib.wenn = function() {
	this.initialize(img.wenn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,450,79);// helper functions:

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


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.assets();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,450,203), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.fcalogo();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.961,0.961);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,432.5,87.5), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.dann();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,450,60), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.alfa();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,450,145), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.wenn();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,450,79), null);


(lib.button_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.button();
	this.instance.parent = this;
	this.instance.setTransform(-106,-23,0.892,0.892);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.95,scaleY:0.95,x:-113,y:-25},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-106,-23,229.2,50);


// stage content:
(lib.index = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// button
	this.instance = new lib.button_1();
	this.instance.parent = this;
	this.instance.setTransform(212.7,835.7);
	this.instance.alpha = 0;
	this.instance._off = true;
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.button_1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(59).to({_off:false},0).wait(1).to({regX:9,regY:1.6,x:221.7,y:837.3,alpha:0.033},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.233},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.367},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.433},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.567},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.633},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.767},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:0.967},0).wait(1).to({alpha:1},0).wait(56));

	// assets
	this.instance_1 = new lib.Symbol5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(226,673.5,1,1,0,0,0,225,101.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(59).to({_off:false},0).wait(1).to({alpha:0.056},0).wait(1).to({alpha:0.111},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.222},0).wait(1).to({alpha:0.278},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.389},0).wait(1).to({alpha:0.444},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.556},0).wait(1).to({alpha:0.611},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.722},0).wait(1).to({alpha:0.778},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.889},0).wait(1).to({alpha:0.944},0).wait(1).to({alpha:1},0).wait(68));

	// fca
	this.instance_2 = new lib.Symbol4();
	this.instance_2.parent = this;
	this.instance_2.setTransform(226.3,505.7,1,1,0,0,0,216.3,43.7);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(39).to({_off:false},0).wait(1).to({regX:216.2,x:226.2,alpha:0.033},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.233},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.367},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.433},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.567},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.633},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.767},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:0.967},0).wait(1).to({alpha:1},0).wait(76));

	// dann
	this.instance_3 = new lib.Symbol3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(225,410,1,1,0,0,0,225,30);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(29).to({_off:false},0).wait(1).to({alpha:0.033},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.233},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.367},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.433},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.567},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.633},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.767},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:0.967},0).wait(1).to({alpha:1},0).wait(86));

	// alfa
	this.instance_4 = new lib.Symbol2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(225,293.5,1,1,0,0,0,225,72.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(19).to({_off:false},0).wait(1).to({alpha:0.034},0).wait(1).to({alpha:0.069},0).wait(1).to({alpha:0.103},0).wait(1).to({alpha:0.138},0).wait(1).to({alpha:0.172},0).wait(1).to({alpha:0.207},0).wait(1).to({alpha:0.241},0).wait(1).to({alpha:0.276},0).wait(1).to({alpha:0.31},0).wait(1).to({alpha:0.345},0).wait(1).to({alpha:0.379},0).wait(1).to({alpha:0.414},0).wait(1).to({alpha:0.448},0).wait(1).to({alpha:0.483},0).wait(1).to({alpha:0.517},0).wait(1).to({alpha:0.552},0).wait(1).to({alpha:0.586},0).wait(1).to({alpha:0.621},0).wait(1).to({alpha:0.655},0).wait(1).to({alpha:0.69},0).wait(1).to({alpha:0.724},0).wait(1).to({alpha:0.759},0).wait(1).to({alpha:0.793},0).wait(1).to({alpha:0.828},0).wait(1).to({alpha:0.862},0).wait(1).to({alpha:0.897},0).wait(1).to({alpha:0.931},0).wait(1).to({alpha:0.966},0).wait(1).to({alpha:1},0).wait(97));

	// wenn
	this.instance_5 = new lib.Symbol1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(225,177.5,1,1,0,0,0,225,39.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(9).to({_off:false},0).wait(1).to({alpha:0.033},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.233},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.367},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.433},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.567},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.633},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.767},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:0.967},0).wait(1).to({alpha:1},0).wait(106));

	// titel
	this.instance_6 = new lib.titel();
	this.instance_6.parent = this;
	this.instance_6.setTransform(0,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(145));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(225,451,450,129);
// library properties:
lib.properties = {
	id: '22D4D768BD69E846A882EAD12165E824',
	width: 450,
	height: 900,
	fps: 24,
	color: "#C00000",
	opacity: 1.00,
	manifest: [
		{src:"images/alfa.jpg", id:"alfa"},
		{src:"images/assets.jpg", id:"assets"},
		{src:"images/button.jpg", id:"button"},
		{src:"images/dann.jpg", id:"dann"},
		{src:"images/fcalogo.jpg", id:"fcalogo"},
		{src:"images/titel.jpg", id:"titel"},
		{src:"images/wenn.jpg", id:"wenn"}
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
an.compositions['22D4D768BD69E846A882EAD12165E824'] = {
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