
var cat;
var catImg;
var bg;
var catSit;
var mouse;
var mouseImg;
var mouseMirror;
var catLast;
var mouseStart;

function preload() {
    //load the images here
    catImg=loadAnimation("images/cat2.png", "images/cat3.png");
    bg = loadImage("images/garden.png");
    catSit = loadImage("images/cat1.png");
    mouseImg = loadAnimation("images/mouse2.png", "images/mouse3.png");
    mouseMirror = loadImage("images/mouse4.png");
    catLast = loadImage("images/cat4.png");
    mouseStart = loadImage("images/mouse1.png");
    
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(width - 200,height - 200,50,50);
    cat.debug = true;
    cat.setCollider("rectangle", 400, 0, 1200, 1000);
    cat.scale = 0.25;
    cat.addAnimation("catWalk", catSit);

   

    mouse = createSprite(width - 800, height - 200,-600,50,50);
    mouse.debug = true;
    mouse.setCollider("rectangle", 400, 0, 700, 400);
    mouse.addAnimation("mouseWalk", mouseImg);
    mouse.scale = 0.25;
    mouse.addImage(mouseMirror);
    mouse.addImage(mouseStart);

}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
    if (cat.x - mouse.x<(cat.width - mouse.width)/2){
        cat.velocityX = 0;
        cat.addAnimation("catWalk",catLast);
        cat.changeAnimation("catWalk");
        mouse.addAnimation("mouseWalk", mouseMirror)
        mouse.changeImage(mouseMirror);
    }
    


    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if (keyCode===LEFT_ARROW){
    cat.velocityX = -5;
    cat.addAnimation("catWalk", catImg);
    cat.changeAnimation("catWalk");
    mouse.addImage("mouseStart", mouseStart);
    

}

}
