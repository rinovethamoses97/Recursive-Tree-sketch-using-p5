var len=180;
var angle;
function setup(){
    createCanvas(900,600);
    background(0);
}
function draw(){
    background(0);
    angle=21;
    translate(width/2,height);
    branch(len)
    noLoop();
}
function branch(len){
        stroke(255);
        line(0,0,0,-len);
        if(len>4){
            translate(0,-len);
            push();    
            rotate(radians(angle));
            branch(len*0.67);
            pop();
            rotate(-radians(angle));
            branch(len*0.67);
        }
}