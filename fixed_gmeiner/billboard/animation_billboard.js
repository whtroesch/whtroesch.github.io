(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.button = function() {
	this.initialize(img.button);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,358,67);


(lib.gmeiner_da_billboard = function() {
	this.initialize(img.gmeiner_da_billboard);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,970,250);


(lib.lichtnissan = function() {
	this.initialize(img.lichtnissan);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,187,187);


(lib.billboard = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.button();
	this.instance.parent = this;
	this.instance.setTransform(312,156,0.666,0.666);

	this.instance_1 = new lib.gmeiner_da_billboard();
	this.instance_1.parent = this;

	this.instance_2 = new lib.lichtnissan();
	this.instance_2.parent = this;
	this.instance_2.setTransform(217.8,129.8,0.121,0.123,0,0,-9.1);

	this.instance_3 = new lib.lichtnissan();
	this.instance_3.parent = this;
	this.instance_3.setTransform(65,119,0.261,0.261);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance,p:{scaleX:0.666,scaleY:0.666,x:312}}]}).to({state:[{t:this.instance_1},{t:this.instance,p:{scaleX:0.7,scaleY:0.7,x:307}},{t:this.instance_3},{t:this.instance_2}]},1).to({state:[{t:this.instance_1},{t:this.instance,p:{scaleX:0.7,scaleY:0.7,x:307}},{t:this.instance_3},{t:this.instance_2}]},1).to({state:[{t:this.instance_1},{t:this.instance,p:{scaleX:0.7,scaleY:0.7,x:307}},{t:this.instance_3},{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,970,250);


// stage content:
(lib.animation_billboard = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bg
	this.instance = new lib.billboard();
	this.instance.parent = this;
	this.instance.setTransform(485,125,1,1,0,0,0,485,125);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.billboard(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(485,125,970,250);
// library properties:
lib.properties = {
	id: '54E51A35BF25CC4FB1AC6943D36DD2E1',
	width: 970,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [
		{src:"images/button.png", id:"button"},
		{src:"images/gmeiner_da_billboard.jpg", id:"gmeiner_da_billboard"},
		{src:"images/lichtnissan.png", id:"lichtnissan"}
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
an.compositions['54E51A35BF25CC4FB1AC6943D36DD2E1'] = {
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