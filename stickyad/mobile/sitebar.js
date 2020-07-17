(function(cjs, an) {
  var p; // shortcut to reference prototypes
  var lib = {};
  var ss = {};
  var img = {};
  lib.ssMetadata = [];

  // symbols:

  (lib.haendler_logo = function() {
    this.initialize(img.haendler_logo);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 300, 77); // helper functions:

  function mc_symbol_clone() {
    var clone = this._cloneProps(
      new this.constructor(this.mode, this.startPosition, this.loop)
    );
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

  (lib.logo = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Ebene_1
    this.instance = new lib.haendler_logo();
    this.instance.parent = this;

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
  }).prototype = getMCSymbolPrototype(
    lib.logo,
    new cjs.Rectangle(0, 0, 300, 77),
    null
  );

  (lib.hla = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // headline
    this.txt_hl = new cjs.Text(
      "WIE WÄR'S MIT UNS BEIDEN?",
      "bold 20px 'Open Sans'",
      "#ffcf3c"
    );
    this.txt_hl.name = "txt_hl";
    this.txt_hl.textAlign = "center";
    this.txt_hl.lineHeight = 25;
    this.txt_hl.lineWidth = 300;
    this.txt_hl.parent = this;
    this.txt_hl.setTransform(150, 0);

    this.timeline.addTween(cjs.Tween.get(this.txt_hl).wait(1));
  }).prototype = getMCSymbolPrototype(
    lib.hla,
    new cjs.Rectangle(0, 0, 300, 25),
    null
  );
  
  (lib.car_desc = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    this.txt_carname = new cjs.Text(
      "Seat Ateca",
      "500 14px 'Open Sans'",
      "#8496b0"
    );
    this.txt_carname.name = "txt_carname";
    this.txt_carname.textAlign = "center";
    this.txt_carname.lineHeight = 20;
    this.txt_carname.lineWidth = 300;
    this.txt_carname.parent = this;
    this.txt_carname.setTransform(150, 0);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.txt_carname }] })
        .wait(1)
    );
  }).prototype = getMCSymbolPrototype(
    lib.car_desc,
    new cjs.Rectangle(0, 0, 300, 25),
    null
  );
  
  (lib.liner = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Ebene_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#626F76")
      .s()
      .p( "AgJJGIAAgfQAAgEADgDQADgEADAAQAEAAADAEQADADAAAEIAAAfgAgGIPQgDgEAAgDIAAggQAAgEADgDQADgEADAAQAEAAADAEQADADAAAEIAAAgQAAADgDAEQgDADgEAAQgDAAgDgDgAgGHQQgDgDAAgEIAAggQAAgEADgDQADgDADgBQAEABADADQADADAAAEIAAAgQAAAEgDADQgDADgEAAQgDAAgDgDgAgGGRQgDgDAAgEIAAggQAAgEADgDQADgDADAAQAEAAADADQADADAAAEIAAAgQAAAEgDADQgDADgEAAQgDAAgDgDgAgGFTQgDgEAAgEIAAggQAAgEADgDQADgDADAAQAEAAADADQADADAAAEIAAAgQAAAEgDAEQgDACgEAAQgDAAgDgCgAgGEUQgDgDAAgFIAAggQAAgEADgCQADgEADAAQAEAAADAEQADACAAAEIAAAgQAAAFgDADQgDACgEAAQgDAAgDgCgAgGDVQgDgDAAgFIAAgfQAAgEADgDQADgEADAAQAEAAADAEQADADAAAEIAAAfQAAAFgDADQgDADgEAAQgDAAgDgDgAgGCWQgDgEAAgEIAAgfQAAgEADgDQADgEADAAQAEAAADAEQADADAAAEIAAAfQAAAEgDAEQgDADgEAAQgDAAgDgDgAgGBXQgDgDAAgEIAAgfQAAgFADgDQADgDADAAQAEAAADADQADADAAAFIAAAfQAAAEgDADQgDADgEAAQgDAAgDgDgAgGAYQgDgDAAgEIAAgeQAAgFADgDQADgDADAAQAEAAADADQADADAAAFIAAAeQAAAEgDADQgDAEgEgBQgDABgDgEgAgGglQgDgDAAgFIAAgfQAAgFADgCQADgEADAAQAEAAADAEQADACAAAFIAAAfQAAAFgDADQgDACgEAAQgDAAgDgCgAgGhkQgDgEAAgEIAAgfQAAgEADgDQADgDADgBQAEABADADQADADAAAEIAAAfQAAAEgDAEQgDADgEAAQgDAAgDgDgAgGijQgDgEAAgEIAAgfQAAgEADgDQADgEADAAQAEAAADAEQADADAAAEIAAAfQAAAEgDAEQgDADgEAAQgDAAgDgDgAgGjiQgDgDAAgFIAAgeQAAgFADgDQADgDADAAQAEAAADADQADADAAAFIAAAeQAAAFgDADQgDADgEAAQgDAAgDgDgAgGkhQgDgDAAgEIAAgfQAAgEADgEQADgDADAAQAEAAADADQADAEAAAEIAAAfQAAAEgDADQgDAEgEgBQgDABgDgEgAgGlgQgDgCAAgFIAAgfQAAgFADgCQADgEADAAQAEAAADAEQADACAAAFIAAAfQAAAFgDACQgDADgEAAQgDAAgDgDgAgGmfQgDgCAAgFIAAgfQAAgEADgDQADgDADAAQAEAAADADQADADAAAEIAAAfQAAAFgDACQgDADgEAAQgDAAgDgDgAgGndQgDgDAAgFIAAgfQAAgEADgDQADgDADAAQAEAAADADQADADAAAEIAAAfQAAAFgDADQgDADgEAAQgDAAgDgDgAgGocQgDgDAAgFIAAgeIABgDIASAAIAAADIAAAeQAAAFgDADQgDADgEAAQgDAAgDgDg"
      );
    this.shape.setTransform(0, 65, .3, .55);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = getMCSymbolPrototype(
    lib.liner,
    new cjs.Rectangle(0, 0, 2, 60),
    null
  );
  
  (lib.comp1 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Ebene_1
    
	this.txt_comp1_titel = new cjs.Text(
      "ICH BIN UM",
      "16px 'Open Sans'",
      "#8496b0"
    );
    this.txt_comp1_titel.name = "txt_comp1_titel";
    this.txt_comp1_titel.textAlign = "center";
    this.txt_comp1_titel.lineHeight = 10;
    this.txt_comp1_titel.lineWidth = 175;
    this.txt_comp1_titel.parent = this;
    this.txt_comp1_titel.setTransform(175, 5);
	
	this.txt_comp1_wert = new cjs.Text(
      "€ 500",
      "bold 32px 'Open Sans'",
      "#ffcf3c"
    );
	
	this.txt_comp1_wert.textBaseline = "middle";
    this.txt_comp1_wert.name = "txt_comp1_wert";
    this.txt_comp1_wert.textAlign = "center";
    this.txt_comp1_wert.lineWidth = 175;
	this.txt_comp1_wert.lineHeight = 15;
    this.txt_comp1_wert.parent = this;
    this.txt_comp1_wert.setTransform(175, 38);
	
	this.txt_comp1_sub = new cjs.Text(
      "GÜNSTIGER",
      "16px 'Open Sans'",
      "#8496b0"
    );
    this.txt_comp1_sub.name = "txt_comp1_sub";
    this.txt_comp1_sub.textAlign = "center";
    this.txt_comp1_sub.lineHeight = 0;
    this.txt_comp1_sub.lineWidth = 175;
    this.txt_comp1_sub.parent = this;
    this.txt_comp1_sub.setTransform(175, 55);
	
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.txt_comp1_titel },
            { t: this.txt_comp1_wert },
            { t: this.txt_comp1_sub }
          ]
        })
        .wait(1)
    );
  }).prototype = getMCSymbolPrototype(
    lib.comp1,
    new cjs.Rectangle(0, 0, 175, 90),
    null
  );
  
  (lib.btn_clicktag = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Ebene_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#FFFF00")
      .s()
      .p("EhOHBOIMAAAicPMCcPAAAMAAACcPg");
    this.shape.setTransform(150, 250, 0.5, 1);
    this.shape._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.shape)
        .wait(3)
        .to({ _off: false }, 0)
        .wait(1)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 300, 250);
  
  
  (lib.cta = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // CTA Button Text
    this.txt_cta = new cjs.Text(
      "JETZT ANSEHEN",
      "bold 14px 'Open Sans'",
      "#fff"
    );
    this.txt_cta.name = "txt_cta";
	  this.txt_cta.textBaseline = "middle";
    this.txt_cta.textAlign = "center";
	  this.txt_cta.lineWidth = 180;
    this.txt_cta.parent = this;
    this.txt_cta.setTransform(80, 0);

    this.timeline.addTween(cjs.Tween.get(this.txt_cta).wait(1));

    // CTA Button Hintergrund
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#ffcf3c")
      .s()
      .p("A1hEsIAApXMArDAAAIAAJXg");
    this.shape.setTransform(80, 0, .55, .55);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = getMCSymbolPrototype(
    lib.cta,
    new cjs.Rectangle(0, 0, 180, 40),
    null
  );
 
 



  // stage content:
  (lib.sitebar = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, { ender: 249 });

    // timeline functions:
    this.frame_0 = function() {
      this.maxloops = 1;
      if (this.numloops == undefined) {
        this.numloops = 1;
      }
      this.btn_clicktag.addEventListener("click", window.open_clicktag);
    };
    this.frame_249 = function() {
      if (this.maxloops > -1) {
        if (this.numloops < this.maxloops) {
          this.numloops++;
        } else {
          this.stop();
        }
      }
    };
    this.frame_259 = function() {
      this.gotoAndPlay(1);
    };

    // actions tween:
    this.timeline.addTween(
      cjs.Tween.get(this)
        .call(this.frame_0)
        .wait(249)
        .call(this.frame_249)
        .wait(10)
        .call(this.frame_259)
        .wait(1)
    );

    // clicktag
    this.btn_clicktag = new lib.btn_clicktag();
    this.btn_clicktag.name = "btn_clicktag";
    this.btn_clicktag.parent = this;
    this.btn_clicktag.setTransform(300, 500, 1, 1, 0, 0, 0, 300, 500);
    new cjs.ButtonHelper(
      this.btn_clicktag,
      0,
      1,
      2,
      false,
      new lib.btn_clicktag(),
      3
    );

    this.timeline.addTween(cjs.Tween.get(this.btn_clicktag).wait(260));

    // liner
    this.instance = new lib.liner();
    this.instance.parent = this;
    this.instance.setTransform(150, 102, 1, 1, 0, 0, 0, 1, 60);
    this.instance.alpha = 0;
    this.instance._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .wait(43)
        .to({ _off: false }, 0)
        .to({ alpha: 1 }, 6, cjs.Ease.cubicInOut)
        .wait(211)
    );

    // m2 (mask)
    var mask = new cjs.Shape();
    mask._off = true;
    mask.graphics.p("A27MwIAA5fMAt3AAAIAAZfg");
    mask.setTransform(400.4, 572.8);

    // m1 (mask)
    var mask_1 = new cjs.Shape();
    mask_1._off = true;
    mask_1.graphics.p("A27MwIAA5fMAt3AAAIAAZfg");
    mask_1.setTransform(170, 100);

    // comp1
    this.comp1 = new lib.comp1();
    this.comp1.name = "comp1";
    this.comp1.parent = this;
    this.comp1.setTransform(221, 137, 1, 1, 0, 0, 0, 170, 67.8);
    this.comp1.alpha = 0;

    var maskedShapeInstanceList = [this.comp1];

    for (
      var shapedInstanceItr = 0;
      shapedInstanceItr < maskedShapeInstanceList.length;
      shapedInstanceItr++
    ) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
    }

    this.timeline.addTween(
      cjs.Tween.get(this.comp1)
        .wait(49)
        .to({ x: 353.35, alpha: 1 }, 0)
        .to({ x: 221 }, 15, cjs.Ease.cubicInOut)
        .wait(196)
    );

    // cta
    this.cta = new lib.cta();
    this.cta.name = "cta";
    this.cta.parent = this;
    this.cta.setTransform(150, 210, 1, 1, 0, 0, 0, 80, 30);
    this.cta.alpha = 0;

    this.timeline.addTween(
      cjs.Tween.get(this.cta)
        .wait(74)
        .to({ scaleX: 0.55, scaleY: 0.55, x: 150 }, 0)
        .to(
          { regY: 30, scaleX: 1.08, scaleY: 1.06, y: 210, alpha: 1 },
          9,
          cjs.Ease.cubicInOut
        )
        .to(
          { regY: 30, scaleX: 1, scaleY: 1, x: 150, y: 210 },
          5,
          cjs.Ease.cubicInOut
        )
        .wait(111)
        .to(
          { regY: 30, scaleX: 1.08, scaleY: 1.08, y: 210 },
          9,
          cjs.Ease.cubicInOut
        )
        .to(
          { regY: 30, scaleX: 1, scaleY: 1, y: 210 },
          8,
          cjs.Ease.cubicInOut
        )
        .wait(13)
        .to(
          { regY: 30, scaleX: 1.08, scaleY: 1.08, y: 210 },
          9,
          cjs.Ease.cubicInOut
        )
        .to(
          { regY: 30, scaleX: 1, scaleY: 1, y: 210 },
          8,
          cjs.Ease.cubicInOut
        )
        .wait(14)
    );

    // hla
    this.hla = new lib.hla();
    this.hla.name = "hla";
    this.hla.parent = this;
    this.hla.setTransform(300, 50, 1, 1, 0, 0, 0, 300, 50);
    this.hla.alpha = 0;

    this.timeline.addTween(
      cjs.Tween.get(this.hla)
        .wait(4)
        .to({ y: 80 }, 0)
        .to({ y: 60, alpha: 1 }, 10, cjs.Ease.cubicInOut)
        .wait(246)
    );

    // car_desc
    this.car_desc = new lib.car_desc();
    this.car_desc.name = "car_desc";
    this.car_desc.parent = this;
    this.car_desc.setTransform(150, 73, 1, 1, 0, 0, 0, 150, 40);
    this.car_desc.alpha = 0;

    this.timeline.addTween(
      cjs.Tween.get(this.car_desc)
        .wait(19)
        .to({ y: 73 }, 0)
        .to({ alpha: 1 }, 10, cjs.Ease.cubicInOut)
        .wait(231)
    );

    
    // haendler_logo
    this.instance_5 = new lib.logo();
    this.instance_5.parent = this;
    this.instance_5.setTransform(150, 227, .6, .6, 0, 0, 0, 250, 41);

    this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(260));

    // background
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#fff")
      .s()
      .p("EgnDBOIMAAAicPMBOHAAAMAAACcPg");
    this.shape.setTransform(250, 500);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(260));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(250, 500, 250, 500);
  // library properties:
  lib.properties = {
    id: "38726675515179418EF8DE4E205E0C8F",
    width: 300,
    height: 250,
    fps: 25,
    color: "#FFFFFF",
    opacity: 1.0,
    manifest: [
      { src: "./haendler_logo.png?1544114810940", id: "haendler_logo" }
    ],
    preloads: []
  };

  // bootstrap callback support:

  (lib.Stage = function(canvas) {
    createjs.Stage.call(this, canvas);
  }).prototype = p = new createjs.Stage();

  p.setAutoPlay = function(autoPlay) {
    this.tickEnabled = autoPlay;
  };
  p.play = function() {
    this.tickEnabled = true;
    this.getChildAt(0).gotoAndPlay(this.getTimelinePosition());
  };
  p.stop = function(ms) {
    if (ms) this.seek(ms);
    this.tickEnabled = false;
  };
  p.seek = function(ms) {
    this.tickEnabled = true;
    this.getChildAt(0).gotoAndStop((lib.properties.fps * ms) / 1000);
  };
  p.getDuration = function() {
    return (this.getChildAt(0).totalFrames / lib.properties.fps) * 1000;
  };

  p.getTimelinePosition = function() {
    return (this.getChildAt(0).currentFrame / lib.properties.fps) * 1000;
  };

  an.bootcompsLoaded = an.bootcompsLoaded || [];
  if (!an.bootstrapListeners) {
    an.bootstrapListeners = [];
  }

  an.bootstrapCallback = function(fnCallback) {
    an.bootstrapListeners.push(fnCallback);
    if (an.bootcompsLoaded.length > 0) {
      for (var i = 0; i < an.bootcompsLoaded.length; ++i) {
        fnCallback(an.bootcompsLoaded[i]);
      }
    }
  };

  an.compositions = an.compositions || {};
  an.compositions["38726675515179418EF8DE4E205E0C8F"] = {
    getStage: function() {
      return exportRoot.getStage();
    },
    getLibrary: function() {
      return lib;
    },
    getSpriteSheet: function() {
      return ss;
    },
    getImages: function() {
      return img;
    }
  };

  an.compositionLoaded = function(id) {
    an.bootcompsLoaded.push(id);
    for (var j = 0; j < an.bootstrapListeners.length; j++) {
      an.bootstrapListeners[j](id);
    }
  };

  an.getComposition = function(id) {
    return an.compositions[id];
  };
})((createjs = createjs || {}), (AdobeAn = AdobeAn || {}));
var createjs, AdobeAn;
