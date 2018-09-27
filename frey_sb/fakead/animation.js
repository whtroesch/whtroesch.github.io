(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.button = function() {
	this.initialize(img.button);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,323,57);


(lib.buttoninvert = function() {
	this.initialize(img.buttoninvert);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,323,57);


(lib.car = function() {
	this.initialize(img.car);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,399,287);


(lib.film = function() {
	this.initialize(img.film);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,857,235);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,639,150);


(lib.schein = function() {
	this.initialize(img.schein);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,1000);


(lib.text = function() {
	this.initialize(img.text);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,91);// helper functions:

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
	this.instance.setTransform(0,0,0.454,0.454);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,226.8,41.3), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.film();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.849,0.849);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,727.2,199.4), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.car();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.426,0.426);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,170.1,122.4), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.schein();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.424,0.424);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,212.2,424.4), null);


(lib.button_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.button();
	this.instance.parent = this;
	this.instance.setTransform(-162,-29);

	this.instance_1 = new lib.buttoninvert();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-162,-29);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-162,-29,323,57);


// stage content:
(lib.animation = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// button
	this.instance = new lib.button_1();
	this.instance.parent = this;
	this.instance.setTransform(104.9,104.2,0.469,0.469);
	this.instance.alpha = 0;
	this.instance._off = true;
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.button_1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(63).to({_off:false},0).wait(1).to({regX:-0.5,regY:-0.5,x:104.6,y:103.9,alpha:0.059},0).wait(1).to({alpha:0.118},0).wait(1).to({alpha:0.176},0).wait(1).to({alpha:0.235},0).wait(1).to({alpha:0.294},0).wait(1).to({alpha:0.353},0).wait(1).to({alpha:0.412},0).wait(1).to({alpha:0.471},0).wait(1).to({alpha:0.529},0).wait(1).to({alpha:0.588},0).wait(1).to({alpha:0.647},0).wait(1).to({alpha:0.706},0).wait(1).to({alpha:0.765},0).wait(1).to({alpha:0.824},0).wait(1).to({alpha:0.882},0).wait(1).to({alpha:0.941},0).wait(1).to({alpha:1},0).wait(60));

	// text
	this.instance_1 = new lib.Symbol4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(109.4,41.7,1,1,0,0,0,113.4,20.7);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(47).to({_off:false},0).wait(1).to({regY:20.6,y:41.6,alpha:0.053},0).wait(1).to({alpha:0.105},0).wait(1).to({alpha:0.158},0).wait(1).to({alpha:0.211},0).wait(1).to({alpha:0.263},0).wait(1).to({alpha:0.316},0).wait(1).to({alpha:0.368},0).wait(1).to({alpha:0.421},0).wait(1).to({alpha:0.474},0).wait(1).to({alpha:0.526},0).wait(1).to({alpha:0.579},0).wait(1).to({alpha:0.632},0).wait(1).to({alpha:0.684},0).wait(1).to({alpha:0.737},0).wait(1).to({alpha:0.789},0).wait(1).to({alpha:0.842},0).wait(1).to({alpha:0.895},0).wait(1).to({alpha:0.947},0).wait(1).to({alpha:1},0).wait(74));

	// car
	this.instance_2 = new lib.Symbol2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(330,107.1,1,1,0,0,0,85,61.1);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regY:61.2,y:107.2,alpha:0.033},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.233},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.367},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.433},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.567},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.633},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.767},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:0.967},0).wait(1).to({alpha:1},0).wait(110));

	// film
	this.instance_3 = new lib.Symbol3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(276.6,74.7,1,1,0,0,0,363.6,99.7);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(30).to({_off:false},0).wait(1).to({x:277.4,alpha:0.008},0).wait(1).to({x:278.2,alpha:0.017},0).wait(1).to({x:279,alpha:0.025},0).wait(1).to({x:279.8,alpha:0.033},0).wait(1).to({x:280.6,alpha:0.042},0).wait(1).to({x:281.4,alpha:0.05},0).wait(1).to({x:282.2,alpha:0.058},0).wait(1).to({x:283,alpha:0.067},0).wait(1).to({x:283.8,alpha:0.075},0).wait(1).to({x:284.6,alpha:0.083},0).wait(1).to({x:285.4,alpha:0.092},0).wait(1).to({x:286.2,alpha:0.1},0).wait(1).to({x:287,alpha:0.108},0).wait(1).to({x:287.7,alpha:0.117},0).wait(1).to({x:288.5,alpha:0.125},0).wait(1).to({x:289.3,alpha:0.133},0).wait(1).to({x:290.1,alpha:0.142},0).wait(1).to({x:290.9,alpha:0.15},0).wait(1).to({x:291.7,alpha:0.158},0).wait(1).to({x:292.5,alpha:0.167},0).wait(1).to({x:293.3,alpha:0.175},0).wait(1).to({x:294.1,alpha:0.183},0).wait(1).to({x:294.9,alpha:0.192},0).wait(1).to({x:295.7,alpha:0.2},0).wait(1).to({x:296.5},0).wait(1).to({x:297.3},0).wait(1).to({x:298.1},0).wait(1).to({x:298.8},0).wait(1).to({x:299.6},0).wait(1).to({x:300.4},0).wait(1).to({x:301.2},0).wait(1).to({x:302},0).wait(1).to({x:302.8},0).wait(1).to({x:303.6},0).wait(1).to({x:304.4},0).wait(1).to({x:305.2},0).wait(1).to({x:306},0).wait(1).to({x:306.8},0).wait(1).to({x:307.6},0).wait(1).to({x:308.4},0).wait(1).to({x:309.1},0).wait(1).to({x:309.9},0).wait(1).to({x:310.7},0).wait(1).to({x:311.5},0).wait(1).to({x:312.3},0).wait(1).to({x:313.1},0).wait(1).to({x:313.9},0).wait(1).to({x:314.7},0).wait(1).to({x:315.5},0).wait(1).to({x:316.3},0).wait(1).to({x:317.1},0).wait(1).to({x:317.9},0).wait(1).to({x:318.7},0).wait(1).to({x:319.5},0).wait(1).to({x:320.2},0).wait(1).to({x:321},0).wait(1).to({x:321.8},0).wait(1).to({x:322.6},0).wait(1).to({x:323.4},0).wait(1).to({x:324.2},0).wait(1).to({x:325},0).wait(1).to({x:325.8},0).wait(1).to({x:326.6},0).wait(1).to({x:327.4},0).wait(1).to({x:328.2},0).wait(1).to({x:329},0).wait(1).to({x:329.8},0).wait(1).to({x:330.6},0).wait(1).to({x:331.3},0).wait(1).to({x:332.1},0).wait(1).to({x:332.9},0).wait(1).to({x:333.7},0).wait(1).to({x:334.5},0).wait(1).to({x:335.3},0).wait(1).to({x:336.1},0).wait(1).to({x:336.9},0).wait(1).to({x:337.7},0).wait(1).to({x:338.5},0).wait(1).to({x:339.3},0).wait(1).to({x:340.1},0).wait(1).to({x:340.9},0).wait(1).to({x:341.6},0).wait(1).to({x:342.4},0).wait(1).to({x:343.2},0).wait(1).to({x:344},0).wait(1).to({x:344.8},0).wait(1).to({x:345.6},0).wait(1).to({x:346.4},0).wait(1).to({x:347.2},0).wait(1).to({x:348},0).wait(1).to({x:348.8},0).wait(1).to({x:349.6},0).wait(1).to({x:350.4},0).wait(1).to({x:351.2},0).wait(1).to({x:352},0).wait(1).to({x:352.7},0).wait(1).to({x:353.5},0).wait(1).to({x:354.3},0).wait(1).to({x:355.1},0).wait(1).to({x:355.9},0).wait(1).to({x:356.7},0).wait(1).to({x:357.5},0).wait(1).to({x:358.3},0).wait(1).to({x:359.1},0).wait(1).to({x:359.9},0).wait(1).to({x:360.7},0).wait(1).to({x:361.5},0).wait(1).to({x:362.3},0).wait(1).to({x:363},0).wait(1));

	// schein
	this.instance_4 = new lib.Symbol1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(317.1,54.2,1,1,0,0,0,106.1,212.2);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({alpha:0.033},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.233},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.367},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.433},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.567},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.633},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.767},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:0.967},0).wait(1).to({alpha:1},0).wait(110));

	// Logo
	this.instance_5 = new lib.logo();
	this.instance_5.parent = this;
	this.instance_5.setTransform(461,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(140));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(530.5,-83,889,424.4);
// library properties:
lib.properties = {
	id: 'B27C7FF275A19E4DAD76897D3C57DE9E',
	width: 639,
	height: 150,
	fps: 24,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:"images/button.png", id:"button"},
		{src:"images/buttoninvert.png", id:"buttoninvert"},
		{src:"images/car.png", id:"car"},
		{src:"images/film.png", id:"film"},
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
an.compositions['B27C7FF275A19E4DAD76897D3C57DE9E'] = {
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