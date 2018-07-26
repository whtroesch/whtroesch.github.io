(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Animation_atlas_", frames: [[502,127,400,140],[502,269,307,82],[502,0,484,125],[0,0,500,1000]]}
];


// symbols:



(lib._50 = function() {
	this.spriteSheet = ss["Animation_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.buttonnorm = function() {
	this.spriteSheet = ss["Animation_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.logo = function() {
	this.spriteSheet = ss["Animation_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.text = function() {
	this.spriteSheet = ss["Animation_atlas_"];
	this.gotoAndStop(3);
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


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.text();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,500,1000), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib._50();
	this.instance.parent = this;
	this.instance.setTransform(17,0,1,1,7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,414,187.4), null);


(lib.jetztholen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.buttonnorm();
	this.instance.parent = this;
	this.instance.setTransform(-155,-46);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.12,scaleY:1.12,x:-173,y:-51},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-155,-46,307,82);


// stage content:
(lib.Animation = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Ebene_4
	this.instance = new lib.jetztholen();
	this.instance.parent = this;
	this.instance.setTransform(248,616.6);
	this.instance.alpha = 0;
	this.instance._off = true;
	new cjs.ButtonHelper(this.instance, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(87).to({_off:false},0).wait(1).to({regX:-1.5,regY:-5.2,x:246.5,y:611.4,alpha:0.018},0).wait(1).to({alpha:0.036},0).wait(1).to({alpha:0.054},0).wait(1).to({alpha:0.071},0).wait(1).to({alpha:0.089},0).wait(1).to({alpha:0.107},0).wait(1).to({alpha:0.125},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.161},0).wait(1).to({alpha:0.179},0).wait(1).to({alpha:0.196},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.232},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.268},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.304},0).wait(1).to({alpha:0.321},0).wait(1).to({alpha:0.339},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.393},0).wait(1).to({alpha:0.411},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.446},0).wait(1).to({alpha:0.464},0).wait(1).to({alpha:0.482},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.518},0).wait(1).to({alpha:0.536},0).wait(1).to({alpha:0.554},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.589},0).wait(1).to({alpha:0.607},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.643},0).wait(1).to({alpha:0.661},0).wait(1).to({alpha:0.679},0).wait(1).to({alpha:0.696},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.732},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.768},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.804},0).wait(1).to({alpha:0.821},0).wait(1).to({alpha:0.839},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.875},0).wait(1).to({alpha:0.893},0).wait(1).to({alpha:0.911},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:0.946},0).wait(1).to({alpha:0.964},0).wait(1).to({alpha:0.982},0).wait(1).to({alpha:1},0).wait(1));

	// text
	this.instance_1 = new lib.Symbol2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(250,500,1,1,0,0,0,250,500);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(87).to({_off:false},0).wait(1).to({alpha:0.018},0).wait(1).to({alpha:0.036},0).wait(1).to({alpha:0.054},0).wait(1).to({alpha:0.071},0).wait(1).to({alpha:0.089},0).wait(1).to({alpha:0.107},0).wait(1).to({alpha:0.125},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.161},0).wait(1).to({alpha:0.179},0).wait(1).to({alpha:0.196},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.232},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.268},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.304},0).wait(1).to({alpha:0.321},0).wait(1).to({alpha:0.339},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.393},0).wait(1).to({alpha:0.411},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.446},0).wait(1).to({alpha:0.464},0).wait(1).to({alpha:0.482},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.518},0).wait(1).to({alpha:0.536},0).wait(1).to({alpha:0.554},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.589},0).wait(1).to({alpha:0.607},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.643},0).wait(1).to({alpha:0.661},0).wait(1).to({alpha:0.679},0).wait(1).to({alpha:0.696},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.732},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.768},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.804},0).wait(1).to({alpha:0.821},0).wait(1).to({alpha:0.839},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.875},0).wait(1).to({alpha:0.893},0).wait(1).to({alpha:0.911},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:0.946},0).wait(1).to({alpha:0.964},0).wait(1).to({alpha:0.982},0).wait(1).to({alpha:1},0).wait(1));

	// 50 Kopie 4
	this.instance_2 = new lib.Symbol1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(138.7,63.7,0.25,0.25,10.8,0,0,202.1,89.7);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(25).to({_off:false},0).wait(1).to({regX:207,regY:93.7,scaleX:0.26,scaleY:0.26,rotation:11.5,x:139.7,y:64.9,alpha:0.034},0).wait(1).to({scaleX:0.26,scaleY:0.26,rotation:11.9,y:65,alpha:0.069},0).wait(1).to({scaleX:0.27,scaleY:0.27,rotation:12.4,y:65.1,alpha:0.103},0).wait(1).to({scaleX:0.28,scaleY:0.28,rotation:12.8,x:139.8,alpha:0.138},0).wait(1).to({scaleX:0.28,scaleY:0.28,rotation:13.3,x:139.7,alpha:0.172},0).wait(1).to({scaleX:0.29,scaleY:0.29,rotation:13.8,x:139.8,y:65.2,alpha:0.207},0).wait(1).to({scaleX:0.29,scaleY:0.29,rotation:14.2,alpha:0.241},0).wait(1).to({scaleX:0.3,scaleY:0.3,rotation:14.7,y:65.3,alpha:0.276},0).wait(1).to({scaleX:0.31,scaleY:0.31,rotation:15.2,x:139.7,alpha:0.31},0).wait(1).to({scaleX:0.31,scaleY:0.31,rotation:15.6,x:139.8,alpha:0.345},0).wait(1).to({scaleX:0.32,scaleY:0.32,rotation:16.1,y:65.4,alpha:0.379},0).wait(1).to({scaleX:0.32,scaleY:0.32,rotation:16.5,alpha:0.414},0).wait(1).to({scaleX:0.33,scaleY:0.33,rotation:17,alpha:0.448},0).wait(1).to({scaleX:0.34,scaleY:0.34,rotation:17.5,y:65.5,alpha:0.483},0).wait(1).to({scaleX:0.34,scaleY:0.34,rotation:17.9,x:139.9,y:65.6,alpha:0.517},0).wait(1).to({alpha:0.552},0).wait(1).to({alpha:0.586},0).wait(1).to({alpha:0.621},0).wait(1).to({alpha:0.655},0).wait(1).to({alpha:0.69},0).wait(1).to({alpha:0.724},0).wait(1).to({x:139.8,alpha:0.759},0).wait(1).to({alpha:0.793},0).wait(1).to({alpha:0.828},0).wait(1).to({alpha:0.862},0).wait(1).to({alpha:0.897},0).wait(1).to({alpha:0.931},0).wait(1).to({alpha:0.966},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.976},0).wait(1).to({alpha:0.952},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:0.905},0).wait(1).to({alpha:0.881},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.81},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.762},0).wait(1).to({alpha:0.738},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.69},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.643},0).wait(1).to({alpha:0.619},0).wait(1).to({alpha:0.595},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.548},0).wait(1).to({alpha:0.524},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.476},0).wait(1).to({alpha:0.452},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.405},0).wait(1).to({alpha:0.381},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.31},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.262},0).wait(1).to({alpha:0.238},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.19},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.119},0).wait(1).to({alpha:0.095},0).wait(1).to({alpha:0.071},0).wait(1).to({alpha:0.048},0).wait(1).to({alpha:0.024},0).wait(1).to({alpha:0},0).wait(24).to({_off:true},1).wait(23));

	// 50 Kopie 2
	this.instance_3 = new lib.Symbol1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(382.6,616.6,0.251,0.25,-4,0,0,204.1,90.8);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(25).to({_off:false},0).wait(1).to({regX:207,regY:93.7,scaleX:0.26,scaleY:0.26,rotation:-4.2,x:383.4,y:617.3,alpha:0.034},0).wait(1).to({scaleX:0.26,scaleY:0.26,rotation:-4.3,alpha:0.069},0).wait(1).to({scaleX:0.27,scaleY:0.27,rotation:-4.4,alpha:0.103},0).wait(1).to({scaleX:0.28,scaleY:0.28,rotation:-4.5,alpha:0.138},0).wait(1).to({scaleX:0.28,scaleY:0.28,rotation:-4.6,x:383.5,alpha:0.172},0).wait(1).to({scaleX:0.29,scaleY:0.29,rotation:-4.8,alpha:0.207},0).wait(1).to({scaleX:0.29,scaleY:0.29,rotation:-4.9,alpha:0.241},0).wait(1).to({scaleX:0.3,scaleY:0.3,rotation:-5,y:617.4,alpha:0.276},0).wait(1).to({scaleX:0.31,scaleY:0.31,rotation:-5.1,alpha:0.31},0).wait(1).to({scaleX:0.31,scaleY:0.31,rotation:-5.2,y:617.3,alpha:0.345},0).wait(1).to({scaleX:0.32,scaleY:0.32,rotation:-5.4,y:617.4,alpha:0.379},0).wait(1).to({scaleX:0.32,scaleY:0.32,rotation:-5.5,x:383.6,alpha:0.414},0).wait(1).to({scaleX:0.33,scaleY:0.33,rotation:-5.6,alpha:0.448},0).wait(1).to({scaleX:0.34,scaleY:0.34,rotation:-5.7,x:383.7,alpha:0.483},0).wait(1).to({scaleX:0.34,scaleY:0.34,rotation:-5.8,x:383.6,alpha:0.517},0).wait(1).to({alpha:0.552},0).wait(1).to({alpha:0.586},0).wait(1).to({alpha:0.621},0).wait(1).to({alpha:0.655},0).wait(1).to({alpha:0.69},0).wait(1).to({alpha:0.724},0).wait(1).to({alpha:0.759},0).wait(1).to({alpha:0.793},0).wait(1).to({alpha:0.828},0).wait(1).to({alpha:0.862},0).wait(1).to({alpha:0.897},0).wait(1).to({alpha:0.931},0).wait(1).to({alpha:0.966},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.976},0).wait(1).to({alpha:0.952},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:0.905},0).wait(1).to({alpha:0.881},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.81},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.762},0).wait(1).to({alpha:0.738},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.69},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.643},0).wait(1).to({alpha:0.619},0).wait(1).to({alpha:0.595},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.548},0).wait(1).to({alpha:0.524},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.476},0).wait(1).to({alpha:0.452},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.405},0).wait(1).to({alpha:0.381},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.31},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.262},0).wait(1).to({alpha:0.238},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.19},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.119},0).wait(1).to({alpha:0.095},0).wait(1).to({alpha:0.071},0).wait(1).to({alpha:0.048},0).wait(1).to({alpha:0.024},0).wait(1).to({alpha:0},0).wait(24).to({_off:true},1).wait(23));

	// 50 Kopie
	this.instance_4 = new lib.Symbol1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(230.6,207.6,0.926,0.926,-23.1,0,0,206.8,93.8);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(13).to({_off:false},0).wait(1).to({regX:207,regY:93.7,scaleX:0.9,scaleY:0.9,x:230.7,y:207.5,alpha:0.034},0).wait(1).to({scaleX:0.88,scaleY:0.88,rotation:-22.9,alpha:0.069},0).wait(1).to({scaleX:0.85,scaleY:0.85,rotation:-22.8,alpha:0.103},0).wait(1).to({scaleX:0.82,scaleY:0.82,rotation:-22.6,x:230.8,alpha:0.138},0).wait(1).to({scaleX:0.8,scaleY:0.8,rotation:-22.5,x:230.7,alpha:0.172},0).wait(1).to({scaleX:0.77,scaleY:0.77,rotation:-22.3,alpha:0.207},0).wait(1).to({scaleX:0.75,scaleY:0.75,rotation:-22.2,alpha:0.241},0).wait(1).to({scaleX:0.72,scaleY:0.72,rotation:-22,alpha:0.276},0).wait(1).to({scaleX:0.69,scaleY:0.69,rotation:-21.9,alpha:0.31},0).wait(1).to({scaleX:0.67,scaleY:0.67,rotation:-21.7,alpha:0.345},0).wait(1).to({scaleX:0.64,scaleY:0.64,rotation:-21.6,alpha:0.379},0).wait(1).to({scaleX:0.62,scaleY:0.62,rotation:-21.4,alpha:0.414},0).wait(1).to({scaleX:0.59,scaleY:0.59,rotation:-21.3,alpha:0.448},0).wait(1).to({scaleX:0.56,scaleY:0.56,rotation:-21.1,alpha:0.483},0).wait(1).to({scaleX:0.54,scaleY:0.54,rotation:-21,x:230.6,alpha:0.517},0).wait(1).to({alpha:0.552},0).wait(1).to({alpha:0.586},0).wait(1).to({alpha:0.621},0).wait(1).to({alpha:0.655},0).wait(1).to({alpha:0.69},0).wait(1).to({alpha:0.724},0).wait(1).to({alpha:0.759},0).wait(1).to({alpha:0.793},0).wait(1).to({alpha:0.828},0).wait(1).to({alpha:0.862},0).wait(1).to({alpha:0.897},0).wait(1).to({alpha:0.931},0).wait(1).to({alpha:0.966},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.976},0).wait(1).to({alpha:0.952},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:0.905},0).wait(1).to({alpha:0.881},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.81},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.762},0).wait(1).to({alpha:0.738},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.69},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.643},0).wait(1).to({alpha:0.619},0).wait(1).to({alpha:0.595},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.548},0).wait(1).to({alpha:0.524},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.476},0).wait(1).to({alpha:0.452},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.405},0).wait(1).to({alpha:0.381},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.31},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.262},0).wait(1).to({alpha:0.238},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.19},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.119},0).wait(1).to({alpha:0.095},0).wait(1).to({alpha:0.071},0).wait(1).to({alpha:0.048},0).wait(1).to({alpha:0.024},0).wait(1).to({alpha:0},0).wait(24).to({_off:true},1).wait(35));

	// 50 Kopie 3
	this.instance_5 = new lib.Symbol1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(178.2,697.3,0.542,0.542,-10.3,0,0,206.1,92.9);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(6).to({_off:false},0).wait(1).to({regX:207,regY:93.7,rotation:-10.4,x:178.7,y:697.7,alpha:0.034},0).wait(1).to({alpha:0.069},0).wait(1).to({alpha:0.103},0).wait(1).to({alpha:0.138},0).wait(1).to({alpha:0.172},0).wait(1).to({alpha:0.207},0).wait(1).to({alpha:0.241},0).wait(1).to({alpha:0.276},0).wait(1).to({alpha:0.31},0).wait(1).to({alpha:0.345},0).wait(1).to({alpha:0.379},0).wait(1).to({alpha:0.414},0).wait(1).to({alpha:0.448},0).wait(1).to({alpha:0.483},0).wait(1).to({alpha:0.517},0).wait(1).to({alpha:0.552},0).wait(1).to({alpha:0.586},0).wait(1).to({alpha:0.621},0).wait(1).to({alpha:0.655},0).wait(1).to({alpha:0.69},0).wait(1).to({alpha:0.724},0).wait(1).to({alpha:0.759},0).wait(1).to({alpha:0.793},0).wait(1).to({alpha:0.828},0).wait(1).to({alpha:0.862},0).wait(1).to({alpha:0.897},0).wait(1).to({alpha:0.931},0).wait(1).to({alpha:0.966},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.976},0).wait(1).to({alpha:0.952},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:0.905},0).wait(1).to({alpha:0.881},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.81},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.762},0).wait(1).to({alpha:0.738},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.69},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.643},0).wait(1).to({alpha:0.619},0).wait(1).to({alpha:0.595},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.548},0).wait(1).to({alpha:0.524},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.476},0).wait(1).to({alpha:0.452},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.405},0).wait(1).to({alpha:0.381},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.31},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.262},0).wait(1).to({alpha:0.238},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.19},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.119},0).wait(1).to({alpha:0.095},0).wait(1).to({alpha:0.071},0).wait(1).to({alpha:0.048},0).wait(1).to({alpha:0.024},0).wait(1).to({alpha:0},0).wait(24).to({_off:true},1).wait(42));

	// 50
	this.instance_6 = new lib.Symbol1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(245.8,440.9,1,1,0,0,0,207,93.7);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({alpha:0.02},0).wait(1).to({alpha:0.039},0).wait(1).to({alpha:0.059},0).wait(1).to({alpha:0.078},0).wait(1).to({alpha:0.098},0).wait(1).to({alpha:0.118},0).wait(1).to({alpha:0.137},0).wait(1).to({alpha:0.157},0).wait(1).to({alpha:0.176},0).wait(1).to({alpha:0.196},0).wait(1).to({alpha:0.216},0).wait(1).to({alpha:0.235},0).wait(1).to({alpha:0.255},0).wait(1).to({alpha:0.275},0).wait(1).to({alpha:0.294},0).wait(1).to({alpha:0.314},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.353},0).wait(1).to({alpha:0.373},0).wait(1).to({alpha:0.392},0).wait(1).to({alpha:0.412},0).wait(1).to({alpha:0.431},0).wait(1).to({alpha:0.451},0).wait(1).to({alpha:0.471},0).wait(1).to({alpha:0.49},0).wait(1).to({alpha:0.51},0).wait(1).to({alpha:0.529},0).wait(1).to({alpha:0.549},0).wait(1).to({alpha:0.569},0).wait(1).to({alpha:0.588},0).wait(1).to({alpha:0.608},0).wait(1).to({alpha:0.627},0).wait(1).to({alpha:0.647},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.686},0).wait(1).to({alpha:0.706},0).wait(1).to({alpha:0.725},0).wait(1).to({alpha:0.745},0).wait(1).to({alpha:0.765},0).wait(1).to({alpha:0.784},0).wait(1).to({alpha:0.804},0).wait(1).to({alpha:0.824},0).wait(1).to({alpha:0.843},0).wait(1).to({alpha:0.863},0).wait(1).to({alpha:0.882},0).wait(1).to({alpha:0.902},0).wait(1).to({alpha:0.922},0).wait(1).to({alpha:0.941},0).wait(1).to({alpha:0.961},0).wait(1).to({alpha:0.98},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.95},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:0.85},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.65},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.55},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.45},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.35},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.15},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0.05},0).wait(1).to({alpha:0},0).wait(24).to({_off:true},1).wait(48));

	// logo
	this.instance_7 = new lib.logo();
	this.instance_7.parent = this;
	this.instance_7.setTransform(8,853);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(144));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(258,847.2,484,630.8);
// library properties:
lib.properties = {
	id: '269C3C27282E6D42B7ADA03E64F9F74D',
	width: 500,
	height: 1000,
	fps: 24,
	color: "#FA1919",
	opacity: 1.00,
	manifest: [
		{src:"images/Animation_atlas_.png", id:"Animation_atlas_"}
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
an.compositions['269C3C27282E6D42B7ADA03E64F9F74D'] = {
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