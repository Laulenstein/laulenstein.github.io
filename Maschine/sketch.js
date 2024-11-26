let ball,wally1,wally2,wallx1,wallx2;
let balldirec;

class opstacle {
	constructor(x,y,height,width,rotation,collision){
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.rotation = rotation;
		this.collison = collision;
	}
}

function setup() {
	new Canvas(1000, 1000);
	displayMode('centered');

	ball = new Sprite();
	ball.diameter = 50;

	wally1 = new Sprite();
	wally1.height = 1000;
	wally1.width = 5;
	wally1.x = 1;
	wally1.collider = 'static';
	

	wally2 = new Sprite();
	wally2.height = 1000;
	wally2.width = 5;
	wally2.x = 995;
	wally2.collider = 'static';

	wallx1 = new Sprite();
	wallx1.height = 5;
	wallx1.width = 990;
	wallx1.y = 5;
	wallx1.collider = 'static';

	wallx2 = new Sprite();
	wallx2.height = 5;
	wallx2.width = 990;
	wallx2.y = 995;
	wallx2.collider = 'static';
	
	balldirec = round(random(360));
	ballspeed = round(random(10));
	ball.bounciness = 0,5;
	ball.drag = 1;
	print(mouse.x);
	print(mouse.y);
	
	for(i=10,i>0,i--){
		let opsnew.opstacle(round(random(1000)),
		round(random(1000)),
		round(random(1,100)),
		round(random(1,100)),
		round(random(360)),
		'static')
	}
}

function draw() {
	background('skyblue')
	print(mouse.x);
	print(mouse.y);
	if(round(ball.vel.x)==0 && round(ball.vel.y)==0){
		if(mouse.released()){
			ball.vel.x = -1*(mouse.x-500);
			ball.vel.y = -1*(mouse.y-500);
		}
	}
	text(ball.vel.x,100,100);
	text(ball.vel.y,100,110);
	
}
