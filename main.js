var canvas = new fabric.Canvas("myCanvas");
var block_height = 30;
var block_width = 30;
var player_x = 10;
var player_y = 10;
var player_object ="";
function player_update(){
    fabric.Image.fromURL("player.png",function(img) {
        player_object = img;
        player_object.scaleToWidth("150");
        player_object.scaleToHeight("140");

        player_object.set({
            top:player_y,left:player_x
        });
        canvas.add(player_object);
    });

} 

function new_image(get_image) {
    fabric.Image.fromURL(get_image,function (Img) {
        block_image_object=Img;
        block_image_object.scaleToWidth(block_width);
        block_image_object.scaleToHeight(block_height);

        block_image_object.set({
            top:player_y,left:player_x
        });
        canvas.add(block_image_object);
    });
    
}
window.addEventListener("keydown", mykeydown);

function mykeydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(e.shiftKey == true && keyPressed == '80'){
        console.log("P and Shift pressed together");
        block_height= block_height+10;
        block_width=block_width+10;
        document.getElementById("Width").innerHTML=block_width;
        document.getElementById("height").innerHTML=block_height;
    }
    if(e.shiftKey == true && keyPressed == '77'){
        console.log("M and Shift pressed together");
        block_height= block_height-10;
        block_width=block_width-10;
        document.getElementById("Width").innerHTML=block_width;
        document.getElementById("height").innerHTML=block_height;
    }
    //a is 65;

    if (keyPressed =='84'){
        new_image("trunk.jpg");
        console.log("t");
    }
    if (keyPressed =='68'){
        new_image("dark_green.png");
        console.log("g");
    }
    if (keyPressed =='76'){
        new_image="light_green.png";
        console.log("l");
    }
    if (keyPressed =='76'){
        new_image("ground.png");
        console.log("g");
    }
    if (keyPressed =='87'){
        new_image("wall.jpg");
        console.log("w");
    }
    if (keyPressed =='89'){
        new_image("yellow_wall.png");
        console.log("y");
    }
    if (keyPressed =='82'){
        new_image("roof.jpg");
        console.log("r");
    }
    if (keyPressed =='67'){
        new_image("cloud.jpg");
        console.log("c");
    }
    if (keyPressed =='85'){
        new_image("unique.png");
        console.log("u");
    }
    //left = 37
    //up = 38
    //right = 39
    //down = 40
    if(keyPressed == '39')

    {
   
        right();
   
        console.log("right");
   
    }
    if(keyPressed == '37')

    {
   
    left();
   
    console.log("left");
   
    }
    if(keyPressed == '38')

    {
   
    up();
   
    console.log("up");
   
    }
    if(keyPressed == '40')

    {
   
    down();
   
    console.log("down");
   
    }
}
function up() {
    if (player_y>=0) {
        player_y = player_y - block_height;
        console.log("Block image height = "+block_height);
        console.log("When up click, Player x = "+player_x +" y = "+player_y);
        canvas.remove(player_object);
        player_update();


    }
}
function down() {
    if (player_y<=500) {
        player_y = player_y+block_height;
        console.log("Block image height = "+block_height);
        console.log("When down click, Player x = "+player_x +"y = "+player_y);
        canvas.remove(player_object);
        player_update();


    }
}
function left() {
    if (player_x>=0) {
        player_x = player_x-+block_width;
        console.log("Block image width = "-block_width);
        console.log("When left click, Player x = "+player_x +"y = "+player_y);
        canvas.remove(player_object);
        player_update();


    }
}
function right()
{
	if(player_x <=850)
	{
		player_x = player_x + block_width;
		console.log("block image width = " + block_width);
		console.log("When Right arrow key is pressed, X =  " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);
		player_update();
	}
}