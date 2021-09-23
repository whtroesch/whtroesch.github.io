(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


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



(lib._10ledblinker = function() {
	this.initialize(img._10ledblinker);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,700,581);


(lib._11tuningfelgen = function() {
	this.initialize(img._11tuningfelgen);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,700,581);


(lib._12sportauspuff = function() {
	this.initialize(img._12sportauspuff);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,700,581);


(lib._1white = function() {
	this.initialize(img._1white);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,700,581);


(lib._2red = function() {
	this.initialize(img._2red);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,700,581);


(lib._3yellow = function() {
	this.initialize(img._3yellow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,700,581);


(lib._4black = function() {
	this.initialize(img._4black);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,700,581);


(lib._5grey = function() {
	this.initialize(img._5grey);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,700,581);


(lib._6handgriffe = function() {
	this.initialize(img._6handgriffe);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,700,581);


(lib._7tuningspiegel = function() {
	this.initialize(img._7tuningspiegel);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,700,581);


(lib._8blackpackohnespiegel = function() {
	this.initialize(img._8blackpackohnespiegel);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,700,581);


(lib._9sitzgrau = function() {
	this.initialize(img._9sitzgrau);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,700,581);


(lib.button = function() {
	this.initialize(img.button);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,303,61);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,117);// helper functions:

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
	this.instance = new lib.button();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,303,61), null);


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

	// _12
	this.instance = new lib._12sportauspuff();
	this.instance.setTransform(-84,152);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(171).to({_off:false},0).wait(21));

	// _11
	this.instance_1 = new lib._11tuningfelgen();
	this.instance_1.setTransform(-84,152);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(160).to({_off:false},0).wait(32));

	// _10
	this.instance_2 = new lib._10ledblinker();
	this.instance_2.setTransform(-84,152);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(148).to({_off:false},0).wait(44));

	// _9
	this.instance_3 = new lib._9sitzgrau();
	this.instance_3.setTransform(-84,152);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(136).to({_off:false},0).wait(56));

	// _8
	this.instance_4 = new lib._8blackpackohnespiegel();
	this.instance_4.setTransform(-84,152);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(124).to({_off:false},0).wait(68));

	// _7
	this.instance_5 = new lib._7tuningspiegel();
	this.instance_5.setTransform(-84,152);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(112).to({_off:false},0).wait(80));

	// _6
	this.instance_6 = new lib._6handgriffe();
	this.instance_6.setTransform(-84,152);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(99).to({_off:false},0).wait(93));

	// vespa_colors
	this.instance_7 = new lib._1white();
	this.instance_7.setTransform(-84,152);

	this.instance_8 = new lib._2red();
	this.instance_8.setTransform(-84,152);

	this.instance_9 = new lib._3yellow();
	this.instance_9.setTransform(-84,152);

	this.instance_10 = new lib._4black();
	this.instance_10.setTransform(-84,152);

	this.instance_11 = new lib._5grey();
	this.instance_11.setTransform(-84,152);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7}]}).to({state:[{t:this.instance_8}]},9).to({state:[{t:this.instance_9}]},9).to({state:[{t:this.instance_10}]},9).to({state:[{t:this.instance_11}]},9).wait(156));

	// button
	this.instance_12 = new lib.Symbol1();
	this.instance_12.setTransform(250.5,807.5,1,1,0,0,0,151.5,30.5);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(94).to({_off:false},0).wait(80).to({scaleX:0.9735,scaleY:0.9735},0).wait(1).to({scaleX:0.947,scaleY:0.947,x:250.45},0).wait(1).to({scaleX:0.9205,scaleY:0.9205},0).wait(1).to({scaleX:0.8941,scaleY:0.8941,x:250.5,y:807.45},0).wait(1).to({scaleX:0.9205,scaleY:0.9205,x:250.45,y:807.5},0).wait(1).to({scaleX:0.947,scaleY:0.947},0).wait(1).to({scaleX:0.9735,scaleY:0.9735,x:250.5},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:0.9735,scaleY:0.9735},0).wait(1).to({scaleX:0.947,scaleY:0.947,x:250.45},0).wait(1).to({scaleX:0.9205,scaleY:0.9205},0).wait(1).to({scaleX:0.8941,scaleY:0.8941,x:250.5,y:807.45},0).wait(1).to({scaleX:0.9205,scaleY:0.9205,x:250.45,y:807.5},0).wait(1).to({scaleX:0.947,scaleY:0.947},0).wait(1).to({scaleX:0.9735,scaleY:0.9735,x:250.5},0).wait(1).to({scaleX:1,scaleY:1},0).wait(3));

	// url
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D39800").s().p("ABKBbIAAhoQAAgMgGgGQgFgHgLAAQgKAAgFAHQgGAGAAAMIAABoIg9AAIAAhoQAAgMgGgGQgGgHgKAAQgKAAgGAHQgGAGAAAMIAABoIhAAAIAAizIA9AAIAAAiIACAAQAGgRANgJQAOgKATAAQATAAAMAKQANAKAEAQIACAAQAEgQAPgKQAPgKAUAAQARAAANAHQANAIAIAOQAHANAAATIAAB4g");
	this.shape.setTransform(337.325,224.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D39800").s().p("AgxBRQgVgLgLgVQgLgVAAgcQAAgbALgVQALgUAVgMQAVgLAcgBQAdABAVALQAVAMALAUQALAVAAAbQAAAcgLAVQgLAVgVALQgVAMgdAAQgcAAgVgMgAgTghQgHAMAAAVQAAAVAHAMQAHAMAMAAQANAAAHgMQAHgMAAgVQAAgVgHgMQgHgMgNAAQgMAAgHAMg");
	this.shape_1.setTransform(311.425,224.775);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D39800").s().p("AguBRQgVgLgLgVQgLgVAAgcQAAgbALgVQALgUAVgMQAVgLAcgBQAaABAUAJQATAKALARQAKARABAYIg8AAQgBgOgIgIQgGgHgLAAQgMAAgIALQgHALAAAVQAAAWAHALQAIALAMAAQALAAAHgIQAGgHACgOIA8AAQgBAYgKARQgLASgTAJQgTAKgbAAQgcAAgVgMg");
	this.shape_2.setTransform(291.1,224.775);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D39800").s().p("AgWAXQgKgJAAgOQAAgMAKgKQAJgJANAAQAJAAAHAEQAHAEAFAIQAFAHAAAIQAAAJgFAHQgFAIgHAFQgHADgJAAQgNAAgJgJg");
	this.shape_3.setTransform(275.95,230.85);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D39800").s().p("AhABbIAAizIA/AAIAAAiIABAAQAEgSALgJQALgJAOAAIANACQAHABAFADIgSA1IgJgDQgEgBgFAAQgMAAgJAJQgIAJAAAPIAABdg");
	this.shape_4.setTransform(263.85,224.625);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D39800").s().p("AhBBEQgYgYAAgsQgBgbALgVQAMgUAUgMQAVgLAagBQAcABAUALQAUALALAUQALAVAAAcIAAAPIh0AAIAAADQAAANAIAIQAIAIANABQAKAAAIgFQAHgEADgHIA7AAQgEAcgXAQQgXARgmAAQgrAAgYgZgAAfgUQgBgMgIgHQgHgHgNAAQgLAAgIAHQgJAHAAAMIA5AAIAAAAg");
	this.shape_5.setTransform(245.65,224.775);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D39800").s().p("AgUBlQgRgOAAgcIAAhRIgXAAIAAgvIAXAAIAAgrIBAAAIAAArIAfAAIAAAvIgfAAIAABKQAAAGADADQADADAGAAIAHgBIAGgBIAJAtIgMADQgJACgKABIgJAAQgaAAgPgMg");
	this.shape_6.setTransform(228.85,222.7375);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D39800").s().p("AgxBRQgVgLgLgVQgLgVAAgcQAAgbALgVQALgUAVgMQAVgLAcgBQAdABAVALQAVAMALAUQALAVAAAbQAAAcgLAVQgLAVgVALQgVAMgdAAQgcAAgVgMgAgTghQgHAMAAAVQAAAVAHAMQAHAMAMAAQANAAAHgMQAHgMAAgVQAAgVgHgMQgHgMgNAAQgMAAgHAMg");
	this.shape_7.setTransform(211.925,224.775);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D39800").s().p("AgxBRQgVgLgLgVQgLgVAAgcQAAgbALgVQALgUAVgMQAVgLAcgBQAdABAVALQAVAMALAUQALAVAAAbQAAAcgLAVQgLAVgVALQgVAMgdAAQgcAAgVgMgAgTghQgHAMAAAVQAAAVAHAMQAHAMAMAAQANAAAHgMQAHgMAAgVQAAgVgHgMQgHgMgNAAQgMAAgHAMg");
	this.shape_8.setTransform(191.275,224.775);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D39800").s().p("AA8CDIgTgVQgJADgLABQgKACgLAAQggAAgbgOQgagOgPgcQgQgbAAgnQAAgoAQgcQAPgbAagOQAbgOAggBQAhABAaAOQAaAOAPAbQAQAcABAoQAAAegKAXQgJAYgRAPIAkAtgAgkg4QgNARAAAhQAAAfANARQANARAXAAIADAAIgZgjIAyAAIALAPQAFgJADgLQACgMAAgNQAAghgNgRQgMgRgYAAQgXAAgNARg");
	this.shape_9.setTransform(167.8,222.475);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D39800").s().p("Ag9BMQgYgQgCgcIBAAAQABAIAHAFQAIAEAKAAQAJAAAFgDQAFgDABgFQAAgFgFgDQgFgEgKgBIgggGQgbgFgNgNQgOgNgBgVQABgcAWgPQAWgPAmgBQAnABAWAQQAWAQACAcIg8AAQAAgIgIgFQgGgEgKAAQgIAAgFADQgGADAAAFQAAAEADAEQAEADAKACIAkAGQAbAFAOAMQANALAAAUQABAUgMAOQgLAOgTAHQgUAIgZAAQgpAAgWgRg");
	this.shape_10.setTransform(145,224.775);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D39800").s().p("AgWAXQgKgJAAgOQAAgMAKgKQAJgJANAAQAJAAAHAEQAHAEAFAIQAFAHAAAIQAAAJgFAHQgFAIgHAFQgHADgJAAQgNAAgJgJg");
	this.shape_11.setTransform(130.15,230.85);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D39800").s().p("Ag5BXQgNgGgIgLQgHgMAAgSQAAgUAJgMQAIgLAPgGQAPgGATgBQAVgCAKgDQAKgDAAgIIAAgBQgBgHgFgDQgFgEgJAAQgIAAgGAEQgGAEgBAIIg7AAQABgQAJgOQAKgOARgIQASgIAagBQAaABATAHQASAIAKANQAKAOAAAQIAAB7Ig8AAIAAgaIgCAAQgIAPgNAHQgMAHgSgBIgCABQgQAAgMgGgAAKAPIgNADQgLABgFAFQgFAFAAAHQAAAIAFAEQAFAEAIAAQAHAAAGgDQAHgDAEgGQAEgGAAgIIAAgPIgMAEg");
	this.shape_12.setTransform(114.975,224.7519);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D39800").s().p("AhcB9IAAj3IBAAAIAAAgIABAAQAGgOAMgKQAMgKAUAAQASAAAQAJQAQAKAKAUQAKAVAAAgQAAAggKATQgJAVgQAKQgQAKgUAAQgTAAgLgKQgNgIgGgOIgBAAIAABhgAgVg/QgIAMAAATQAAAVAIALQAHAKAOAAQAMAAAHgKQAIgLAAgVQAAgTgIgMQgHgLgMAAQgOAAgHALg");
	this.shape_13.setTransform(95.125,228);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#D39800").s().p("Ag+BMQgWgQgEgcIBBAAQABAIAHAFQAIAEAKAAQAIAAAGgDQAFgDABgFQAAgFgFgDQgFgEgKgBIgggGQgbgFgOgNQgOgNABgVQAAgcAWgPQAVgPAngBQAnABAWAQQAXAQABAcIg8AAQAAgIgIgFQgGgEgKAAQgIAAgFADQgGADAAAFQAAAEADAEQAEADAKACIAkAGQAcAFANAMQANALAAAUQAAAUgLAOQgLAOgUAHQgTAIgZAAQgoAAgYgRg");
	this.shape_14.setTransform(74.5,224.775);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#D39800").s().p("AhBBEQgYgYgBgsQAAgbAMgVQAKgUAVgMQAUgLAbgBQAcABAUALQAUALALAUQALAVAAAcIAAAPIh0AAIAAADQAAANAIAIQAIAIAOABQAKAAAHgFQAHgEADgHIA7AAQgEAcgYAQQgWARgmAAQgrAAgYgZgAAfgUQgBgMgHgHQgJgHgMAAQgLAAgIAHQgJAHAAAMIA5AAIAAAAg");
	this.shape_15.setTransform(54.8,224.775);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#D39800").s().p("AglBaIg8izIBEAAIAdB2IAAAAIAeh2IBEAAIg9Czg");
	this.shape_16.setTransform(34.8,224.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},94).wait(98));

	// individuell
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#323232").s().p("AgTAUQgIgIAAgMQAAgLAIgIQAIgHALgBQALABAJAHQAIAIAAALQAAAMgIAIQgJAHgLABQgLgBgIgHg");
	this.shape_17.setTransform(420.2,190.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#323232").s().p("AgYB4IAAjvIAxAAIAADvg");
	this.shape_18.setTransform(410.8,181);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#323232").s().p("AgYB4IAAjvIAxAAIAADvg");
	this.shape_19.setTransform(401.8,181);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#323232").s().p("AgrBSQgVgLgKgWQgLgUAAgcQAAgcALgVQAKgUAVgMQATgLAagBQAXAAATAKQAUALALAUQALAUAAAeIAAAOIh6AAQAAAUAMALQAKAMASAAQANgBAJgFQAJgFAEgKIAuADQgFAZgWAPQgVAOghABQgcAAgTgLgAAngSQAAgQgKgKQgKgLgRAAQgPABgLAKQgKALgCAPIBLAAIAAAAg");
	this.shape_20.setTransform(387.45,184.05);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#323232").s().p("Ag1BTQgNgIgIgPQgIgQAAgVIAAhxIAyAAIAABoQAAARAJAJQAIAJAOAAQAIAAAIgEQAIgEAFgJQAEgIABgMIAAhmIAyAAIAACzIgwAAIAAghIgCAAQgHAQgOAJQgMAKgVAAQgSAAgOgIg");
	this.shape_21.setTransform(367.375,184.125);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#323232").s().p("AgzBvQgQgLgKgVQgJgUgBgfQABgdAKgVQAJgUARgLQAQgKAUAAQAOAAALAGQAKAEAGAIQAGAHAEAIIABAAIAAhaIAyAAIAADuIgxAAIAAgdIgCAAQgEAIgGAIQgHAGgKAFQgKAFgOABQgUAAgRgLgAgagJQgJAOAAAXQAAAYAJAPQAKAOARABQASgBAKgOQAKgOAAgZQAAgYgKgNQgJgOgTAAQgRAAgKAOg");
	this.shape_22.setTransform(346.225,181.15);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#323232").s().p("AgYB/IAAizIAxAAIAACzgAgShSQgIgIAAgKQAAgLAIgHQAHgIALAAQAMAAAHAIQAIAHAAALQAAAKgIAIQgHAGgMABQgLgBgHgGg");
	this.shape_23.setTransform(331.65,180.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#323232").s().p("AgbBaIg/izIA1AAIAlCAIABAAIAliAIA1AAIg+Czg");
	this.shape_24.setTransform(317.45,184);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#323232").s().p("AgYB/IAAizIAxAAIAACzgAgShSQgIgIAAgKQAAgLAIgHQAHgIALAAQAMAAAHAIQAIAHAAALQAAAKgIAIQgHAGgMABQgLgBgHgGg");
	this.shape_25.setTransform(303.3,180.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#323232").s().p("AgzBvQgQgLgKgVQgJgUgBgfQABgdAKgVQAJgUARgLQAQgKAUAAQAOAAALAGQAKAEAGAIQAGAHAEAIIABAAIAAhaIAyAAIAADuIgxAAIAAgdIgCAAQgEAIgGAIQgHAGgKAFQgKAFgOABQgUAAgRgLgAgagJQgJAOAAAXQAAAYAJAPQAKAOARABQASgBAKgOQAKgOAAgZQAAgYgKgNQgJgOgTAAQgRAAgKAOg");
	this.shape_26.setTransform(287.925,181.15);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#323232").s().p("AAhBbIAAhoQAAgRgJgJQgIgJgPgBQgPABgIAJQgKAKAAARIAABnIgyAAIAAizIAvAAIAAAgIADAAQAFgQAPgJQANgJAUAAQAcAAARASQAQASABAgIAABxg");
	this.shape_27.setTransform(267.65,183.875);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#323232").s().p("AgYB4IAAjvIAxAAIAADvg");
	this.shape_28.setTransform(252.725,181);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]},81).wait(111));

	// einfach
	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#323232").s().p("AgTAUQgHgIgBgMQABgLAHgIQAIgHALgBQALABAJAHQAIAIAAALQAAAMgIAIQgJAHgLABQgLgBgIgHg");
	this.shape_29.setTransform(233.95,190.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#323232").s().p("AAhB4IAAhqQAAgPgIgKQgIgIgQgBQgOAAgKAKQgJAKAAAQIAABoIgyAAIAAjvIAwAAIAABcIACAAQAGgQAOgJQANgJAUAAQAdAAAQASQARASAAAeIAABzg");
	this.shape_30.setTransform(218.775,181);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#323232").s().p("AgqBRQgUgMgLgUQgLgVAAgcQAAgaALgWQALgUAUgMQAUgLAagBQAYABARAIQASAIALAQQAJAPACAVIgvAAQgDgOgIgIQgJgHgNgBQgRABgKANQgKAOAAAZQAAAZAKAPQAKANARAAQANAAAIgHQAJgIADgPIAvAAQgCAWgJAPQgLAQgRAIQgRAJgZAAQgbAAgTgMg");
	this.shape_31.setTransform(198.8,184.05);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#323232").s().p("AgzBXQgNgGgIgMQgIgMAAgSQABgUAJgMQAJgKAQgGQAPgFASgBQAXgCAJgDQALgDgBgIIAAgBQAAgLgGgGQgHgGgNgBQgMABgJAGQgHAFgDAKIgugFQAFgYAVgOQAUgOAfgBQAVAAARAHQARAGALANQAKAOAAAVIAAB4IgvAAIAAgYIgBAAQgGANgOAHQgMAHgUABQgRAAgOgGgAAWAKIgNADIgLABQgOACgIAGQgIAFAAALQABAKAGAFQAIAFALAAQARAAAJgJQALgJAAgPIAAgTQgDACgGACg");
	this.shape_32.setTransform(179.15,184.05);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#323232").s().p("AgiB9IAAiNIgZAAIAAgmIAZAAIAAgNQABgTAHgNQAIgNANgHQAMgFARAAQAMAAAKABIAOADIgJAlIgHgBIgJgBQgLAAgEAGQgFAEAAAJIAAAMIAkAAIAAAmIgkAAIAACNg");
	this.shape_33.setTransform(163.775,180.45);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#323232").s().p("AAhBbIAAhoQAAgRgIgJQgJgJgPgBQgPABgIAJQgKAKAAARIAABnIgyAAIAAizIAvAAIAAAgIACAAQAHgQAOgJQAMgJAVAAQAdAAAQASQAQASABAgIAABxg");
	this.shape_34.setTransform(146.85,183.875);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#323232").s().p("AgYB/IAAizIAxAAIAACzgAgShSQgHgIgBgKQABgLAHgHQAIgIAKAAQAMAAAHAIQAIAHAAALQAAAKgIAIQgHAGgMABQgKgBgIgGg");
	this.shape_35.setTransform(132.05,180.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#323232").s().p("AhQB4IAAjvIChAAIAAAqIhvAAIAAA5IBmAAIAAApIhmAAIAAA5IBvAAIAAAqg");
	this.shape_36.setTransform(117.55,181);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29}]},68).wait(124));

	// neu
	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#323232").s().p("AgTAUQgIgIAAgMQAAgLAIgIQAIgHALgBQAMABAIAHQAIAIAAALQAAAMgIAIQgIAHgMABQgLgBgIgHg");
	this.shape_37.setTransform(92.9,190.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#323232").s().p("Ag1BTQgNgIgIgPQgIgQAAgVIAAhxIAyAAIAABoQAAARAJAJQAIAJAOAAQAIAAAIgEQAIgEAFgJQAEgIABgMIAAhmIAyAAIAACzIgwAAIAAghIgCAAQgHAQgOAJQgMAKgVAAQgSAAgOgIg");
	this.shape_38.setTransform(77.775,184.125);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#323232").s().p("AgsBSQgTgLgLgWQgLgUAAgcQAAgcALgVQALgUATgMQAUgLAZgBQAZAAASAKQAUALAKAUQAMAUAAAeIAAAOIh5AAQgBAUALALQALAMATAAQAMgBAJgFQAJgFAEgKIAuADQgFAZgVAPQgWAOgiABQgaAAgVgLgAAngSQAAgQgKgKQgKgLgRAAQgPABgLAKQgLALAAAPIBKAAIAAAAg");
	this.shape_39.setTransform(57.65,184.05);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#323232").s().p("AA4B4IhniWIgCAAIAACWIgyAAIAAjvIAsAAIBnCWIACAAIAAiWIAyAAIAADvg");
	this.shape_40.setTransform(35.675,181);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37}]},54).wait(138));

	// header
	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#D39800").s().p("AggAgQgNgNgBgTQABgTANgNQANgNATgBQANABAKAGQALAGAGALQAHAKAAAMQAAANgHAKQgGALgLAGQgKAGgNABQgTgBgNgOg");
	this.shape_41.setTransform(358.1,126.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#D39800").s().p("ABMCrIgUhCIhwAAIgTBCIhkAAIBwlVIB+AAIBxFVgAAjAkIgihwIgCAAIgiBwIBGAAg");
	this.shape_42.setTransform(331.075,113.125);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#D39800").s().p("AiICrIAAlVICSAAQAmAAAdAPQAcAPAQAbQAQAbAAAlQAAAlgQAaQgQAageAPQgdAOgnAAIgzAAIAABmgAgsgCIAhAAQAYAAAOgNQANgMAAgWQAAgXgNgMQgOgMgYAAIghAAg");
	this.shape_43.setTransform(296.425,113.125);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#D39800").s().p("AhJCiQgggNgTgcQgSgbAAgrIBYAAQABAYAPAMQAPAMAaAAQAWAAALgIQAMgIAAgMQAAgMgLgIQgMgIgbgGIgigHQgugKgagWQgZgYgBgoQAAggASgZQARgYAfgOQAggNAnAAQAqAAAeAOQAeANARAaQAQAZAAAhIhYAAQgCgRgLgJQgLgJgXAAQgUAAgKAHQgKAHAAAMQgBAMAMAIQALAIAXAFIAcAGQA4AMAaAaQAZAaAAAoQgBAygkAbQgkAbhCAAQgsAAghgNg");
	this.shape_44.setTransform(263.8505,113.075);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#D39800").s().p("Ah6CrIAAlVID1AAIAABLIiZAAIAAA6ICMAAIAABKIiMAAIAAA7ICZAAIAABLg");
	this.shape_45.setTransform(232.475,113.125);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#D39800").s().p("Ag/CrIhwlVIBoAAIBGDwIACAAIBGjwIBpAAIhxFVg");
	this.shape_46.setTransform(198.275,113.125);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#D39800").s().p("Ah6CrIAAlVID1AAIAABLIiZAAIAAA6ICMAAIAABKIiMAAIAAA7ICZAAIAABLg");
	this.shape_47.setTransform(153.475,113.125);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#D39800").s().p("ABGCrIh6izIgDAAIAACzIhcAAIAAlVIBPAAIB4CyIADAAIAAiyIBdAAIAAFVg");
	this.shape_48.setTransform(120.95,113.125);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#D39800").s().p("AgtCrIAAlVIBbAAIAAFVg");
	this.shape_49.setTransform(96.075,113.125);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#D39800").s().p("Ah6CrIAAlVID1AAIAABLIiZAAIAAA6ICMAAIAABKIiMAAIAAA7ICZAAIAABLg");
	this.shape_50.setTransform(73.525,113.125);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#D39800").s().p("AiWCrIAAlVICCAAQA0AAAmAUQAnAVAVAmQAUAmABA1QgBA1gUAnQgVAmgmAUQgmAVg0AAgAg5BcIAkAAQAXAAATgIQASgIAJgUQAJgVABgjQgBgjgJgUQgKgUgSgIQgTgIgZAAIghAAg");
	this.shape_51.setTransform(40.85,113.125);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#D39800").s().p("AAqCrIg7hxIggAAIAABxIhdAAIAAlVICTAAQAmAAAcAOQAdAOAQAaQAQAaAAAkQAAAkgQAXQgPAZgbANIBFCAgAgxgNIAhAAQAXAAAOgKQAOgJAAgWQAAgWgOgKQgOgKgXAAIghAAg");
	this.shape_52.setTransform(463.875,54.925);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#D39800").s().p("AgtCrIAAlVIBbAAIAAFVg");
	this.shape_53.setTransform(439.525,54.925);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#D39800").s().p("AiWCrIAAlVICCAAQA0AAAmAUQAnAVAVAmQAVAmAAA1QAAA1gVAnQgVAmgmAUQgmAVg0AAgAg6BcIAkAAQAZAAASgIQASgIAJgUQAJgVAAgjQAAgjgJgUQgKgUgSgIQgTgIgZAAIgiAAg");
	this.shape_54.setTransform(414.55,54.925);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#D39800").s().p("Ah6CrIAAlVID1AAIAABLIiZAAIAAA6ICMAAIAABKIiMAAIAAA7ICZAAIAABLg");
	this.shape_55.setTransform(371.175,54.925);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#D39800").s().p("AAqCrIg7hxIggAAIAABxIhdAAIAAlVICTAAQAmAAAcAOQAdAOAQAaQAQAaAAAkQAAAkgQAXQgPAZgbANIBFCAgAgxgNIAhAAQAXAAAOgKQAOgJAAgWQAAgWgOgKQgOgKgXAAIghAAg");
	this.shape_56.setTransform(340.725,54.925);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#D39800").s().p("Ah6CrIAAlVID1AAIAABLIiZAAIAAA6ICMAAIAABKIiMAAIAAA7ICZAAIAABLg");
	this.shape_57.setTransform(308.525,54.925);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#D39800").s().p("AgtCrIAAlVIBbAAIAAFVg");
	this.shape_58.setTransform(286.125,54.925);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#D39800").s().p("AAqCrIg7hxIggAAIAABxIhdAAIAAlVICTAAQAmAAAcAOQAdAOAQAaQAQAaAAAkQAAAkgQAXQgPAZgbANIBFCAgAgxgNIAhAAQAXAAAOgKQAOgJAAgWQAAgWgOgKQgOgKgXAAIghAAg");
	this.shape_59.setTransform(263.375,54.925);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#D39800").s().p("AhNCfQghgOgSgbQgSgagBgnIAAjhIBdAAIAADcQAAAUAPALQAPAMAYAAQAbAAAOgMQAOgLABgUIAAjcIBcAAIAADhQgBAngRAaQgTAbghAOQghAOgtAAQgsAAghgOg");
	this.shape_60.setTransform(228.95,55.125);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#D39800").s().p("AhPCaQgmgUgVgoQgVgnAAg2QAAg4AWgnQAXgnAlgVQAmgVAtAAQApABAhAPQAhAPATAaQAVAbAEAiIheAAQgEgSgOgJQgPgKgVAAQgjAAgSAZQgUAZAAAsQAAAtATAZQASAZAjAAQAfAAAQgNQAQgNABgXIg/AAIAAhBICYAAIAAAvQgBAugTAhQgUAhgiASQgjARgtAAQgxABglgWg");
	this.shape_61.setTransform(192.8,54.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#D39800").s().p("AgtCrIAAlVIBbAAIAAFVg");
	this.shape_62.setTransform(166.825,54.925);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#D39800").s().p("Ah3CrIAAlVIDvAAIAABLIiTAAIAAA6ICEAAIAABKIiEAAIAACGg");
	this.shape_63.setTransform(145.775,54.925);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#D39800").s().p("ABGCrIh6izIgCAAIAACzIhdAAIAAlVIBOAAIB5CyIADAAIAAiyIBdAAIAAFVg");
	this.shape_64.setTransform(113.55,54.925);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#D39800").s().p("AhTCcQgmgVgWgnQgWgnAAg5QAAg4AWgnQAWgnAmgVQAlgTAugBQAvABAmATQAlAVAWAnQAWAnAAA4QAAA5gWAnQgWAnglAVQgmATgvAAQguAAglgTgAgzhFQgSAYgBAtQABAvASAXQASAZAhAAQAjAAASgZQASgXAAgvQAAgtgSgYQgSgZgjAAQghAAgSAZg");
	this.shape_65.setTransform(76.825,54.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#D39800").s().p("AAtCrIhMiBIgfApIAABYIhdAAIAAlVIBdAAIAACKIAFAAIBmiKIBsAAIhzCYIB2C9g");
	this.shape_66.setTransform(41.3,54.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41}]},40).wait(152));

	// logo
	this.instance_13 = new lib.logo();
	this.instance_13.setTransform(0,883);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(192));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(166,524.8,450,475.20000000000005);
// library properties:
lib.properties = {
	id: 'EB0C605B49ED30478366B68736342220',
	width: 500,
	height: 1000,
	fps: 24,
	color: "#F0F0F0",
	opacity: 1.00,
	manifest: [
		{src:"images/_10ledblinker.png", id:"_10ledblinker"},
		{src:"images/_11tuningfelgen.png", id:"_11tuningfelgen"},
		{src:"images/_12sportauspuff.png", id:"_12sportauspuff"},
		{src:"images/_1white.png", id:"_1white"},
		{src:"images/_2red.png", id:"_2red"},
		{src:"images/_3yellow.png", id:"_3yellow"},
		{src:"images/_4black.png", id:"_4black"},
		{src:"images/_5grey.png", id:"_5grey"},
		{src:"images/_6handgriffe.png", id:"_6handgriffe"},
		{src:"images/_7tuningspiegel.png", id:"_7tuningspiegel"},
		{src:"images/_8blackpackohnespiegel.png", id:"_8blackpackohnespiegel"},
		{src:"images/_9sitzgrau.png", id:"_9sitzgrau"},
		{src:"images/button.png", id:"button"},
		{src:"images/logo.jpg", id:"logo"}
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
an.compositions['EB0C605B49ED30478366B68736342220'] = {
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