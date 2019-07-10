(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_", frames: [[0,640,500,27],[0,610,500,28],[0,669,500,27],[0,505,255,88],[0,698,207,62],[0,0,500,182],[0,184,500,139],[257,505,176,103],[0,414,432,89],[0,325,464,87]]}
];


// symbols:



(lib._3tage = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._8angebote = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._8fahrzeuge = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.alle = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.button = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.fahrzeuge = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.logo = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.savedate = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.streich = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.termine = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(9);
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


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.logo();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(0,0,500,139), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.button();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,0,207,62), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib._8angebote();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,500,28), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib._8fahrzeuge();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,500,27), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib._3tage();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,500,27), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.fahrzeuge();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,500,182), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.savedate();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,176,103), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.termine();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,464,87), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.alle();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,255,88), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.streich();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,432,89), null);


// stage content:
(lib.index = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// button
	this.instance = new lib.Symbol9();
	this.instance.parent = this;
	this.instance.setTransform(250.5,754,1,1,0,0,0,103.5,31);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(95).to({_off:false},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.059},0).wait(1).to({scaleX:0.99,scaleY:0.99,alpha:0.118},0).wait(1).to({scaleX:0.99,scaleY:0.99,alpha:0.176},0).wait(1).to({scaleX:0.98,scaleY:0.98,alpha:0.235},0).wait(1).to({scaleX:0.98,scaleY:0.98,alpha:0.294},0).wait(1).to({scaleX:0.97,scaleY:0.97,alpha:0.353},0).wait(1).to({scaleX:0.97,scaleY:0.97,alpha:0.412},0).wait(1).to({scaleX:0.97,scaleY:0.97,alpha:0.471},0).wait(1).to({scaleX:0.96,scaleY:0.96,alpha:0.529},0).wait(1).to({scaleX:0.96,scaleY:0.96,alpha:0.588},0).wait(1).to({scaleX:0.95,scaleY:0.95,alpha:0.647},0).wait(1).to({scaleX:0.95,scaleY:0.95,alpha:0.706},0).wait(1).to({scaleX:0.94,scaleY:0.94,alpha:0.765},0).wait(1).to({scaleX:0.94,scaleY:0.94,alpha:0.824},0).wait(1).to({scaleX:0.93,scaleY:0.93,alpha:0.882},0).wait(1).to({scaleX:0.93,scaleY:0.93,alpha:0.941},0).wait(1).to({scaleX:0.93,scaleY:0.93,alpha:1},0).wait(1).to({scaleX:0.92,scaleY:0.92},0).wait(1).to({scaleX:0.92,scaleY:0.92},0).wait(1).to({scaleX:0.91,scaleY:0.91},0).wait(1).to({scaleX:0.91,scaleY:0.91},0).wait(1).to({scaleX:0.92,scaleY:0.92},0).wait(1).to({scaleX:0.93,scaleY:0.93,y:753.9},0).wait(1).to({scaleX:0.94,scaleY:0.94,y:753.8},0).wait(1).to({scaleX:0.95,scaleY:0.95},0).wait(1).to({scaleX:0.94,scaleY:0.94},0).wait(1).to({scaleX:0.93,scaleY:0.93,y:753.9},0).wait(1).to({scaleX:0.92,scaleY:0.92,y:754},0).wait(1).to({scaleX:0.91,scaleY:0.91},0).wait(1).to({scaleX:0.92,scaleY:0.92},0).wait(1).to({scaleX:0.93,scaleY:0.93,y:753.9},0).wait(1).to({scaleX:0.94,scaleY:0.94,y:753.8},0).wait(1).to({scaleX:0.95,scaleY:0.95},0).wait(1).to({scaleX:0.94,scaleY:0.94},0).wait(1).to({scaleX:0.93,scaleY:0.93,y:753.9},0).wait(1).to({scaleX:0.92,scaleY:0.92,y:754},0).wait(1).to({scaleX:0.91,scaleY:0.91},0).wait(1).to({scaleX:0.91,scaleY:0.91},0).wait(1).to({scaleX:0.92,scaleY:0.92},0).wait(1).to({scaleX:0.92,scaleY:0.92},0).wait(1).to({scaleX:0.93,scaleY:0.93},0).wait(15).to({scaleX:0.92,scaleY:0.92},0).wait(1).to({scaleX:0.92,scaleY:0.92},0).wait(1).to({scaleX:0.91,scaleY:0.91},0).wait(1).to({scaleX:0.91,scaleY:0.91},0).wait(1).to({scaleX:0.91,scaleY:0.91},0).wait(1).to({scaleX:0.92,scaleY:0.92},0).wait(1).to({scaleX:0.92,scaleY:0.92},0).wait(1).to({scaleX:0.93,scaleY:0.93},0).wait(1).to({scaleX:0.92,scaleY:0.92},0).wait(1).to({scaleX:0.92,scaleY:0.92},0).wait(1).to({scaleX:0.91,scaleY:0.91},0).wait(1).to({scaleX:0.91,scaleY:0.91},0).wait(1).to({scaleX:0.91,scaleY:0.91},0).wait(1).to({scaleX:0.91,scaleY:0.91},0).wait(1).to({scaleX:0.91,scaleY:0.91},0).wait(1).to({scaleX:0.91,scaleY:0.91},0).wait(1).to({scaleX:0.92,scaleY:0.92},0).wait(1).to({scaleX:0.92,scaleY:0.92},0).wait(1).to({scaleX:0.92,scaleY:0.92},0).wait(1).to({scaleX:0.92,scaleY:0.92},0).wait(1).to({scaleX:0.92,scaleY:0.92},0).wait(1).to({scaleX:0.92,scaleY:0.92},0).wait(1).to({scaleX:0.92,scaleY:0.92},0).wait(1).to({scaleX:0.93,scaleY:0.93},0).wait(5));

	// 8angebote
	this.instance_1 = new lib.Symbol8();
	this.instance_1.parent = this;
	this.instance_1.setTransform(250,664,1,1,0,0,0,250,14);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(95).to({_off:false},0).wait(1).to({alpha:0.059},0).wait(1).to({alpha:0.118},0).wait(1).to({alpha:0.176},0).wait(1).to({alpha:0.235},0).wait(1).to({alpha:0.294},0).wait(1).to({alpha:0.353},0).wait(1).to({alpha:0.412},0).wait(1).to({alpha:0.471},0).wait(1).to({alpha:0.529},0).wait(1).to({alpha:0.588},0).wait(1).to({alpha:0.647},0).wait(1).to({alpha:0.706},0).wait(1).to({alpha:0.765},0).wait(1).to({alpha:0.824},0).wait(1).to({alpha:0.882},0).wait(1).to({alpha:0.941},0).wait(1).to({alpha:1},0).wait(67));

	// 8fahrzeuge
	this.instance_2 = new lib.Symbol7();
	this.instance_2.parent = this;
	this.instance_2.setTransform(250,626.5,1,1,0,0,0,250,13.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(95).to({_off:false},0).wait(1).to({alpha:0.059},0).wait(1).to({alpha:0.118},0).wait(1).to({alpha:0.176},0).wait(1).to({alpha:0.235},0).wait(1).to({alpha:0.294},0).wait(1).to({alpha:0.353},0).wait(1).to({alpha:0.412},0).wait(1).to({alpha:0.471},0).wait(1).to({alpha:0.529},0).wait(1).to({alpha:0.588},0).wait(1).to({alpha:0.647},0).wait(1).to({alpha:0.706},0).wait(1).to({alpha:0.765},0).wait(1).to({alpha:0.824},0).wait(1).to({alpha:0.882},0).wait(1).to({alpha:0.941},0).wait(1).to({alpha:1},0).wait(67));

	// 3tage
	this.instance_3 = new lib.Symbol6();
	this.instance_3.parent = this;
	this.instance_3.setTransform(250,589.5,1,1,0,0,0,250,13.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(95).to({_off:false},0).wait(1).to({alpha:0.059},0).wait(1).to({alpha:0.118},0).wait(1).to({alpha:0.176},0).wait(1).to({alpha:0.235},0).wait(1).to({alpha:0.294},0).wait(1).to({alpha:0.353},0).wait(1).to({alpha:0.412},0).wait(1).to({alpha:0.471},0).wait(1).to({alpha:0.529},0).wait(1).to({alpha:0.588},0).wait(1).to({alpha:0.647},0).wait(1).to({alpha:0.706},0).wait(1).to({alpha:0.765},0).wait(1).to({alpha:0.824},0).wait(1).to({alpha:0.882},0).wait(1).to({alpha:0.941},0).wait(1).to({alpha:1},0).wait(67));

	// FZG
	this.instance_4 = new lib.Symbol5();
	this.instance_4.parent = this;
	this.instance_4.setTransform(250,480.3,1,1,0,0,0,250,91);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(84).to({_off:false},0).wait(1).to({alpha:0.059},0).wait(1).to({y:480.4,alpha:0.118},0).wait(1).to({y:480.5,alpha:0.176},0).wait(1).to({alpha:0.235},0).wait(1).to({y:480.6,alpha:0.294},0).wait(1).to({y:480.7,alpha:0.353},0).wait(1).to({y:480.8,alpha:0.412},0).wait(1).to({alpha:0.471},0).wait(1).to({y:480.9,alpha:0.529},0).wait(1).to({y:481,alpha:0.588},0).wait(1).to({y:481.1,alpha:0.647},0).wait(1).to({alpha:0.706},0).wait(1).to({y:481.2,alpha:0.765},0).wait(1).to({y:481.3,alpha:0.824},0).wait(1).to({y:481.4,alpha:0.882},0).wait(1).to({alpha:0.941},0).wait(1).to({y:481.5,alpha:1},0).wait(78));

	// logo
	this.instance_5 = new lib.Symbol10();
	this.instance_5.parent = this;
	this.instance_5.setTransform(250,927.5,1,1,0,0,0,250,69.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.instance_6 = new lib.logo();
	this.instance_6.parent = this;
	this.instance_6.setTransform(0,858);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5}]},31).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},24).to({state:[{t:this.instance_6}]},11).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(31).to({_off:false},0).wait(1).to({alpha:0.02},0).wait(1).to({alpha:0.041},0).wait(1).to({alpha:0.061},0).wait(1).to({alpha:0.082},0).wait(1).to({alpha:0.102},0).wait(1).to({alpha:0.122},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.163},0).wait(1).to({alpha:0.184},0).wait(1).to({alpha:0.204},0).wait(1).to({alpha:0.224},0).wait(1).to({alpha:0.245},0).wait(1).to({alpha:0.265},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.306},0).wait(1).to({alpha:0.327},0).wait(1).to({alpha:0.347},0).wait(1).to({alpha:0.367},0).wait(1).to({alpha:0.388},0).wait(1).to({alpha:0.408},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.449},0).wait(1).to({alpha:0.469},0).wait(1).to({alpha:0.49},0).wait(1).to({alpha:0.51},0).wait(1).to({alpha:0.531},0).wait(1).to({alpha:0.551},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.592},0).wait(1).to({alpha:0.612},0).wait(1).to({alpha:0.633},0).wait(1).to({alpha:0.653},0).wait(1).to({alpha:0.673},0).wait(1).to({alpha:0.694},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.735},0).wait(1).to({alpha:0.755},0).wait(1).to({alpha:0.776},0).wait(1).to({alpha:0.796},0).wait(1).to({alpha:0.816},0).wait(1).to({alpha:0.837},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.878},0).wait(1).to({alpha:0.898},0).wait(1).to({alpha:0.918},0).wait(1).to({alpha:0.939},0).wait(1).to({alpha:0.959},0).wait(1).to({alpha:0.98},0).wait(1).to({alpha:1},0).wait(62).to({_off:true},1).wait(36));

	// savedate
	this.instance_7 = new lib.Symbol4();
	this.instance_7.parent = this;
	this.instance_7.setTransform(250,108.5,1,1,0,0,0,88,51.5);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(31).to({_off:false},0).wait(1).to({alpha:0.02},0).wait(1).to({alpha:0.041},0).wait(1).to({alpha:0.061},0).wait(1).to({alpha:0.082},0).wait(1).to({alpha:0.102},0).wait(1).to({alpha:0.122},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.163},0).wait(1).to({alpha:0.184},0).wait(1).to({alpha:0.204},0).wait(1).to({alpha:0.224},0).wait(1).to({alpha:0.245},0).wait(1).to({alpha:0.265},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.306},0).wait(1).to({alpha:0.327},0).wait(1).to({alpha:0.347},0).wait(1).to({alpha:0.367},0).wait(1).to({alpha:0.388},0).wait(1).to({alpha:0.408},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.449},0).wait(1).to({alpha:0.469},0).wait(1).to({alpha:0.49},0).wait(1).to({alpha:0.51},0).wait(1).to({alpha:0.531},0).wait(1).to({alpha:0.551},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.592},0).wait(1).to({alpha:0.612},0).wait(1).to({alpha:0.633},0).wait(1).to({alpha:0.653},0).wait(1).to({alpha:0.673},0).wait(1).to({alpha:0.694},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.735},0).wait(1).to({alpha:0.755},0).wait(1).to({alpha:0.776},0).wait(1).to({alpha:0.796},0).wait(1).to({alpha:0.816},0).wait(1).to({alpha:0.837},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.878},0).wait(1).to({alpha:0.898},0).wait(1).to({alpha:0.918},0).wait(1).to({alpha:0.939},0).wait(1).to({alpha:0.959},0).wait(1).to({alpha:0.98},0).wait(1).to({alpha:1},0).wait(99));

	// termine
	this.instance_8 = new lib.Symbol3();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-485.4,638.5,1,1,0,0,0,232,43.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({x:-467.4},0).wait(1).to({x:-449.5},0).wait(1).to({x:-431.5},0).wait(1).to({x:-413.6},0).wait(1).to({x:-395.6},0).wait(1).to({x:-377.7},0).wait(1).to({x:-359.8},0).wait(1).to({x:-341.8},0).wait(1).to({x:-323.9},0).wait(1).to({x:-305.9},0).wait(1).to({x:-288},0).wait(1).to({x:-270.1},0).wait(1).to({x:-252.2},0).wait(1).to({x:-234.2},0).wait(1).to({x:-216.3},0).wait(1).to({x:-198.3},0).wait(1).to({x:-180.4},0).wait(1).to({x:-162.5},0).wait(1).to({x:-144.5},0).wait(1).to({x:-126.6},0).wait(1).to({scaleY:1,x:-108.6},0).wait(1).to({x:-90.7},0).wait(1).to({x:-72.8},0).wait(1).to({x:-54.8,y:638.4},0).wait(1).to({x:-36.9},0).wait(1).to({x:-18.9},0).wait(1).to({x:-1},0).wait(1).to({x:16.9},0).wait(1).to({x:34.9},0).wait(1).to({x:52.8},0).wait(1).to({x:70.8},0).wait(1).to({x:88.7},0).wait(1).to({x:106.7},0).wait(1).to({x:124.6},0).wait(1).to({x:142.5},0).wait(1).to({x:160.5},0).wait(1).to({x:178.4},0).wait(1).to({x:196.3},0).wait(1).to({x:214.2},0).wait(1).to({x:232.1},0).wait(1).to({x:250.1},0).wait(12).to({y:638.5},0).wait(12).to({scaleX:0.98,scaleY:0.98,x:252.5,y:627.6},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:254.9,y:616.8},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:257.3,y:606},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:259.7,y:595.2},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:262.1,y:584.4},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:264.6,y:573.6},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:267,y:562.7},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:269.3,y:551.9},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:271.8,y:541.1},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:274.2,y:530.3},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:276.6,y:519.5},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:279,y:508.7},0).wait(1).to({scaleX:0.78,scaleY:0.78,x:281.4,y:497.8},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:283.8,y:487},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:286.2,y:476.2},0).wait(1).to({scaleX:0.73,scaleY:0.73,x:288.6,y:465.3},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:291,y:454.6},0).wait(1).to({scaleX:0.7,scaleY:0.7,x:293.4,y:443.7},0).wait(1).to({scaleX:0.68,scaleY:0.68,x:295.9,y:432.9},0).wait(1).to({scaleX:0.67,scaleY:0.67,x:298.3,y:422.1},0).wait(1).to({scaleX:0.65,scaleY:0.65,x:300.7,y:411.3},0).wait(1).to({scaleX:0.63,scaleY:0.63,x:303.1,y:400.4},0).wait(1).to({scaleX:0.62,scaleY:0.62,x:305.5,y:389.7},0).wait(1).to({scaleX:0.6,scaleY:0.6,x:307.9,y:378.8},0).wait(1).to({scaleX:0.58,scaleY:0.58,x:310.3,y:368},0).wait(1).to({scaleX:0.56,scaleY:0.56,x:312.7,y:357.2},0).wait(1).to({scaleX:0.55,scaleY:0.55,x:315.1,y:346.4},0).wait(1).to({scaleX:0.53,scaleY:0.53,x:317.5,y:335.5},0).wait(1).to({scaleX:0.51,scaleY:0.51,x:319.9,y:324.8},0).wait(1).to({scaleX:0.5,scaleY:0.5,x:322.4,y:313.9},0).wait(1).to({scaleX:0.48,scaleY:0.48,x:324.8,y:303.1},0).wait(84));

	// alle
	this.instance_9 = new lib.Symbol2();
	this.instance_9.parent = this;
	this.instance_9.setTransform(648.2,500,1,1,0,0,0,127.5,44);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({x:638.5},0).wait(1).to({x:628.8},0).wait(1).to({x:619.1},0).wait(1).to({x:609.4},0).wait(1).to({x:599.6},0).wait(1).to({x:589.9},0).wait(1).to({x:580.2},0).wait(1).to({x:570.5},0).wait(1).to({x:560.8},0).wait(1).to({x:551.1},0).wait(1).to({x:541.4},0).wait(1).to({x:531.7},0).wait(1).to({x:521.9},0).wait(1).to({x:512.2},0).wait(1).to({x:502.5},0).wait(1).to({x:492.8},0).wait(1).to({x:483.1},0).wait(1).to({x:473.4},0).wait(1).to({x:463.7},0).wait(1).to({x:454},0).wait(1).to({x:444.2},0).wait(1).to({x:434.5},0).wait(1).to({x:424.8},0).wait(1).to({x:415.1},0).wait(1).to({x:405.4},0).wait(1).to({x:395.7},0).wait(1).to({x:386},0).wait(1).to({x:376.3},0).wait(1).to({x:366.5},0).wait(1).to({x:356.8},0).wait(1).to({x:347.1},0).wait(1).to({x:337.4},0).wait(1).to({x:327.7},0).wait(1).to({x:318},0).wait(1).to({x:308.3},0).wait(1).to({x:298.6},0).wait(1).to({x:288.8},0).wait(1).to({x:279.1},0).wait(1).to({x:269.4},0).wait(1).to({x:259.7},0).wait(1).to({x:250},0).wait(24).to({scaleX:0.98,scaleY:0.98,x:246.1,y:493.7},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:242.3,y:487.3},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:238.4,y:480.9},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:234.5,y:474.6},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:230.6,y:468.2},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:226.7,y:461.9},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:222.9,y:455.6},0).wait(1).to({scaleX:0.87,scaleY:0.86,x:219,y:449.2},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:215.1,y:442.8},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:211.2,y:436.5},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:207.4,y:430.1},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:203.5,y:423.8},0).wait(1).to({scaleX:0.78,scaleY:0.78,x:199.6,y:417.4},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:195.7,y:411.1},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:191.9,y:404.7},0).wait(1).to({scaleX:0.73,scaleY:0.73,x:188,y:398.4},0).wait(1).to({scaleX:0.71,scaleY:0.71,x:184.1,y:392},0).wait(1).to({scaleX:0.7,scaleY:0.7,x:180.2,y:385.7},0).wait(1).to({scaleX:0.68,scaleY:0.68,x:176.4,y:379.3},0).wait(1).to({scaleX:0.66,scaleY:0.66,x:172.5,y:373},0).wait(1).to({scaleX:0.65,scaleY:0.65,x:168.6,y:366.6},0).wait(1).to({scaleX:0.63,scaleY:0.63,x:164.7,y:360.2},0).wait(1).to({scaleX:0.61,scaleY:0.61,x:160.9,y:353.9},0).wait(1).to({scaleX:0.59,scaleY:0.59,x:157,y:347.6},0).wait(1).to({scaleX:0.58,scaleY:0.58,x:153.1,y:341.2},0).wait(1).to({scaleX:0.56,scaleY:0.56,x:149.2,y:334.9},0).wait(1).to({scaleX:0.54,scaleY:0.54,x:145.3,y:328.5},0).wait(1).to({scaleX:0.53,scaleY:0.53,x:141.5,y:322.1},0).wait(1).to({scaleX:0.51,scaleY:0.51,x:137.6,y:315.8},0).wait(1).to({scaleX:0.49,scaleY:0.49,x:133.7,y:309.4},0).wait(1).to({scaleX:0.48,scaleY:0.48,x:129.8,y:303.1},0).wait(84));

	// streich
	this.instance_10 = new lib.Symbol1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-227.7,363.5,1,1,0,0,0,216,44.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({scaleY:1,x:-216},0).wait(1).to({scaleX:1,x:-204.4},0).wait(1).to({scaleY:1,x:-192.7,y:363.6},0).wait(1).to({scaleX:1,x:-181.1},0).wait(1).to({scaleY:1,x:-169.4},0).wait(1).to({scaleX:1,x:-157.8},0).wait(1).to({scaleY:1,x:-146.1,y:363.7},0).wait(1).to({scaleX:1,x:-134.5,y:363.6},0).wait(1).to({scaleY:1,x:-122.8,y:363.7},0).wait(1).to({scaleX:1,x:-111.2},0).wait(1).to({scaleY:0.99,x:-99.5},0).wait(1).to({scaleX:0.99,x:-87.9},0).wait(1).to({scaleY:0.99,x:-76.2,y:363.8},0).wait(1).to({scaleX:0.99,x:-64.5},0).wait(1).to({scaleY:0.99,x:-52.9},0).wait(1).to({scaleX:0.99,x:-41.2},0).wait(1).to({scaleY:0.99,x:-29.6},0).wait(1).to({scaleX:0.99,x:-17.9,y:363.9},0).wait(1).to({scaleY:0.99,x:-6.3},0).wait(1).to({scaleX:0.99,x:5.4},0).wait(1).to({scaleY:0.99,x:17},0).wait(1).to({scaleX:0.99,x:28.7,y:364},0).wait(1).to({scaleY:0.99,x:40.4},0).wait(1).to({scaleX:0.99,x:52},0).wait(1).to({scaleY:0.99,x:63.7},0).wait(1).to({scaleX:0.99,x:75.3},0).wait(1).to({scaleY:0.99,x:87,y:364.1},0).wait(1).to({scaleX:0.99,x:98.7},0).wait(1).to({scaleY:0.99,x:110.3},0).wait(1).to({x:121.9},0).wait(1).to({scaleX:0.99,scaleY:0.98,x:133.6,y:364.2},0).wait(1).to({x:145.2,y:364.1},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:156.9,y:364.2},0).wait(1).to({x:168.6},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:180.2},0).wait(1).to({scaleY:0.98,x:191.9,y:364.3},0).wait(1).to({scaleX:0.98,x:203.5},0).wait(1).to({scaleY:0.98,x:215.2},0).wait(1).to({scaleX:0.98,x:226.8},0).wait(1).to({scaleY:0.98,x:238.4},0).wait(1).to({scaleX:0.98,x:250.1},0).wait(7).to({x:250},0).wait(1).to({x:250.1},0).wait(2).to({scaleX:0.98},0).wait(1).to({x:250},0).wait(4).to({x:250.1},0).wait(1).to({x:250},0).wait(8).to({scaleX:0.96,scaleY:0.96,y:360.4},0).wait(1).to({scaleX:0.95,scaleY:0.95,y:356.4},0).wait(1).to({scaleX:0.93,scaleY:0.93,y:352.5},0).wait(1).to({scaleX:0.92,scaleY:0.91,y:348.5},0).wait(1).to({scaleX:0.9,scaleY:0.9,y:344.6},0).wait(1).to({scaleX:0.88,scaleY:0.88,y:340.7},0).wait(1).to({scaleX:0.87,scaleY:0.86,y:336.7},0).wait(1).to({scaleX:0.85,scaleY:0.85,y:332.8},0).wait(1).to({scaleX:0.83,scaleY:0.83,y:328.8},0).wait(1).to({scaleX:0.82,scaleY:0.82,y:324.9},0).wait(1).to({scaleX:0.8,scaleY:0.8,y:321},0).wait(1).to({scaleX:0.78,scaleY:0.78,y:317},0).wait(1).to({scaleX:0.77,scaleY:0.77,y:313.1},0).wait(1).to({scaleX:0.75,scaleY:0.75,y:309.1},0).wait(1).to({scaleX:0.73,scaleY:0.73,y:305.2},0).wait(1).to({scaleX:0.72,scaleY:0.72,y:301.3},0).wait(1).to({scaleX:0.7,scaleY:0.7,y:297.3},0).wait(1).to({scaleX:0.68,scaleY:0.68,y:293.4},0).wait(1).to({scaleX:0.67,scaleY:0.67,y:289.4},0).wait(1).to({scaleX:0.65,scaleY:0.65,y:285.5},0).wait(1).to({scaleX:0.64,scaleY:0.63,y:281.6},0).wait(1).to({scaleX:0.62,scaleY:0.62,y:277.6},0).wait(1).to({scaleX:0.6,scaleY:0.6,y:273.7},0).wait(1).to({scaleX:0.59,scaleY:0.59,y:269.7},0).wait(1).to({scaleX:0.57,scaleY:0.57,y:265.8},0).wait(1).to({scaleX:0.55,scaleY:0.55,y:261.9},0).wait(1).to({scaleX:0.54,scaleY:0.54,y:257.9},0).wait(1).to({scaleX:0.52,scaleY:0.52,y:254},0).wait(1).to({scaleX:0.5,scaleY:0.5,y:250},0).wait(1).to({scaleX:0.49,scaleY:0.49,y:246.1},0).wait(1).to({scaleX:0.47,scaleY:0.47,y:242.1},0).wait(84));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-467.4,819,1493.1,363);
// library properties:
lib.properties = {
	id: '5C986042DC85DC47880527506E66DE70',
	width: 500,
	height: 1000,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/index_atlas_.png", id:"index_atlas_"}
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
an.compositions['5C986042DC85DC47880527506E66DE70'] = {
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