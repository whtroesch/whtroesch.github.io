(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


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



(lib.Aktion = function() {
	this.initialize(img.Aktion);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,431,83);


(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,1000);


(lib.bis = function() {
	this.initialize(img.bis);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,434,62);


(lib.Finanzierungs = function() {
	this.initialize(img.Finanzierungs);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,438,38);


(lib.Jetzt = function() {
	this.initialize(img.Jetzt);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,355,59);// helper functions:

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
	this.instance = new lib.Jetzt();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,355,59), null);


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
	this.instance = new lib.bis();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,434,62), null);


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
	this.instance = new lib.Aktion();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,431,83), null);


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
	this.instance = new lib.Finanzierungs();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,438,38), null);


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

	// jetzt
	this.instance = new lib.Symbol4();
	this.instance.setTransform(242.5,937.5,1,1,0,0,0,177.5,29.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(22).to({_off:false},0).wait(1).to({alpha:0.0556},0).wait(1).to({alpha:0.1111},0).wait(1).to({alpha:0.1667},0).wait(1).to({alpha:0.2222},0).wait(1).to({alpha:0.2778},0).wait(1).to({alpha:0.3333},0).wait(1).to({alpha:0.3889},0).wait(1).to({alpha:0.4444},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.5556},0).wait(1).to({alpha:0.6111},0).wait(1).to({alpha:0.6667},0).wait(1).to({alpha:0.7222},0).wait(1).to({alpha:0.7778},0).wait(1).to({alpha:0.8333},0).wait(1).to({alpha:0.8889},0).wait(1).to({alpha:0.9444},0).wait(1).to({alpha:1},0).wait(105));

	// bis
	this.instance_1 = new lib.Symbol3();
	this.instance_1.setTransform(-226,855,1,1,0,0,0,217,31);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:-201.2},0).wait(1).to({x:-176.4},0).wait(1).to({x:-151.6},0).wait(1).to({x:-126.8},0).wait(1).to({x:-102.05},0).wait(1).to({x:-77.25},0).wait(1).to({x:-52.45},0).wait(1).to({x:-27.65},0).wait(1).to({x:-2.85},0).wait(1).to({x:21.9},0).wait(1).to({x:46.7},0).wait(1).to({x:71.5},0).wait(1).to({x:96.3},0).wait(1).to({x:121.1},0).wait(1).to({x:145.85},0).wait(1).to({x:170.65},0).wait(1).to({x:195.45},0).wait(1).to({x:220.2},0).wait(1).to({x:245},0).wait(126));

	// aktion
	this.instance_2 = new lib.Symbol2();
	this.instance_2.setTransform(728,768.5,1,1,0,0,0,215.5,41.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({x:702.65},0).wait(1).to({x:677.3},0).wait(1).to({x:651.95},0).wait(1).to({x:626.6},0).wait(1).to({x:601.25},0).wait(1).to({x:575.9},0).wait(1).to({x:550.6},0).wait(1).to({x:525.25},0).wait(1).to({x:499.9},0).wait(1).to({x:474.55},0).wait(1).to({x:449.2},0).wait(1).to({x:423.85},0).wait(1).to({x:398.55},0).wait(1).to({x:373.2},0).wait(1).to({x:347.85},0).wait(1).to({x:322.5},0).wait(1).to({x:297.15},0).wait(1).to({x:271.8},0).wait(1).to({x:246.5},0).wait(126));

	// finanzierung
	this.instance_3 = new lib.Symbol1();
	this.instance_3.setTransform(-224,693,1,1,0,0,0,219,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({x:-199.05},0).wait(1).to({x:-174.1},0).wait(1).to({x:-149.15},0).wait(1).to({x:-124.2},0).wait(1).to({x:-99.25},0).wait(1).to({x:-74.3},0).wait(1).to({x:-49.35},0).wait(1).to({x:-24.4},0).wait(1).to({x:0.55},0).wait(1).to({x:25.5},0).wait(1).to({x:50.45},0).wait(1).to({x:75.4},0).wait(1).to({x:100.35},0).wait(1).to({x:125.3},0).wait(1).to({x:150.25},0).wait(1).to({x:175.2},0).wait(1).to({x:200.15},0).wait(1).to({x:225.05},0).wait(1).to({x:250},0).wait(126));

	// bg
	this.instance_4 = new lib.bg();

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(145));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-193,500,1136.5,500);
// library properties:
lib.properties = {
	id: 'A229EF870CCF8440AE54D7CD83A76A7A',
	width: 500,
	height: 1000,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Aktion.png", id:"Aktion"},
		{src:"images/bg.jpg", id:"bg"},
		{src:"images/bis.png", id:"bis"},
		{src:"images/Finanzierungs.png", id:"Finanzierungs"},
		{src:"images/Jetzt.png", id:"Jetzt"}
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
an.compositions['A229EF870CCF8440AE54D7CD83A76A7A'] = {
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
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;