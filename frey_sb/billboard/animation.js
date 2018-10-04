(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.film = function() {
	this.initialize(img.film);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,857,235);


(lib.frey_arsenal = function() {
	this.initialize(img.frey_arsenal);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,970,186);// helper functions:

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


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.film();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.256,1.256);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,1076.1,295.1), null);


// stage content:
(lib.animation = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// frey
	this.instance = new lib.frey_arsenal();
	this.instance.parent = this;
	this.instance.setTransform(2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(120));

	// film
	this.instance_1 = new lib.Symbol1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(431.9,78.6,1,1,0,0,0,538,147.6);
	this.instance_1.alpha = 0.371;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regY:147.5,x:432.8,y:78.5,alpha:0.37},0).wait(1).to({x:433.7},0).wait(1).to({x:434.6},0).wait(1).to({x:435.5},0).wait(1).to({x:436.4},0).wait(1).to({x:437.2},0).wait(1).to({x:438.1},0).wait(1).to({x:439},0).wait(1).to({x:439.9},0).wait(1).to({x:440.8},0).wait(1).to({x:441.7},0).wait(1).to({x:442.5},0).wait(1).to({x:443.4},0).wait(1).to({x:444.3},0).wait(1).to({x:445.2},0).wait(1).to({x:446.1},0).wait(1).to({x:446.9},0).wait(1).to({x:447.8},0).wait(1).to({x:448.7},0).wait(1).to({x:449.6},0).wait(1).to({x:450.5},0).wait(1).to({x:451.4},0).wait(1).to({x:452.2},0).wait(1).to({x:453.1},0).wait(1).to({x:454},0).wait(1).to({x:454.9},0).wait(1).to({x:455.8},0).wait(1).to({x:456.7},0).wait(1).to({x:457.5},0).wait(1).to({x:458.4},0).wait(1).to({x:459.3},0).wait(1).to({x:460.2},0).wait(1).to({x:461.1},0).wait(1).to({x:461.9},0).wait(1).to({x:462.8},0).wait(1).to({x:463.7},0).wait(1).to({x:464.6},0).wait(1).to({x:465.5},0).wait(1).to({x:466.4},0).wait(1).to({x:467.2},0).wait(1).to({x:468.1},0).wait(1).to({x:469},0).wait(1).to({x:469.9},0).wait(1).to({x:470.8},0).wait(1).to({x:471.7},0).wait(1).to({x:472.5},0).wait(1).to({x:473.4},0).wait(1).to({x:474.3},0).wait(1).to({x:475.2},0).wait(1).to({x:476.1},0).wait(1).to({x:476.9},0).wait(1).to({x:477.8},0).wait(1).to({x:478.7},0).wait(1).to({x:479.6},0).wait(1).to({x:480.5},0).wait(1).to({x:481.4},0).wait(1).to({x:482.2},0).wait(1).to({x:483.1},0).wait(1).to({x:484},0).wait(1).to({x:484.9},0).wait(1).to({x:485.8},0).wait(1).to({x:486.7},0).wait(1).to({x:487.5},0).wait(1).to({x:488.4},0).wait(1).to({x:489.3},0).wait(1).to({x:490.2},0).wait(1).to({x:491.1},0).wait(1).to({x:491.9},0).wait(1).to({x:492.8},0).wait(1).to({x:493.7},0).wait(1).to({x:494.6},0).wait(1).to({x:495.5},0).wait(1).to({x:496.4},0).wait(1).to({x:497.2},0).wait(1).to({x:498.1},0).wait(1).to({x:499},0).wait(1).to({x:499.9},0).wait(1).to({x:500.8},0).wait(1).to({x:501.7},0).wait(1).to({x:502.5},0).wait(1).to({x:503.4},0).wait(1).to({x:504.3},0).wait(1).to({x:505.2},0).wait(1).to({x:506.1},0).wait(1).to({x:506.9},0).wait(1).to({x:507.8},0).wait(1).to({x:508.7},0).wait(1).to({x:509.6},0).wait(1).to({x:510.5},0).wait(1).to({x:511.4},0).wait(1).to({x:512.2},0).wait(1).to({x:513.1},0).wait(1).to({x:514},0).wait(1).to({x:514.9},0).wait(1).to({x:515.8},0).wait(1).to({x:516.7},0).wait(1).to({x:517.5},0).wait(1).to({x:518.4},0).wait(1).to({x:519.3},0).wait(1).to({x:520.2},0).wait(1).to({x:521.1},0).wait(1).to({x:521.9},0).wait(1).to({x:522.8},0).wait(1).to({x:523.7},0).wait(1).to({x:524.6},0).wait(1).to({x:525.5},0).wait(1).to({x:526.4},0).wait(1).to({x:527.2},0).wait(1).to({x:528.1},0).wait(1).to({x:529},0).wait(1).to({x:529.9},0).wait(1).to({x:530.8},0).wait(1).to({x:531.7},0).wait(1).to({x:532.5},0).wait(1).to({x:533.4},0).wait(1).to({x:534.3},0).wait(1).to({x:535.2},0).wait(1).to({x:536.1},0).wait(1).to({x:536.9},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(378.9,24,1078.1,295.1);
// library properties:
lib.properties = {
	id: '984C6EBA87C40045B2A0D99B104642C7',
	width: 970,
	height: 186,
	fps: 24,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:"images/film.png?1538558996148", id:"film"},
		{src:"images/frey_arsenal.png?1538558996148", id:"frey_arsenal"}
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
an.compositions['984C6EBA87C40045B2A0D99B104642C7'] = {
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