(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_1", frames: [[0,0,500,1000],[502,547,255,64],[502,0,479,234],[502,236,445,191],[502,429,380,116]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
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



(lib.bg = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.button = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.car = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.headline = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.subheader = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(4);
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


(lib.Symbol4 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.button();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,255,64), null);


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
	this.instance = new lib.car();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,479,234), null);


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
	this.instance = new lib.subheader();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,380,116), null);


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
	this.instance = new lib.headline();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,445,191), null);


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

	// button
	this.instance = new lib.Symbol4();
	this.instance.setTransform(247.5,761,1,1,0,0,0,127.5,32);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(94).to({_off:false},0).wait(86));

	// car
	this.instance_1 = new lib.Symbol3();
	this.instance_1.setTransform(252.5,597,1,1,0,0,0,239.5,117);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(49).to({_off:false},0).wait(1).to({alpha:0.02},0).wait(1).to({alpha:0.04},0).wait(1).to({alpha:0.06},0).wait(1).to({alpha:0.08},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0.12},0).wait(1).to({alpha:0.14},0).wait(1).to({alpha:0.16},0).wait(1).to({alpha:0.18},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.22},0).wait(1).to({alpha:0.24},0).wait(1).to({alpha:0.26},0).wait(1).to({alpha:0.28},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.32},0).wait(1).to({alpha:0.34},0).wait(1).to({alpha:0.36},0).wait(1).to({alpha:0.38},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.42},0).wait(1).to({alpha:0.44},0).wait(1).to({alpha:0.46},0).wait(1).to({alpha:0.48},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.52},0).wait(1).to({alpha:0.54},0).wait(1).to({alpha:0.56},0).wait(1).to({alpha:0.58},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.62},0).wait(1).to({alpha:0.64},0).wait(1).to({alpha:0.66},0).wait(1).to({alpha:0.68},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.72},0).wait(1).to({alpha:0.74},0).wait(1).to({alpha:0.76},0).wait(1).to({alpha:0.78},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.82},0).wait(1).to({alpha:0.84},0).wait(1).to({alpha:0.86},0).wait(1).to({alpha:0.88},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:0.92},0).wait(1).to({alpha:0.94},0).wait(1).to({alpha:0.96},0).wait(1).to({alpha:0.98},0).wait(1).to({alpha:1},0).wait(81));

	// subheadline
	this.instance_2 = new lib.Symbol2();
	this.instance_2.setTransform(227,422,1,1,0,0,0,190,58);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(49).to({_off:false},0).wait(1).to({alpha:0.02},0).wait(1).to({alpha:0.04},0).wait(1).to({alpha:0.06},0).wait(1).to({alpha:0.08},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0.12},0).wait(1).to({alpha:0.14},0).wait(1).to({alpha:0.16},0).wait(1).to({alpha:0.18},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.22},0).wait(1).to({alpha:0.24},0).wait(1).to({alpha:0.26},0).wait(1).to({alpha:0.28},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.32},0).wait(1).to({alpha:0.34},0).wait(1).to({alpha:0.36},0).wait(1).to({alpha:0.38},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.42},0).wait(1).to({alpha:0.44},0).wait(1).to({alpha:0.46},0).wait(1).to({alpha:0.48},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.52},0).wait(1).to({alpha:0.54},0).wait(1).to({alpha:0.56},0).wait(1).to({alpha:0.58},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.62},0).wait(1).to({alpha:0.64},0).wait(1).to({alpha:0.66},0).wait(1).to({alpha:0.68},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.72},0).wait(1).to({alpha:0.74},0).wait(1).to({alpha:0.76},0).wait(1).to({alpha:0.78},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.82},0).wait(1).to({alpha:0.84},0).wait(1).to({alpha:0.86},0).wait(1).to({alpha:0.88},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:0.92},0).wait(1).to({alpha:0.94},0).wait(1).to({alpha:0.96},0).wait(1).to({alpha:0.98},0).wait(1).to({alpha:1},0).wait(81));

	// headline
	this.instance_3 = new lib.Symbol1();
	this.instance_3.setTransform(246.5,257.5,1,1,0,0,0,222.5,95.5);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({alpha:0.0204},0).wait(1).to({alpha:0.0408},0).wait(1).to({alpha:0.0612},0).wait(1).to({alpha:0.0816},0).wait(1).to({alpha:0.102},0).wait(1).to({alpha:0.1224},0).wait(1).to({alpha:0.1429},0).wait(1).to({alpha:0.1633},0).wait(1).to({alpha:0.1837},0).wait(1).to({alpha:0.2041},0).wait(1).to({alpha:0.2245},0).wait(1).to({alpha:0.2449},0).wait(1).to({alpha:0.2653},0).wait(1).to({alpha:0.2857},0).wait(1).to({alpha:0.3061},0).wait(1).to({alpha:0.3265},0).wait(1).to({alpha:0.3469},0).wait(1).to({alpha:0.3673},0).wait(1).to({alpha:0.3878},0).wait(1).to({alpha:0.4082},0).wait(1).to({alpha:0.4286},0).wait(1).to({alpha:0.449},0).wait(1).to({alpha:0.4694},0).wait(1).to({alpha:0.4898},0).wait(1).to({alpha:0.5102},0).wait(1).to({alpha:0.5306},0).wait(1).to({alpha:0.551},0).wait(1).to({alpha:0.5714},0).wait(1).to({alpha:0.5918},0).wait(1).to({alpha:0.6122},0).wait(1).to({alpha:0.6327},0).wait(1).to({alpha:0.6531},0).wait(1).to({alpha:0.6735},0).wait(1).to({alpha:0.6939},0).wait(1).to({alpha:0.7143},0).wait(1).to({alpha:0.7347},0).wait(1).to({alpha:0.7551},0).wait(1).to({alpha:0.7755},0).wait(1).to({alpha:0.7959},0).wait(1).to({alpha:0.8163},0).wait(1).to({alpha:0.8367},0).wait(1).to({alpha:0.8571},0).wait(1).to({alpha:0.8776},0).wait(1).to({alpha:0.898},0).wait(1).to({alpha:0.9184},0).wait(1).to({alpha:0.9388},0).wait(1).to({alpha:0.9592},0).wait(1).to({alpha:0.9796},0).wait(1).to({alpha:1},0).wait(131));

	// bg
	this.instance_4 = new lib.bg();
	this.instance_4.setTransform(1,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(180));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(251,501,250,500);
// library properties:
lib.properties = {
	id: '50BB7AF1AF90F144B6C0D5C67423DCA5',
	width: 500,
	height: 1000,
	fps: 30,
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
an.compositions['50BB7AF1AF90F144B6C0D5C67423DCA5'] = {
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
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;