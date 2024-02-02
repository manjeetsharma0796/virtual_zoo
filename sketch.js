var char;
let button1;
var age=0;
var bond=0;
var hunger=100;
var stts="";

function preload()
{
  img1=loadImage("assets/download.png");
  img2=loadImage("assets/tigimages/tigercrying.png");
  img3=loadImage("assets/tigimages/tigerfed.png");
  img4=loadImage("assets/tigimages/tigeroverfed.png");
  img5=loadImage("assets/tigimages/tigerbond.png");
  img6=loadImage("assets/tigimages/tigeroverbond.png");
  img7=loadImage("assets/tigimages/bg.webp");
  tigerAnimation=loadAnimation("assets/tigergif/1.gif","assets/tigergif/2.gif","assets/tigergif/3.gif","assets/tigergif/4.gif","assets/tigergif/5.gif","assets/tigergif/6.gif","assets/tigergif/7.gif","assets/tigergif/8.gif");
  tigerAnimation2=loadAnimation("assets/tigergif2/1.gif","assets/tigergif2/2.gif","assets/tigergif2/3.gif","assets/tigergif2/4.gif","assets/tigergif2/5.gif","assets/tigergif2/6.gif","assets/tigergif2/7.gif");
}

function setup() 
{
    createCanvas(400,400);
    char=createSprite(200, 200, 50, 50);
    img1.resize(200,200);
    char.addAnimation("TIGCRY",img2);
    char.addAnimation("TIGFED",img3);
    char.addAnimation("TIGOVERFED",img4);
    char.addAnimation("TIGBOND",img5);
    char.addAnimation("TIGOVERBOND",img6);
    char.addAnimation("TIGER",img1);
    char.addAnimation("TIGGIF",tigerAnimation);
    char.addAnimation("TIGGIF2",tigerAnimation2);
    char.scale=0.2;
    button1=createButton("GROW");
    button1.addClass("buttons");
    button2=createButton("BOND");
    button2.addClass("buttons");
    button3=createButton("FEED");
    button3.addClass("buttons");
    button1.position(50,300); 
    button2.position(150,300);
    button3.position(245,300);
}

function draw() 
{
    background(img7); 
    text("AGE "+age , 50,100);
    text("BOND "+bond , 150,100);
    text("SATIETY "+hunger , 250,100);
    text(stts , 130,120);
    button1.mousePressed(func1);
    //char.x+=1;
    button2.mousePressed(func2);
    //char.x+=1;
    button3.mousePressed(func3);
    //char.x+=1;
    if(hunger<=0)
    {
      hunger=0;
    } 
    drawSprites();
}

function func1()
{ 
  age+=1;
  hunger+=20;
  var b=Math.floor(Math.random() * 5);
  if(b<=2)
  {
    bond+=1;
  }
  else if(b==3)
  {
    bond-=1;
  }
  if(age==1)
  {
    char.changeAnimation("TIGER");
    char.scale=0.5;
  }
  char.changeAnimation("TIGGIF2");
}

function func2()
{ 

  if((bond<=(age+1)*50)&&(hunger>=50))
  {
    char.changeAnimation("TIGBOND");
    char.scale=0.8;
    bond+=10;
  }
  else
  {
    char.changeAnimation("TIGOVERBOND");
    stts="OVERBONDED :(";
    char.scale=0.7;
    text("FORCEFUL BONDING NOT ALLOWED :) ", 200,150);
  }
}

function func3()
{ 
  hunger-=10;
  char.changeAnimation("TIGFED");
  char.scale=0.7;
  if(hunger<=0)
  {
    char.changeAnimation("TIGOVERFED");
    char.scale=0.2;
    stts="OVERFED :(";

    text("FORCEFUL FEEDING NOT ALLOWED :) ", 200,170);
  }
}