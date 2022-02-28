(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_1", frames: [[0,0,970,250],[0,252,970,250],[0,756,219,202],[0,504,970,250]]}
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

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,219,202), null);


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
	this.instance.setTransform(486,162,1,1,0,0,0,485,125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:159.9},0).wait(1).to({y:157.85},0).wait(1).to({y:155.8},0).wait(1).to({y:153.75},0).wait(1).to({y:151.7},0).wait(1).to({y:149.65},0).wait(1).to({y:147.6},0).wait(1).to({y:145.55},0).wait(1).to({y:143.5},0).wait(1).to({y:141.4},0).wait(1).to({y:139.35},0).wait(1).to({y:137.3},0).wait(1).to({y:135.25},0).wait(1).to({y:133.2},0).wait(1).to({y:131.15},0).wait(1).to({y:129.1},0).wait(1).to({y:127.05},0).wait(1).to({y:125},0).wait(107));

	// logo
	this.instance_1 = new lib.Symbol1();
	this.instance_1.setTransform(116.55,104.05,0.009,0.009,0,0,0,77.8,61.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:109.5,regY:101,scaleX:0.0751,scaleY:0.0751,x:117.3,y:105.15},0).wait(1).to({scaleX:0.1411,scaleY:0.1411,x:117.8,y:105.85},0).wait(1).to({scaleX:0.2072,scaleY:0.2072,x:118.3,y:106.6},0).wait(1).to({scaleX:0.2733,scaleY:0.2733,x:118.8,y:107.35},0).wait(1).to({scaleX:0.3393,scaleY:0.3393,x:119.3,y:108.05},0).wait(1).to({scaleX:0.4054,scaleY:0.4054,x:119.8,y:108.8},0).wait(1).to({scaleX:0.4715,scaleY:0.4715,x:120.3,y:109.5},0).wait(1).to({scaleX:0.5375,scaleY:0.5375,x:120.8,y:110.3},0).wait(1).to({scaleX:0.6036,scaleY:0.6036,x:121.3,y:111},0).wait(1).to({scaleX:0.6697,scaleY:0.6697,x:121.8,y:111.75},0).wait(1).to({scaleX:0.7357,scaleY:0.7357,x:122.25,y:112.45},0).wait(1).to({scaleX:0.8018,scaleY:0.8018,x:122.8,y:113.25},0).wait(1).to({scaleX:0.8679,scaleY:0.8679,x:123.3,y:113.95},0).wait(1).to({scaleX:0.9339,scaleY:0.9339,x:123.75,y:114.7},0).wait(1).to({scaleX:1,scaleY:1,x:124.25,y:115.45},0).wait(110));

	// eck
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AyoRgMAAAgi/MAlRAAAMAAAAi/g");
	this.shape.setTransform(117.5,111.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(125));

	// text
	this.instance_2 = new lib.Symbol3();
	this.instance_2.setTransform(21.9,126,1,1,0,0,0,485,125);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(24).to({_off:false},0).wait(1).to({x:46.3},0).wait(1).to({x:70.65},0).wait(1).to({x:95.05},0).wait(1).to({x:119.4},0).wait(1).to({x:143.8},0).wait(1).to({x:168.15},0).wait(1).to({x:192.55},0).wait(1).to({x:216.9},0).wait(1).to({x:241.3},0).wait(1).to({x:265.65},0).wait(1).to({x:290.05},0).wait(1).to({x:314.4},0).wait(1).to({x:338.8},0).wait(1).to({x:363.15},0).wait(1).to({x:387.55},0).wait(1).to({x:411.9},0).wait(1).to({x:436.3},0).wait(1).to({x:460.65},0).wait(1).to({x:485},0).wait(82));

	// bg
	this.instance_3 = new lib.bg();
	this.instance_3.setTransform(1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(125));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(21.9,124.4,949.1,162.6);
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