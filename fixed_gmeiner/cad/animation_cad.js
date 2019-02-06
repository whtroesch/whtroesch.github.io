(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.button = function() {
	this.initialize(img.button);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,361,67);


(lib.gmeiner_da_cad = function() {
	this.initialize(img.gmeiner_da_cad);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.lichtnissan = function() {
	this.initialize(img.lichtnissan);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,187,187);


(lib.cad = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.button();
	this.instance.parent = this;
	this.instance.setTransform(156,139,0.364,0.364);

	this.instance_1 = new lib.gmeiner_da_cad();
	this.instance_1.parent = this;

	this.instance_2 = new lib.lichtnissan();
	this.instance_2.parent = this;
	this.instance_2.setTransform(116.8,117.3,0.128,0.127,0,0,-6.6);

	this.instance_3 = new lib.lichtnissan();
	this.instance_3.parent = this;
	this.instance_3.setTransform(29,110,0.214,0.214);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance,p:{scaleX:0.364,scaleY:0.364,x:156}}]}).to({state:[{t:this.instance_1},{t:this.instance_3},{t:this.instance_2},{t:this.instance,p:{scaleX:0.382,scaleY:0.382,x:152}}]},1).to({state:[{t:this.instance_1},{t:this.instance_3},{t:this.instance_2},{t:this.instance,p:{scaleX:0.382,scaleY:0.382,x:152}}]},1).to({state:[{t:this.instance_1},{t:this.instance_3},{t:this.instance_2},{t:this.instance,p:{scaleX:0.382,scaleY:0.382,x:152}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


// stage content:
(lib.animation_cad = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.cad();
	this.instance.parent = this;
	this.instance.setTransform(150,125,1,1,0,0,0,150,125);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.cad(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,125,300,250);
// library properties:
lib.properties = {
	id: '7B108C3A1DCACD458399DA98B3604DE9',
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [
		{src:"images/button.png", id:"button"},
		{src:"images/gmeiner_da_cad.jpg", id:"gmeiner_da_cad"},
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
an.compositions['7B108C3A1DCACD458399DA98B3604DE9'] = {
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