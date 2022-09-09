
canvas = new fabric.Canvas('myCanvas')

//Set initial positions for ball and hole images.
ball_x = 0;
ball_y=0;
hole_x=800;
hole_y=400;

block_image_width = 5;
block_image_height = 5;

imageObj = ""
ballObj = ""
function load_img()
{
	fabric.Image.fromURL("golf-h.png", function (img)
    {
        imageObj = img
        imageObj.scaleToWidth(50);
        imageObj.scaleToHeight(50);
        imageObj.set(
            {
                top:hole_y,
                left:hole_x
            }
        )
        canvas.add(imageObj)
    })	
	
}

function new_image()
{
	fabric.Image.fromURL("ball.png", function (img)
    {
        ballObj = img
        ballObj.scaleToWidth(50);
        ballObj.scaleToHeight(50);
        ballObj.set(
            {
                top:ball_y,
                left:ball_x
            }
        )
        canvas.add(ballObj)
    })	
	
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Check the coordinates of the ball and hole images to finish the game. 
	And id coordinates matches them remove ball image, 
	display "GAME OVER!!!" 
	and make canvas border 'red'. */
	
	
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
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	
	
		function down()
		{
			if(ball_y <= 610)
			{
				ball_y = ball_y + block_image_height
			
				canvas.remove(ballObj)
				new_image();
			}
		}
		
		function up()
		{
			if(ball_y >= 0)
			{
				ball_y = ball_y - block_image_height
				canvas.remove(ballObj)
				new_image()
			}
		}
		
		function left()
		{
			if(ball_x >= 0)
			{
				ball_x = ball_x - block_image_width
				canvas.remove(ballObj)
				new_image()
			}
		}
		
		function right()
		{
			if(ball_x <= 1100)
			{
				ball_x = ball_x + block_image_width
				canvas.remove(ballObj)
				new_image()
			}
		}
	}

if(ball_x == hole_x && ball_y == hole_y)
{
canvas.remove(ballObj)
console.log("destroyed",ball_x,ball_y)

}