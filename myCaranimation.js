(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"myCaranimation_atlas_", frames: [[0,0,960,827],[416,1340,200,100],[416,1532,127,88],[416,1241,238,97],[416,1442,157,88],[0,1241,414,414],[0,829,1000,410]]}
];


// symbols:



(lib._77_1 = function() {
	this.initialize(ss["myCaranimation_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_53 = function() {
	this.initialize(ss["myCaranimation_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_54 = function() {
	this.initialize(ss["myCaranimation_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_55 = function() {
	this.initialize(ss["myCaranimation_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_56 = function() {
	this.initialize(ss["myCaranimation_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.cartyre = function() {
	this.initialize(ss["myCaranimation_atlas_"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.carBody = function() {
	this.initialize(ss["myCaranimation_atlas_"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
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


(lib.play = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedTexturedBitmap_56();
	this.instance.parent = this;
	this.instance.setTransform(23.15,0,0.5,0.5);

	this.instance_1 = new lib.CachedTexturedBitmap_55();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,3.1,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,119,51.6);


(lib.pause = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedTexturedBitmap_54();
	this.instance.parent = this;
	this.instance.setTransform(17,0,0.5,0.5);

	this.instance_1 = new lib.CachedTexturedBitmap_53();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,50);


(lib.front = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.cartyre();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.1329,0.1329);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.front, new cjs.Rectangle(0,0,55,55), null);


(lib.body = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.carBody();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.31,0.2878);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.body, new cjs.Rectangle(0,0,310,118), null);


(lib.back = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.cartyre();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.1329,0.1329);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.back, new cjs.Rectangle(0,0,55,55), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.front();
	this.instance.parent = this;
	this.instance.setTransform(27.5,27.5,1,1,0,0,0,27.5,27.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,55,55), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.back();
	this.instance.parent = this;
	this.instance.setTransform(27.5,27.5,1,1,0,0,0,27.5,27.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,55,55), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.body();
	this.instance.parent = this;
	this.instance.setTransform(155,59,1,1,0,0,0,155,59);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,310,118), null);


(lib.car = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(100));

	// front
	this.instance = new lib.Symbol3();
	this.instance.parent = this;
	this.instance.setTransform(99.5,86.5,1,1,0,0,0,27.5,27.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360,x:1050.5},99).wait(1));

	// back
	this.instance_1 = new lib.Symbol2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-90.5,85.5,1,1,0,0,0,27.5,27.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:360,x:860.5},99).wait(1));

	// body
	this.instance_2 = new lib.Symbol1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,59,1,1,0,0,0,155,59);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:951},99).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-155,0,1261,125.4);


// stage content:
(lib.ccaer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.stop_button.on('click', function(){
		/*
		Stop the complete animation.
		*/
		createjs.Ticker.removeEventListener('tick', stage);
		});
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.play_button.on('click', function(){
		/*
		Start the complete animation.
		*/
		createjs.Ticker.removeEventListener('tick', stage);
		createjs.Ticker.addEventListener('tick', stage);
		});
		var _this = this;
		/*
		Stop the complete animation.
		*/
		createjs.Ticker.removeEventListener('tick', stage);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// pause
	this.stop_button = new lib.pause();
	this.stop_button.name = "stop_button";
	this.stop_button.parent = this;
	this.stop_button.setTransform(697,102.15,1,1,0,0,0,50,25);
	new cjs.ButtonHelper(this.stop_button, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.stop_button).wait(1));

	// play_idn
	this.play_button = new lib.play();
	this.play_button.name = "play_button";
	this.play_button.parent = this;
	this.play_button.setTransform(542.4,100.95,1,1,0,0,0,59.4,25.8);
	new cjs.ButtonHelper(this.play_button, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.play_button).wait(1));

	// car
	this.myCar = new lib.car();
	this.myCar.name = "myCar";
	this.myCar.parent = this;
	this.myCar.setTransform(155,430,1,1,0,0,0,155,59);

	this.timeline.addTween(cjs.Tween.get(this.myCar).wait(1));

	// Layer_1
	this.instance = new lib._77_1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.8333,0.7267);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(245,300,555,301);
// library properties:
lib.properties = {
	id: '9B424BA6A5D3D94FA88BC137E9AC5C7C',
	width: 800,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/myCaranimation_atlas_.png", id:"myCaranimation_atlas_"}
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
an.compositions['9B424BA6A5D3D94FA88BC137E9AC5C7C'] = {
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


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;