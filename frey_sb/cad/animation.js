(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.button = function() {
	this.initialize(img.button);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,250,44);


(lib.buttoninvert = function() {
	this.initialize(img.buttoninvert);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,250,44);


(lib.car = function() {
	this.initialize(img.car);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,280,201);


(lib.filml = function() {
	this.initialize(img.filml);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,224,108);


(lib.filmr = function() {
	this.initialize(img.filmr);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,366,136);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,135,59);


(lib.schein = function() {
	this.initialize(img.schein);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.text = function() {
	this.initialize(img.text);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,55);// helper functions:

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


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.861,0.861);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,116.3,50.8), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.text();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.909,0.909);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,272.8,50), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.filmr();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.435,0.435);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,159.1,59.1), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.filml();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,89.6,43.2), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.car();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.622,0.622);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,174.2,125), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.schein();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.71,0.71);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,212.9,425.8), null);


(lib.button_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.button();
	this.instance.parent = this;
	this.instance.setTransform(-125,-22);

	this.instance_1 = new lib.buttoninvert();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-125,-22);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-125,-22,250,44);


// stage content:
(lib.animation = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// text
	this.instance = new lib.Symbol5();
	this.instance.parent = this;
	this.instance.setTransform(155.4,46,1,1,0,0,0,136.4,25);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(72).to({_off:false},0).wait(1).to({alpha:0.05},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0.15},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.35},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.45},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.55},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.65},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.85},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:0.95},0).wait(1).to({alpha:1},0).wait(54));

	// button
	this.instance_1 = new lib.button_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(150.5,222.6,0.634,0.634);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.button_1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(88).to({_off:false},0).wait(1).to({alpha:0.063},0).wait(1).to({alpha:0.125},0).wait(1).to({alpha:0.188},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.313},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.438},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.563},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.688},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.813},0).wait(1).to({alpha:0.875},0).wait(1).to({alpha:0.938},0).wait(1).to({alpha:1},0).wait(42));

	// car
	this.instance_2 = new lib.Symbol2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(154,161.5,1,1,0,0,0,87,62.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(5).to({_off:false},0).wait(1).to({regX:87.1,x:154.1,alpha:0.033},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.233},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.367},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.433},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.567},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.633},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.767},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:0.967},0).wait(1).to({alpha:1},0).wait(111));

	// filmr
	this.instance_3 = new lib.Symbol4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(222.5,109.6,1,1,0,0,0,79.5,29.6);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(35).to({_off:false},0).wait(1).to({regY:29.5,y:109.5,alpha:0.019},0).wait(1).to({alpha:0.039},0).wait(1).to({alpha:0.058},0).wait(1).to({alpha:0.078},0).wait(1).to({alpha:0.097},0).wait(1).to({alpha:0.116},0).wait(1).to({alpha:0.136},0).wait(1).to({alpha:0.155},0).wait(1).to({alpha:0.175},0).wait(1).to({alpha:0.194},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.233},0).wait(1).to({alpha:0.252},0).wait(1).to({alpha:0.272},0).wait(1).to({alpha:0.291},0).wait(1).to({alpha:0.311},0).wait(1).to({alpha:0.33},0).wait(1).to({alpha:0.352},0).wait(1).to({alpha:0.373},0).wait(1).to({alpha:0.394},0).wait(1).to({alpha:0.416},0).wait(1).to({alpha:0.438},0).wait(1).to({alpha:0.459},0).wait(1).to({alpha:0.481},0).wait(1).to({alpha:0.502},0).wait(1).to({alpha:0.524},0).wait(1).to({alpha:0.545},0).wait(1).to({alpha:0.567},0).wait(1).to({alpha:0.588},0).wait(1).to({alpha:0.609},0).wait(1).to({alpha:0.631},0).wait(1).to({alpha:0.652},0).wait(1).to({alpha:0.674},0).wait(1).to({alpha:0.696},0).wait(1).to({alpha:0.717},0).wait(1).to({alpha:0.739},0).wait(1).to({alpha:0.76},0).wait(1).to({x:223.2,alpha:0.772},0).wait(1).to({x:223.9,alpha:0.784},0).wait(1).to({x:224.7,alpha:0.796},0).wait(1).to({x:225.4,alpha:0.808},0).wait(1).to({x:226.1,alpha:0.82},0).wait(1).to({x:226.8,alpha:0.832},0).wait(1).to({x:227.5,alpha:0.844},0).wait(1).to({x:228.3,alpha:0.856},0).wait(1).to({x:229,alpha:0.868},0).wait(1).to({x:229.7,alpha:0.88},0).wait(1).to({x:230.4,alpha:0.892},0).wait(1).to({x:231.1,alpha:0.904},0).wait(1).to({x:231.9,alpha:0.916},0).wait(1).to({x:232.6,alpha:0.928},0).wait(1).to({x:233.3,alpha:0.94},0).wait(1).to({x:234,alpha:0.952},0).wait(1).to({x:234.7,alpha:0.964},0).wait(1).to({x:235.5,alpha:0.976},0).wait(1).to({x:236.2,alpha:0.988},0).wait(1).to({x:236.9,alpha:1},0).wait(54));

	// filml
	this.instance_4 = new lib.Symbol3();
	this.instance_4.parent = this;
	this.instance_4.setTransform(29.8,137.6,1,1,0,0,0,44.8,21.6);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(35).to({_off:false},0).wait(1).to({alpha:0.019},0).wait(1).to({alpha:0.039},0).wait(1).to({alpha:0.058},0).wait(1).to({alpha:0.078},0).wait(1).to({alpha:0.097},0).wait(1).to({alpha:0.116},0).wait(1).to({alpha:0.136},0).wait(1).to({alpha:0.155},0).wait(1).to({alpha:0.175},0).wait(1).to({alpha:0.194},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.233},0).wait(1).to({alpha:0.252},0).wait(1).to({alpha:0.272},0).wait(1).to({alpha:0.291},0).wait(1).to({alpha:0.311},0).wait(1).to({alpha:0.33},0).wait(1).to({alpha:0.352},0).wait(1).to({alpha:0.373},0).wait(1).to({alpha:0.394},0).wait(1).to({alpha:0.416},0).wait(1).to({alpha:0.438},0).wait(1).to({alpha:0.459},0).wait(1).to({alpha:0.481},0).wait(1).to({alpha:0.502},0).wait(1).to({alpha:0.524},0).wait(1).to({alpha:0.545},0).wait(1).to({alpha:0.567},0).wait(1).to({alpha:0.588},0).wait(1).to({alpha:0.609},0).wait(1).to({alpha:0.631},0).wait(1).to({alpha:0.652},0).wait(1).to({alpha:0.674},0).wait(1).to({alpha:0.696},0).wait(1).to({alpha:0.717},0).wait(1).to({alpha:0.739},0).wait(1).to({alpha:0.76},0).wait(1).to({x:30.6,alpha:0.772},0).wait(1).to({x:31.4,alpha:0.784},0).wait(1).to({x:32.1,alpha:0.796},0).wait(1).to({x:32.9,alpha:0.808},0).wait(1).to({x:33.6,alpha:0.82},0).wait(1).to({x:34.4,alpha:0.832},0).wait(1).to({x:35.2,alpha:0.844},0).wait(1).to({x:35.9,alpha:0.856},0).wait(1).to({x:36.7,alpha:0.868},0).wait(1).to({x:37.4,alpha:0.88},0).wait(1).to({x:38.2,alpha:0.892},0).wait(1).to({x:39,alpha:0.904},0).wait(1).to({x:39.7,alpha:0.916},0).wait(1).to({x:40.5,alpha:0.928},0).wait(1).to({x:41.2,alpha:0.94},0).wait(1).to({x:42,alpha:0.952},0).wait(1).to({x:42.8,alpha:0.964},0).wait(1).to({x:43.5,alpha:0.976},0).wait(1).to({x:44.3,alpha:0.988},0).wait(1).to({x:45,alpha:1},0).wait(54));

	// logo
	this.instance_5 = new lib.Symbol6();
	this.instance_5.parent = this;
	this.instance_5.setTransform(150.1,42.4,1,1,0,0,0,58.1,25.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(66).to({alpha:0.5},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(78));

	// scheinwerfer
	this.instance_6 = new lib.Symbol1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(144.4,108.8,1,1,0,0,0,106.4,212.8);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(5).to({_off:false},0).wait(1).to({regY:212.9,y:108.9,alpha:0.033},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.233},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.367},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.433},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.567},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.633},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.767},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:0.967},0).wait(1).to({alpha:1},0).wait(111));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(242,142,116.3,50.8);
// library properties:
lib.properties = {
	id: '3B96A4C07D62AC4AAC0C22A5E67D4AFE',
	width: 300,
	height: 250,
	fps: 24,
	color: "#0C1115",
	opacity: 1.00,
	manifest: [
		{src:"images/button.png", id:"button"},
		{src:"images/buttoninvert.png", id:"buttoninvert"},
		{src:"images/car.png", id:"car"},
		{src:"images/filml.png", id:"filml"},
		{src:"images/filmr.png", id:"filmr"},
		{src:"images/logo.png", id:"logo"},
		{src:"images/schein.jpg", id:"schein"},
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
an.compositions['3B96A4C07D62AC4AAC0C22A5E67D4AFE'] = {
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