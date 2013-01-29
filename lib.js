
function generateBallContainer(position, diameter, color){

	var ballContainer = {
		ball: createBall(diameter, color),
		positionX: position.x,
		positionY: position.y,
		nextStep: 0,
		radius: diameter/2.
	};
	return ballContainer;
}


function createBall(diameter, color){
		var ball = document.createElement("div");
		ball.style.width  = diameter + "px";
		ball.style.height = diameter + "px";
		ball.style.background = color;
		ball.style.borderRadius = "500px 500px 500px 500px";	
		ball.style.position = "absolute";
		return ball;
}

function moveBall(ballContainer, position){
		ballContainer.positionX = ballContainer.ball.style.left  	= (position.x - ballContainer.radius) + "px";
		ballContainer.positionY = ballContainer.ball.style.top 	= (position.y - ballContainer.radius) + "px";	

	}
function rotateBall(ballContainer, steps, radius){
				if(ballContainer.nextStep >= steps){
					ballContainer.nextStep = 0;
				}
					var position = calculateCordinate(radius, ballContainer.nextStep, steps);
					moveBall(ballContainer, position);
					ballsCollection[i].nextStep = ballsCollection[i].nextStep + 1;
					
				
			}