var dog,sadDog,happyDog;
var foodObj
var feed


function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
  milk = loadImage("Images/Milk.png")
}

function setup() {
  createCanvas(1000,400);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  food = new Food(100,200,40,40)

  feed = createButton("Feed")
  feed.position(700,95)
  feed.mousePressed(feedDog);

  addFood = createButton("Add Food")
  addFood.position(800,95);
  addFood.mousePressed(addFoods);


}

function draw() {
  background(46,139,87);

  food.display();
  drawSprites();
}


//function to read food Stock


//function to update food stock and last fed time

function feedDog() {
 dog.addImage(happyDog);

 
 var foodObj

  if(foodObg.getFoodStock() <= 0) {
    foodObj.updateFoodStock(foodObj.getFoodStock()*0)
  }

  else{
    foodObj.updateFoodStock(foodObj.getFoodStock()-1)
  }

}



//function to add food in stock

function addFoods() {
  foodS++;
 // database.ref('/').ref({
    Food: foodS
//  })
}
