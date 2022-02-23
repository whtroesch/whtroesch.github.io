(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_1", frames: [[0,0,970,250],[0,252,970,250],[0,756,173,134],[0,504,970,250]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
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



(lib.balkenunten = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bg = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.logo = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.text = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();
// helper functions:

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
	this.instance = new lib.text();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,970,250), null);


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
	this.instance = new lib.balkenunten();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,970,250), null);


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
	this.instance = new lib.logo();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,173,134), null);


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

	// balken
	this.instance = new lib.Symbol2();
	this.instance.setTransform(486,161,1,1,0,0,0,485,125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:159},0).wait(1).to({y:157},0).wait(1).to({y:155},0).wait(1).to({y:153},0).wait(1).to({y:151},0).wait(1).to({y:149},0).wait(1).to({y:147},0).wait(1).to({y:145},0).wait(1).to({y:143},0).wait(1).to({y:141},0).wait(1).to({y:139},0).wait(1).to({y:137},0).wait(1).to({y:135},0).wait(1).to({y:133},0).wait(1).to({y:131},0).wait(1).to({y:129},0).wait(1).to({y:127},0).wait(1).to({y:125},0).wait(107));

	// logo
	this.instance_1 = new lib.Symbol1();
	this.instance_1.setTransform(116.55,104.05,0.0474,0.0474,0,0,0,86.5,67.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regY:67,scaleX:0.1109,scaleY:0.1109,x:116.45,y:103.95},0).wait(1).to({scaleX:0.1744,scaleY:0.1744,x:116.4,y:103.9},0).wait(1).to({scaleX:0.2379,scaleY:0.2379,x:116.35,y:103.8},0).wait(1).to({scaleX:0.3014,scaleY:0.3014,x:116.25,y:103.75},0).wait(1).to({scaleX:0.3649,scaleY:0.3649,x:116.15,y:103.65},0).wait(1).to({scaleX:0.4284,scaleY:0.4284,x:116.1,y:103.6},0).wait(1).to({scaleX:0.4919,scaleY:0.4919,x:116.05,y:103.55},0).wait(1).to({scaleX:0.5555,scaleY:0.5555,x:116,y:103.45},0).wait(1).to({scaleX:0.619,scaleY:0.619,x:115.95,y:103.4},0).wait(1).to({scaleX:0.6825,scaleY:0.6825,x:115.85,y:103.35},0).wait(1).to({scaleX:0.746,scaleY:0.746,x:115.8,y:103.3},0).wait(1).to({scaleX:0.8095,scaleY:0.8095,x:115.7,y:103.25},0).wait(1).to({scaleX:0.873,scaleY:0.873,x:115.65,y:103.15},0).wait(1).to({scaleX:0.9365,scaleY:0.9365,x:115.6,y:103.1},0).wait(1).to({scaleX:1,scaleY:1,x:115.5,y:103},0).wait(110));

	// eck
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#636363").s().p("AzzTsMAAAgnXMAnnAAAMAAAAnXg");
	this.shape.setTransform(111,125.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(125));

	// text
	this.instance_2 = new lib.Symbol3();
	this.instance_2.setTransform(21.9,126,1,1,0,0,0,485,125);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(24).to({_off:false},0).wait(1).to({x:46.3},0).wait(1).to({x:70.65},0).wait(1).to({x:95.05},0).wait(1).to({x:119.4},0).wait(1).to({x:143.8},0).wait(1).to({x:168.15},0).wait(1).to({x:192.55},0).wait(1).to({x:216.9},0).wait(1).to({x:241.3},0).wait(1).to({x:265.65},0).wait(1).to({x:290.05},0).wait(1).to({x:314.4},0).wait(1).to({x:338.8},0).wait(1).to({x:363.15},0).wait(1).to({x:387.55},0).wait(1).to({x:411.9},0).wait(1).to({x:436.3},0).wait(1).to({x:460.65},0).wait(1).to({x:485},0).wait(82));

	// bg
	this.instance_3 = new lib.bg();
	this.instance_3.setTransform(1,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(125));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(21.9,124.4,949.1,161.6);
// library properties:
lib.properties = {
	id: '4A3608690A31ED4EA110DB545FB0E6E1',
	width: 970,
	height: 250,
	fps: 25,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/index_atlas_1.png", id:"index_atlas_1"}
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
an.compositions['4A3608690A31ED4EA110DB545FB0E6E1'] = {
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
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;