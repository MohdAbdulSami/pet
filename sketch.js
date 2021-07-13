var dog,sadDog,happyDog;
var foodobj;
var foodob;
var foods, foodstock;
var fedtime, lastFed, feed, addFood;

function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");

}

function setup() {
  createCanvas(1000,400);
  database = firebase.database()

  foodobj = new Food();
  foodStock - database.ref("Food");
  foodstock.on("value", readstock);
  dogecreateSprite(800, 200, 150, 150);
  dog.addImage(sadDog);
  dog.scale-0.15;
  feed = createButton("Feed the dog");
  feed. position(700,95);
  feed. mousePressed(feedDog);

  addFood = createButton ("Add Food");
  addFood. position(889,95);
  addFood.mousePressed(addFoods);
  

  

}


function draw() {
  background (46, 139,87);
  foodobj.display();

  fedTime = database.ref('FeedTime');
  fedTime.on("value", functIon (data){
  lastfed = data.val()
  })

  fill(255,255,254);
  textSize(15);
  if (lastFed >= 12) {
  text("Last Feed: "+ lastFed %12 + "PM", 350, 30);
  }
  else if(lastFed == 0) {
  text("Last Feed: 12AM ", 358, 38);
  }

  else {
  text("Last Feed:" + lastFed + "AM", 350, 30);
  }
  drawSprites();
  
}


//function to read food Stock


function readStock (data) {
foodS = data.val();
foodobj.updateFoodstock (foodS);
}

//function to update food stock and last fed time
function feedDog() {
  dog.addImage(happyDog);
  foodobj.updateFoodStock(foodobj.getFoodStock()-1);
  database.ref('/').update({
  Food: foodobj.getFoodstock(),
  FeedTime : hour()
  })
}

//function to add food in stock
function addFoods() {
foods++;
database.ref('/').update({
Food: foodS

})
}