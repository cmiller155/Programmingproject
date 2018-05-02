var trans=0;
//var x, y;
var diam = 200;

function setup() {
  // put setup code here
    createCanvas(255,255);
}

function draw() {
    background("#001f4d");
    // put drawing code here
    stroke("#cce0ff");
    strokeWeight(5);
    fill(255,255,0,trans);
     trans=mouseX;
    ellipse(250,250,diam,diam);
    fill("#c");
    strokeWeight(1);
    fill(255,255,230);
    ellipse(random(width),random(height),10,10);
    strokeWeight(1);
    fill(0,57,230);
    textSize(10);
    textStyle(ITALIC);
    text("good night",50,30);
    ellipse(25,25,50,50);
    
    
    
    
  
    
 
}
function mousePressed(){
    diam = diam+5;
                       }


    
