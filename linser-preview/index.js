(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_", frames: [[0,0,500,1000],[1506,1002,365,247],[502,1002,500,1000],[1506,0,500,1000],[1004,1002,500,1000],[0,1002,500,1000],[502,0,500,1000],[1004,0,500,1000]]}
];


// symbols:



(lib._12 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.auto = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bg = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.button = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.kennenlern = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.kleingedruckt = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.opel = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.preis = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(7);
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


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.bg();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,500,1000), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.kleingedruckt();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,500,1000), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.button();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,500,1000), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.preis();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,500,1000), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.auto();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,365,247), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.opel();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,500,1000), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib._12();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,500,1000), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.kennenlern();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,500,1000), null);


// stage content:
(lib.index = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// kleingedruckt
	this.instance = new lib.Symbol7();
	this.instance.parent = this;
	this.instance.setTransform(250,500,1,1,0,0,0,250,500);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(52).to({_off:false},0).wait(1).to({alpha:0.04},0).wait(1).to({alpha:0.08},0).wait(1).to({alpha:0.12},0).wait(1).to({alpha:0.16},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.24},0).wait(1).to({alpha:0.28},0).wait(1).to({alpha:0.32},0).wait(1).to({alpha:0.36},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.44},0).wait(1).to({alpha:0.48},0).wait(1).to({alpha:0.52},0).wait(1).to({alpha:0.56},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.64},0).wait(1).to({alpha:0.68},0).wait(1).to({alpha:0.72},0).wait(1).to({alpha:0.76},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.84},0).wait(1).to({alpha:0.88},0).wait(1).to({alpha:0.92},0).wait(1).to({alpha:0.96},0).wait(1).to({alpha:1},0).wait(115));

	// button
	this.instance_1 = new lib.Symbol6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(250,500,1,1,0,0,0,250,500);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(52).to({_off:false},0).wait(1).to({alpha:0.027},0).wait(1).to({alpha:0.054},0).wait(1).to({alpha:0.081},0).wait(1).to({alpha:0.108},0).wait(1).to({alpha:0.135},0).wait(1).to({alpha:0.162},0).wait(1).to({alpha:0.189},0).wait(1).to({alpha:0.216},0).wait(1).to({alpha:0.243},0).wait(1).to({alpha:0.27},0).wait(1).to({alpha:0.297},0).wait(1).to({alpha:0.324},0).wait(1).to({alpha:0.351},0).wait(1).to({alpha:0.378},0).wait(1).to({alpha:0.405},0).wait(1).to({alpha:0.432},0).wait(1).to({alpha:0.459},0).wait(1).to({alpha:0.486},0).wait(1).to({alpha:0.514},0).wait(1).to({alpha:0.541},0).wait(1).to({alpha:0.568},0).wait(1).to({alpha:0.595},0).wait(1).to({alpha:0.622},0).wait(1).to({alpha:0.649},0).wait(1).to({alpha:0.676},0).wait(1).to({alpha:0.703},0).wait(1).to({alpha:0.73},0).wait(1).to({alpha:0.757},0).wait(1).to({alpha:0.784},0).wait(1).to({alpha:0.811},0).wait(1).to({alpha:0.838},0).wait(1).to({alpha:0.865},0).wait(1).to({alpha:0.892},0).wait(1).to({alpha:0.919},0).wait(1).to({alpha:0.946},0).wait(1).to({alpha:0.973},0).wait(1).to({alpha:1},0).wait(103));

	// preis
	this.instance_2 = new lib.Symbol5();
	this.instance_2.parent = this;
	this.instance_2.setTransform(555.2,500,1,1,0,0,0,250,500);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(38).to({_off:false},0).wait(1).to({x:547.2},0).wait(1).to({x:539.1},0).wait(1).to({x:531.1},0).wait(1).to({x:523.1},0).wait(1).to({x:515},0).wait(1).to({x:507},0).wait(1).to({x:499},0).wait(1).to({x:490.9},0).wait(1).to({x:482.9},0).wait(1).to({x:474.9},0).wait(1).to({x:466.9},0).wait(1).to({x:458.8},0).wait(1).to({x:450.8},0).wait(1).to({x:442.8},0).wait(1).to({x:434.7},0).wait(1).to({x:426.7},0).wait(1).to({x:418.7},0).wait(1).to({x:410.6},0).wait(1).to({x:402.6},0).wait(1).to({x:394.6},0).wait(1).to({x:386.5},0).wait(1).to({x:378.5},0).wait(1).to({x:370.5},0).wait(1).to({x:362.4},0).wait(1).to({x:354.4},0).wait(1).to({x:346.4},0).wait(1).to({x:338.3},0).wait(1).to({x:330.3},0).wait(1).to({x:322.3},0).wait(1).to({x:314.2},0).wait(1).to({x:306.2},0).wait(1).to({x:298.2},0).wait(1).to({x:290.2},0).wait(1).to({x:282.1},0).wait(1).to({x:274.1},0).wait(1).to({x:266.1},0).wait(1).to({x:258},0).wait(1).to({x:250},0).wait(14).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:0.97,scaleY:0.97},0).wait(1).to({scaleX:0.96,scaleY:0.96},0).wait(1).to({scaleX:0.94,scaleY:0.94},0).wait(1).to({scaleX:0.93,scaleY:0.93},0).wait(1).to({scaleX:0.94,scaleY:0.94},0).wait(1).to({scaleX:0.96,scaleY:0.96},0).wait(1).to({scaleX:0.97,scaleY:0.97},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:0.98,scaleY:0.98},0).wait(1).to({scaleX:0.96,scaleY:0.96},0).wait(1).to({scaleX:0.95,scaleY:0.95},0).wait(1).to({scaleX:0.94,scaleY:0.94},0).wait(1).to({scaleX:0.95,scaleY:0.95},0).wait(1).to({scaleX:0.96,scaleY:0.96},0).wait(1).to({scaleX:0.98,scaleY:0.98},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:1,scaleY:1},0).wait(83));

	// auto
	this.instance_3 = new lib.Symbol4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(246.5,530.5,0.006,0.006,180,0,0,106.5,0);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(32).to({_off:false},0).wait(1).to({regX:182.5,regY:123.5,scaleX:0.03,scaleY:0.03,rotation:0,x:246.3,y:524.7},0).wait(1).to({scaleX:0.06,scaleY:0.06,x:246.7,y:519.7},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:246.9,y:514.7},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:247.3,y:509.8},0).wait(1).to({scaleX:0.16,scaleY:0.16,x:247.5,y:504.8},0).wait(1).to({scaleX:0.19,scaleY:0.19,x:247.8,y:499.8},0).wait(1).to({scaleX:0.22,scaleY:0.22,x:248.1,y:494.8},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:248.4,y:489.8},0).wait(1).to({scaleX:0.29,scaleY:0.29,x:248.7,y:484.8},0).wait(1).to({scaleX:0.32,scaleY:0.32,x:249,y:479.8},0).wait(1).to({scaleX:0.35,scaleY:0.35,x:249.4,y:474.8},0).wait(1).to({scaleX:0.38,scaleY:0.38,x:249.6,y:469.8},0).wait(1).to({scaleX:0.42,scaleY:0.42,x:250,y:464.8},0).wait(1).to({scaleX:0.45,scaleY:0.45,x:250.2,y:459.8},0).wait(1).to({scaleX:0.48,scaleY:0.48,x:250.6,y:454.8},0).wait(1).to({scaleX:0.51,scaleY:0.51,x:250.8,y:449.9},0).wait(1).to({scaleX:0.55,scaleY:0.55,x:251.2,y:444.9},0).wait(1).to({scaleX:0.58,scaleY:0.58,x:251.4,y:439.9},0).wait(1).to({scaleX:0.61,scaleY:0.61,x:251.7,y:434.9},0).wait(1).to({scaleX:0.64,scaleY:0.64,x:252,y:429.9},0).wait(1).to({scaleX:0.68,scaleY:0.68,x:252.3,y:424.9},0).wait(1).to({scaleX:0.71,scaleY:0.71,x:252.7,y:419.9},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:252.9,y:415},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:253.3,y:410},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:253.5,y:405},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:253.9,y:400},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:254.1,y:395},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:254.5,y:390},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:254.7,y:385},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:255.1,y:380},0).wait(1).to({scaleX:1,scaleY:1,x:255.3,y:375.1},0).wait(129));

	// opel
	this.instance_4 = new lib.Symbol3();
	this.instance_4.parent = this;
	this.instance_4.setTransform(250,500,1,1,0,0,0,250,500);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(23).to({_off:false},0).wait(1).to({alpha:0.027},0).wait(1).to({alpha:0.054},0).wait(1).to({alpha:0.081},0).wait(1).to({alpha:0.108},0).wait(1).to({alpha:0.135},0).wait(1).to({alpha:0.162},0).wait(1).to({alpha:0.189},0).wait(1).to({alpha:0.216},0).wait(1).to({alpha:0.243},0).wait(1).to({alpha:0.27},0).wait(1).to({alpha:0.297},0).wait(1).to({alpha:0.324},0).wait(1).to({alpha:0.351},0).wait(1).to({alpha:0.378},0).wait(1).to({alpha:0.405},0).wait(1).to({alpha:0.432},0).wait(1).to({alpha:0.459},0).wait(1).to({alpha:0.486},0).wait(1).to({alpha:0.514},0).wait(1).to({alpha:0.541},0).wait(1).to({alpha:0.568},0).wait(1).to({alpha:0.595},0).wait(1).to({alpha:0.622},0).wait(1).to({alpha:0.649},0).wait(1).to({alpha:0.676},0).wait(1).to({alpha:0.703},0).wait(1).to({alpha:0.73},0).wait(1).to({alpha:0.757},0).wait(1).to({alpha:0.784},0).wait(1).to({alpha:0.811},0).wait(1).to({alpha:0.838},0).wait(1).to({alpha:0.865},0).wait(1).to({alpha:0.892},0).wait(1).to({alpha:0.919},0).wait(1).to({alpha:0.946},0).wait(1).to({alpha:0.973},0).wait(1).to({alpha:1},0).wait(132));

	// 12
	this.instance_5 = new lib.Symbol2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(250,500,1,1,0,0,0,250,500);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(14).to({_off:false},0).wait(1).to({alpha:0.027},0).wait(1).to({alpha:0.054},0).wait(1).to({alpha:0.081},0).wait(1).to({alpha:0.108},0).wait(1).to({alpha:0.135},0).wait(1).to({alpha:0.162},0).wait(1).to({alpha:0.189},0).wait(1).to({alpha:0.216},0).wait(1).to({alpha:0.243},0).wait(1).to({alpha:0.27},0).wait(1).to({alpha:0.297},0).wait(1).to({alpha:0.324},0).wait(1).to({alpha:0.351},0).wait(1).to({alpha:0.378},0).wait(1).to({alpha:0.405},0).wait(1).to({alpha:0.432},0).wait(1).to({alpha:0.459},0).wait(1).to({alpha:0.486},0).wait(1).to({alpha:0.514},0).wait(1).to({alpha:0.541},0).wait(1).to({alpha:0.568},0).wait(1).to({alpha:0.595},0).wait(1).to({alpha:0.622},0).wait(1).to({alpha:0.649},0).wait(1).to({alpha:0.676},0).wait(1).to({alpha:0.703},0).wait(1).to({alpha:0.73},0).wait(1).to({alpha:0.757},0).wait(1).to({alpha:0.784},0).wait(1).to({alpha:0.811},0).wait(1).to({alpha:0.838},0).wait(1).to({alpha:0.865},0).wait(1).to({alpha:0.892},0).wait(1).to({alpha:0.919},0).wait(1).to({alpha:0.946},0).wait(1).to({alpha:0.973},0).wait(1).to({alpha:1},0).wait(141));

	// kennenlern
	this.instance_6 = new lib.Symbol1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(250,500,1,1,0,0,0,250,500);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({alpha:0.026},0).wait(1).to({alpha:0.053},0).wait(1).to({alpha:0.079},0).wait(1).to({alpha:0.105},0).wait(1).to({alpha:0.132},0).wait(1).to({alpha:0.158},0).wait(1).to({alpha:0.184},0).wait(1).to({alpha:0.211},0).wait(1).to({alpha:0.237},0).wait(1).to({alpha:0.263},0).wait(1).to({alpha:0.289},0).wait(1).to({alpha:0.316},0).wait(1).to({alpha:0.342},0).wait(1).to({alpha:0.368},0).wait(1).to({alpha:0.395},0).wait(1).to({alpha:0.421},0).wait(1).to({alpha:0.447},0).wait(1).to({alpha:0.474},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.526},0).wait(1).to({alpha:0.553},0).wait(1).to({alpha:0.579},0).wait(1).to({alpha:0.605},0).wait(1).to({alpha:0.632},0).wait(1).to({alpha:0.658},0).wait(1).to({alpha:0.684},0).wait(1).to({alpha:0.711},0).wait(1).to({alpha:0.737},0).wait(1).to({alpha:0.763},0).wait(1).to({alpha:0.789},0).wait(1).to({alpha:0.816},0).wait(1).to({alpha:0.842},0).wait(1).to({alpha:0.868},0).wait(1).to({alpha:0.895},0).wait(1).to({alpha:0.921},0).wait(1).to({alpha:0.947},0).wait(1).to({alpha:0.974},0).wait(1).to({alpha:1},0).wait(154));

	// bg
	this.instance_7 = new lib.Symbol8();
	this.instance_7.parent = this;
	this.instance_7.setTransform(249,500,1,1,0,0,0,250,500);
	this.instance_7.alpha = 0;

	this.instance_8 = new lib.bg();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7}]}).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(51).to({alpha:0.077},0).wait(1).to({alpha:0.154},0).wait(1).to({alpha:0.231},0).wait(1).to({alpha:0.308},0).wait(1).to({alpha:0.385},0).wait(1).to({alpha:0.462},0).wait(1).to({alpha:0.538},0).wait(1).to({alpha:0.615},0).wait(1).to({alpha:0.692},0).wait(1).to({alpha:0.769},0).wait(1).to({alpha:0.846},0).wait(1).to({alpha:0.923},0).wait(1).to({alpha:1},0).wait(127).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(249,500,501,1000);
// library properties:
lib.properties = {
	id: '815BF6D1EAA22B4092AF3B1769E18EFF',
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
an.compositions['815BF6D1EAA22B4092AF3B1769E18EFF'] = {
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