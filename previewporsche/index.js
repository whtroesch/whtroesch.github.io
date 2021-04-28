(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_1", frames: [[535,1394,269,47],[0,1394,533,131],[0,1527,575,106],[0,0,600,1200],[0,1202,572,190]]}
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



(lib.button = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.juhu = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.lockdown = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.porsche = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.vw = function() {
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
	this.instance = new lib.vw();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,572,190), null);


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
	this.instance = new lib.button();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,269,47), null);


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
	this.instance = new lib.lockdown();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,575,106), null);


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
	this.instance = new lib.juhu();
	this.instance.setTransform(0,0,0.7536,0.7536);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,401.7,98.7), null);


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
	this.instance = new lib.Symbol3();
	this.instance.setTransform(139.1,969.5,1,1,0,0,0,134.5,23.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(69).to({_off:false},0).wait(1).to({alpha:0.0294},0).wait(1).to({alpha:0.0588},0).wait(1).to({alpha:0.0882},0).wait(1).to({alpha:0.1176},0).wait(1).to({alpha:0.1471},0).wait(1).to({alpha:0.1765},0).wait(1).to({alpha:0.2059},0).wait(1).to({alpha:0.2353},0).wait(1).to({alpha:0.2647},0).wait(1).to({alpha:0.2941},0).wait(1).to({alpha:0.3235},0).wait(1).to({alpha:0.3529},0).wait(1).to({alpha:0.3824},0).wait(1).to({alpha:0.4118},0).wait(1).to({alpha:0.4412},0).wait(1).to({alpha:0.4706},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.5294},0).wait(1).to({alpha:0.5588},0).wait(1).to({alpha:0.5882},0).wait(1).to({alpha:0.6176},0).wait(1).to({alpha:0.6471},0).wait(1).to({alpha:0.6765},0).wait(1).to({alpha:0.7059},0).wait(1).to({alpha:0.7353},0).wait(1).to({alpha:0.7647},0).wait(1).to({alpha:0.7941},0).wait(1).to({alpha:0.8235},0).wait(1).to({alpha:0.8529},0).wait(1).to({alpha:0.8824},0).wait(1).to({alpha:0.9118},0).wait(1).to({alpha:0.9412},0).wait(1).to({alpha:0.9706},0).wait(1).to({alpha:1},0).wait(77));

	// vw
	this.instance_1 = new lib.Symbol4();
	this.instance_1.setTransform(290.6,817,1,1,0,0,0,286,95);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(69).to({_off:false},0).wait(1).to({alpha:0.0294},0).wait(1).to({alpha:0.0588},0).wait(1).to({alpha:0.0882},0).wait(1).to({alpha:0.1176},0).wait(1).to({alpha:0.1471},0).wait(1).to({alpha:0.1765},0).wait(1).to({alpha:0.2059},0).wait(1).to({alpha:0.2353},0).wait(1).to({alpha:0.2647},0).wait(1).to({alpha:0.2941},0).wait(1).to({alpha:0.3235},0).wait(1).to({alpha:0.3529},0).wait(1).to({alpha:0.3824},0).wait(1).to({alpha:0.4118},0).wait(1).to({alpha:0.4412},0).wait(1).to({alpha:0.4706},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.5294},0).wait(1).to({alpha:0.5588},0).wait(1).to({alpha:0.5882},0).wait(1).to({alpha:0.6176},0).wait(1).to({alpha:0.6471},0).wait(1).to({alpha:0.6765},0).wait(1).to({alpha:0.7059},0).wait(1).to({alpha:0.7353},0).wait(1).to({alpha:0.7647},0).wait(1).to({alpha:0.7941},0).wait(1).to({alpha:0.8235},0).wait(1).to({alpha:0.8529},0).wait(1).to({alpha:0.8824},0).wait(1).to({alpha:0.9118},0).wait(1).to({alpha:0.9412},0).wait(1).to({alpha:0.9706},0).wait(1).to({alpha:1},0).wait(77));

	// lockdown
	this.instance_2 = new lib.Symbol2();
	this.instance_2.setTransform(292.2,277.4,1,1,0,0,0,287.5,53);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(29).to({_off:false},0).wait(1).to({alpha:0.027},0).wait(1).to({alpha:0.0541},0).wait(1).to({alpha:0.0811},0).wait(1).to({alpha:0.1081},0).wait(1).to({alpha:0.1351},0).wait(1).to({alpha:0.1622},0).wait(1).to({alpha:0.1892},0).wait(1).to({alpha:0.2162},0).wait(1).to({alpha:0.2432},0).wait(1).to({alpha:0.2703},0).wait(1).to({alpha:0.2973},0).wait(1).to({alpha:0.3243},0).wait(1).to({alpha:0.3514},0).wait(1).to({alpha:0.3784},0).wait(1).to({alpha:0.4054},0).wait(1).to({alpha:0.4324},0).wait(1).to({alpha:0.4595},0).wait(1).to({alpha:0.4865},0).wait(1).to({alpha:0.5135},0).wait(1).to({alpha:0.5405},0).wait(1).to({alpha:0.5676},0).wait(1).to({alpha:0.5946},0).wait(1).to({alpha:0.6216},0).wait(1).to({alpha:0.6486},0).wait(1).to({alpha:0.6757},0).wait(1).to({alpha:0.7027},0).wait(1).to({alpha:0.7297},0).wait(1).to({alpha:0.7568},0).wait(1).to({alpha:0.7838},0).wait(1).to({alpha:0.8108},0).wait(1).to({alpha:0.8378},0).wait(1).to({alpha:0.8649},0).wait(1).to({alpha:0.8919},0).wait(1).to({alpha:0.9189},0).wait(1).to({alpha:0.9459},0).wait(1).to({alpha:0.973},0).wait(1).to({alpha:1},0).wait(114));

	// juhu
	this.instance_3 = new lib.Symbol1();
	this.instance_3.setTransform(199,106.25,0.0623,0.0809,0,0,0,202.4,48.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:200.8,regY:49.4,scaleX:0.1091,scaleY:0.1269,x:199.2,y:106.35},0).wait(1).to({scaleX:0.156,scaleY:0.1729,x:199.55,y:106.5},0).wait(1).to({scaleX:0.2029,scaleY:0.2188,x:199.9,y:106.6},0).wait(1).to({scaleX:0.2498,scaleY:0.2648,x:200.2,y:106.7},0).wait(1).to({scaleX:0.2967,scaleY:0.3107,x:200.55,y:106.8},0).wait(1).to({scaleX:0.3436,scaleY:0.3567,x:200.9,y:106.9},0).wait(1).to({scaleX:0.3905,scaleY:0.4026,x:201.2,y:107.05},0).wait(1).to({scaleX:0.4374,scaleY:0.4486,x:201.5,y:107.1},0).wait(1).to({scaleX:0.4842,scaleY:0.4945,x:201.9,y:107.25},0).wait(1).to({scaleX:0.5311,scaleY:0.5405,x:202.2,y:107.35},0).wait(1).to({scaleX:0.578,scaleY:0.5864,x:202.5,y:107.45},0).wait(1).to({scaleX:0.6249,scaleY:0.6324,x:202.9,y:107.55},0).wait(1).to({scaleX:0.6718,scaleY:0.6783,x:203.2,y:107.65},0).wait(1).to({scaleX:0.7187,scaleY:0.7243,x:203.5,y:107.8},0).wait(1).to({scaleX:0.7656,scaleY:0.7702,x:203.9,y:107.9},0).wait(1).to({scaleX:0.8125,scaleY:0.8162,x:204.2,y:108},0).wait(1).to({scaleX:0.8593,scaleY:0.8621,x:204.5,y:108.1},0).wait(1).to({scaleX:0.9062,scaleY:0.9081,x:204.85,y:108.2},0).wait(1).to({scaleX:0.9531,scaleY:0.954,x:205.2,y:108.35},0).wait(1).to({scaleX:1,scaleY:1,x:205.55,y:108.45},0).wait(160));

	// porsche
	this.instance_4 = new lib.porsche();
	this.instance_4.setTransform(0,5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(180));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(300,605,300,600);
// library properties:
lib.properties = {
	id: 'CE39C2276A5E2C499134B4B96DDA6940',
	width: 600,
	height: 1200,
	fps: 30,
	color: "#003399",
	opacity: 0.00,
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
an.compositions['CE39C2276A5E2C499134B4B96DDA6940'] = {
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