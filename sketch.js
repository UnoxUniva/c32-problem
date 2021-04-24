const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var background ;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg()

    
}


function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add


    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

    

    // write code to fetch time from API
 var response = await fetch("http://worldclockapi.com/api/json/est/now")
    //change the data in JSON format
 var responsejson = await response.json()
    // write code slice the datetime
 var currdtTime = responsejson.currentDateTime
 var Hour = currdtTime.slice(11,13)

    // add conditions to change the background images from sunrise to sunset

    
    if(Hour>4 && Hour<5){
        background = "sunrise1.png"
    }else if(Hour>5 && Hour<8){
        background = "sunrise1.png"
    }else if(Hour>8 && Hour<9){
        background = "sunrise2.png"
    }else if(Hour>9 && Hour<10){
        background = "sunrise3.png"
    }else if(Hour>10 && Hour<12){
        background = "sunrise4.png"
    }else if(Hour>12 && Hour<15){
        background = "sunrise5.png"
    }else if(Hour>15 && Hour<16){
        background = "sunrise6.png"
    }else if(Hour>16 && Hour<17){
        background = "sunset7.png"
    }else if(Hour>17 && Hour<18){
        background = "sunset8.png"
    }else if(Hour>18 && Hour<21){
        background = "sunset9.png"
    }else if(Hour>21 && Hour<22){
        background = "sunset10.png"
    }else if(Hour>22 && Hour<3){
        background = "sunset11.png"
    }else if(Hour>3 && Hour<5){
        background = "sunset12.png"
    }
 
    //load the image in backgroundImg variable here
    
    backgroundImg = loadImage(background)
}
