let puggy = "";
let bckg = "";
let bone = "";
let avo = "";
let choccy = "";
let death = "";

let cjX = 100;
let cjY = 0;

let happiness = 5;

function preload() {
    puggy = loadImage("/gamehome/cjlying.png");
    bckg = loadImage("/gamehome/homebg.jpeg");
    bone = loadImage("/gamehome/bone.png");
    avo = loadImage("/gamehome/avo.png");
    choccy = loadImage("/gamehome/chocolate.png");
    death = loadImage("/gamehome/doggydeath.PNG");

}

function setup() {
    createCanvas(windowWidth,windowHeight);
    cjY = height/2;
}

function draw() {
    //bobbing up and down - 
    if (cjY <= height/2 - 50) {
        cjY += 5;
    } else if (cjY >= height/2) {
        cjY -= 5;
    }
    
    //checking for death
    if (happiness == 0) {
        doggyDeath();
    } else {
        image(bckg, 0, 0, width, height);
        image(puggy, cjX, cjY, 100, 100);
        image(bone, width-100, height/4, 50, 50);
        image(avo, width-100, height/2, 50, 50);
        image(choccy, width-100, (3 * height)/4, 50, 50);
        textSize(32);
        fill(255);
        text("Happiness: " + happiness, 10, 50);
    }
}





function mousePressed() {
    //if they click the bone
    if (mouseX >= width-100 && mouseX <= width- 50 && mouseY >= height/4 && mouseY <= height/4 + 50 ) {
        if (happiness <= 95) {
            happiness += 5;  
        }
    }
    // if they click the avo
    if (mouseX >= width-100 && mouseX <= width - 50 && mouseY >= height/2 && mouseY <= height/2 + 50 ) {
        if (happiness <= 95) {
            happiness += 5;
        }
    }

    //if they click on the chocolate
    if (mouseX >= width-100 && mouseX <= width - 50 && mouseY >= (3 * height)/4 && mouseY <= (3 * height)/4 + 50) {
        happiness = 0;
    }
   
}

function doggyDeath() {
    image(death,0,0,width,height);
} 
// will appear if chocolate is clicked

text("Happiness: " + happiness, 20, 40);
document.getElementById("happiness").innerHTML = "Happiness: " + happiness;
