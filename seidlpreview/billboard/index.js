(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_1", frames: [[0,0,595,133],[597,0,391,40],[0,249,700,60],[0,311,505,52],[0,135,718,60],[597,42,391,40],[0,197,850,50]]}
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



(lib.logo = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.mehrals = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.qualitaet = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.sofort = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.top = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.vw = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.zusatzkosten = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(6);
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


(lib.Symbol10 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.zusatzkosten();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(0,0,850,50), null);


(lib.Symbol9 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.top();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,0,718,60), null);


(lib.Symbol8 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.sofort();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,505,52), null);


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
	this.instance = new lib.vw();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,391,40), null);


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
	this.instance = new lib.mehrals();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,391,40), null);


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
	this.instance = new lib.qualitaet();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,700,60), null);


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

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,595,133), null);


// stage content:
(lib.index = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// olqualw_Kopie_Kopie
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#002E48").s().p("EhCoAFoIAArPMCFRAAAIAALPg");
	this.shape.setTransform(494.475,213);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(171).to({_off:false},0).wait(54));

	// qual_Kopie_Kopie
	this.instance = new lib.Symbol10();
	this.instance.setTransform(331.5,205,1,1,0,0,0,263.5,30);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(171).to({_off:false},0).wait(1).to({regX:425,regY:25,x:493,y:194.1},0).wait(1).to({y:188.25},0).wait(1).to({y:182.35},0).wait(1).to({y:176.5},0).wait(1).to({y:170.6},0).wait(1).to({y:164.75},0).wait(1).to({y:158.85},0).wait(1).to({y:153},0).wait(38).to({y:158.85},0).wait(1).to({y:164.75},0).wait(1).to({y:170.6},0).wait(1).to({y:176.5},0).wait(1).to({y:182.35},0).wait(1).to({y:188.25},0).wait(1).to({y:194.1},0).wait(1).to({y:200},0).wait(1));

	// olmehr_Kopie_Kopie
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#002E48").s().p("EhB6AGMIAMsbMCDpAAEIgLMbg");
	this.shape_1.setTransform(491.85,159);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(171).to({_off:false},0).wait(54));

	// mehr_Kopie_Kopie
	this.instance_1 = new lib.Symbol9();
	this.instance_1.setTransform(263.5,137,1,1,0,0,0,195.5,20);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(171).to({_off:false},0).wait(1).to({regX:359,regY:30,x:427,y:140},0).wait(1).to({y:133},0).wait(1).to({y:126},0).wait(1).to({y:119},0).wait(1).to({y:112},0).wait(1).to({y:105},0).wait(1).to({y:98},0).wait(1).to({y:91},0).wait(38).to({y:98},0).wait(1).to({y:105},0).wait(1).to({y:112},0).wait(1).to({y:119},0).wait(1).to({y:126},0).wait(1).to({y:133},0).wait(1).to({y:140},0).wait(1).to({y:147},0).wait(1));

	// olqualw_Kopie
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#002E48").s().p("Eg3sAFoIAArPMBvZAAAIAALPg");
	this.shape_2.setTransform(493.475,213);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(110).to({_off:false},0).to({_off:true},53).wait(62));

	// qual_Kopie
	this.instance_2 = new lib.Symbol8();
	this.instance_2.setTransform(497.5,205,1,1,0,0,0,263.5,30);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(110).to({_off:false},0).wait(1).to({regX:252.5,regY:26,x:486.5,y:194},0).wait(1).to({y:187},0).wait(1).to({y:180},0).wait(1).to({y:173},0).wait(1).to({y:166},0).wait(1).to({y:159},0).wait(1).to({y:152},0).wait(1).to({y:145},0).wait(37).to({y:152},0).wait(1).to({y:159},0).wait(1).to({y:166},0).wait(1).to({y:173},0).wait(1).to({y:180},0).wait(1).to({y:187},0).wait(1).to({y:194},0).wait(1).to({y:201},0).to({_off:true},1).wait(62));

	// olmehr_Kopie
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#002E48").s().p("Eg4UAGNIALscMBwdAAEIgJMbg");
	this.shape_3.setTransform(491.35,154);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(110).to({_off:false},0).to({_off:true},53).wait(62));

	// mehr_Kopie
	this.instance_3 = new lib.Symbol4();
	this.instance_3.setTransform(429.5,140,1,1,0,0,0,195.5,20);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(110).to({_off:false},0).wait(1).to({y:133.75},0).wait(1).to({y:127.5},0).wait(1).to({y:121.25},0).wait(1).to({y:115},0).wait(1).to({y:108.75},0).wait(1).to({y:102.5},0).wait(1).to({y:96.25},0).wait(1).to({y:90},0).wait(37).to({y:96.25},0).wait(1).to({y:102.5},0).wait(1).to({y:108.75},0).wait(1).to({y:115},0).wait(1).to({y:121.25},0).wait(1).to({y:127.5},0).wait(1).to({y:133.75},0).wait(1).to({y:140},0).to({_off:true},1).wait(62));

	// olqualw
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#002E48").s().p("Eg3sAFoIAArPMBvZAAAIAALPg");
	this.shape_4.setTransform(493.475,213);
	this.shape_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(50).to({_off:false},0).to({_off:true},55).wait(120));

	// qual
	this.instance_4 = new lib.Symbol2();
	this.instance_4.setTransform(407.5,205,1,1,0,0,0,263.5,30);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(50).to({_off:false},0).wait(1).to({regX:350,x:494,y:198.75},0).wait(1).to({y:192.55},0).wait(1).to({y:186.3},0).wait(1).to({y:180.1},0).wait(1).to({y:173.85},0).wait(1).to({y:167.65},0).wait(1).to({y:161.4},0).wait(1).to({y:155.2},0).wait(1).to({y:149},0).wait(37).to({y:155.2},0).wait(1).to({y:161.4},0).wait(1).to({y:167.65},0).wait(1).to({y:173.85},0).wait(1).to({y:180.1},0).wait(1).to({y:186.3},0).wait(1).to({y:192.55},0).wait(1).to({y:198.75},0).wait(1).to({y:205},0).to({_off:true},1).wait(120));

	// olmehr
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#002E48").s().p("Eg4UAGNIALscMBwdAAEIgJMbg");
	this.shape_5.setTransform(491.35,154);
	this.shape_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(50).to({_off:false},0).to({_off:true},55).wait(120));

	// mehr
	this.instance_5 = new lib.Symbol3();
	this.instance_5.setTransform(339.5,140,1,1,0,0,0,195.5,20);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(50).to({_off:false},0).wait(1).to({y:134.4},0).wait(1).to({y:128.85},0).wait(1).to({y:123.3},0).wait(1).to({y:117.75},0).wait(1).to({y:112.2},0).wait(1).to({y:106.65},0).wait(1).to({y:101.1},0).wait(1).to({y:95.55},0).wait(1).to({y:90},0).wait(37).to({y:95.55},0).wait(1).to({y:101.1},0).wait(1).to({y:106.65},0).wait(1).to({y:112.2},0).wait(1).to({y:117.75},0).wait(1).to({y:123.3},0).wait(1).to({y:128.85},0).wait(1).to({y:134.4},0).wait(1).to({y:140},0).to({_off:true},1).wait(120));

	// logo
	this.instance_6 = new lib.Symbol1();
	this.instance_6.setTransform(485.5,125.5,1,1,0,0,0,297.5,66.5);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({alpha:0.1667},0).wait(1).to({alpha:0.3333},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6667},0).wait(1).to({alpha:0.8333},0).wait(1).to({alpha:1},0).wait(34).to({alpha:0.8571},0).wait(1).to({alpha:0.7143},0).wait(1).to({alpha:0.5714},0).wait(1).to({alpha:0.4286},0).wait(1).to({alpha:0.2857},0).wait(1).to({alpha:0.1429},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(178));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,921,249);
// library properties:
lib.properties = {
	id: 'BE295D5B020B5941A9906F7CFD4E4893',
	width: 970,
	height: 250,
	fps: 24,
	color: "#002E48",
	opacity: 1.00,
	manifest: [
		{src:"images/index_atlas_1.png?1657881255740", id:"index_atlas_1"}
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
an.compositions['BE295D5B020B5941A9906F7CFD4E4893'] = {
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