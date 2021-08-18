(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_P_1", frames: [[0,0,500,1000],[502,0,500,342],[756,344,192,54],[1392,0,372,200],[1004,320,433,75],[1004,0,386,201],[502,392,161,33],[1766,115,231,84],[1392,202,295,116],[1689,202,355,94],[1689,298,292,94],[1439,320,234,97],[502,344,252,46],[1766,0,268,113],[1004,203,352,93]]},
		{name:"index_atlas_NP_1", frames: [[0,0,500,1000]]}
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



(lib.bg = function() {
	this.initialize(ss["index_atlas_NP_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bgred = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bubble = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.buttonred = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.car = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.datum = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.headlinemarkt = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.leitidee = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.logored = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.text = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.textbewegt = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.textfamily = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.textgady = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.url = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.verlosung = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.volksfest = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(14);
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
	this.instance = new lib.leitidee();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(0,0,161,33), null);


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
	this.instance = new lib.textbewegt();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,0,355,94), null);


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
	this.instance = new lib.textfamily();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,292,94), null);


(lib.Symbol7 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.textgady();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,234,97), null);


(lib.Symbol6 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.bgred();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,500,1000), null);


(lib.Symbol5 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.verlosung();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,268,113), null);


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
	this.instance = new lib.bubble();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,500,342), null);


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
	this.instance = new lib.volksfest();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,352,93), null);


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
	this.instance = new lib.datum();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,433,75), null);


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
	this.instance = new lib.headlinemarkt();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,386,201), null);


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
	this.instance = new lib.buttonred();
	this.instance.setTransform(48,575);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(185).to({_off:false},0).wait(105));

	// leitidee
	this.instance_1 = new lib.Symbol10();
	this.instance_1.setTransform(129.5,517.5,1,1,0,0,0,80.5,16.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(166).to({_off:false},0).wait(1).to({alpha:0.0714},0).wait(1).to({alpha:0.1429},0).wait(1).to({alpha:0.2143},0).wait(1).to({alpha:0.2857},0).wait(1).to({alpha:0.3571},0).wait(1).to({alpha:0.4286},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.5714},0).wait(1).to({alpha:0.6429},0).wait(1).to({alpha:0.7143},0).wait(1).to({alpha:0.7857},0).wait(1).to({alpha:0.8571},0).wait(1).to({alpha:0.9286},0).wait(1).to({alpha:1},0).wait(110));

	// bewegt
	this.instance_2 = new lib.Symbol9();
	this.instance_2.setTransform(-190.45,445,1,1,0,0,0,177.5,47);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(152).to({_off:false},0).wait(1).to({x:-160.65},0).wait(1).to({x:-130.85},0).wait(1).to({x:-101.1},0).wait(1).to({x:-71.3},0).wait(1).to({x:-41.5},0).wait(1).to({x:-11.75},0).wait(1).to({x:18.05},0).wait(1).to({x:47.85},0).wait(1).to({x:77.6},0).wait(1).to({x:107.4},0).wait(1).to({x:137.2},0).wait(1).to({x:166.95},0).wait(1).to({x:196.7},0).wait(1).to({x:226.5},0).wait(124));

	// family
	this.instance_3 = new lib.Symbol8();
	this.instance_3.setTransform(658.1,340,1,1,0,0,0,146,47);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(152).to({_off:false},0).wait(1).to({x:624.95},0).wait(1).to({x:591.8},0).wait(1).to({x:558.65},0).wait(1).to({x:525.5},0).wait(1).to({x:492.35},0).wait(1).to({x:459.2},0).wait(1).to({x:426.05},0).wait(1).to({x:392.9},0).wait(1).to({x:359.75},0).wait(1).to({x:326.6},0).wait(1).to({x:293.45},0).wait(1).to({x:260.3},0).wait(1).to({x:227.15},0).wait(1).to({x:194},0).wait(124));

	// gady
	this.instance_4 = new lib.Symbol7();
	this.instance_4.setTransform(-129.95,232.5,1,1,0,0,0,117,48.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(152).to({_off:false},0).wait(1).to({x:-109.15},0).wait(1).to({x:-88.35},0).wait(1).to({x:-67.6},0).wait(1).to({x:-46.8},0).wait(1).to({x:-26},0).wait(1).to({x:-5.25},0).wait(1).to({x:15.55},0).wait(1).to({x:36.35},0).wait(1).to({x:57.1},0).wait(1).to({x:77.9},0).wait(1).to({x:98.7},0).wait(1).to({x:119.4},0).wait(1).to({x:140.2},0).wait(1).to({x:161},0).wait(124));

	// url
	this.instance_5 = new lib.url();
	this.instance_5.setTransform(130,929);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(152).to({_off:false},0).wait(138));

	// logo
	this.instance_6 = new lib.logored();
	this.instance_6.setTransform(230,41);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(152).to({_off:false},0).wait(138));

	// Ebene_10
	this.instance_7 = new lib.Symbol6();
	this.instance_7.setTransform(251,1500,1,1,0,0,0,250,500);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(140).to({_off:false},0).wait(1).to({y:1416.75},0).wait(1).to({y:1333.5},0).wait(1).to({y:1250.25},0).wait(1).to({y:1167},0).wait(1).to({y:1083.75},0).wait(1).to({y:1000.5},0).wait(1).to({y:917.25},0).wait(1).to({y:834},0).wait(1).to({y:750.75},0).wait(1).to({y:667.5},0).wait(1).to({y:584.25},0).wait(1).to({y:501},0).wait(138));

	// car
	this.instance_8 = new lib.car();
	this.instance_8.setTransform(120,601);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(38).to({_off:false},0).to({_off:true},107).wait(145));

	// text
	this.instance_9 = new lib.text();
	this.instance_9.setTransform(31,583);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(38).to({_off:false},0).to({_off:true},107).wait(145));

	// verlosung
	this.instance_10 = new lib.Symbol5();
	this.instance_10.setTransform(305,535.5,1,1,0,0,0,134,56.5);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(38).to({_off:false},0).wait(106).to({_off:true},1).wait(145));

	// bubble
	this.instance_11 = new lib.Symbol4();
	this.instance_11.setTransform(492.8,640.05,0.0248,0.0248,0,0,0,248.2,167.5);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(29).to({_off:false},0).wait(1).to({regX:250,regY:171,scaleX:0.1332,scaleY:0.1332,x:466.15,y:640.3},0).wait(1).to({scaleX:0.2415,scaleY:0.2415,x:439.5,y:640.55},0).wait(1).to({scaleX:0.3499,scaleY:0.3499,x:412.8,y:640.7},0).wait(1).to({scaleX:0.4582,scaleY:0.4582,x:386.15,y:640.95},0).wait(1).to({scaleX:0.5666,scaleY:0.5666,x:359.45,y:641.15},0).wait(1).to({scaleX:0.6749,scaleY:0.6749,x:332.8,y:641.35},0).wait(1).to({scaleX:0.7833,scaleY:0.7833,x:306.1,y:641.55},0).wait(1).to({scaleX:0.8916,scaleY:0.8916,x:279.45,y:641.75},0).wait(1).to({scaleX:1,scaleY:1,x:252.8,y:641.95},0).wait(106).to({_off:true},1).wait(145));

	// volksfest
	this.instance_12 = new lib.Symbol3();
	this.instance_12.setTransform(199,409.5,1,1,0,0,0,176,46.5);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(13).to({_off:false},0).wait(1).to({alpha:0.0769},0).wait(1).to({alpha:0.1538},0).wait(1).to({alpha:0.2308},0).wait(1).to({alpha:0.3077},0).wait(1).to({alpha:0.3846},0).wait(1).to({alpha:0.4615},0).wait(1).to({alpha:0.5385},0).wait(1).to({alpha:0.6154},0).wait(1).to({alpha:0.6923},0).wait(1).to({alpha:0.7692},0).wait(1).to({alpha:0.8462},0).wait(1).to({alpha:0.9231},0).wait(1).to({alpha:1},0).wait(118).to({_off:true},1).wait(145));

	// datum
	this.instance_13 = new lib.Symbol2();
	this.instance_13.setTransform(737.2,342.5,1,1,0,0,0,216.5,37.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1).to({x:700.45},0).wait(1).to({x:663.7},0).wait(1).to({x:626.95},0).wait(1).to({x:590.2},0).wait(1).to({x:553.45},0).wait(1).to({x:516.7},0).wait(1).to({x:479.95},0).wait(1).to({x:443.2},0).wait(1).to({x:406.45},0).wait(1).to({x:369.7},0).wait(1).to({x:332.95},0).wait(1).to({x:296.2},0).wait(1).to({x:259.5},0).wait(131).to({_off:true},1).wait(145));

	// header
	this.instance_14 = new lib.Symbol1();
	this.instance_14.setTransform(-208.3,204.5,1,1,0,0,0,193,100.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1).to({x:-175},0).wait(1).to({x:-141.75},0).wait(1).to({x:-108.5},0).wait(1).to({x:-75.25},0).wait(1).to({x:-42},0).wait(1).to({x:-8.75},0).wait(1).to({x:24.5},0).wait(1).to({x:57.75},0).wait(1).to({x:91},0).wait(1).to({x:124.25},0).wait(1).to({x:157.5},0).wait(1).to({x:190.75},0).wait(1).to({x:224},0).wait(131).to({_off:true},1).wait(145));

	// bg
	this.instance_15 = new lib.bg();
	this.instance_15.setTransform(0,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({_off:true},145).wait(145));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-151.3,501,1105,1499);
// library properties:
lib.properties = {
	id: '3BEA2E4CCE0F144C8444A24116E24DF3',
	width: 500,
	height: 1000,
	fps: 24,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [
		{src:"images/index_atlas_P_1.png", id:"index_atlas_P_1"},
		{src:"images/index_atlas_NP_1.jpg", id:"index_atlas_NP_1"}
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
an.compositions['3BEA2E4CCE0F144C8444A24116E24DF3'] = {
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