var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["fdfffdaa-a5ab-41bf-ac5e-29b2a3e0fb0b","25a7ef65-8f65-4fef-b9ed-6d558d61fe8d"],"propsByKey":{"fdfffdaa-a5ab-41bf-ac5e-29b2a3e0fb0b":{"name":"sticker_52_1","sourceUrl":"assets/api/v1/animation-library/gamelab/5VgELIKDce8NlZxYJyPcuTMh35247mbT/category_stickers/sticker_52.png","frameSize":{"x":224,"y":180},"frameCount":1,"looping":true,"frameDelay":2,"version":"5VgELIKDce8NlZxYJyPcuTMh35247mbT","categories":["stickers"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":224,"y":180},"rootRelativePath":"assets/api/v1/animation-library/gamelab/5VgELIKDce8NlZxYJyPcuTMh35247mbT/category_stickers/sticker_52.png"},"25a7ef65-8f65-4fef-b9ed-6d558d61fe8d":{"name":"monster_13_1","sourceUrl":"assets/api/v1/animation-library/gamelab/na7i8b5CoI4YTMNG8sXR_36Es0CfzvFd/category_fantasy/monster_13.png","frameSize":{"x":248,"y":368},"frameCount":1,"looping":true,"frameDelay":2,"version":"na7i8b5CoI4YTMNG8sXR_36Es0CfzvFd","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":248,"y":368},"rootRelativePath":"assets/api/v1/animation-library/gamelab/na7i8b5CoI4YTMNG8sXR_36Es0CfzvFd/category_fantasy/monster_13.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var diamond = createSprite(375, 25,20,20);
diamond.setAnimation("sticker_52_1");
diamond.scale=0.2;

var thief = createSprite(50, 350,20,20);
thief.setAnimation("monster_13_1");
thief.scale=0.2;

var lazer1 = createSprite(100, 200,200,10);
lazer1.shapeColor="red";
lazer1.velocityY=-2;

var lazer2 = createSprite(300, 200,200,10);
lazer2.shapeColor="red";
lazer2.velocityY=+2;


function draw() {
background("lightgreen");

createEdgeSprites();
lazer1.bounceOff(topEdge);
lazer1.bounceOff(bottomEdge);
lazer2.bounceOff(topEdge);
lazer2.bounceOff(bottomEdge);

if (keyDown("UP_ARROW")) {
thief.y=thief.y-3;  
}

if (keyDown("DOWN_ARROW")) {
thief.y=thief.y+3;  
}

if (keyDown("LEFT_ARROW")) {
thief.x=thief.x-3;  
}

if (keyDown("RIGHT_ARROW")) {
thief.x=thief.x+3;  
}

if (thief.isTouching(lazer1)||thief.isTouching(lazer2)) {
textSize(30);
fill("blue");
text("Thief is caught", 120, 200);
                
}

drawSprites();
        
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
