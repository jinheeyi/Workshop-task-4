let img;
let slider;

function preload(){
    img = loadImage("photo/night.jpg");
}

function setup(){
    createCanvas(400,400);
    slider=createSlider(0,255);
    slider.position(100,350);
    slider.size(200);
}

function draw(){
    background(220);
    let val= slider.value();
    img.loadPixels();
    for (let y = 0; y < img.height; y++){
        for (let x=0; x<img.width; x++){
            let index=( x + y * img.width)*4;
            img.pixels[index] = val//red value
            //img.pixels[index+1]=0//green value
            //img.pixels[index+2]=0//blue value
            //img.pixels[index+3]=255;//alpha value
        }
    }
    img.updatePixels();
    image(img, 0, 0);
    img.resize(400,400);
}