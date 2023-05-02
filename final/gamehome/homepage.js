let puggy = "";
let bckg = "";
let bone = "";
let avo = "";
let choccy = "";

let cjX = 100;
let cjY = 0;

let happiness = 5;

let boneShadow;
let avoShadow;
let choccyShadow;

function preload() {
    puggy = loadImage("cjlying.png");
    bckg = loadImage("homebg.jpeg");
    bone = loadImage("bone.png");
    avo = loadImage("avo.png");
    choccy = loadImage("chocolate.png");
    ding = loadSound('ding.mp3');
}

function setup() {
    createCanvas(windowWidth,windowHeight);
    cjY = height/2;


    
    boneShadow = new Shadow();
    avoShadow = new Shadow();
    choccyShadow = new Shadow();
    

}
function draw() {
    
    if (happiness == 0) {
        //checking for death
    } else {
        image(bckg, 0, 0, width, height);


        image(puggy, cjX, cjY, 200, 200);

        if (mouseX >= width-100 && mouseX <= width && mouseY >= height/4 && mouseY <= height/4 + 100) {
            image(bone, width-120, height/4, 120,120);
        } else {
            boneShadow.update(width-50,height/4 + 75, 50);
            image(bone, width-100, height/4, 100, 100);

        }

        if (mouseX >= width-100 && mouseX <= width && mouseY >= height/2 && mouseY <= height/2 + 100 ) {
            image(avo, width - 120, height/2, 120,120);
        } else {
            avoShadow.update(width - 50, height/2 + 90, 50);
            image(avo, width-100, height/2, 100, 100);
        }

        if (mouseX >= width-100 && mouseX <= width && mouseY >= (3 * height)/4 && mouseY <= (3 * height)/4 + 100) {
            image(choccy, width-120, (3 * height/4), 120,120);
        } else {
            choccyShadow.update(width-40, (3 * height/4) + 60, 50);
            image(choccy, width-100, (3 * height)/4, 100, 100); 

        }

        
       
      
        


        textSize(32);
        fill(255);
        text("Happiness: " + happiness, 10, 50);
        textFont('Georgia');
        text("Feed Me!!!!", width - 200, 50); 
        textFont('Georgia');
    }
}






function mousePressed() {
    //if they click the bone
    if (mouseX >= width-100 && mouseX <= width && mouseY >= height/4 && mouseY <= height/4 + 100 ) {
        if (happiness <= 95) {
            happiness += 5;  
            ding.play();
        }
    }
    // if they click the avo
    if (mouseX >= width-100 && mouseX <= width && mouseY >= height/2 && mouseY <= height/2 + 100 ) {
        if (happiness <= 95) {
            happiness += 5;
            ding.play();
        }
    }

    //if they click on the chocolate
    if (mouseX >= width-100 && mouseX <= width && mouseY >= (3 * height)/4 && mouseY <= (3 * height)/4 + 100) {
        happiness = 0;
    }
   
} 

document.getElementById("happiness-count").innerHTML = "Happiness: " + happiness;

class Shadow {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.size = 0;
    }

    update(_x,_y,_size) {
        this.x = _x;
        this.y = _y;
        this.size = _size;
        noStroke();
        fill(0, 90);
        ellipse(this.x,this.y,this.size  + 20, this.size);
    }
}
